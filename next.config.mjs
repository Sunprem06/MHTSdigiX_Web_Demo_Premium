/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // Decap CMS admin UI lives as a static file at public/admin/index.html.
    // Rewriting both the with- and without-trailing-slash forms directly to
    // it (instead of redirecting one to the other first) avoids a redirect
    // loop against Next's own trailing-slash handling — see MEMORY.md.
    // index.html pins its config.yml fetch to an absolute path, so which
    // form a visitor lands on doesn't matter for Decap's config load either.
    return [
      { source: "/admin", destination: "/admin/index.html" },
      { source: "/admin/", destination: "/admin/index.html" },
    ];
  },
};

export default nextConfig;
