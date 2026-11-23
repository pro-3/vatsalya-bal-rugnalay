import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/child-care-karanja-lad", "/skin-care-karanja-lad", "/doctors/dr-nilesh-chavhan", "/doctors/dr-nikita-chavhan", "/contact"].map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7 }));
}
