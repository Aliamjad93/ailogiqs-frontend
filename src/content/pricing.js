/**
 * The plans AiLogiQs sells — ONE copy.
 *
 * Imported by the homepage pricing section and by /pricing, so the section a
 * visitor scrolls past and the page they land on can never drift apart. The
 * two used to be written separately: the homepage listed the real plans while
 * /pricing still showed the template's $25/$29/$49/$54 cards.
 *
 * Prices are fixed, so there is no annual/monthly toggle any more. `blurb` is
 * the one line under the plan name — keep it short, it sits between the title
 * and the price.
 *
 * Every CTA points at /contact: there is no self-serve checkout, so "choose a
 * plan" has to become a conversation.
 */
export const PLANS = [
  {
    name: "Free",
    blurb: "For trying things out",
    price: "Rs 0",
    features: ["Team inbox", "Contacts", "Templates", "25 AI trial chats"],
    cta: "Get started",
  },
  {
    name: "AI Starter",
    blurb: "For your first AI agent",
    price: "Rs 5,499",
    features: ["AI agent", "300 AI conversations", "Order taking"],
    cta: "Get started",
  },
  {
    name: "AI Growth",
    blurb: "For growing stores",
    price: "Rs 9,999",
    features: [
      "COD confirmation",
      "Follow-ups",
      "Shopify",
      "750 AI conversations",
    ],
    cta: "Get started",
  },
  {
    name: "AI Pro",
    blurb: "For teams at volume",
    price: "Rs 17,999",
    features: ["5 seats", "2,000 AI conversations", "Priority support"],
    cta: "Get started",
  },
];

/** The single line under the cards, on the homepage and on /pricing. */
export const PRICING_NOTE = "All prices in PKR.";

/**
 * What the agent does on every plan.
 *
 * Not entitlements — the plans differ in volume, seats and integrations. The
 * agent itself is the same build on every tier, so this is the list of things
 * a customer gets from day one regardless of which plan they pick.
 */
export const PLAN_INCLUDES = [
  "An agent trained on your products, FAQs and order data",
  "WhatsApp, Instagram and web chat, so customers reach you where they already are",
  "Support, sales and order conversations answered around the clock",
  "A view of what the agent handled, so you can see the numbers",
  "Monitoring and improvements after launch",
];
