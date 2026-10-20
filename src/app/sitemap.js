import { getAllPosts } from "@/lib/posts";
import { getOpenJobs } from "@/lib/careers";
import { absoluteUrl } from "@/lib/site.config";

const STATIC_ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/service", changeFrequency: "monthly", priority: 0.7 },
  /*
    The AI sales-agent showcase. It is one of the services, and it lives in its
    own route group because it carries its own design -- see
    src/app/(site)/(ai-service)/. The listing page and the service page are
    separate URLs, so both are listed.
  */
  { path: "/ai-services/chatbot", changeFrequency: "monthly", priority: 0.6 },
  { path: "/portfolio/chatbot", changeFrequency: "monthly", priority: 0.6 },
  { path: "/team", changeFrequency: "monthly", priority: 0.6 },
  { path: "/project", changeFrequency: "monthly", priority: 0.6 },
  { path: "/project-details", changeFrequency: "monthly", priority: 0.4 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.5 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "daily", priority: 0.9 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  /*
    Legal pages. Low priority and `yearly` because they change when the policy
    changes, not on a schedule -- but they must be IN the file: a policy no
    crawler can reach is the one page of a site that compliance reviewers ask
    for by URL.
  */
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  // /login and /register are deliberately absent. They are noindex (a sign-in
  // form is not a landing page), and listing a noindex URL in the sitemap is a
  // contradiction: Search Console reports it as "Excluded by noindex tag" and it
  // makes the whole file look unreliable.
];

/**
 * Generated sitemap. Blog posts come from the same read layer as the pages, so
 * publishing a post in the admin panel is enough for it to be listed here.
 *
 * Drafts never appear: getAllPosts() reads only `status = 'published'`.
 */
export default async function sitemap() {
  const [posts, jobs] = await Promise.all([getAllPosts(), getOpenJobs()]);

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      /*
        `updated_at` when the database supplied one, otherwise the publish date.
        Reporting `new Date()` for every article -- which is what this used to
        do -- tells a crawler the whole blog changed on every deploy, and a
        lastmod that is always wrong is worse than no lastmod at all.
      */
      lastModified: new Date(
        `${(post.updatedAt ?? post.publishedAt).slice(0, 10)}T00:00:00Z`
      ),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...jobs.map((job) => ({
      url: absoluteUrl(`/careers/${job.slug}`),
      lastModified: new Date(
        `${String(job.updatedAt ?? job.createdAt).slice(0, 10)}T00:00:00Z`
      ),
      changeFrequency: "weekly",
      priority: 0.6,
    })),
  ];
}
