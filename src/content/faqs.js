/**
 * The questions the site actually gets asked — ONE copy.
 *
 * Imported by the homepage FAQ section, by /pricing and by /faq. The FAQ page
 * used to ship twelve template questions answered with the same paragraph
 * about a chatbot ("I love how easy it is to use this chatbot..."), and the
 * pricing page had three more with "Rhoncus duis urna lobortis..." underneath.
 * Neither described anything AiLogiQs does.
 *
 * Answers are written from what the site already claims — the plans in
 * content/pricing.js, the services on /service, the process on the homepage
 * and the terms in content/legal.js. Nothing here promises a turnaround time,
 * a channel or a data practice the site has not already committed to.
 */

export const HOME_FAQS = [
  {
    question: "What can AiLogiQs build for my business?",
    answer:
      "AI agents that handle support and sales conversations around the clock, machine learning models that predict trends and spot fraud, and dashboards that turn raw data into decisions. Every build is tailored to your processes and connects to the tools you use now.",
  },
  {
    question: "How do you work with us?",
    answer:
      "We scope the work first, then build it, then train it on your products, FAQs and data so it answers like your team. Once it is live we keep monitoring it and improving it, so the solution keeps working as your business changes.",
  },
  {
    question: "How do we get started?",
    answer:
      "With a free consultation. We look at the workflow you want to change, map the data and the systems involved, and come back with a scoped proposal, a timeline and the criteria we will measure it against.",
  },
];

/**
 * The pricing page's FAQ block. These are the questions a buyer asks between
 * reading the plan cards and starting a conversation.
 */
export const PRICING_FAQS = [
  {
    question: "What do the plans cost?",
    answer:
      "Every plan has a fixed price in PKR: Free at Rs 0, AI Starter at Rs 5,499, AI Growth at Rs 9,999 and AI Pro at Rs 17,999. The cards above list exactly what each plan includes — AI conversations, seats and integrations — so you can match a plan to your volume before you talk to us.",
  },
  {
    question: "What is the difference between AI Starter and AI Growth?",
    answer:
      "AI Starter is your first agent: order taking and 300 AI conversations. AI Growth adds the follow-through a store needs — COD confirmation, automated follow-ups and a Shopify integration — with 750 AI conversations.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "The Free plan is the trial. A team inbox, contacts, templates and 25 AI conversations, at no cost, so you can run a real workflow through the agent before you pay anything. The consultation we do before scoping any work is free as well.",
  },
  {
    question: "Can I move between plans as we grow?",
    answer:
      "Yes. Plans are sized to how much you use the agent, so tell us what changed and we will move you to the tier that fits rather than have you outgrow a plan.",
  },
  {
    question: "Do the integrations cost extra?",
    answer:
      "Some come with the plan: order taking is part of AI Starter, and COD confirmation, follow-ups and Shopify are part of AI Growth. Anything outside the plans — a custom model, an ERP or CRM integration, a dedicated dashboard — is scoped on its own, with a price and a timeline agreed before the work starts.",
  },
  {
    question: "What if I need something the plans do not cover?",
    answer:
      "Tell us. Alongside the plans we build custom AI: machine learning models that predict and detect, RAG assistants that answer from your own documents, private deployments and API integrations into your CRM, ERP or site. Custom work is scoped, priced and timed in a proposal before we start.",
  },
  {
    question: "How do we get started?",
    answer:
      "With a free consultation. We look at the workflow you want to change, map the data and the systems involved, and come back with a scoped proposal, a timeline and the criteria we will measure it against.",
  },
];

/**
 * The /faq page: the same answers, grouped so a visitor can find the one they
 * need. Sections are rendered in order, each with its own accordion.
 */
