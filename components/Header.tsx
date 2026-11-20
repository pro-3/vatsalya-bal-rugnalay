"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { hospital, nav } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  const light = scrolled ? "text-primary" : "text-cream";
  return <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-canvas/95 shadow-[0_1px_0_0_rgba(23,59,87,.08)] backdrop-blur" : "bg-transparent"}`}>
    <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 lg:px-10">
      <a href="#home" className="flex items-center gap-3"><Image src="/images/vatsalya-logo-mark.png" alt="Vatsalya Bal Rugnalay logo" width={44} height={44} priority className="h-11 w-11 shrink-0 object-contain" /><span className="leading-tight"><span className={`block font-display text-lg ${light}`}>{hospital.name}</span><span className={`mr block text-[12px] ${scrolled ? "text-primary/70" : "text-cream/75"}`}>{hospital.nameMr}</span></span></a>
      <nav className="hidden items-center gap-7 lg:flex">{nav.map(item => <a key={item.href} href={item.href} className={`font-body text-[14px] transition-colors ${scrolled ? "text-ink/80 hover:text-primary" : "text-cream/90 hover:text-cream"}`}>{item.label}</a>)}</nav>
      <div className="hidden items-center gap-3 lg:flex"><a href={hospital.phoneHref} className={`rounded-pill border px-5 py-2.5 font-body text-[14px] transition-colors ${scrolled ? "border-primary/25 text-primary hover:bg-primary hover:text-cream" : "border-cream/60 text-cream hover:bg-cream hover:text-primary"}`}>Call Now</a><a href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" className="rounded-pill bg-warm px-5 py-2.5 font-body text-[14px] text-cream shadow-card transition-transform hover:-translate-y-0.5">WhatsApp</a></div>
      <div className="flex items-center gap-2 lg:hidden"><a href={hospital.phoneHref} aria-label="Call Now" className={`flex h-11 w-11 items-center justify-center rounded-full border ${scrolled ? "border-primary/25 text-primary" : "border-cream/60 text-cream"}`}>☎</a><button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className={`flex h-11 w-11 items-center justify-center rounded-full border ${scrolled ? "border-primary/25 text-primary" : "border-cream/60 text-cream"}`}>{open ? "×" : "☰"}</button></div>
    </div>
    {open && <div className="border-t border-primary/10 bg-canvas px-5 pb-6 pt-2 lg:hidden"><nav className="flex flex-col">{nav.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-primary/10 py-3.5 font-body text-[16px] text-ink/85">{item.label}</a>)}</nav><a href={hospital.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-4 block rounded-pill bg-warm px-5 py-3 text-center font-body text-[15px] text-cream">WhatsApp</a></div>}
  </header>;
}
