/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exam images are served from Supabase Storage public buckets, not bundled.
  // Allow next/image to load/optimize them if ever used.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  // Lint runs in dev/CI; don't fail the production build on cosmetic lint errors
  // (unused vars, unescaped entities). Type-checking still runs and must pass.
  eslint: {
    ignoreDuringBuilds: true,
  },
  // The interactive artifacts in public/artifacts are embedded (iframe) inside
  // /blog posts, which carry the real article text. Left indexable, Google can
  // rank the bare game pages instead of the articles that explain them — so
  // keep them out of the index. They stay crawlable/renderable for the embed.
  async headers() {
    return [
      {
        source: '/artifacts/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ]
  },
  // Keep scripts and any leftover scratch images out of the server build trace.
  experimental: {
    outputFileTracingExcludes: {
      '*': ['./scripts/**', './public/images/papers/**'],
    },
  },
}

export default nextConfig