export const FAQ_SECTIONS = [
  {
    heading: "Plans & pricing",
    items: [
      {
        question: "What do the plans cost?",
        answer:
          "Every plan has a fixed price in PKR: Free at Rs 0, AI Starter at Rs 5,499, AI Growth at Rs 9,999 and AI Pro at Rs 17,999. Each card on the pricing page lists exactly what the plan includes — conversations, seats and integrations — so you can match a plan to your volume without a sales call.",
      },
      {
        question: "What is included in the Free plan?",
        answer:
          "The AiLogiQs inbox with contacts and templates, plus 25 AI conversations to test the agent on a real workflow. It is enough to see how the agent answers in your tone, and to decide whether a paid plan is worth it.",
      },
      {
        question: "What is the difference between AI Starter and AI Growth?",
        answer:
          "AI Starter is your first agent: order taking and 300 AI conversations. AI Growth adds the follow-through a store needs — COD confirmation, automated follow-ups and a Shopify integration — with 750 AI conversations.",
      },
      {
        question: "Can I move between plans as we grow?",
        answer:
          "Yes. Plans are sized to how much you use the agent, so tell us what changed and we will move you to the tier that fits rather than have you outgrow a plan.",
      },
      {
        question: "Do you offer a free trial or a free consultation?",
        answer:
          "Both. The Free plan is a 25-conversation trial with the inbox, contacts and templates, and the first conversation with us — the consultation where we scope your workflow — is free.",
      },
      {
        question: "What if I need something the plans do not cover?",
        answer:
          "Alongside the plans we build custom AI: machine learning models that predict and detect, RAG assistants that answer from your own documents, private deployments and API integrations into your CRM, ERP or site. Custom work is scoped, priced and timed in a proposal before we start.",
      },
    ],
  },
  {
    heading: "Services & delivery",
    items: [
      {
        question: "What can AiLogiQs build for my business?",
        answer:
          "AI agents that handle support and sales conversations around the clock, machine learning models that predict trends and spot fraud, and dashboards that turn raw data into decisions. Every build is tailored to your processes and connects to the tools you use now.",
      },
      {
        question: "Which platforms do your AI agents run on?",
        answer:
          "WhatsApp Business, Instagram and your own website are the channels we run most, and the same agent and the same business rules apply across all three. From there it can be wired into your store, your CRM or your ERP.",
      },
      {
        question: "Do you work with Shopify stores and cash on delivery?",
        answer:
          "Yes — that is what the middle of our plan range is built around. Order taking comes with AI Starter, and AI Growth adds COD confirmation, automated follow-ups and a Shopify integration, so the agent carries an order from the first message to the delivery follow-up.",
      },
      {
        question: "How do you work with us?",
        answer:
          "We scope the work first, then build it, then train it on your products, FAQs and data so it answers like your team. Once it is live we keep monitoring it and improving it, so the solution keeps working as your business changes.",
      },
      {
        question: "How long does a build take?",
        answer:
          "Every build is different, so we do not quote a number before we understand the scope. The consultation maps the workflow and the systems involved, and the proposal we come back with carries the timeline, the price and the criteria we will measure it against.",
      },
      {
        question: "What happens after the agent goes live?",
        answer:
          "We keep monitoring it and improving it. When your products, prices or policies change, the agent is updated so it keeps answering like your team — the same way we handle it for every client we build for.",
      },
    ],
  },
  {
    heading: "Data & support",
    items: [
      {
        question: "Is my data safe?",
        answer:
          "We use encryption, access controls and secure hosting to protect the data we handle, and we share it only with the providers needed to run the service — Meta for WhatsApp and Instagram, cloud hosting and the AI providers. We keep data only as long as it is needed to provide the service. The full detail is in our privacy policy.",
      },
      {
        question: "Can our data be deleted?",
        answer:
          "Yes. You or your customers can ask us to delete the data we hold by emailing bd@ailogiqs.org, and we action deletion requests as they come in.",
      },
      {
        question: "What support do I get?",
        answer:
          "Every plan comes with our team behind the contact form and bd@ailogiqs.org. AI Pro includes priority support, and on custom builds the team that built your agent keeps monitoring it after launch.",
      },
      {
        question: "Where is AiLogiQs based?",
        answer:
          "Lahore — Office No. 302, Orchard Heights, Central Block, 4th Floor. We work with clients remotely, and the office is open Monday to Friday, 9 AM to 5 PM.",
      },
    ],
  },
];
