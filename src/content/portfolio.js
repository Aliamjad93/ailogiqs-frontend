/**
 * Selected AI engineering projects — content for /portfolio.
 *
 * The copy is kept as plain data so the page stays a layout. Each project is
 * rendered as one long-form case study (overview, features, contribution,
 * stack, then screens), all on the same page, in the order below.
 */

export const PROJECTS = [
  {
    id: "chadbot",
    index: "01",
    name: "ChadBot",
    category: "AI Fitness Coach",
    cardImage: "/assets/img/projects/chadbot-mockup.png",
    cardAlt: "ChadBot fitness coach app — personalized workout planning and daily activity coaching.",
    summary:
      "An adaptive AI fitness assistant for personalized workout planning and daily activity management.",
    overview: [
      "ChadBot is an AI-powered fitness trainer designed to help users organize their workouts and stay consistent with their fitness routines. It provides personalized daily workout plans and activity recommendations, while allowing users to adjust the assistant’s behavior to better suit their preferences.",
    ],
    features: [
      {
        title: "Personalized workout planning",
        body: "Generates daily workout plans and activity recommendations tailored to the user’s needs.",
      },
      {
        title: "Customizable AI behavior",
        body: "Allows users to adjust how the fitness assistant responds and guides them.",
      },
      {
        title: "Daily activity guidance",
        body: "Helps users structure their exercise routines and follow their planned activities.",
      },
      {
        title: "Google Calendar integration",
        body: "Connects workout planning with Google Calendar to log and organize scheduled activities.",
      },
    ],
    contributionLabel: "My contribution",
    contribution:
      "Contributed to the development of an AI fitness assistant, focusing on customizable conversational behavior, workout planning, and integration with Google Calendar. My work involved building AI-powered functionality and supporting the application’s backend and user-facing experience.",
    focus: "Adaptive AI coaching",
    stack: [
      "Python",
      "FastAPI",
      "OpenAI GPT-4o",
      "LangChain",
      "LangGraph",
      "React.js",
    ],
    images: [
      {
        src: "/assets/img/projects/chadbot-profile.jpeg",
        width: 1600,
        height: 863,
        alt: "ChadBot edit-profile screen showing fitness goal, coaching style, workout days, intensity and habits.",
        caption: "Profile & coaching preferences",
      },
      {
        src: "/assets/img/projects/chadbot-chat.jpeg",
        width: 1600,
        height: 1098,
        alt: "ChadBot chat screen with the assistant’s welcome message and message composer.",
        caption: "Conversational coaching",
      },
    ],
  },
  {
    id: "shopagent",
    index: "02",
    name: "ShopAgent CRM",
    category: "Multi-Agent AI Sales & Customer Management",
    cardImage: "/assets/img/projects/shopagent-mockup.png",
    cardAlt: "ShopAgent CRM — multi-agent AI sales and customer management dashboard.",
    summary:
      "An AI-powered CRM that coordinates specialized agents across customer support, sales, order management, and fulfillment.",
    overview: [
      "ShopAgent CRM is an AI-driven customer and sales management platform designed to support the customer journey from initial inquiry through order placement and shipment tracking.",
      "Rather than relying on a single general-purpose chatbot, the platform uses specialized AI agents to handle different operational responsibilities. This approach helps organize customer interactions and automate workflows across sales and order management.",
    ],
    features: [
      {
        title: "AI-powered customer support",
        body: "Handles incoming customer queries and routes requests to the appropriate specialized agent.",
      },
      {
        title: "Sales and order management",
        body: "Supports customer interactions throughout the purchasing process, including order booking.",
      },
      {
        title: "Shipment tracking",
        body: "Uses a dedicated agent to assist with delivery and shipment-related inquiries.",
      },
      {
        title: "Specialized agent coordination",
        body: "Separates responsibilities such as CRM operations, sales, order processing, finance, shipping, and customer notifications.",
      },
      {
        title: "Lead re-engagement",
        body: "Supports follow-up alerts for visitors who leave the website without completing a purchase, helping sales teams identify potential leads for outreach.",
      },
      {
        title: "Workflow automation",
        body: "Coordinates tasks across multiple agents to reduce the need for manual handling of routine customer and sales operations.",
      },
    ],
    contributionLabel: "Our contribution",
    contribution:
      "Contributed to the development of the multi-agent CRM, including AI-driven customer query handling, sales and order workflows, and specialized agent functionality. My work focused on implementing AI capabilities and connecting backend services with the application’s customer-facing interface.",
    focus: "Multi-agent sales & CRM",
    stack: [
      "Python",
      "FastAPI",
      "OpenAI GPT-4o",
      "LangChain",
      "LangGraph",
      "Redis",
      "Celery",
      "Docker",
      "React.js",
    ],
    images: [
      {
        src: "/assets/img/projects/shopagent-home.jpeg",
        width: 1600,
        height: 785,
        alt: "ShopAgent storefront hero with a product card and an AI agent monitoring the order.",
        caption: "Storefront & AI-assisted shopping",
      },
      {
        src: "/assets/img/projects/shopagent-products.jpeg",
        width: 1600,
        height: 789,
        alt: "ShopAgent product catalogue with price filters, sorting and product cards.",
        caption: "Product catalogue",
      },
      {
        src: "/assets/img/projects/shopagent-login.jpeg",
        width: 1600,
        height: 784,
        alt: "ShopAgent sign-in screen with the nine-agent network diagram.",
        caption: "Agent-aware sign in",
      },
      {
        src: "/assets/img/projects/shopagent-command-center.jpeg",
        width: 1600,
        height: 786,
        alt: "ShopAgent Agent Command Center showing a live orchestration feed and agent roster.",
        caption: "Agent Command Center",
      },
      {
        src: "/assets/img/projects/shopagent-dashboard.jpeg",
        width: 1600,
        height: 790,
        alt: "ShopAgent CRM dashboard with revenue, orders, customers, tickets and live agent activity.",
        caption: "Operations dashboard",
      },
    ],
  },
];

export const ENGINEERING_FOCUS = {
  copy: "These projects demonstrate my experience building AI-powered applications beyond basic chat interfaces, including customizable assistants, multi-agent workflows, backend API development, integrations, and automation of business processes.",
  pillars: [
    {
      title: "Customizable assistants",
      body: "Assistants whose behaviour, tone and guidance can be shaped around each user.",
    },
    {
      title: "Multi-agent workflows",
      body: "Specialized agents coordinating support, sales, orders, finance, shipping and notifications.",
    },
    {
      title: "Backend APIs & integrations",
      body: "Production services, calendar connections and the glue between AI and existing systems.",
    },
    {
      title: "Process automation",
      body: "Workflows that take routine customer and sales operations off the team.",
    },
  ],
  note: "Project descriptions reflect the functionality and technologies identified for these projects.",
};
