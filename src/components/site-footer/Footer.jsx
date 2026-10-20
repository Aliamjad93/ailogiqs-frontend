import Link from "next/link";
import Logo from "@/components/shared/Logo";

/**
 * Social profiles, in footer-display order. The template's footer shipped
 * placeholder "#" links (plus Discord/YouTube icons for services we do not
 * run); these are the three accounts that actually exist.
 */
const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100033227542369",
    icon: "fa-brands fa-facebook-f",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/108624298",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ai_logiqs/",
    icon: "fa-brands fa-instagram",
  },
];

/** Studio details, as printed in the offcanvas contact panel. */
const CONTACT = {
  email: "bd@ailogiqs.com",
  phone: "0301-6146851",
  phoneHref: "tel:03016146851",
  address:
    "Bahria Orchard, Central Block, Orchard Heights, 4th Floor, Office No. 302",
};

/**
 * Site footer.
 *
 * TWO footers live here, one per design.
 *
 * `classic` is the DEFAULT: the template's own footer, which is what the
 * black/yellow site uses on every route (`/`, the inner pages, the 404 screen
 * -- all of them render `<Footer />` unchanged). The BeeLens showcase reuses
 * it too and only repaints its accents amber under `body.route-bee`.
 *
 * `home2` is the indigo footer that belongs to the AI-service design under
 * /ai-services/*. Those pages render it explicitly, `<Footer variant="home2" />`.
 *
 * The indigo one is safe to keep here rather than in the AI-service route group
 * because it references only `:root` tokens from main.css (`--theme2`,
 * `--header2`, `--text2`) and is never reached unless a page asks for it by name.
 *
 * Both variants previously carried a newsletter signup. It has been removed:
 * there is no mailing list behind it, so the form could not do anything. The
 * wide lead column it occupied is now a "Get in touch" block -- same visual
 * weight (heading, one line of context, a primary action), but it links to the
 * real contact page and prints the studio's actual details.
 */

/** Contact rows shared by both footers' "Get in touch" block. */
function ContactRows() {
  return (
    <>
      <p className="footer-contact-item">
        <i className="far fa-envelope" />
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
      </p>
      <p className="footer-contact-item">
        <i className="far fa-phone" />
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      </p>
      <p className="footer-contact-item">
        <i className="far fa-location-dot" />
        <span>{CONTACT.address}</span>
      </p>
    </>
  );
}

/** Social icon row; `className` lets each footer keep its own wrapper class. */
function SocialIcons({ className = "social-icon", ...rest }) {
  return (
    <div className={className} {...rest}>
      {SOCIAL_LINKS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
        >
          <i className={s.icon}></i>
        </a>
      ))}
    </div>
  );
}

export default function Footer({ variant = "classic" }) {
  if (variant !== "classic") {
    return (
      <footer
        className="footer-section bg-cover"
        style={{ backgroundImage: "url('/assets/img/footer-bg.jpg')" }}
      >
        <div className="container">
          <div className="footer-widgets-wrapper style-2">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link href="/">
                      {/* Indigo accent: the homepage footer is white-and-blue,
                          so the wordmark keeps the theme yellow out of it. */}
                      <Logo variant="dark" accent="#514DE0" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p>
                      AiLogiQs builds intelligent AI products — sales agents,
                      chatbots and diagnostics — that automate the routine and turn
                      data into clear decisions.
                    </p>
                    <SocialIcons />
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Company</h3>
                  </div>
                  <ul className="list-items">
                    <li>
                      <Link href="/about">
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link href="/project">
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Our blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/team">
                        Our team
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link href="/careers">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp" data-wow-delay=".6s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Services</h3>
                  </div>
                  <ul className="list-items">
                    <li>
                      <Link href="/portfolio/chatbot">
                        AI sales agent
                      </Link>
                    </li>
                    <li>
                      <Link href="/portfolio/bee-virus-detection">
                        BeeLens
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Strategy planning
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Data analysis
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        ML models
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Custom AI solutions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".8s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3>Get in touch</h3>
                  </div>
                  <div className="footer-content">
                    <p>
                      Ready to automate your business? Tell us what you need — we
                      reply within one business day.
                    </p>
                    <ContactRows />
                    <Link href="/contact" className="theme-btn mt-3">
                      Contact us <i className="fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom style-2">
            <div className="footer-bottom-wrapper">
              <p className="wow fadeInUp" data-wow-delay=".3s">AiLogiQs &copy; 2026. All Rights Reserved.</p>
              <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
                <li>
                  <Link href="/contact">Privacy policy -</Link>
                </li>
                <li>
                  <Link href="/contact">Contact -</Link>
                </li>
                <li>
                  <Link href="/contact">Terms &amp; conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  /*
    The template's original footer -- the black/yellow site's footer, the
    BeeLens page's footer, and the default above. It paints a solid near-black
    panel (.footer-section.footer-bg) with --white headings, which is the
    template's own dark treatment and needs no overrides.

    Content is the site's own: the studio's contact details in the lead
    column, and the real destinations in the link columns. The old fourth
    column was a stock "Instagram" photo strip -- none of those photos were
    ours, so it became a fourth link column instead.
  */
  return (
        <footer className="footer-section footer-bg">
                <div className="container">
                    <div className="footer-widgets-wrapper">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Get in touch</h3>
                                    </div>
                                    <div className="footer-content">
                                        <p>Tell us about your project — we reply within one business day.</p>
                                        <ContactRows />
                                        <Link href="/contact" className="theme-btn mt-4">
                                            Contact us <i className="fa-solid fa-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Company</h3>
                                    </div>
                                    <ul className="list-items">
                                        <li>
                                            <Link href="/about">
                                                About us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/project">
                                                Portfolio
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/blog">
                                                Our blog
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                Our team
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/careers">
                                                Careers
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                Contact us
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Services</h3>
                                    </div>
                                    <ul className="list-items">
                                        <li>
                                            <Link href="/portfolio/chatbot">
                                                AI Chatbot &amp; Sales Agent
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/portfolio/bee-virus-detection">
                                                BeeLens — Bee Virus Detection
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Business Strategy Planning
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Data Analysis Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Machine Learning Models
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                Custom AI Solutions
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-3 wow fadeInUp" data-wow-delay=".8s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Explore</h3>
                                    </div>
                                    <ul className="list-items">
                                        <li>
                                            <Link href="/service">
                                                Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/pricing">
                                                Pricing
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/faq">
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/register">
                                                Create account
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/login">
                                                User login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/project-details">
                                                Project details
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-bottom-wrapper">
                            <div className="logo-img wow fadeInUp" data-wow-delay=".3s">
                                <Link href="/">
                                    <Logo variant="light" />
                                </Link>
                            </div>
                            <p className="wow fadeInUp" data-wow-delay=".5s">AiLogiQs © 2026. All Rights Reserved.</p>
                            <SocialIcons className="social-icon wow fadeInUp" data-wow-delay=".7s" />
                        </div>
                    </div>
                </div>
            </footer>
  );
}
