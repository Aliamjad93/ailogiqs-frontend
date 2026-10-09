import Link from "next/link";

/**
 * Shared 404 body.
 *
 * Rendered by two routes:
 *  - app/(site)/(main)/404/page.jsx  -> /404, reachable from the nav menu
 *  - app/not-found.jsx               -> unmatched URLs, which Next.js routes
 *    here. That file sits outside the (site) group, so it mounts the header
 *    and footer itself rather than inheriting them.
 *
 * `showHeaderAndFooter` keeps that difference in one component rather than
 * duplicating the markup.
 */
export default function NotFoundContent({
  showHeaderAndFooter = false,
  Header = null,
  Footer = null,
}) {
  const body = (
    <section className="error-section section-padding style-padding fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="error-items">
              <div className="error-image wow fadeInUp">
                <img src="/assets/img/404.png" alt="" />
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Page not found
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Sorry, we couldn&apos;t find your page.
              </p>
              <Link
                href="/"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".7"
              >
                Go Back Home
                <i className="fa-solid fa-arrow-right-long" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  if (!showHeaderAndFooter) return body;

  return (
    <>
      <Header />
      {body}
      <Footer />
    </>
  );
}
