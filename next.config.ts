import type { NextConfig } from 'next';

// Static export: `npm run build` writes a plain HTML site to ./out that any static host can serve.
// For GitHub Pages under a repo path (e.g. qwewe6.github.io/portfolio), build with
//   NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
};

export default nextConfig;
