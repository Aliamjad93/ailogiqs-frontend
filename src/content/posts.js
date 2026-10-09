/**
 * Blog content: categories, tags and the seed articles.
 *
 * This file is the fallback source of truth used when no Turso connection is
 * configured (see src/lib/db.js). Once TURSO_DATABASE_URL is set, the database
 * becomes authoritative and this content is only used to seed an empty table
 * (scripts/seed-db.mjs).
 *
 * Categories mirror AiLogiQs' own service lines -- AI agents, machine learning,
 * data analytics, automation, infrastructure and AI design -- rather than the
 * template's placeholder names ("Creative Art", "Mixed Media", ...), which had
 * nothing to do with an AI agency. Each article declares a `categorySlug`, so
 * adding a category here is all that is needed to make it appear in the sidebar.
 */

export const CATEGORIES = [
  {
    slug: "ai-agents",
    name: "AI Agents",
    description:
      "Building autonomous agents that handle support, qualify leads and run workflows without a human in the loop.",
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    description:
      "Custom models for prediction, classification and recommendation, trained on your data and deployed into your product.",
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    description:
      "Turning raw business data into dashboards and forecasts you can actually make decisions from.",
  },
  {
    slug: "automation",
    name: "Automation",
    description:
      "Removing manual work from marketing, operations and internal processes with AI-assisted pipelines.",
  },
  {
    slug: "infrastructure",
    name: "Infrastructure",
    description:
      "Storage, retrieval and deployment decisions -- the parts of an AI product that rarely get a demo but decide whether it scales.",
  },
  {
    slug: "ai-design",
    name: "AI Design",
    description:
      "Where generative tooling fits into a design workflow, and where human judgement still decides the outcome.",
  },
];

export const TAGS = [
  "agents",
  "llm",
  "automation",
  "analytics",
  "design",
  "privacy",
  "infrastructure",
];

/**
 * Seed articles. Each maps 1:1 to a row in the Turso `posts` table.
 *
 * bodyHtml is what TipTap emits via editor.getHTML() and what the article
 * renderer displays, so admin-authored posts and these seeds share one shape.
 */
