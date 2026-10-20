/**
 * Starter job openings for the careers section.
 *
 * These are seed records, not a hard-coded second source of truth: the public
 * site reads the `jobs` table, and the admin panel owns every row after this
 * file has been loaded once. The seed is opt-in (`node scripts/setup-db.mjs
 * --seed-jobs`) so running the schema migration never quietly publishes roles.
 *
 * Copy is deliberately specific to AiLogiQs' actual work -- AI agents, machine
 * learning, analytics and custom AI products -- rather than generic software
 * house filler.
 */

export const DEPARTMENT_SUGGESTIONS = [
  "Engineering",
  "AI & Data",
  "Product & Design",
  "Sales & Growth",
  "Marketing",
  "Operations",
];

export const JOBS = [
  {
    slug: "senior-ai-ml-engineer",
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    location: "Lahore, Pakistan",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "4+ years",
    salaryRange: "Competitive — based on experience",
    summary:
      "Own the models and agent systems behind the AI products we ship — from data pipelines and evaluation through to production deployment.",
    descriptionHtml: `<p>We are looking for a senior engineer who can take an AI idea from a notebook to a reliable production system. You will work directly with product and engineering, making the technical calls that decide whether an agent is useful in the real world or only in a demo.</p>
<h2>What you'll do</h2>
<ul>
  <li>Design and build LLM-powered agents, RAG pipelines and tool integrations for client and internal products.</li>
  <li>Build evaluation harnesses so model quality is measured, not guessed.</li>
  <li>Own model deployment, monitoring, latency and cost in production.</li>
  <li>Mentor engineers and help set the technical direction of the AI practice.</li>
</ul>
<h2>What we're looking for</h2>
<ul>
  <li>4+ years of software engineering experience, including hands-on work with machine learning or LLM systems.</li>
  <li>Strong Python and solid backend fundamentals (APIs, databases, queues, containers).</li>
  <li>Practical experience with at least one major model provider and with open-source models.</li>
  <li>You can explain trade-offs clearly and are comfortable talking directly to clients.</li>
</ul>
<h2>Nice to have</h2>
<ul>
  <li>Experience with TypeScript/Next.js and vector databases.</li>
  <li>Fine-tuning or post-training experience.</li>
  <li>Prior work in an agency, startup or product team shipping to real users.</li>
</ul>`,
    status: "open",
  },
  {
    slug: "full-stack-engineer-nextjs-node",
    title: "Full-Stack Engineer (Next.js / Node)",
    department: "Engineering",
    location: "Lahore, Pakistan",
    workMode: "Hybrid",
    employmentType: "Full-time",
    experienceLevel: "2+ years",
    salaryRange: "Competitive — based on experience",
    summary:
      "Build the product surfaces around our AI systems: fast Next.js interfaces, clean APIs, and integrations that make intelligent features feel effortless.",
    descriptionHtml: `<p>Our AI work only matters when people can actually use it. You will build the web applications, dashboards and integrations that sit around our models — with an emphasis on speed, clarity and pragmatic engineering.</p>
<h2>What you'll do</h2>
<ul>
  <li>Ship customer-facing products in Next.js and React, backed by Node.js APIs.</li>
  <li>Integrate AI services, third-party tools and client systems (CRM, ERP, WhatsApp, payments).</li>
  <li>Work with design and AI engineers to turn prototypes into dependable releases.</li>
  <li>Improve performance, accessibility and observability as the product grows.</li>
</ul>
<h2>What we're looking for</h2>
<ul>
  <li>2+ years building production web applications with React and Node.js.</li>
  <li>Strong JavaScript fundamentals and a good eye for component and API design.</li>
  <li>Experience with relational databases and authentication.</li>
  <li>Comfort reading unfamiliar code and taking ownership of a feature end to end.</li>
</ul>
<h2>Nice to have</h2>
<ul>
  <li>Next.js App Router, TypeScript and server-side rendering experience.</li>
  <li>Exposure to AI APIs, streaming responses or realtime features.</li>
  <li>Testing discipline and experience shipping on Vercel or similar platforms.</li>
</ul>`,
    status: "open",
  },
  {
    slug: "data-analyst-bi-engineer",
    title: "Data Analyst / BI Engineer",
    department: "AI & Data",
    location: "Lahore, Pakistan",
    workMode: "On-site",
    employmentType: "Full-time",
    experienceLevel: "2+ years",
    salaryRange: "Competitive — based on experience",
    summary:
      "Turn messy business data into dashboards and models leaders can act on — and help shape the analytics layer behind our AI products.",
    descriptionHtml: `<p>We work with companies that have plenty of data and very little clarity. You will be the person who cleans it, models it and turns it into a story a decision-maker can use.</p>
<h2>What you'll do</h2>
<ul>
  <li>Profile, clean and model data from client systems into reliable analytics tables.</li>
  <li>Build clear Power BI or Tableau dashboards, not wall-to-wall charts.</li>
  <li>Run exploratory analysis and build forecasts that answer real business questions.</li>
  <li>Work with our AI engineers to make curated data available to agents and models.</li>
</ul>
<h2>What we're looking for</h2>
<ul>
  <li>2+ years in analytics, BI or a closely related role.</li>
  <li>Strong SQL and practical experience with a BI tool (Power BI preferred).</li>
  <li>Python or R for analysis and a solid grasp of statistics fundamentals.</li>
  <li>The ability to explain findings to non-technical stakeholders without hiding uncertainty.</li>
</ul>
<h2>Nice to have</h2>
<ul>
  <li>Experience with dbt, modern data warehouses or pipeline orchestration.</li>
  <li>Machine learning or forecasting experience.</li>
  <li>Client-facing delivery experience in a services environment.</li>
</ul>`,
    status: "open",
  },
  {
    slug: "ai-product-designer",
    title: "AI Product Designer",
    department: "Product & Design",
    location: "Remote",
    workMode: "Remote",
    employmentType: "Full-time",
    experienceLevel: "3+ years",
    salaryRange: "Competitive — based on experience",
    summary:
      "Shape AI products that feel simple, human and trustworthy — from early flows and prototypes to polished production interfaces.",
    descriptionHtml: `<p>AI interfaces are not ordinary forms. They need to set expectations, show what the system is doing and make failure recoverable. You will design those experiences alongside the engineers building them.</p>
<h2>What you'll do</h2>
<ul>
  <li>Own product design from discovery through flows, wireframes, prototypes and visual polish.</li>
  <li>Design conversational, agentic and data-heavy interfaces that stay clear under pressure.</li>
  <li>Work inside a lightweight design system and contribute improvements back to it.</li>
  <li>Prototype with AI tools where they make the work faster — and judge where they do not.</li>
</ul>
<h2>What we're looking for</h2>
<ul>
  <li>A strong portfolio of shipped product work, ideally including complex or data-heavy tools.</li>
  <li>Fluency in Figma and a thoughtful approach to interaction and content design.</li>
  <li>Comfort working directly with engineers and giving/receiving candid feedback.</li>
  <li>Curiosity about AI systems and their limitations.</li>
</ul>
<h2>Nice to have</h2>
<ul>
  <li>Experience designing conversational interfaces or AI-assisted workflows.</li>
  <li>Front-end literacy (HTML/CSS/React) enough to prototype in code.</li>
  <li>Design system or brand work.</li>
</ul>`,
    status: "open",
  },
  {
    slug: "business-development-executive-ai-solutions",
    title: "Business Development Executive — AI Solutions",
    department: "Sales & Growth",
    location: "Lahore, Pakistan",
    workMode: "On-site",
    employmentType: "Full-time",
    experienceLevel: "1+ year",
    salaryRange: "Base + performance bonus",
    summary:
      "Help businesses see what AI can actually do for them — and turn those conversations into well-scoped, buildable projects.",
    descriptionHtml: `<p>Our best projects start with a real business problem, not a technology pitch. You will find those problems, build trust with the people who own them and work with our team to shape a sensible proposal.</p>
<h2>What you'll do</h2>
<ul>
  <li>Build and work a pipeline of companies that could benefit from AI, analytics or automation.</li>
  <li>Run discovery calls, qualify opportunities and translate needs into a clear project brief.</li>
  <li>Work with engineering to scope solutions, estimate effort and prepare proposals.</li>
  <li>Represent AiLogiQs at events and build long-term referral relationships.</li>
</ul>
<h2>What we're looking for</h2>
<ul>
  <li>1+ year selling technical or professional services, ideally to mid-market or enterprise clients.</li>
  <li>Excellent written and spoken communication in English and Urdu.</li>
  <li>Enough technical curiosity to understand what our engineers build and why.</li>
  <li>A consultative approach: listening first, pitching second.</li>
</ul>
<h2>Nice to have</h2>
<ul>
  <li>Experience selling software, data or AI services.</li>
  <li>An existing network in Pakistan's technology or enterprise ecosystem.</li>
  <li>CRM discipline and experience owning a revenue target.</li>
</ul>`,
    status: "open",
  },
  {
    slug: "ai-engineering-intern",
    title: "AI Engineering Intern",
    department: "Engineering",
    location: "Lahore, Pakistan",
    workMode: "On-site",
    employmentType: "Internship",
    experienceLevel: "Final-year student",
    salaryRange: "Paid internship",
    summary:
      "Join a real product team for a paid internship, ship code that reaches users, and learn how AI systems are built and evaluated.",
    descriptionHtml: `<p>We want interns who are curious, practical and willing to ask questions. You will work on real product work with a senior engineer as your mentor, not on a disconnected practice project.</p>
<h2>What you'll do</h2>
<ul>
  <li>Contribute to real application features under review and mentorship.</li>
  <li>Build small AI experiments and help evaluate their quality.</li>
  <li>Write code, tests and documentation alongside the engineering team.</li>
  <li>Present what you built and what you learned at the end of the internship.</li>
</ul>
<h2>What we're looking for</h2>
<ul>
  <li>Final-year computer science, software engineering or a related degree.</li>
  <li>Working knowledge of JavaScript or Python and basic web fundamentals.</li>
  <li>At least one project you can walk us through — coursework counts.</li>
  <li>Availability for 6–12 weeks on-site in Lahore.</li>
</ul>
<h2>Nice to have</h2>
<ul>
  <li>Experience with React, Node.js or a database.</li>
  <li>Experiments with an LLM API, a model or a small automation.</li>
  <li>Open-source contributions or a personal project you have shipped.</li>
</ul>`,
    status: "open",
  },
];
