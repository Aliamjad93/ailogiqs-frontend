import LegalPage from "@/components/legal/LegalPage";
import { TERMS_OF_SERVICE } from "@/content/legal";
import { absoluteUrl } from "@/lib/site.config";

const DESCRIPTION =
  "The terms that apply to AiLogiQs services: lawful business use, WhatsApp and Meta policies and customer opt-in, fees and billing, and account suspension.";

export const metadata = {
  title: "Terms of Service",
  description: DESCRIPTION,
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    type: "website",
    title: "Terms of Service | AiLogiQs",
    description: DESCRIPTION,
    url: absoluteUrl("/terms-of-service"),
  },
};

/**
 * /terms-of-service — the client's terms, verbatim, laid out as a document.
 * Copy lives in src/content/legal.js; the shell is shared with the policy.
 */
export default function TermsOfServicePage() {
  return <LegalPage page={TERMS_OF_SERVICE} />;
}
