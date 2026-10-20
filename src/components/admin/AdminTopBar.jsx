import { signOut } from "@/app/admin/actions";
import AdminSectionTabs from "@/components/admin/AdminSectionTabs";

/**
 * Shared admin top bar: brand, section tabs, view-site, sign-out.
 *
 * The bar used to carry Dashboard / All posts / New post links, which only
 * described the blog half of the panel and are now redundant: the sections
 * live in AdminSectionTabs, and "New post" is a page-level action on the blogs
 * screens where it belongs. What is left is what every screen needs.
 *
 * Section links render inside the bar rather than as a separate strip so the
 * panel reads as three tabs under one roof. `active` is passed to the section
 * tabs so /admin paths that are not the dashboard still highlight the right
 * section; the tabs themselves own the links.
 *
 * `viewSiteHref` lets a screen point "View site" at the part of the public site
 * it actually edits. The blog remains the default for compatibility.
 */
export default function AdminTopBar({ active = "", viewSiteHref = "/blog" }) {
  return (
    <header className="admin-topbar">
      <h1>AiLogiQs Admin</h1>
      <AdminSectionTabs active={active} />
      <nav className="admin-topbar-end">
        <a
          className="admin-btn admin-btn-small"
          href={viewSiteHref}
          target="_blank"
          rel="noopener"
        >
          View site
        </a>
        {/* signOut is a server action, so the form must post through it rather
            than to a URL. */}
        <form action={signOut}>
          <button className="admin-btn admin-btn-small" type="submit">
            Sign out
          </button>
        </form>
      </nav>
    </header>
  );
}
