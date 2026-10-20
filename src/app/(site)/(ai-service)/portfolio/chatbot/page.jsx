export const metadata = {
  // NOTE: the title names the service rather than the template route it used to
  // sit on -- "Service Details" matched nothing anyone searches for. The copy is
  // still being written, so treat this as a placeholder with the right shape.
  title: "AI WhatsApp Sales Agent",
  description:
    "The AiLogiQs AI WhatsApp sales agent — from first hello to a confirmed order, 24/7, in English, Urdu, Arabic and Roman Urdu.",
  /*
    This page owns /portfolio/chatbot. It used to sit at
    /ai-services/chatbot/details; that URL now 308s here (see next.config.mjs), so
    the canonical is the current one and there is exactly one indexable address
    for the page.
  */
  alternates: { canonical: "/portfolio/chatbot" },
};

import Link from "next/link";
import {
  RobotMark,
  Bubble,
  OkLine,
  PhoneMock,
  SectionHead,
  Waveform,
} from "@/components/aiq/AiqKit";
import AgentVideo from "@/components/aiq/AgentVideo";
import SiteHeader from "@/components/site-header/SiteHeader";
import Footer from "@/components/site-footer/Footer";

/*
 * Industry photography for the "Deployed across industries" grid, served
 * straight from the Unsplash CDN: free for commercial use, no attribution
 * required, hotlinking permitted. Requested at 640px wide as WebP (~60 KB
 * each) to keep payload small at the card's 16/10 slot. To swap a picture,
 * only the photo ID below changes -- the item renders it at w=640.
 */
const IND_IMG = (photo) =>
  `https://images.unsplash.com/${photo}?q=70&w=640&fm=webp`;

