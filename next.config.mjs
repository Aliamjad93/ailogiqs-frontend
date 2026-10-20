/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // This project sits inside a nested git repo, so Turbopack cannot infer the
  // workspace root and warns about package-lock.json otherwise.
  turbopack: { root: import.meta.dirname },

  // The AiLogiQs theme ships ~17MB of vendor CSS/JS/fonts/images that must keep
  // resolving from the exact same absolute paths the template markup uses
  // (e.g. "/assets/img/news/post-1.jpg"). `public/` serves these verbatim and
  // un-hashed, which is what every <img src> in the migrated pages expects.
  outputFileTracingIncludes: {},

  images: {
    // Template artwork is plain static files referenced by raw <img> tags
    // throughout the migrated pages, so the built-in optimizer is not used.
    unoptimized: true,
  },

  experimental: {
    serverActions: {
      // Default is 1 MB, which an upload blows through: the admin post form and
      // the public application form are each a single multipart POST, and files
      // are stored as BLOBs, so the whole image or resume travels in that one
      // request. 6 MB leaves headroom over the 5 MB per-image cap (admin-posts)
      // and the 3 MB resume cap (careers) for the multipart envelope and the
      // other form fields.
      //
      // This is a cap on inbound request size, not an allowance: the per-file
      // limit is still enforced in the write layer, which rejects an oversized
      // or wrong-typed upload with a message in the form.
      bodySizeLimit: '6mb',
    },
  },

  async redirects() {
    // The pre-Next.js site exposed these flat paths. Preserve them so any
    // existing inbound links / bookmarks / search results keep working after
    // the move to real blog routes.
    return [
      { source: "/news", destination: "/blog", permanent: true },
      {
        source: "/news-details",
        destination: "/blog/blending-technology-and-creativity",
        permanent: true,
      },
      // The AI sales-agent page moved from /ai-services/chatbot/details to
      // /projects/chatbot: it is the service's own page, reached from the
      // Projects card, so it now sits under /projects. Permanent, so the old
      // URL keeps working.
      {
        source: "/ai-services/chatbot/details",
        destination: "/projects/chatbot",
        permanent: true,
      },
      // The listing moved from /project to /projects. The old showcase paths
      // (/portfolio/chatbot, /portfolio/bee-virus-detection) moved under
      // /projects too, but /portfolio itself is now a real page -- the
      // selected-work portfolio -- so it must not redirect.
      { source: "/project", destination: "/projects", permanent: true },
      {
        source: "/portfolio/chatbot",
        destination: "/projects/chatbot",
        permanent: true,
      },
      {
        source: "/portfolio/bee-virus-detection",
        destination: "/projects/bee-virus-detection",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
