import Header from "./Header";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return <><Header /><main className="pb-20 lg:pb-0">{children}</main><Footer /><StickyMobileCTA /></>;
}
