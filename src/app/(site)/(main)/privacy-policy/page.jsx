import LegalPage from "@/components/legal/LegalPage";
import { PRIVACY_POLICY } from "@/content/legal";
import { absoluteUrl } from "@/lib/site.config";

const DESCRIPTION =
  "How AiLogiQs collects, uses and protects data across its AI agents and WhatsApp and Instagram automation — including AI processing, sharing, retention and deletion.";

export const metadata = {
  title: "Privacy Policy",
  description: DESCRIPTION,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    title: "Privacy Policy | AiLogiQs",
    description: DESCRIPTION,
    url: absoluteUrl("/privacy-policy"),
  },
};

/**
 * /privacy-policy — the client's policy, verbatim, laid out as a document.
 * Copy lives in src/content/legal.js; the shell is shared with the terms page.
 */
export default function PrivacyPolicyPage() {
  return <LegalPage page={PRIVACY_POLICY} />;
}
