import { MetadataRoute } from "next";
import { SITE_METADATA } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_METADATA.url;
  const now = new Date();

  const routes = [
    "",
    "/about/",
    "/academics/",
    "/admissions/",
    "/gallery/",
    "/faqs/",
    "/faqs/admissions/",
    "/faqs/academics/",
    "/faqs/general/",
    "/contact/",
    "/resources/",
    "/resources/choosing-the-right-school/",
    "/resources/supporting-children-learning-at-home/",
    "/resources/understanding-school-curriculum-options/",
    "/privacy-policy/",
    "/terms/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/admissions/" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/resources/") ? 0.7 : 0.8,
  }));
}
