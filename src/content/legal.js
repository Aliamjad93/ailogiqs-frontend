/**
 * Legal copy — /privacy-policy and /terms-of-service.
 *
 * ONE source. Both routes render through `LegalPage`, the footer links to the
 * same two paths, and the sitemap lists them from the same constants.
 *
 * The wording is the client's. What changed is the STRUCTURE: their copy
 * arrived as one paragraph per clause, and a wall of text is not a legal
 * document people read. Every sentence below is theirs, split into numbered
 * sections and bullets so it can be scanned. Do not paraphrase a clause to
 * make it read better — the meaning is the deliverable.
 *
 * Inline links are written `[label](href)` and turned into real anchors by
 * LegalPage, so the copy stays readable as plain text.
 */

/** Shared "Last updated" stamp. ISO form feeds the <time> element. */
export const LEGAL_UPDATED = {
  label: "20 October 2026",
  iso: "2026-10-20",
};

export const PRIVACY_POLICY = {
  slug: "/privacy-policy",
  title: "Privacy Policy",
  /* Split for the hero's two-line headline: sans lead, serif accent. */
  heroLead: "Privacy",
  heroAccent: "Policy",
  eyebrow: "Legal",
  icon: "shield",
  /*
    The client's own opening paragraph. It is the page's summary, so it sits in
    the hero rather than repeating it at the top of the document.
  */
  intro:
    "AiLogiQs (\u201cwe\u201d, \u201cus\u201d) provides AI agents and WhatsApp/Instagram automation for businesses. This policy explains what data we handle and why.",
  helpTitle: "Questions about this policy?",
  helpText:
    "Ask us about anything here, or request deletion of your data. We reply within one business day.",
  sections: [
    {
      id: "data-we-collect",
      number: "01",
      title: "Data we collect",
      blocks: [
        {
          type: "list",
          items: [
            {
              label: "Business account details",
              text: "name, email, phone and company information.",
            },
            {
              label: "Customer messages processed on behalf of our clients",
              text: "messages, voice notes, images, names and phone numbers received through the WhatsApp Business Platform and Instagram.",
            },
            {
              label: "Usage data",
              text: "logins, feature usage and technical logs.",
            },
          ],
        },
      ],
    },
    {
      id: "how-we-use-data",
      number: "02",
      title: "How we use data",
      blocks: [
        {
          type: "list",
          items: [
            {
              label: "To deliver our services",
              text: "replying to customers, taking orders and bookings, and showing conversations in our dashboard.",
            },
            {
              label: "To improve accuracy and reliability",
              text: "of our AI features.",
            },
            {
              label: "To provide support, billing and security",
            },
          ],
        },
      ],
    },
    {
      id: "ai-processing",
      number: "03",
      title: "AI processing",
      blocks: [
        {
          type: "p",
          text: "Messages may be processed by third-party AI providers (such as Google Gemini) only to generate replies for our clients. We do not sell personal data.",
        },
      ],
    },
    {
      id: "sharing",
      number: "04",
      title: "Sharing",
      blocks: [
        {
          type: "p",
          text: "We share data only with service providers needed to run the service (Meta for WhatsApp/Instagram, cloud hosting, AI providers), or when required by law.",
        },
      ],
    },
    {
      id: "data-retention-and-deletion",
      number: "05",
      title: "Data retention and deletion",
      blocks: [
        {
          type: "p",
          text: "We keep data only as long as needed to provide the service. Clients or their customers can request deletion by emailing [bd@ailogiqs.org](mailto:bd@ailogiqs.org).",
        },
      ],
    },
    {
      id: "security",
      number: "06",
      title: "Security",
      blocks: [
        {
          type: "p",
          text: "We use encryption, access controls and secure hosting to protect data.",
        },
      ],
    },
    {
      id: "contact",
      number: "07",
      title: "Contact",
      blocks: [{ type: "contact" }],
    },
  ],
};

export const TERMS_OF_SERVICE = {
  slug: "/terms-of-service",
  title: "Terms of Service",
  heroLead: "Terms of",
  heroAccent: "Service",
  eyebrow: "Legal",
  icon: "book",
  /*
    The client's opening — "By using AiLogiQs services, you agree to: …" — with
    the list of conditions moved out of the sentence and into the sections
    below, where each one can be read on its own.
  */
  intro:
    "These terms apply to every AiLogiQs service. By using our services, you agree to the conditions below.",
  helpTitle: "Questions about these terms?",
  helpText:
    "Happy to clarify anything before you sign up — one email is usually enough.",
  sections: [
    {
      id: "lawful-use",
      number: "01",
      title: "Lawful use",
      blocks: [
        {
          type: "p",
          text: "Use the service only for lawful business communication.",
        },
      ],
    },
    {
      id: "whatsapp-and-meta-policies",
      number: "02",
      title: "WhatsApp and Meta policies",
      blocks: [
        {
          type: "p",
          text: "Follow WhatsApp and Meta policies, including getting customer opt-in before sending marketing messages.",
        },
      ],
    },
    {
      id: "fees-and-billing",
      number: "03",
      title: "Fees and billing",
      blocks: [
        {
          type: "p",
          text: "Pay fees as agreed. Meta messaging charges are billed by Meta directly.",
        },
      ],
    },
    {
      id: "suspension",
      number: "04",
      title: "Suspension",
      blocks: [
        {
          type: "p",
          text: "We may suspend accounts that send spam or break these terms.",
        },
      ],
    },
    {
      id: "contact",
      number: "05",
      title: "Contact",
      blocks: [
        {
          type: "p",
          text: "Questions about these terms? Email [bd@ailogiqs.org](mailto:bd@ailogiqs.org).",
        },
      ],
    },
  ],
};

/** Both pages, for the sitemap and anything else that needs to enumerate them. */
export const LEGAL_PAGES = [PRIVACY_POLICY, TERMS_OF_SERVICE];
