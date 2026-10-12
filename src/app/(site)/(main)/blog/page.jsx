import Link from "next/link";
import { getAllPosts, getCategoriesWithCounts, getTags, formatPostDate } from "@/lib/posts";
import { SITE, absoluteUrl } from "@/lib/site.config";

const DESCRIPTION =
  "Writing on AI product development, design systems and the craft of shipping intelligent software.";

export const metadata = {
  title: "Blog",
  description: DESCRIPTION,
  keywords: ["AI blog", "machine learning", "AI agents", "automation", "AiLogiQs"],
  alternates: {
    // The listing supports ?category=, ?tag= and ?q= filters. They render the
    // same page with a narrower set of cards, so they are duplicates of /blog
    // and every one of them points its canonical here rather than competing
    // with it in the index.
    canonical: "/blog",
  },
  /*
    No openGraph.title / twitter.title here on purpose.

    The root layout declares `openGraph.title.template = "%s | AiLogiQs"`, and
    that template is applied to a child's og/twitter title too -- so setting a
    plain string here produced "Blog | AiLogiQs | AiLogiQs". Leaving them out
    lets the template derive both from `title` above, which is the same string
    the <title> tag gets.
  */
  openGraph: {
    type: "website",
    description: DESCRIPTION,
    url: "/blog",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    description: DESCRIPTION,
  },
};

/** First N characters of the body, with tags stripped. Used for cards. */
function summarise(html, limit = 165) {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text.length > limit ? `${text.slice(0, limit).trimEnd()}…` : text;
}

