import AdminStyles from "@/components/admin/AdminStyles";

/**
 * Admin layout. Deliberately its own route group with no (site) parent, so the
 * admin never inherits the public header, footer, preloader, cursor or
 * jQuery/theme runtime -- none of which belong on an internal page, and all of
 * which would fight the editor.
 */
export const metadata = {
  title: "Admin",
  // The panel must never appear in search results.
  robots: { index: false, follow: false, nocache: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function AdminLayout({ children }) {
  return (
    <div className="admin-shell">
      <AdminStyles />
      {children}
    </div>
  );
}