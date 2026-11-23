import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import SiteChrome from "@/components/SiteChrome";
import { breadcrumbSchema, pageMetadata, personSchema } from "@/lib/seo";
import { hospital } from "@/lib/content";

export const metadata: Metadata = pageMetadata({ title: "Dr. Nilesh Chavhan", description: "Dr. Nilesh Chavhan, MBBS, MD, Child Specialist at Vatsalya Bal Rugnalay in Karanja Lad, Washim.", path: "/doctors/dr-nilesh-chavhan" });

export default function DrNileshPage() {
  return <SiteChrome><JsonLd data={personSchema("Dr. Nilesh Chavhan", "Child Specialist at Vatsalya Bal Rugnalay in Karanja Lad.", "/doctors/dr-nilesh-chavhan", "MBBS, MD")} /><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Doctors", path: "/#doctors" }, { name: "Dr. Nilesh Chavhan", path: "/doctors/dr-nilesh-chavhan" }])} /><Breadcrumbs current="Dr. Nilesh Chavhan" /><PageHero eyebrow="Doctor profile" title="Dr. Nilesh Chavhan" marathi="डॉ. निलेश चव्हाण" intro="Dr. Nilesh Chavhan is the Child Specialist at Vatsalya Bal Rugnalay in Karanja Lad." /><section className="bg-canvasWarm py-16 lg:py-24"><div className="mx-auto max-w-content px-5 lg:px-10"><div className="max-w-2xl rounded-card bg-cream p-8 shadow-card"><h2 className="font-display text-3xl text-primary">Verified professional information</h2><dl className="mt-7 space-y-4 font-body text-ink/75"><div><dt className="text-sm font-medium text-warm">Qualification</dt><dd>MBBS, MD</dd></div><div><dt className="text-sm font-medium text-warm">Role</dt><dd>Child Specialist</dd></div><div><dt className="text-sm font-medium text-warm">Location</dt><dd>Vatsalya Bal Rugnalay, Karanja Lad, Washim</dd></div></dl><a href={hospital.phoneHref} className="mt-8 inline-block rounded-pill bg-primary px-6 py-3 font-body text-sm text-cream">Call the hospital</a></div></div></section></SiteChrome>;
}
