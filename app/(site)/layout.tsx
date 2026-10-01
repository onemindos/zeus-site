import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

// Site layout: wraps all public pages with Nav + Footer.
// Does NOT apply to /admin (which uses the (payload) route group).
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
