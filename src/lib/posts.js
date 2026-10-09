/**
 * Blog read layer.
 *
 * Pages import ONLY from this module, so the storage backend can change
 * without touching a single component.
 *
 * Source selection
 *   1. Turso, when TURSO_DATABASE_URL is configured.
 *   2. The seed content in src/content/posts.js otherwise.
 *
 * The fallback is deliberate: a production build must not depend on a network
 * round trip, and `next build` prerenders every blog route. If the database is
 * unreachable at build time the build should still succeed with seed content
 * rather than failing outright.
 *
 * Drafts are excluded from every read path here. The admin panel queries the
 * table directly to see them.
 */

import { isDatabaseConfigured, query, queryOne } from "@/lib/db";
import { POSTS, CATEGORIES, TAGS } from "@/content/posts";

const CATEGORY_BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));

/** Shape a DB row into the object shape every page expects. */
function toPost(row) {
  if (!row) return null;
  const category = CATEGORY_BY_SLUG.get(row.category_slug);
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    // An uploaded cover wins over the seeded path. Pointing `image` at the
    // image route keeps every component and the OG tags unchanged -- nothing
    // needs to know whether the bytes came from the database or from /public.
    image: row.has_image_blob ? `/api/posts/image/${row.id}` : row.image,
    category: category?.name ?? row.category_slug,
    categorySlug: row.category_slug,
    author: row.author,
    publishedAt: row.published_at,
    readingMinutes: row.reading_minutes,
    featured: Boolean(row.featured),
    tags: row.tags ? row.tags.split(",").filter(Boolean) : [],
    bodyHtml: row.body_html ?? "",
    seoTitle: row.seo_title || null,
    seoDescription: row.seo_description || null,
  };
}

function staticPost(post) {
  const category = CATEGORY_BY_SLUG.get(post.categorySlug);
  return {
    ...post,
    category: category?.name ?? post.categorySlug,
  };
}

// `image_blob` is deliberately absent: it is only probed, never selected, so a
// listing of twenty posts does not drag twenty images over the wire.
const SELECT_COLUMNS = `id, slug, title, excerpt, image, category_slug, author,
  published_at, reading_minutes, featured, tags, body_html, seo_title, seo_description,
  (image_blob IS NOT NULL) AS has_image_blob`;

// ---------------------------------------------------------------------------
// Database-backed reads
// ---------------------------------------------------------------------------

/** Newest first, drafts excluded. */
async function dbAllPosts() {
  return query(
    `SELECT ${SELECT_COLUMNS} FROM posts
     WHERE status = 'published'
     ORDER BY published_at DESC, id DESC`
  ).then((rows) => rows.map(toPost));
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function getAllPosts() {
  if (isDatabaseConfigured()) {
    try {
      // An empty result is a valid answer -- it means every post is a draft or
      // has been deleted, and the site should show its empty state. It is NOT a
      // reason to serve the seed content, which is what previously made deleted
      // posts reappear on the site. Only a failed query falls back.
      return await dbAllPosts();
    } catch (error) {
      console.warn(`[posts] database read failed, using seed content: ${error.message}`);
    }
  }
  return [...POSTS].map(staticPost).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getFeaturedPosts(limit = 3) {
  const posts = await getAllPosts();
  const featured = posts.filter((post) => post.featured);
  const source = featured.length > 0 ? featured : posts;
  return source.slice(0, limit);
}

export async function getRecentPosts(limit = 3) {
  return (await getAllPosts()).slice(0, limit);
}

export async function getPostBySlug(slug) {
  if (isDatabaseConfigured()) {
    try {
      // As in getAllPosts: a miss in the database is authoritative. Falling back
      // to the seed list here would let a deleted post keep serving its URL.
      const row = await queryOne(
        `SELECT ${SELECT_COLUMNS} FROM posts WHERE slug = ? AND status = 'published'`,
        [slug]
      );
      return toPost(row);
    } catch (error) {
      console.warn(`[posts] database read failed, using seed content: ${error.message}`);
    }
  }
  const found = POSTS.find((post) => post.slug === slug);
  return found ? staticPost(found) : null;
}

export async function getPostsByCategory(categorySlug) {
  return (await getAllPosts()).filter((post) => post.categorySlug === categorySlug);
}

/** Every category with its published-post count, in declaration order. */
export async function getCategoriesWithCounts() {
  const posts = await getAllPosts();
  const counts = new Map();
  for (const post of posts) {
    counts.set(post.categorySlug, (counts.get(post.categorySlug) ?? 0) + 1);
  }
  return CATEGORIES.map((category) => ({
    ...category,
    count: counts.get(category.slug) ?? 0,
  }));
}

export async function getCategories() {
  return CATEGORIES;
}

export async function getTags() {
  if (isDatabaseConfigured()) {
    try {
      const rows = await query(
        `SELECT DISTINCT tags FROM posts WHERE status = 'published' AND tags != ''`
      );
      const tags = new Set(rows.flatMap((row) => (row.tags ?? "").split(",").filter(Boolean)));
      // Empty is a real answer: no published posts means no tags. Returning the
      // seed list instead would leave a tag cloud for content that is gone.
      return [...tags].sort();
    } catch {
      // fall through to the seed list
    }
  }
  return TAGS;
}

export async function getAllPostSlugs() {
  return (await getAllPosts()).map((post) => post.slug);
}

/** "20 Jul, 2024" — matches the date format the template used throughout. */
export function formatPostDate(isoDate) {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}