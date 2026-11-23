import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";

export default function NotFound() { return <SiteChrome><section className="mx-auto max-w-content px-5 py-40 text-center lg:px-10"><p className="font-body text-sm uppercase tracking-[0.2em] text-warm">404</p><h1 className="mt-4 font-display text-5xl text-primary">This page could not be found.</h1><p className="mx-auto mt-5 max-w-lg font-body text-ink/70">Please return to the Vatsalya Bal Rugnalay homepage or contact the hospital for help.</p><Link href="/" className="mt-8 inline-block rounded-pill bg-primary px-6 py-3 font-body text-sm text-cream">Go to homepage</Link></section></SiteChrome>; }
