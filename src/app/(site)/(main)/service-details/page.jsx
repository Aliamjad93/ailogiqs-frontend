export const metadata = {
  title: "Service Details",
  description:
    "The AiLogiQs AI WhatsApp sales agent — from first hello to a confirmed order, 24/7, in English, Urdu, Arabic and Roman Urdu.",
};

import Link from "next/link";
import {
  RobotMark,
  PhoneMock,
  Bubble,
  ProductRow,
  OrderCard,
  OkLine,
  ImageSpace,
  SectionHead,
  Waveform,
} from "@/components/aiq/AiqKit";

export default function ServiceDetails() {
  return (
    <>
          <div className="aiq-page-head">
              <div className="container">
                  <p className="aiq-eyebrow aiq-eyebrow-light">
                      <RobotMark size={28} tone="light" /> // Service detail
                  </p>
                  <h1>
                      AI WhatsApp <span>sales agent</span>
                  </h1>
                  <p>
                      An AI agent that lives on your WhatsApp, knows your catalogue and closes orders for you —
                      in English, Urdu, Arabic and Roman Urdu, around the clock.
                  </p>
              </div>
          </div>

          <section className="aiq-band">
              <div className="container">
                  <div className="row g-5 align-items-center">
                      <div className="col-lg-6 wow fadeInUp">
                          <div className="aiq-head">
                              <p className="aiq-eyebrow">
                                  <RobotMark size={28} /> // Overview
                              </p>
                              <h2>
                                  It sells while you <span className="aiq-accent">sleep</span>
                              </h2>
                          </div>
                          <p className="aiq-intro">
                              Customers message at 2 AM, in the language they actually type. The agent answers in
                              seconds, recommends from your live stock, handles every doubt, creates the order and
                              follows up until the parcel is delivered.
                          </p>
                          <ul className="aiq-bullets">
                              <li>One assistant behind your WhatsApp, chat links and ads</li>
                              <li>Live catalogue, stock levels and prices from Shopify or WooCommerce</li>
                              <li>Cash-on-delivery confirmation, then automatic delivery updates</li>
                              <li>Ships with English, Urdu, Arabic and Roman Urdu</li>
                          </ul>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="aiq-faq-aside">
                              <ImageSpace ratio="1 / 1" label="Agent at work" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="aiq-band aiq-tint">
              <div className="container">
                  <SectionHead
                      eyebrow="// From hello to order"
                      title="One chat. One confirmed sale."
                      accent="Zero humans needed."
                  />
                  <div className="row g-5 align-items-center">
                      <div className="col-lg-5 wow fadeInUp">
                          <PhoneMock title="Zara Lawn Studio">
                              <Bubble dir="out">Salam, Eid ke liye lawn suit chahiye. Budget 6,000 tak.</Bubble>
                              <Bubble>Walaikum salam! Aapke budget mein ye 2 bestsellers hain:</Bubble>
                              <div className="aiq-prod-grid">
                                  <ProductRow name="Gulnar 3-pc" price="Rs 5,490" />
                                  <ProductRow name="Saba 2-pc" price="Rs 4,500" />
                              </div>
                              <Bubble dir="out">Gulnar medium mein hai?</Bubble>
                              <Bubble>
                                  Ji, medium available hai. Karachi delivery 2 din, COD ya card dono chalte hain.
                                  Order kar doon?
                              </Bubble>
                              <Bubble dir="out">Haan, COD. Address: [customer address]</Bubble>
                              <OrderCard name="Gulnar 3-pc · M" price="Rs 5,490" />
                              <OkLine>Order #1043 created in Shopify</OkLine>
                          </PhoneMock>
                      </div>
                      <div className="col-lg-7">
                          <div className="aiq-store">
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
                              <li className="aiq-step-cta">
                                  <div>
                                      <h4>See it close one order, live</h4>
                                      <Link href="/contact" className="aiq-btn aiq-btn-white">
                                          Book a demo
                                      </Link>
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
                  <div className="row g-4">
                      <div className="col-lg-6 wow fadeInUp">
                          <div className="aiq-panel">
                              <div className="aiq-panel-top">
                                  <span className="aiq-tag">Audio input</span>
                                  <span className="aiq-panel-title">Voice notes</span>
                              </div>
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
                              <div className="aiq-panel-foot">
                                  <h4>Voice notes</h4>
                                  <p>Transcribed and answered in the customer&rsquo;s own language.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                          <div className="aiq-panel">
                              <div className="aiq-panel-top">
                                  <span className="aiq-tag">Image input</span>
                                  <span className="aiq-panel-title">Product screenshots</span>
                              </div>
                              <div className="aiq-shot">
                                  <ImageSpace ratio="4 / 3" label="screenshot.jpg" />
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
                  />
                  <div className="row g-4">
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                          <div className="aiq-lang">
                              <span className="aiq-lang-code">[EN] English</span>
                              <ImageSpace />
                              <p className="aiq-bubble aiq-bubble-out">Is this available in medium?</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                          <div className="aiq-lang">
                              <span className="aiq-lang-code">[RU] Roman Urdu</span>
                              <ImageSpace />
                              <p className="aiq-bubble aiq-bubble-out">Ye medium mein available hai?</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                          <div className="aiq-lang">
                              <span className="aiq-lang-code">[UR] Urdu</span>
                              <ImageSpace />
                              <p className="aiq-bubble aiq-bubble-out aiq-rtl" dir="rtl" lang="ur">
                                  کیا یہ میڈیم سائز میں دستیاب ہے؟
                              </p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                          <div className="aiq-lang">
                              <span className="aiq-lang-code">[AR] Arabic</span>
                              <ImageSpace />
                              <p className="aiq-bubble aiq-bubble-out aiq-rtl" dir="rtl" lang="ar">
                                  هل هذا متوفر بمقاس وسط؟
                              </p>
                          </div>
                      </div>
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
                          },
                          {
                              icon: "fa-solid fa-utensils",
                              title: "Restaurants and cafes",
                              tags: ["Orders", "Deals", "Delivery"],
                              q: "2 family deals DHA mein deliver ho jayenge?",
                              a: "Ji, 35 min mein. Cold drink add karoon?",
                              out: "Order · Upsell · Delivery",
                          },
                          {
                              icon: "fa-solid fa-tooth",
                              title: "Clinics and dental",
                              tags: ["Bookings", "Reminders"],
                              q: "Can I book a dental check-up tomorrow?",
                              a: "Tomorrow 4 PM or 6 PM is free. Which one should I book?",
                              out: "Appointment booked",
                          },
                          {
                              icon: "fa-solid fa-house",
                              title: "Real estate",
                              tags: ["Leads", "Viewings"],
                              q: "أبغي شقة غرفتين في الرياض",
                              a: "عندنا ثلاث خيارات. أرسل لك الصور وموعد المعاينة؟",
                              out: "Lead qualified",
                          },
                          {
                              icon: "fa-solid fa-mobile-screen",
                              title: "Electronics and mobiles",
                              tags: ["Specs", "Warranty"],
                              q: "How long is the warranty on this phone?",
                              a: "1-year official warranty, plus a free case if you order today.",
                              out: "Question answered · Sale",
                          },
                          {
                              icon: "fa-solid fa-wand-magic-sparkles",
                              title: "Beauty and salons",
                              tags: ["Slots", "Packages"],
                              q: "Do you have a bridal makeup slot on Saturday?",
                              a: "Yes, 11 AM is open. Pay the advance to lock it in.",
                              out: "Slot reserved",
                          },
                          {
                              icon: "fa-solid fa-graduation-cap",
                              title: "Education and courses",
                              tags: ["Admissions", "Fees"],
                              q: "When does the next IELTS batch start?",
                              a: "On 1 November. Shall I reserve a seat for you?",
                              out: "Enrolment",
                          },
                          {
                              icon: "fa-solid fa-plane",
                              title: "Travel and Umrah",
                              tags: ["Packages", "Visas"],
                              q: "Do you have an Umrah package for December?",
                              a: "Yes, a 15-day package. Shall I send details and price?",
                              out: "Booking · Lead",
                          },
                      ].map((item) => (
                          <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" key={item.title}>
                              <div className="aiq-ind">
                                  <div className="aiq-ind-top">
                                      <ImageSpace ratio="16 / 10" label={item.title} />
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
                              <ImageSpace ratio="1 / 1" label="Support workspace" />
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="aiq-cta">
              <div className="container">
                  <div className="aiq-cta-inner">
                      <RobotMark size={54} tone="light" />
                      <h2>
                          Your best salesperson is a <span>robot.</span>
                      </h2>
                      <p>Book a demo and watch it close one order, live, on your WhatsApp.</p>
                      <Link href="/contact" className="aiq-btn aiq-btn-white">
                          Book a demo
                      </Link>
                  </div>
              </div>
          </section>
    </>
  );
}
