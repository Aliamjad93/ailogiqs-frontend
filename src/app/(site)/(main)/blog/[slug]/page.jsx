import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllPosts,
  getPostBySlug,
  getRecentPosts,
  getCategoriesWithCounts,
  getTags,
  getAllPostSlugs,
  formatPostDate,
} from "@/lib/posts";
import BlogProse from "@/components/blog/BlogProse";

/** Pre-renders every post at build time. */
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found", robots: { index: false, follow: false } };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const [allPosts, recent, categories, tags] = await Promise.all([
    getAllPosts(),
    getRecentPosts(3),
    getCategoriesWithCounts(),
    getTags(),
  ]);

  // Neighbours for the prev/next strip. The listing is newest-first, so a post
  // at index i is preceded by i+1.
  const index = allPosts.findIndex((entry) => entry.slug === post.slug);
  const newerPost = index > 0 ? allPosts[index - 1] : null;
  const olderPost = index < allPosts.length - 1 ? allPosts[index + 1] : null;
  const related = allPosts.filter((entry) => entry.slug !== post.slug).slice(0, 2);

  return (
    <>
      <article className="news-details style-padding fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              <div className="news-details-wrapper">
                <div className="news-details-items">
                  <div className="news-details-thumb">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="news-details-content">
                    {/*
                      Article body typography. Injected here, at the top of the
                      content block, because the theme's own rules target
                      .news-details-content h2/p as DIRECT children -- they style
                      the template copy and nothing else. Admin-authored HTML sits
                      inside .article-body one level deeper, so without these
                      rules headings, lists and quotes render as unstyled flow
                      content. Scoped to .article-body so nothing leaks into the
                      title or the sidebar above.
                    */}
                    <BlogProse />

                    <ul className="post-date">
                      <li>
                        <i className="fa-regular fa-user" />
                        {formatPostDate(post.publishedAt)}
                      </li>
                      <li>
                        <i className="fa-regular fa-user" />
                        by {post.author}
                      </li>
                      <li>
                        <i className="fa-regular fa-folder-open" />
                        {post.category}
                      </li>
                    </ul>
                    <h2>{post.title}</h2>

                    {/* Body is authored HTML from the admin panel (TipTap
                        output). Sanitise on write rather than on every read --
                        see the admin/editor notes in README. */}
                    <div
                      className="article-body"
                      dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
                    />
                  </div>

                  <div className="row tag-share-wrap mt-5 align-items-center">
                    <div className="col-lg-8 col-12">
                      <p>{post.tags.map((tag) => `#${tag}`).join(" ")}</p>
                    </div>
                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                      <div className="social-icon">
                        <a href="#" aria-label="Share on Discord">
                          <i className="fa-brands fa-discord" />
                        </a>
                        <a href="#" aria-label="Share on Facebook">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                        <a href="#" aria-label="Share on LinkedIn">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                        <a href="#" aria-label="Share on YouTube">
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="prev-next-button">
                    {olderPost ? (
                      <Link href={`/blog/${olderPost.slug}`} className="prev-button">
                        <i className="fa-sharp fa-regular fa-arrow-up-left" /> prev
                      </Link>
                    ) : (
                      <span className="prev-button disabled">
                        <i className="fa-sharp fa-regular fa-arrow-up-left" /> prev
                      </span>
                    )}
                    {newerPost ? (
                      <Link href={`/blog/${newerPost.slug}`} className="next-button">
                        next <i className="fa-sharp fa-regular fa-arrow-up-right" />
                      </Link>
                    ) : (
                      <span className="next-button disabled">
                        next <i className="fa-sharp fa-regular fa-arrow-up-right" />
                      </span>
                    )}
                  </div>

                  <div className="row">
                    <h4 className="blog-title">Similar blog post</h4>
                    {related.map((entry) => (
                      <div className="col-xl-6 col-lg-6" key={entry.slug}>
                        <div className="news-box-items-2">
                          <div className="news-image">
                            <Link href={`/blog/${entry.slug}`}>
                              <img src={entry.image} alt={entry.title} />
                            </Link>
                          </div>
                          <div className="news-content">
                            <ul className="post-cat">
                              <li>
                                <i className="fa-regular fa-calendar-days" />
                                {formatPostDate(entry.publishedAt)}
                              </li>
                              <li>
                                <i className="fa-regular fa-folder-open" />
                                {entry.category}
                              </li>
                            </ul>
                            <h3>
                              <Link href={`/blog/${entry.slug}`}>{entry.title}</Link>
                            </h3>
                            <Link href={`/blog/${entry.slug}`} className="icon">
                              <i className="fa-sharp fa-regular fa-arrow-up-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="comments-area">
                    <div className="comments-heading">
                      <h3>Comments</h3>
                    </div>
                    <div className="blog-single-comment d-flex gap-4 pt-4 pb-5">
                      <img src="/assets/img/testimonial/client-1.png" alt="" />
                      <div className="comment-text">
                        <div className="d-flex flex-wrap justify-content-between">
                          <h5>Epson Gorton</h5>
                          <span className="comment-date">20 Jul, 2024</span>
                        </div>
                        <p>
                          This is a template comment. Wire it to a comments table
                          when the admin panel lands.
                        </p>
                      </div>
                    </div>
                    <div className="comment-form-wrap pt-5">
                      <h3>Leave a comment</h3>
                      <form>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <input type="text" placeholder="Name" />
                          </div>
                          <div className="col-md-6">
                            <input type="email" placeholder="Email" />
                          </div>
                          <div className="col-12">
                            <textarea rows="5" placeholder="Comment" />
                          </div>
                          <div className="col-12">
                            <button type="submit" className="theme-btn">
                              Post Comment
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="main-sidebar">
                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>
                      <img src="/assets/img/star-3.png" alt="" />
                      Search
                    </h3>
                  </div>
                  <div className="search-widget">
                    <form action="/blog">
                      <input
                        type="text"
                        name="q"
                        placeholder="Search here"
                        aria-label="Search posts"
                      />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </form>
                  </div>
                </div>

                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>
                      <img src="/assets/img/star-3.png" alt="" />
                      Categories
                    </h3>
                  </div>
                  <div className="news-widget-categories">
                    <ul>
                      {categories.map((category) => (
                        <li key={category.name}>
                          <Link href="/blog">{category.name}</Link>{" "}
                          <span>({String(category.count).padStart(2, "0")})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>
                      <img src="/assets/img/star-3.png" alt="" />
                      Recent Post
                    </h3>
                  </div>
                  <div className="recent-post-area">
                    {recent.map((entry) => (
                      <div className="recent-items" key={entry.slug}>
                        <div className="recent-thumb">
                          <Link href={`/blog/${entry.slug}`}>
                            <img src={entry.image} alt={entry.title} />
                          </Link>
                        </div>
                        <div className="recent-content">
                          <span>{entry.category}</span>
                          <h6>
                            <Link href={`/blog/${entry.slug}`}>{entry.title}</Link>
                          </h6>
                          <ul>
                            <li>
                              <i className="fa-solid fa-calendar-days" />
                              {formatPostDate(entry.publishedAt)}
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="news-banner-img">
                  <img src="/assets/img/news/Banner.png" alt="" />
                </div>

                <div className="single-sidebar-widget">
                  <div className="wid-title">
                    <h3>
                      <img src="/assets/img/star-3.png" alt="" />
                      Tags Clouds
                    </h3>
                  </div>
                  <div className="news-widget-categories">
                    <div className="tagcloud">
                      {tags.map((tag) => (
                        <Link href="/blog" key={tag}>
                          {tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
