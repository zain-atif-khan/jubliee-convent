import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { ALL_FAQS, SITE_METADATA } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "General FAQs | Campus Safety, Bus Transport & Operations",
  description:
    "Find answers regarding campus security, school bus routes, infirmary provisions, school hours, and parent communications at JUBLIE School.",
};

export default function GeneralFaqsPage() {
  const generalFaqs = ALL_FAQS.filter((f) => f.category === "general");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: generalFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero
        title="General School Operations & Information FAQs"
        description="Verified information regarding JUBLIE School location in Aghapura, Nampally, Hyderabad, establishment history (1997), school management, and office timings."
        theme="cream"
      >
        <Button href="/contact/" variant="primary">
          <span>Contact Campus Office</span>
        </Button>
        <Button href="/faqs/" variant="outline">
          <span>All FAQ Categories</span>
        </Button>
      </PageHero>

      <Section background="cream" spacing="generous">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/faqs/"
              className="text-sm font-medium text-[#4A3028] hover:underline inline-block"
            >
              Back to all questions overview
            </Link>
          </div>

          <h2 className="font-serif text-3xl text-[#171416] mb-6">
            School Location, History & Operational Enquiries
          </h2>

          <FaqAccordion items={generalFaqs} />

          <div className="mt-12 p-8 sm:p-10 bg-[#FAF6F0] border border-[#E2D5C3] rounded-3xl text-center shadow-sm">
            <h3 className="font-serif text-2xl text-[#171416] mb-3">
              Need to visit our administrative office?
            </h3>
            <p className="text-base text-[#4A4340] max-w-lg mx-auto mb-6">
              Our campus reception is open Monday through Saturday during designated hours.
            </p>
            <Button href="/contact/" variant="primary">
              <span>View Location & Hours</span>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
