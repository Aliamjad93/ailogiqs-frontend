import { getAllPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site.config";

const STATIC_ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/service", changeFrequency: "monthly", priority: 0.7 },
  { path: "/team", changeFrequency: "monthly", priority: 0.6 },
  { path: "/project", changeFrequency: "monthly", priority: 0.6 },
  { path: "/project-details", changeFrequency: "monthly", priority: 0.4 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.5 },
  { path: "/blog", changeFrequency: "daily", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  { path: "/login", changeFrequency: "yearly", priority: 0.3 },
  { path: "/register", changeFrequency: "yearly", priority: 0.3 },
];

/**
 * Generated sitemap. Blog posts come from the same read layer as the pages, so
 * publishing a post in the admin panel is enough for it to be listed here.
 */
export default async function sitemap() {
  const posts = await getAllPosts();

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(`${post.publishedAt}T00:00:00Z`),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
