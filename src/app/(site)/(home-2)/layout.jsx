import SiteHeader from "@/components/site-header/SiteHeader";
import Footer from "@/components/site-footer/Footer";

export default function HomeTwoLayout({ children }) {
  return (
    <>
      <SiteHeader variant="home2" />
      <div className="aiq-home">
        {children}
      </div>
      <Footer variant="home2" />
    </>
  );
}
