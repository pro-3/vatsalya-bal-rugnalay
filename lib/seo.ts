import type { Metadata } from "next";

export const siteUrl = "https://vatsalyabalrugnalay.in";
export const mapUrl = "https://share.google/JRAc1H4l4kCQcPQkj";

type PageSeo = { title: string; description: string; path: string; image?: string };

export function pageMetadata({ title, description, path, image = "/images/herobg.jpg" }: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, type: "website", locale: "en_IN", images: [{ url: image, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function hospitalSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Vatsalya Bal Rugnalay",
    url: siteUrl,
    logo: `${siteUrl}/images/vatsalya-logo-mark.png`,
    image: `${siteUrl}/images/herobg.jpg`,
    telephone: "+91 91584 26955",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gayatri Nagar, behind Mahesh Bhavan, Shivaji Nagar",
      addressLocality: "Karanja Lad",
      addressRegion: "Maharashtra",
      postalCode: "444105",
      addressCountry: "IN",
    },
    sameAs: [mapUrl],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vatsalya Bal Rugnalay",
    alternateName: "वात्सल्य बाल रुग्णालय",
    url: `${siteUrl}/`,
  };
}

export function personSchema(name: string, description: string, path: string, credentials: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    description,
    url: `${siteUrl}${path}`,
    jobTitle: credentials,
    worksFor: { "@type": "Hospital", name: "Vatsalya Bal Rugnalay", url: siteUrl },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, item: `${siteUrl}${item.path}`,
    })),
  };
}
