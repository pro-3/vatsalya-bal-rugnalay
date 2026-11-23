import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SiteChrome from "@/components/SiteChrome";
import { breadcrumbSchema, pageMetadata, personSchema } from "@/lib/seo";
import { hospital } from "@/lib/content";

export const metadata: Metadata = pageMetadata({ title: "Dr. Nikita Chavhan | Skin Care & Cosmetology", description: "Dr. Nikita Chavhan (Pawar), BAMS (MUHS), General Physician & Cosmetologist at Vatsalya Bal Rugnalay in Karanja Lad.", path: "/doctors/dr-nikita-chavhan", image: "/images/skin-care.jpg" });

export default function DrNikitaPage() {
  return <SiteChrome><JsonLd data={personSchema("Dr. Nikita Chavhan (Pawar)", "General Physician & Cosmetologist at Vatsalya Bal Rugnalay in Karanja Lad.", "/doctors/dr-nikita-chavhan", "BAMS (MUHS)")} /><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Doctors", path: "/#doctors" }, { name: "Dr. Nikita Chavhan", path: "/doctors/dr-nikita-chavhan" }])} /><Breadcrumbs current="Dr. Nikita Chavhan" /><PageHero eyebrow="Doctor profile" title="Dr. Nikita Chavhan (Pawar)" marathi="डॉ. निकिता चव्हाण (पवार)" intro="Dr. Nikita Chavhan (Pawar) is General Physician & Cosmetologist at Vatsalya Bal Rugnalay in Karanja Lad." /><section className="bg-primary py-16 text-cream lg:py-24"><div className="mx-auto max-w-content px-5 lg:px-10"><div className="max-w-2xl rounded-card bg-cream/10 p-8"><h2 className="font-display text-3xl text-gold">Verified professional information</h2><dl className="mt-7 space-y-4 font-body text-cream/80"><div><dt className="text-sm font-medium text-gold">Qualification</dt><dd>BAMS (MUHS)</dd></div><div><dt className="text-sm font-medium text-gold">Role</dt><dd>General Physician & Cosmetologist</dd></div><div><dt className="text-sm font-medium text-gold">Location</dt><dd>Vatsalya Bal Rugnalay, Karanja Lad, Washim</dd></div></dl><a href={hospital.phoneHref} className="mt-8 inline-block rounded-pill bg-gold px-6 py-3 font-body text-sm text-primary">Call the hospital</a></div></div></section></SiteChrome>;
}
