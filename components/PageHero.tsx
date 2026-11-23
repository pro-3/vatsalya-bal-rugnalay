import Link from "next/link";
import { hospital } from "@/lib/content";

export default function PageHero({ eyebrow, title, marathi, intro }: { eyebrow: string; title: string; marathi: string; intro: string }) {
  return <section className="mx-auto max-w-content px-5 pb-16 pt-12 lg:px-10 lg:pb-24 lg:pt-16"><div className="max-w-3xl"><p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-warm">{eyebrow}</p><h1 className="mt-5 font-display text-[2.7rem] leading-[1.04] text-primary sm:text-5xl">{title}</h1><p className="mr-display mt-3 text-lg text-warm">{marathi}</p><p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-ink/75">{intro}</p><div className="mt-8 flex flex-wrap gap-3"><a href={hospital.phoneHref} className="rounded-pill bg-primary px-6 py-3 font-body text-sm text-cream">Call Now</a><Link href="/contact" className="rounded-pill border border-primary/25 px-6 py-3 font-body text-sm text-primary hover:bg-primary hover:text-cream">Contact & directions</Link></div></div></section>;
}