export default function ChatbotServicePage() {
  return (
    <>
      <SiteHeader variant="aiService" />
      {/* `.aiq-service` is the hook for the page-wide readability bump in
          ai-service.css -- it lifts the aiq type scale ~1px so this page reads
          comfortably without touching the same classes on other pages. */}
      <div className="aiq-service">
            <div className="aiq-page-head">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <p className="aiq-eyebrow">
                                <RobotMark size={30} /> AiLogiQs // Sales agent
                            </p>
                            <h1>
                                Your best salesperson is a <span>robot.</span>
                            </h1>
                            <p>
                                An AI agent on your WhatsApp that sells 24/7 — in English, Urdu, Arabic and
                                Roman Urdu. It hears voice notes, reads screenshots and closes the order.
                            </p>
                            <ul className="aiq-chips">
                                <li>24/7 online</li>
                                <li>Shopify + Woo</li>
                                <li>COD confirm</li>
                            </ul>
                            <div className="aiq-hero-cta">
                                <Link href="/contact" className="aiq-btn aiq-btn-solid">
                                    Book a demo
                                </Link>
                                <span className="aiq-hero-domain">ailogiqs.org</span>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            {/*
                              The agent artwork: the photographed customer layered with the
                              WhatsApp mock in one flattened PNG, so there is nothing to compose
                              here. It is also the homepage video's poster.
                            */}
                            <div className="aiq-hero-art">
                                <img
                                    src="/assets/img/custom/agent-hero.png"
                                    alt="A customer on the phone while the AiLogiQs agent answers, recommends a product and confirms order #1042 on WhatsApp"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="aiq-band aiq-tint">
                <div className="container">
                    <SectionHead
                        eyebrow="// From hello to order"
                        title="One chat. One confirmed sale."
                        accent="Zero humans needed."
                    />
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5 wow fadeInUp">
                            {/*
                              The finished WhatsApp mockup, supplied as art.

                              This replaces the PhoneMock that used to be built
                              from Bubble/ProductRow/OrderCard markup. The reason
                              is fidelity: the real screenshot carries WhatsApp's
                              own type, spacing and bubble tails, which the
                              hand-built version could only approximate.

                              What it costs: the chat is no longer selectable text
                              and cannot be edited from the page. The copy is
                              baked into the image, so changing a price or a
                              product name now means a new export -- worth knowing
                              before anyone edits the section's wording. The alt
                              below is therefore doing the work the markup used to
                              do for screen readers and search engines.
                            */}
                            <img
                                className="aiq-chat-shot"
                                src="/assets/img/custom/agent-chat.webp"
                                width={760}
                                height={1457}
                                alt="WhatsApp chat with the AiLogiQs agent: the customer asks for an Eid lawn suit within a 6,000 budget, the agent recommends Gulnar 1-pc at Rs 4,980 and Saba 2-pc at Rs 4,499 from live stock, confirms medium is available with 2-3 day Karachi delivery on cash on delivery, then shows the order summary and confirms order #1043 was created in Shopify."
                            />
                        </div>
                        <div className="col-lg-7">
                            <div className="aiq-store">
                                <span className="aiq-store-badge" aria-hidden="true">
                                    <RobotMark size={46} />
                                </span>
                                <div className="aiq-store-body">
                                    <p className="aiq-store-title">
                                        Live store data <span>· Synced</span>
                                    </p>
                                    <p className="aiq-store-row">
                                        Catalogue <b className="aiq-on">On</b>
                                    </p>
                                    <p className="aiq-store-row">
                                        Stock levels <b className="aiq-on">On</b>
                                    </p>
                                    <p className="aiq-store-row aiq-store-row-last">
                                        Order creation <b className="aiq-on">On</b>
                                    </p>
                                    <span className="aiq-store-bar" />
                                </div>
                            </div>
                            <ul className="aiq-steps">
                                <li>
                                    <span className="aiq-step-num">01</span>
                                    <div>
                                        <h4>Understands the need</h4>
                                        <p>Occasion, budget and size, even in Roman Urdu.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="aiq-step-num">02</span>
                                    <div>
                                        <h4>Recommends from live stock</h4>
                                        <p>Real products and prices from your store.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="aiq-step-num">03</span>
                                    <div>
                                        <h4>Answers every doubt</h4>
                                        <p>Sizes, delivery, payment options, returns.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="aiq-step-num">04</span>
                                    <div>
                                        <h4>Closes the order</h4>
                                        <p>Creates it in Shopify or WooCommerce.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="aiq-step-num">05</span>
                                    <div>
                                        <h4>Follows up</h4>
                                        <p>COD confirmation, then delivery updates.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aiq-band">
                <div className="container">
                    <SectionHead
                        eyebrow="// Sensors online"
                        title="It hears voice notes."
                        accent="It sees screenshots."
                        center
                    />
                    {/*
                      `col-xl-4` + `justify-content-center`, not `col-lg-6`: each
                      card is a phone mock, and half a 1320px container left the
                      phone floating in ~100px of white on either side, which read
                      as a mistake rather than a layout. The columns are now
                      roughly phone-width and the pair sits centred, so the card
                      hugs the device.
                    */}
                    <div className="row g-4 justify-content-center">
                        <div className="col-xl-4 col-lg-6 wow fadeInUp">
                            <div className="aiq-panel">
                                <div className="aiq-panel-top">
                                    <span className="aiq-tag">Audio input</span>
                                    <span className="aiq-panel-title">Voice notes</span>
                                </div>
                                {/*
                                  The mockup is the page's own chat device (.aiq-phone
                                  in overrides.css). The recorder is this card's input
                                  row, so the phone renders without the "Type a
                                  message" bar -- the screenshot card keeps it.
                                */}
                                <PhoneMock title="AiLogiQs" input={false}>
                                    <div className="aiq-audio">
                                        <span className="aiq-play">
                                            <i className="fa-solid fa-play" />
                                        </span>
                                        <Waveform />
                                        <span className="aiq-audio-time">0:14</span>
                                    </div>
                                    <p className="aiq-transcribe">Transcribed · Arabic</p>
                                    <p className="aiq-bubble aiq-bubble-in aiq-rtl" dir="rtl" lang="ar">
                                        عندكم طقم عود للهدايا؟
                                    </p>
                                    <p className="aiq-bubble aiq-bubble-in aiq-rtl" dir="rtl" lang="ar">
                                        أكيد! طقم العود الملكي متوفر، ونقدر نغلّفه كهدية مجاناً. تبي رابط الدفع؟
                                    </p>
                                    <Bubble dir="out" className="aiq-rtl">
                                        إيه، أرسله
                                    </Bubble>
                                    <OkLine>Payment link sent · [amount]</OkLine>
                                    <div className="aiq-recorder">
                                        <span className="aiq-rec-dot" />
                                        <span className="aiq-rec-time">0:08</span>
                                        <Waveform bars={12} />
                                        <span className="aiq-rec-slide">Slide to cancel</span>
                                        <span className="aiq-phone-mic aiq-phone-mic-sm">
                                            <i className="fa-solid fa-microphone" />
                                        </span>
                                    </div>
                                </PhoneMock>
                                <div className="aiq-panel-foot">
                                    <h4>Voice notes</h4>
                                    <p>Transcribed and answered in the customer&rsquo;s own language.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="aiq-panel">
                                <div className="aiq-panel-top">
                                    <span className="aiq-tag">Image input</span>
                                    <span className="aiq-panel-title">Product screenshots</span>
                                </div>
                                <PhoneMock title="AiLogiQs">
                                    {/*
                                      The photo the customer sent: client artwork
                                      (dress_3, the maroon embroidered set), cropped
                                      into the old 4/3 placeholder slot and labelled
                                      like a received file.
                                    */}
                                    <div className="aiq-shot">
                                        <img
                                            className="aiq-shot-img"
                                            src="/assets/img/custom/dress_3.jpg"
                                            alt="Maroon embroidered three-piece set on a mannequin — the product the customer sent a screenshot of"
                                            width={348}
                                            height={196}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <p className="aiq-shot-name">screenshot.jpg</p>
                                    </div>
                                    <Bubble dir="out">Ye wala available hai?</Bubble>
                                    <div className="aiq-matched">
                                        <span className="aiq-matched-title">Product matched</span>
                                        <p>
                                            Ji! Ye <b>Noor Embroidered Kurta</b> hai, Rs 6,200. S, M, L available hain.
                                            Kaunsa size?
                                        </p>
                                        <span className="aiq-sizes">
                                            <b>S</b>
                                            <b className="aiq-size-active">M</b>
                                            <b>L</b>
                                        </span>
                                    </div>
                                </PhoneMock>
                                <div className="aiq-panel-foot">
                                    <h4>Product screenshots</h4>
                                    <p>Matched to the real product, price and sizes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="aiq-band aiq-tint">
                <div className="container">
                    <SectionHead
                        eyebrow="// Language module · 4 loaded"
                        title="It replies the way your"
                        accent="customer writes."
                        center
                    />
                    {/*
                      The four languages are laid out as a cross around the agent
                      rather than as four equal columns: each card faces the
                      centre, so the composition reads as one agent speaking four
                      languages instead of four unrelated cards.

                      `corner` drives the card mirroring entirely in CSS -- see
                      .aiq-lang-tl/-tr/-bl/-br in overrides.css. The markup order
                      is the same in every card.

                      Inside each card the two bubbles are a real chat pair:
                      the customer's question (out, blue, right) and the agent's
                      answer (in, white, left), in the card's own language. The
                      alignment is fixed to that chat reading in every corner --
                      only the card itself mirrors.
                    */}
                    <div className="aiq-lang-grid">
                        {[
                            {
                                corner: "tl",
                                code: "[EN] English",
                                img: "/assets/img/custom/dress_1.jpg",
                                alt: "Pink embroidered lawn suit on a mannequin",
                                text: "Is this available in medium?",
                                reply: "Yes! Medium is in stock — Rs 4,980. Shall I reserve it?",
                            },
                            {
                                corner: "tr",
                                code: "[RU] Roman Urdu",
                                img: "/assets/img/custom/dress_2.jpg",
                                alt: "Teal embroidered lawn suit with trousers on a mannequin",
                                text: "Ye medium mein available hai?",
                                reply: "Ji haan! Medium available hai — Rs 4,499. Order confirm karoon?",
                            },
                            {
                                corner: "bl",
                                code: "[UR] Urdu",
                                img: "/assets/img/custom/dress_3.jpg",
                                alt: "Maroon embroidered three-piece set on a mannequin",
                                text: "کیا یہ میڈیم سائز میں دستیاب ہے؟",
                                reply: "جی ہاں! میڈیم دستیاب ہے — 6,200 روپے۔ آرڈر کنفرم کروں؟",
                                rtl: true,
                                lang: "ur",
                            },
                            {
                                corner: "br",
                                code: "[AR] Arabic",
                                img: "/assets/img/custom/dress_4.jpg",
                                alt: "Black embroidered abaya on a mannequin",
                                text: "هل هذا متوفر بمقاس وسط؟",
                                reply: "نعم، المقاس الوسط متوفر — 5,500 ريال. أؤكد الطلب؟",
                                rtl: true,
                                lang: "ar",
                            },
                        ].map((item) => (
                            <div className={`aiq-lang aiq-lang-${item.corner}`} key={item.code}>
                                <span className="aiq-lang-code">{item.code}</span>
                                <img
                                    className="aiq-lang-img"
                                    src={item.img}
                                    alt={item.alt}
                                    width={108}
                                    height={108}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="aiq-lang-chat">
                                    <p
                                        className="aiq-bubble aiq-bubble-out"
                                        dir={item.rtl ? "rtl" : undefined}
                                        lang={item.lang}
                                    >
                                        {item.text}
                                    </p>
                                    <p
                                        className="aiq-bubble aiq-bubble-in"
                                        dir={item.rtl ? "rtl" : undefined}
                                        lang={item.lang}
                                    >
                                        {item.reply}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <span className="aiq-lang-core" aria-hidden="true">
                            <RobotMark size={44} />
                        </span>
                    </div>
                    <p className="aiq-strip">
                        Auto-detects language <span>·</span> Mixed messages <span>·</span> Gulf dialect
                    </p>
                </div>
            </section>

            <section className="aiq-band">
                <div className="container">
                    <SectionHead
                        eyebrow="// System modules"
                        title="Everything it takes to"
                        accent="sell on WhatsApp"
                    />
                    <p className="aiq-subhead">Core · every plan</p>
                    <div className="row g-4">
                        <div className="col-lg col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="aiq-card aiq-card-active">
                                <span className="aiq-card-icon">
                                    <i className="fa-solid fa-cart-shopping" />
                                </span>
                                <h4>Sales, start to close</h4>
                                <p>From first hello to a confirmed order in one chat.</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="aiq-card">
                                <span className="aiq-card-icon">
                                    <i className="fa-solid fa-book-open" />
                                </span>
                                <h4>Product knowledge</h4>
                                <p>Trained on your catalogue, sizes and policies.</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="aiq-card">
                                <span className="aiq-card-icon">
                                    <i className="fa-solid fa-link" />
                                </span>
                                <h4>Website and socials</h4>
                                <p>One assistant behind every chat link and ad.</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="aiq-card">
                                <span className="aiq-card-icon">
                                    <i className="fa-regular fa-clock" />
                                </span>
                                <h4>Online 24/7</h4>
                                <p>Replies in seconds, nights and holidays included.</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="aiq-card">
                                <span className="aiq-card-icon">
                                    <i className="fa-solid fa-comment-dots" />
                                </span>
                                <h4>Your language</h4>
                                <p>One language of your choice on the base plan.</p>
                            </div>
                        </div>
                    </div>
                    <p className="aiq-subhead">Add-on modules · growth and pro</p>
                    <div className="row g-4">
                        {[
                            ["Mod.01", "Shopify and WooCommerce", "Live stock, prices, order creation."],
                            ["Mod.02", "CRM", "Contacts, tags and pipeline, sold separately."],
                            ["Mod.03", "Auto follow-ups", "Cart nudges, COD checks, delivery updates."],
                            ["Mod.04", "Voice notes", "Listens and replies in text."],
                            ["Mod.05", "Screenshot match", "Finds the product from a picture."],
                            ["Mod.06", "4 languages", "English, Urdu, Arabic, Roman Urdu."],
                        ].map(([code, title, text]) => (
                            <div className="col-lg-4 col-md-6 wow fadeInUp" key={code}>
                                <div className="aiq-mod">
                                    <span className="aiq-mod-code">{code}</span>
                                    <h4>{title}</h4>
                                    <p>{text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="aiq-band aiq-tint">
                <div className="container">
                    <SectionHead
                        eyebrow="// Deployed across industries"
                        title="One AI agent. Every business that sells on"
                        accent="WhatsApp."
                    />
                    <div className="row g-4">
                        {[
                            {
                                icon: "fa-solid fa-shirt",
                                title: "Fashion and bridal",
                                tags: ["Lawn", "Lehenga", "Abaya"],
                                q: "Can you send the size chart for this bridal lehenga?",
                                a: "Here it is! We also offer custom fitting at no extra cost.",
                                out: "Size help · Order",
                                photo: "photo-1441986300917-64674bd600d8",
                                alt: "Shirts and jackets on display in a clothing boutique",
                            },
                            {
                                icon: "fa-solid fa-utensils",
                                title: "Restaurants and cafes",
                                tags: ["Orders", "Deals", "Delivery"],
                                q: "2 family deals DHA mein deliver ho jayenge?",
                                a: "Ji, 35 min mein. Cold drink add karoon?",
                                out: "Order · Upsell · Delivery",
                                photo: "photo-1517248135467-4c7edcad34c4",
                                alt: "Set dining tables in a modern restaurant",
                            },
                            {
                                icon: "fa-solid fa-tooth",
                                title: "Clinics and dental",
                                tags: ["Bookings", "Reminders"],
                                q: "Can I book a dental check-up tomorrow?",
                                a: "Tomorrow 4 PM or 6 PM is free. Which one should I book?",
                                out: "Appointment booked",
                                photo: "photo-1629909613654-28e377c37b09",
                                alt: "Dental treatment chair and equipment in a bright clinic room",
                            },
                            {
                                icon: "fa-solid fa-house",
                                title: "Real estate",
                                tags: ["Leads", "Viewings"],
                                q: "أبغي شقة غرفتين في الرياض",
                                a: "عندنا ثلاث خيارات. أرسل لك الصور وموعد المعاينة؟",
                                out: "Lead qualified",
                                photo: "photo-1560518883-ce09059eeffa",
                                alt: "House model and key ring on a wooden table",
                            },
                            {
                                icon: "fa-solid fa-mobile-screen",
                                title: "Electronics and mobiles",
                                tags: ["Specs", "Warranty"],
                                q: "How long is the warranty on this phone?",
                                a: "1-year official warranty, plus a free case if you order today.",
                                out: "Question answered · Sale",
                                photo: "photo-1511707171634-5f897ff02aa9",
                                alt: "Smartphone screen filled with app icons",
                            },
                            {
                                icon: "fa-solid fa-wand-magic-sparkles",
                                title: "Beauty and salons",
                                tags: ["Slots", "Packages"],
                                q: "Do you have a bridal makeup slot on Saturday?",
                                a: "Yes, 11 AM is open. Pay the advance to lock it in.",
                                out: "Slot reserved",
                                photo: "photo-1596462502278-27bfdc403348",
                                alt: "Makeup brushes, lipstick and powder laid out flat",
                            },
                            {
                                icon: "fa-solid fa-graduation-cap",
                                title: "Education and courses",
                                tags: ["Admissions", "Fees"],
                                q: "When does the next IELTS batch start?",
                                a: "On 1 November. Shall I reserve a seat for you?",
                                out: "Enrolment",
                                photo: "photo-1509062522246-3755977927d7",
                                alt: "Teacher giving a lesson to students in a classroom",
                            },
                            {
                                icon: "fa-solid fa-plane",
                                title: "Travel and Umrah",
                                tags: ["Packages", "Visas"],
                                q: "Do you have an Umrah package for December?",
                                a: "Yes, a 15-day package. Shall I send details and price?",
                                out: "Booking · Lead",
                                photo: "photo-1436491865332-7a61a109cc05",
                                alt: "Airplane wing above a sea of clouds at sunset",
                            },
                        ].map((item) => (
                            <div className="col-lg-6 col-md-12 wow fadeInUp" key={item.title}>
                                <div className="aiq-ind">
                                    <div className="aiq-ind-top">
                                        <img
                                            className="aiq-ind-img"
                                            src={IND_IMG(item.photo)}
                                            alt={item.alt}
                                            width={640}
                                            height={400}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <span className="aiq-ind-badge">
                                            <i className="fa-solid fa-circle" /> AI agent · active
                                        </span>
                                    </div>
                                    <div className="aiq-ind-body">
                                        <span className="aiq-ind-icon">
                                            <i className={item.icon} />
                                        </span>
                                        <h4>{item.title}</h4>
                                        <p className="aiq-tags">
                                            {item.tags.map((t) => (
                                                <span key={t}>{t}</span>
                                            ))}
                                        </p>
                                        <p className="aiq-bubble aiq-bubble-out aiq-bubble-sm">{item.q}</p>
                                        <p className="aiq-bubble aiq-bubble-in aiq-bubble-sm">{item.a}</p>
                                        <p className="aiq-outcome">
                                            <i className="fa-solid fa-arrow-right" /> {item.out}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*
              The client's 60-second walkthrough, sitting directly above the FAQ
              so the last thing before the questions is the product itself.

              `aiq-band aiq-tint`, not a plain `aiq-band`: the band above
              ("Deployed across industries") is tinted too, so the two share a
              background and the join between them is invisible, while the FAQ
              below is white and gets a clean edge. A white band here would have
              run straight into the white FAQ and read as one long section.

              The clip is 1920x1080, which is why width/height are passed
              explicitly -- AgentVideo defaults to the homepage clip's portrait
              1080x1920, and a mismatch there is a layout shift, not a detail.
              Its poster is the clip's own title card at t=2.5s.

              This clip used to run on /service, in the band that replaced the
              template's "Free training" placeholder. That page is back on the
              template markup, so the band went with it; the video and its poster
              were left in place and are reused here.
            */}
            <section className="aiq-band aiq-tint">
                <div className="container">
                    <SectionHead
                        eyebrow="// Watch · 60 seconds"
                        title="Meet your AI"
                        accent="sales agent."
                        intro="A walkthrough of the agent taking a real order — from the first hello to the confirmed sale."
                        center
                    />
                    <div className="aiq-video">
                        <AgentVideo
                            src="/assets/video/services-training-video.mp4"
                            poster="/assets/img/custom/services-training-poster.jpg"
                            width={1920}
                            height={1080}
                            label="A 60-second walkthrough of the AiLogiQs AI sales agent taking a customer's order on WhatsApp"
                        />
                    </div>
                </div>
            </section>

            <section className="aiq-band">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <SectionHead
                                eyebrow="// Support"
                                title="Frequently asked"
                                accent="questions"
                                intro="Everything store owners ask before booking a demo."
                            />
                            <div className="accordion aiq-faq" id="faq-service">
                                <div className="accordion-item">
                                    <h5 className="accordion-header">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faqs1"
                                            aria-expanded="true"
                                            aria-controls="faqs1"
                                        >
                                            Which languages does the agent support?
                                        </button>
                                    </h5>
                                    <div id="faqs1" className="accordion-collapse collapse show" data-bs-parent="#faq-service">
                                        <div className="accordion-body">
                                            English, Urdu, Arabic and Roman Urdu. It auto-detects the language the
                                            customer writes in — even mixing them inside one chat — and replies in kind,
                                            including the Gulf dialect.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h5 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faqs2"
                                            aria-expanded="false"
                                            aria-controls="faqs2"
                                        >
                                            Does it work with my store?
                                        </button>
                                    </h5>
                                    <div id="faqs2" className="accordion-collapse collapse" data-bs-parent="#faq-service">
                                        <div className="accordion-body">
                                            It connects to Shopify or WooCommerce, so recommendations, stock levels and
                                            prices come from your live catalogue, and confirmed orders are created
                                            straight in your store.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h5 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faqs3"
                                            aria-expanded="false"
                                            aria-controls="faqs3"
                                        >
                                            How are cash-on-delivery orders confirmed?
                                        </button>
                                    </h5>
                                    <div id="faqs3" className="accordion-collapse collapse" data-bs-parent="#faq-service">
                                        <div className="accordion-body">
                                            The agent collects the address, confirms the COD amount, creates the order and
                                            then keeps the customer updated — and follows up automatically if they go
                                            quiet.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h5 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faqs4"
                                            aria-expanded="false"
                                            aria-controls="faqs4"
                                        >
                                            Can I keep my own CRM?
                                        </button>
                                    </h5>
                                    <div id="faqs4" className="accordion-collapse collapse" data-bs-parent="#faq-service">
                                        <div className="accordion-body">
                                            The CRM add-on adds contacts, tags and pipeline to the agent. If you already
                                            run a CRM, the flow can stay inside your current tools instead — tell us in
                                            the demo which one you use.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="aiq-faq-aside">
                                {/* Same artwork as the homepage FAQ band. Plain
                                    <img> like the rest of the site's content
                                    images -- no next/image. */}
                                <img
                                    src="/assets/img/custom/faq.png"
                                    alt="Customer chatting with the AI agent on WhatsApp"
                                    width={606}
                                    height={749}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
      <Footer variant="home2" />
    </>

  );
}
