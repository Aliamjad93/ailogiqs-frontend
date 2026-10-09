import NotFoundContent from "@/components/shared/NotFoundContent";

export const metadata = {
  title: "404",
  robots: { index: false, follow: false },
};

/**
 * The /404 path itself, linked from the nav menu. Header and footer come from
 * the (main) route group layout, so only the body is rendered here.
 */
export default function NotFoundPage() {
  return <NotFoundContent />;
}