export const POSTS = [
  {
    slug: "how-ai-agents-actually-save-support-cost",
    title: "How AI agents actually save support costs",
    excerpt:
      "Most support automation demos fall short because they stop at deflection. Here is where the real savings come from, and how to tell a pilot worth keeping from one that will not last.",
    image: "/assets/img/news/04.jpg",
    categorySlug: "ai-agents",
    author: "Marcus",
    publishedAt: "2026-01-14",
    readingMinutes: 7,
    featured: true,
    tags: ["agents", "llm", "automation"],
    seoTitle: "How AI Agents Reduce Support Costs | AiLogiQs",
    seoDescription:
      "Where AI agent support automation actually saves money, which metrics to track, and the failure modes that cause pilots to stall.",
    bodyHtml: `
      <p>Support automation has a credibility problem, and most of it is earned. Anyone can ship a bot that deflects the easy tickets. The demos look good precisely because they are measured against the easiest possible denominator.</p>
      <p>The teams getting durable savings are not deflecting more tickets. They are changing what the remaining tickets cost, and how many never get created.</p>
      <h2>Deflection is the least interesting metric</h2>
      <p>Deflection rate flatters an agent by counting every interaction where a human was not involved -- including the ones where the customer gave up and emailed support anyway. A rising deflection number alongside flat handle time is a warning, not a win.</p>
      <p>We prefer to track three things instead: the share of conversations resolved without escalation, the median time to a correct answer, and the number of repeat contacts from the same account in the following week.</p>
      <h2>Where the savings actually come from</h2>
      <p>Three sources show up consistently. First, pre-authentication work: an agent that can check order status, reset a device or pull an invoice resolves the majority of "where is my order" contacts without a queue.</p>
      <p>Second, routing. Classifying intent correctly on the first pass removes the internal transfer, which is where a surprising amount of handle time hides. Third, summarisation -- an agent that writes the case note means the human who eventually picks it up starts with context already attached.</p>
      <h2>Why pilots stall</h2>
      <p>Almost always the same three reasons. The agent was trained on documentation that nobody maintains. The escalation path was never designed, so every hard case became a silent failure. Or the agent was launched without anyone on the team owning its accuracy over time.</p>
      <p>The fix is unglamorous: pick a narrow intent, own the escalation path, and review a sample of transcripts weekly for the first quarter. An agent nobody audits degrades faster than one nobody built.</p>
    `,
  },
  {
    slug: "choosing-a-model-that-will-not-strand-you",
    title: "Choosing a model that will not strand you",
    excerpt:
      "Model selection is usually framed as a quality question. It is more usefully a portability question -- what happens to your product when the model you chose is repriced or deprecated.",
    image: "/assets/img/news/05.jpg",
    categorySlug: "machine-learning",
    author: "Marcus",
    publishedAt: "2026-01-08",
    readingMinutes: 6,
    featured: true,
    tags: ["llm", "infrastructure"],
    seoTitle: "Choosing an LLM That Won't Strand Your Product | AiLogiQs",
    seoDescription:
      "A practical framework for model selection that accounts for repricing, deprecation and the cost of switching providers later.",
    bodyHtml: `
      <p>Teams pick a model by running an eval and picking the winner. That is a reasonable first step and a poor final one, because the eval only measures the model you already have.</p>
      <p>The question that matters is not "which model is best today" but "what does it cost to be wrong".</p>
      <h2>Price is a moving target</h2>
      <p>Input and output token prices have fallen repeatedly, but not uniformly, and not for the capabilities that tend to be load-bearing. A product whose unit economics depend on a specific price point has a problem that a spreadsheet does not surface.</p>
      <p>Model a rate change of two or three times in either direction before you commit. If the feature stops working at triple the price, that is a real constraint, not a theoretical one.</p>
      <h2>Deprecation is the bigger risk</h2>
      <p>Providers retire models. The usual lead time is generous, but structured outputs, tool calling and fine-tuned model identifiers are all tied to specific model versions, and those are the parts that break first.</p>
      <p>Keep an abstraction layer between your product and the provider. Not a large one -- just enough that swapping the model is a configuration change rather than a refactor.</p>
      <h2>Run the eval against candidates, not just the winner</h2>
      <p>Build the eval early enough that you can run it against every model you are considering, and again when prices or capabilities change. A team that has an eval can switch providers in a week. A team that does not starts from zero.</p>
      <p>Also test the failure modes you will actually see in production: malformed output, refused requests, and truncated context. Capability benchmarks rarely cover these, and they are what users hit.</p>
    `,
  },
  {
    slug: "designing-dashboards-people-actually-read",
    title: "Designing dashboards people actually read",
    excerpt:
      "A dashboard that nobody opens is a liability. The difference between one that gets used and one that does not is usually density, not polish.",
    image: "/assets/img/news/06.jpg",
    categorySlug: "data-analytics",
    author: "Marcus",
    publishedAt: "2025-12-19",
    readingMinutes: 5,
    featured: false,
    tags: ["analytics"],
    seoTitle: "Designing Dashboards People Actually Read | AiLogiQs",
    seoDescription:
      "Practical guidance on dashboard density, hierarchy and the metrics that decide whether an analytics view gets used daily.",
    bodyHtml: `
      <p>Most dashboards are built as a record of what the database contains, not as an answer to a question somebody has. That mismatch is why so many are opened once a month.</p>
      <h2>Start from the decision, not the data</h2>
      <p>Before choosing charts, write down the decision the dashboard is supposed to support. If the answer is "do we need to intervene today", the view needs a small number of exceptions, not a grid of trends.</p>
      <p>A useful test: if every number on the screen changed slightly and nobody would act differently, the screen has too much on it.</p>
      <h2>Density is a real constraint</h2>
      <p>Analysts often want everything visible. Users want to find one thing. The compromise that works in practice is a scannable summary with progressive disclosure -- headline figures and exceptions up front, detail one click away.</p>
      <p>Resist the temptation to add a global filter panel. Every filter is a decision, and most viewers will not touch any of them. Prefer sensible defaults and a small number of deliberate views.</p>
      <h2>Make the comparison automatic</h2>
      <p>Raw numbers rarely answer a question on their own. Showing a change against the previous period or against target costs little and removes the mental arithmetic that stops people trusting what they are looking at.</p>
      <p>Finally: be explicit about freshness. A timestamp that reads "updated 6 minutes ago" tells the viewer how much to trust the number, and it is the cheapest trust signal available.</p>
    `,
  },
  {
    slug: "the-content-layer-is-still-a-database-problem",
    title: "The content layer is still a database problem",
    excerpt:
      "Generative tooling gets the attention, but the storage and retrieval layer decides whether a content product can serve ten thousand users or ten million.",
    image: "/assets/img/news/07-storage.jpg",
    categorySlug: "infrastructure",
    author: "Marcus",
    publishedAt: "2025-12-11",
    readingMinutes: 8,
    featured: false,
    tags: ["infrastructure", "automation"],
    seoTitle: "Why the Content Layer Is Still a Database Problem | AiLogiQs",
    seoDescription:
      "How storage and retrieval decisions constrain content products, from editorial workflows and caching to recovery after a bad deploy.",
    bodyHtml: `
      <p>Nobody demos a storage layer. It is also the component that determines whether you can serve your tenth thousand user or your ten millionth, and whether recovering from a bad deploy is an incident or a footnote.</p>
      <h2>Write once, read many times</h2>
      <p>The shape of a content system follows from access patterns. Content that is written rarely and read constantly -- articles, docs, marketing pages -- wants a denormalised record with the rendered output stored alongside the source, not joined at read time.</p>
      <p>That single decision removes the most expensive query in most naive implementations, and it makes the read path a single lookup that any cache can serve.</p>
      <h2>Soft deletes are not a compromise</h2>
      <p>Marking a record with a timestamp costs one nullable column and buys you an undo. Cascading a hard delete to related rows costs you the ability to explain what happened afterwards.</p>
      <p>Filter deleted rows in every query, and put the condition in the index. A soft delete you forget to filter is worse than a hard delete, because the rows are still there being served.</p>
      <h2>Recovery is a product feature</h2>
      <p>Ask what restoring a single piece of content looks like, and how long it takes. If the answer involves a restore from backup, the recovery window is measured in hours and someone will be explaining that to a customer.</p>
      <p>A soft delete plus an audit column gives you a per-item restore in seconds. It is the cheapest reliability feature available in a content product, and almost nobody builds it first.</p>
    `,
  },
  {
    slug: "what-users-actually-agree-to-when-they-tick-the-box",
    title: "What users actually agree to when they tick the box",
    excerpt:
      "A consent checkbox is the weakest possible form of agreement. It asks for one binary decision about thousands of words and records no evidence that anything was read.",
    image: "/assets/img/news/08-analytics.jpg",
    categorySlug: "ai-design",
    author: "Marcus",
    publishedAt: "2025-12-04",
    readingMinutes: 6,
    featured: false,
    tags: ["privacy", "design"],
    seoTitle: "What Users Agree To When They Tick a Consent Box | AiLogiQs",
    seoDescription:
      "Why binary consent checkboxes fail as an agreement, and how data practices and interface design can make consent meaningful.",
    bodyHtml: `
      <p>A checkbox is the weakest possible form of consent. It asks for a single binary decision about a policy that may be thousands of words long, and it records no evidence that the user read any of it.</p>
      <h2>Separate the decisions</h2>
      <p>The most common failure is bundling. Analytics, marketing and product improvement get one control, so declining any of them means declining all three. People accept the bundle rather than navigate the alternatives.</p>
      <p>Splitting these into independent choices -- each off by default, each with a plain description of what it enables -- costs some conversion and produces agreement that means something.</p>
      <h2>Say what actually happens</h2>
      <p>The text beside the control should describe the data, not the policy. "Helps us improve search results" is a category. "Stores your recent searches and the pages you opened so we can rank results better" is information.</p>
      <p>If retention is limited or the data is deleted on request, say so in the control itself rather than three policy pages away. Detail people will not read can only hurt you if it exists.</p>
      <h2>Make withdrawal as easy as agreeing</h2>
      <p>This is the asymmetry that draws regulatory attention. Granting consent takes one click; revoking it should not require an email. If you give people a control at all, give them one that both turns it on and turns it off.</p>
      <h2>For AI products, be specific about inputs</h2>
      <p>Products built on language models have an obligation that older analytics did not: be clear about whether user input is used for training, and for how long. "We may improve our services using your data" is not adequate for content that may include private information.</p>
    `,
  },
];

/**
 * Byline for admin-published posts. Not an editable field: the panel has no
 * author input, so this is the single place it is defined.
 */
export const AUTHOR = "AiLogiQs";