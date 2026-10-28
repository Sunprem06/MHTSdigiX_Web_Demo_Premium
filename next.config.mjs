/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export (Hostinger shared hosting — see MEMORY.md 2026-10-29). The
  // `rewrites()` this project used under Netlify/Next-server hosting is
  // dropped: output:"export" doesn't support next.config rewrites, and it's
  // unneeded here anyway — /admin/index.html is a plain public/ static file,
  // and Apache-style static hosting serves index.html for a directory
  // request (/admin/) on its own, same as any other folder on the site.
  output: "export",
};

export default nextConfig;
