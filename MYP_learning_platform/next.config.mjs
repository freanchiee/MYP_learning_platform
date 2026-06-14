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
  // Keep scripts and any leftover scratch images out of the server build trace.
  outputFileTracingExcludes: {
    '*': ['./scripts/**', './public/images/papers/**'],
  },
}

export default nextConfig
