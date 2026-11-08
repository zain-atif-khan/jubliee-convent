import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { RESOURCE_ARTICLES, SITE_METADATA } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Educational Resources & Articles for Families",
  description:
    "Explore thoughtful educational articles and practical guidance for parents on selecting schools, supporting study routines, and understanding modern curricula.",
};

export default function ResourcesIndexPage() {
  const resourcesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "JUBLIE School Educational Resources",
    description:
      "A curated collection of practical articles and guides for parents regarding schooling, study habits, and curriculum choices.",
    url: `${SITE_METADATA.url}/resources/`,
  };

  return (
    <>
      <JsonLd data={resourcesSchema} />

      {/* Hero */}
      <PageHero
        title="Educational Resources for Parents"
        description="Carefully researched articles providing practical insights on school selection, child development, and healthy learning routines."
        theme="cream"
      />

      {/* Articles Listing */}
      <Section background="cream" spacing="generous">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-4">
              Featured Parent Guides & Articles
            </h2>
            <p className="text-base sm:text-lg text-[#4A4340] leading-relaxed">
              We publish substantive, informative guides designed to support families in navigating foundational educational decisions.
            </p>
          </div>

          <div className="space-y-12">
            {RESOURCE_ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="pt-2 pb-12 border-b border-[#D9C8B5]/80 group"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#685F58] mb-3">
                  <span className="font-semibold text-[#4A3028]">
                    {article.category}
                  </span>
                  <span>•</span>
                  <span>{article.readingTime}</span>
                  <span>•</span>
                  <span>{article.publishedDate}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171416] group-hover:text-[#4A3028] transition-colors leading-tight mb-4">
                  <Link href={`/resources/${article.slug}/`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-base sm:text-lg text-[#4A4340] leading-relaxed mb-6 max-w-3xl">
                  {article.description}
                </p>

                <div>
                  <Link
                    href={`/resources/${article.slug}/`}
                    className="inline-block text-base font-medium text-[#4A3028] hover:underline"
                  >
                    Read Complete Article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