export default async function BlogPage({ searchParams }) {
  const params = await searchParams;
  const activeCategory = typeof params?.category === "string" ? params.category : "";
  const activeTag = typeof params?.tag === "string" ? params.tag : "";
  const query = typeof params?.q === "string" ? params.q.trim().toLowerCase() : "";

  const [allPosts, categories, tags] = await Promise.all([
    getAllPosts(),
    getCategoriesWithCounts(),
    getTags(),
  ]);

  // The sidebar links carry filters, so they have to actually narrow the list or
  // they read as broken. Applied to the source set before anything is sliced.
  const posts = allPosts.filter((post) => {
    if (activeCategory && post.categorySlug !== activeCategory) return false;
    if (activeTag && !post.tags.includes(activeTag)) return false;
    if (query) {
      const haystack = `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });

  // With nothing published there is no carousel to build, so the hero section is
  // skipped entirely rather than rendered as an empty slider.
  const featured = posts.filter((post) => post.featured).slice(0, 3);
  const heroPosts = featured.length > 0 ? featured : posts.slice(0, 3);
  const recent = posts.slice(0, 3);

  /*
    The listing shows every post, including the ones in the hero.

    The hero used to be subtracted from the grid, on the assumption that
    repeating an article reads as duplication. It does the opposite: with one
    featured post the grid lost that entry, so publishing a second post left the
    listing showing a single card and it looked like the newer one had not saved.
    The hero is a teaser above the archive; the archive stays complete.
  */
  const listing = posts;

  // No placeholder text anywhere: an empty blog renders as an empty page. The
  // hero, the listing and the sidebar are each conditional on having posts.
  const isEmpty = posts.length === 0;

  return (
    <>
      {/*
        The listing has no visible page title -- the design opens straight into
        the cover slider, whose headings are the featured posts. Without this the
        page would have no h1 at all once the slides became h2. Hidden rather
        than rendered, so the design is untouched.
      */}
      <h1 className="aiq-sr-only">AiLogiQs blog — AI agents, machine learning and automation</h1>

      {!isEmpty && (
      <section className="news-hero-section bg-cover">
        {/*
          One slide per post, each with its own cover as the background. The
          section previously carried a single fixed background image and no
          per-post art at all, so a freshly uploaded cover never appeared in the
          hero. The theme's data-animation attributes run through its own JS, so
          they are kept on the inner elements.
        */}
        {heroPosts.length > 1 && (
          <div className="array-button">
            <button className="array-prev" type="button" aria-label="Previous article">
              <i className="fa-regular fa-arrow-left" />
            </button>
            <button className="array-next" type="button" aria-label="Next article">
              <i className="fa-regular fa-arrow-right" />
            </button>
          </div>
        )}

        {/*
          The slider sits outside .container on purpose. The cover is painted on
          the slide, so a slide confined to the 1320px content column left the
          page background showing at both edges. The copy gets its own inner
          .container to keep the same text measure it had before.
        */}
        <div className="swiper news-hero-slider">
          <div className="swiper-wrapper">
            {heroPosts.map((post) => (
              <div
                className="swiper-slide news-hero-slide"
                key={post.slug}
                style={{ backgroundImage: `url('${post.image}')` }}
              >
                {/*
                  Heading and a way in. The date, category and excerpt were
                  removed because the same information is already on every card
                  in the listing directly below, which made the band read as a
                  landing page rather than a cover.

                  <h2>, not <h1>: the slider shows up to three posts, and three
                  h1s on one page left the listing with no single top-level
                  heading. The page's own h1 is the hidden one above.
                */}
                <div className="container">
                  <div className="hero-content">
                    <h2 data-animation="fadeInUp" data-delay="1.5s">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className="hero-button">
                      <Link
                        href={`/blog/${post.slug}`}
                        data-animation="fadeInUp" data-delay="1.7s"
                        className="theme-btn"
                      >
                        read more <i className="fa-solid fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      <section className="news-standard fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-8">
              {/*
                The theme styles `.news-standard-items` as a horizontal row
                (thumb beside copy) with a bottom border per item. Each post
                therefore gets its OWN wrapper -- previously every post was
                nested inside a single one, which collapsed the rows into one
                unstyled column.
              */}
              <div className="news-standard-wrapper">
                {/*
                  Nothing is rendered when there is nothing published. The
                  listing is the only content in this column, so with zero posts
                  the column collapses instead of showing a placeholder -- the
                  page is simply not built yet, which is the honest state.
                */}
                {listing.map((post) => (
                  <div className="news-standard-items" key={post.slug}>
                    <article className="news-standard-row">
                      <div className="news-thumb">
                        <Link
                          href={`/blog/${post.slug}`}
                          aria-label={post.title}
                        >
                          <img src={post.image} alt={post.title} loading="lazy" />
                        </Link>
                        <div className="post-date">
                          <h3>
                            {formatPostDate(post.publishedAt)}
                            <span>{post.readingMinutes} min read</span>
                          </h3>
                        </div>
                      </div>

                      <div className="news-content">
                        <ul>
                          <li>
                            <i className="fa-regular fa-user" />
                            {formatPostDate(post.publishedAt)}
                          </li>
                          <li>
                            <i className="fa-regular fa-folder-open" />
                            {post.category}
                          </li>
                        </ul>
                        <h3>
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.excerpt || summarise(post.bodyHtml)}</p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="theme-btn mt-4"
                        >
                          Read More
                          <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}

                {posts.length > listing.length && (
                  <div className="page-nav-wrap pt-5 text-center">
                    <ul>
                      <li>
                        <span className="page-numbers current">1</span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/*
              The whole sidebar is conditional, not just its widgets. Search,
              Categories, Recent Post and the tag cloud are all derived from
              published posts, so with an empty blog they would render as four
              headings over nothing -- worse than not rendering at all.
            */}
            {!isEmpty && (
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
                        <li key={category.slug}>
                          <Link href={`/blog?category=${category.slug}`}>
                            {category.name}
                          </Link>{" "}
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
                    {recent.map((post) => (
                      <div className="recent-items" key={post.slug}>
                        <div className="recent-thumb">
                          <Link href={`/blog/${post.slug}`} aria-label={post.title}>
                            <img src={post.image} alt={post.title} loading="lazy" />
                          </Link>
                        </div>
                        <div className="recent-content">
                          <span>{post.category}</span>
                          <h6>
                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                          </h6>
                          <ul>
                            <li>
                              <i className="fa-solid fa-calendar-days" />
                              {formatPostDate(post.publishedAt)}
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/*
                  The tag cloud is conditional on there actually being tags.
                  A post's tags are authored in the admin panel and are optional,
                  so a blog whose posts have none rendered a "Tags Clouds"
                  heading over an empty box. getTags() returning [] is a real
                  answer, not a reason to draw the widget.
                */}
                {tags.length > 0 && (
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
                          <Link href={`/blog?tag=${tag}`} key={tag}>
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}