import type { Metadata } from "next";
import { Fraunces, Work_Sans, Noto_Serif_Devanagari, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400", "500", "600"], style: ["normal", "italic"], display: "swap" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-worksans", weight: ["400", "500", "600"], display: "swap" });
const notoSerifMr = Noto_Serif_Devanagari({ subsets: ["devanagari"], variable: "--font-noto-serif-mr", weight: ["500", "600"], display: "swap" });
const notoSansMr = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto-sans-mr", weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://vatsalyabalrugnalay.in"),
  title: { default: "Vatsalya Bal Rugnalay | Child Care in Karanja Lad", template: "%s | Vatsalya Bal Rugnalay" },
  description: "Child-focused care and skin-care consultation in Karanja Lad, Washim, Maharashtra. Call Vatsalya Bal Rugnalay at +91 91584 26955.",
  applicationName: "Vatsalya Bal Rugnalay",
  alternates: { canonical: "/" },
  openGraph: { title: "Vatsalya Bal Rugnalay | Child Care in Karanja Lad", description: "Child-focused care and skin-care consultation in Karanja Lad, Washim.", type: "website", locale: "en_IN", url: "/", siteName: "Vatsalya Bal Rugnalay", images: [{ url: "/images/herobg.jpg", width: 1600, height: 900, alt: "Vatsalya Bal Rugnalay in Karanja Lad" }] },
  twitter: { card: "summary_large_image", title: "Vatsalya Bal Rugnalay | Child Care in Karanja Lad", description: "Child-focused care and skin-care consultation in Karanja Lad, Washim.", images: ["/images/herobg.jpg"] },
  icons: {
    icon: [
      {
        url: "/images/vatsalya-logo-mark.png",
        type: "image/png",
      },
    ],
    apple: "/images/vatsalya-logo-mark.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${fraunces.variable} ${workSans.variable} ${notoSerifMr.variable} ${notoSansMr.variable} bg-canvas font-body text-ink antialiased`}>{children}</body></html>;
}
