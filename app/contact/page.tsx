import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import JsonLd from "@/components/JsonLd";
import SiteChrome from "@/components/SiteChrome";
import { breadcrumbSchema, hospitalSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ title: "Contact & Directions", description: "Call, WhatsApp, or find directions to Vatsalya Bal Rugnalay in Gayatri Nagar, behind Mahesh Bhavan, Shivaji Nagar, Karanja Lad.", path: "/contact" });

export default function ContactPage() { return <SiteChrome><JsonLd data={hospitalSchema()} /><JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} /><Breadcrumbs current="Contact & directions" /><Contact /></SiteChrome>; }
