import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js'
import { z } from 'zod'
import { NextRequest } from 'next/server'
import {
  findGuide,
  findPost,
  guideFull,
  guideSummary,
  postFull,
  postSummary,
  searchGuides,
  searchPosts,
  siteFaq,
  GUIDES,
  POSTS,
  SITE_URL,
} from '@/lib/mcp/content'

// A public, read-only MCP server exposing CritABCD's guides and blog content
// as tools, so an MCP-capable agent (Claude, ChatGPT, etc.) can look things
// up directly instead of scraping HTML. Same data as /guides, /blog and
// /llms-full.txt — see lib/mcp/content.ts.
//
// Stateless by design (no sessionIdGenerator): Vercel's serverless functions
// don't keep in-memory state between requests, so each POST gets a fresh
// server+transport pair. That means no resumable SSE streams across calls,
// which is fine for a small set of fast, side-effect-free read tools.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function buildServer() {
  const server = new McpServer({ name: 'critabcd', version: '1.0.0' })

  server.registerTool(
    'site_overview',
    {
      title: 'CritABCD site overview',
      description:
        'What CritABCD is, who it is for, the subjects it covers, and the key public pages — the short orientation an agent should read first.',
      inputSchema: {},
    },
    async () => ({
      content: [
        {
          type: 'text',
          text: [
            'CritABCD is a next-generation learning site for the IB Middle Years Programme (MYP): free guides and articles, interactive resources, live teacher-hosted classes, past papers and practice against the four IB MYP criteria (A-D), each scored 1-8.',
            '',
            'Key pages:',
            `- Guides index: ${SITE_URL}/guides`,
            `- Blog index: ${SITE_URL}/blog`,
            `- Free resources: ${SITE_URL}/resources`,
            `- Full plain-text dump of every guide and article: ${SITE_URL}/llms-full.txt`,
            '',
            'FAQ:',
            ...siteFaq().map(({ q, a }) => `- ${q} ${a}`),
          ].join('\n'),
        },
      ],
    })
  )

  server.registerTool(
    'list_guides',
    {
      title: 'List MYP subject guides',
      description: 'List every free MYP subject guide on CritABCD (slug, subject, group, one-line tagline, URL).',
      inputSchema: {},
    },
    async () => ({
      content: [{ type: 'text', text: JSON.stringify(GUIDES.map(guideSummary), null, 2) }],
    })
  )

  server.registerTool(
    'get_guide',
    {
      title: 'Get a full MYP subject guide',
      description:
        'Fetch the full text of one MYP subject guide by slug: overview, aims, the four assessment criteria (A-D) with summaries, key/related concepts and FAQ. Call list_guides first to find a slug.',
      inputSchema: { slug: z.string().describe('Guide slug, e.g. "physics" — see list_guides') },
    },
    async ({ slug }: { slug: string }) => {
      const g = findGuide(slug)
      if (!g) {
        return {
          isError: true,
          content: [{ type: 'text', text: `No guide with slug "${slug}". Call list_guides for valid slugs.` }],
        }
      }
      return { content: [{ type: 'text', text: JSON.stringify(guideFull(g), null, 2) }] }
    }
  )

  server.registerTool(
    'search_guides',
    {
      title: 'Search MYP subject guides',
      description: 'Keyword search across all subject guides (subject, tagline, overview, key/related concepts).',
      inputSchema: { query: z.string().describe('Search text, e.g. "osmosis" or "command terms"') },
    },
    async ({ query }: { query: string }) => ({
      content: [{ type: 'text', text: JSON.stringify(searchGuides(query).map(guideSummary), null, 2) }],
    })
  )

  server.registerTool(
    'list_blog_posts',
    {
      title: 'List CritABCD blog posts',
      description: 'List every blog article on CritABCD (slug, title, description, tags, date published, URL).',
      inputSchema: {},
    },
    async () => ({
      content: [{ type: 'text', text: JSON.stringify(POSTS.map(postSummary), null, 2) }],
    })
  )

  server.registerTool(
    'get_blog_post',
    {
      title: 'Get a full blog post',
      description:
        'Fetch the full text of one CritABCD blog article by slug: intro, every section (heading/body/bullets) and FAQ. Call list_blog_posts first to find a slug.',
      inputSchema: { slug: z.string().describe('Post slug, e.g. "what-is-the-myp" — see list_blog_posts') },
    },
    async ({ slug }: { slug: string }) => {
      const p = findPost(slug)
      if (!p) {
        return {
          isError: true,
          content: [{ type: 'text', text: `No blog post with slug "${slug}". Call list_blog_posts for valid slugs.` }],
        }
      }
      return { content: [{ type: 'text', text: JSON.stringify(postFull(p), null, 2) }] }
    }
  )

  server.registerTool(
    'search_blog',
    {
      title: 'Search CritABCD blog posts',
      description: 'Keyword search across every blog article\'s title, description, intro, section text and tags.',
      inputSchema: { query: z.string().describe('Search text, e.g. "eAssessment" or "command terms"') },
    },
    async ({ query }: { query: string }) => ({
      content: [{ type: 'text', text: JSON.stringify(searchPosts(query).map(postSummary), null, 2) }],
    })
  )

  return server
}

// Stateless: no sessionIdGenerator, and enableJsonResponse so a plain POST
// gets a plain JSON-RPC response back instead of an SSE stream — the simplest
// shape for tool-call request/response and the most compatible with basic
// MCP HTTP clients.
async function handleRequest(req: NextRequest) {
  const server = buildServer()
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  })
  await server.connect(transport)
  return transport.handleRequest(req)
}

export async function POST(req: NextRequest) {
  return handleRequest(req)
}

export async function GET(req: NextRequest) {
  return handleRequest(req)
}

export async function DELETE(req: NextRequest) {
  return handleRequest(req)
}
