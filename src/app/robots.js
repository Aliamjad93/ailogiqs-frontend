import { SITE, absoluteUrl } from "@/lib/site.config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // The admin area must never be indexed, and /404 is a preview route.
        disallow: ["/admin", "/404"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}
