import SiteHeader from "@/components/site-header/SiteHeader";
import Footer from "@/components/site-footer/Footer";

export default function HomeOneLayout({ children }) {
  return (
    <>
      <SiteHeader variant="home1" />
      {children}
      <Footer />
    </>
  );
}
