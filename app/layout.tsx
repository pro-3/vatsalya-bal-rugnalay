import type { Metadata } from "next";
import { Fraunces, Work_Sans, Noto_Serif_Devanagari, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400", "500", "600"], style: ["normal", "italic"], display: "swap" });
const workSans = Work_Sans({ subsets: ["latin"], variable: "--font-worksans", weight: ["400", "500", "600"], display: "swap" });
const notoSerifMr = Noto_Serif_Devanagari({ subsets: ["devanagari"], variable: "--font-noto-serif-mr", weight: ["500", "600"], display: "swap" });
const notoSansMr = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-noto-sans-mr", weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  title: "Vatsalya Bal Rugnalay | Pediatric Care in Karanja, Washim",
  description: "Vatsalya Bal Rugnalay provides pediatric care, child wellness, vaccination, critical-care support and skin-care services in Karanja, Washim, Maharashtra.",
  openGraph: { title: "Vatsalya Bal Rugnalay", description: "Pediatric care in Karanja, Washim, Maharashtra.", type: "website", locale: "en_IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${fraunces.variable} ${workSans.variable} ${notoSerifMr.variable} ${notoSansMr.variable} bg-canvas font-body text-ink antialiased`}>{children}</body></html>;
}
