import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ALL_FAQS, SITE_METADATA } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | JUBLIE School",
  description:
    "Find direct, clear answers to common questions about JUBLIE School admissions, academic approach, campus safety, and daily student life.",
};

export default function FaqsPage() {
  const admissionsFaqs = ALL_FAQS.filter((f) => f.category === "admissions");
  const academicsFaqs = ALL_FAQS.filter((f) => f.category === "academics");
  const generalFaqs = ALL_FAQS.filter((f) => f.category === "general");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((faq) => ({
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

      {/* Hero */}
      <PageHero
        title="Frequently Asked Questions"
        description="Comprehensive, straightforward information regarding our admissions process, curriculum expectations, and school operations."
        theme="cream"
      />

      {/* Category Nav Links - Softly curved geometric elements */}
      <div className="bg-[#FAF6F0] border-b border-[#E2D5C3] py-4 sticky top-[73px] z-30">
        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="font-semibold text-[#171416] mr-1">Browse Categories:</span>
            <a
              href="#admissions"
              className="px-4 py-2 bg-white border border-[#D9C8B5] hover:border-[#4A3028] text-[#171416] hover:text-[#4A3028] rounded-md font-medium transition-colors shadow-2xs"
            >
              Admissions
            </a>
            <a
              href="#academics"
              className="px-4 py-2 bg-white border border-[#D9C8B5] hover:border-[#4A3028] text-[#171416] hover:text-[#4A3028] rounded-md font-medium transition-colors shadow-2xs"
            >
              Academics
            </a>
            <a
              href="#general"
              className="px-4 py-2 bg-white border border-[#D9C8B5] hover:border-[#4A3028] text-[#171416] hover:text-[#4A3028] rounded-md font-medium transition-colors shadow-2xs"
            >
              General Campus Operations
            </a>
          </div>
        </div>
      </div>

      {/* Category 1: Admissions */}
      <Section id="admissions" background="cream" spacing="generous">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E2D5C3]">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416]">
              Admissions & Enrollment Questions
            </h2>
            <Link
              href="/faqs/admissions/"
              className="text-sm font-medium text-[#4A3028] hover:underline inline-block"
            >
              View Dedicated Admissions Page
            </Link>
          </div>
          <FaqAccordion items={admissionsFaqs} />
        </div>
      </Section>

      {/* Category 2: Academics */}
      <Section id="academics" background="surface-cream" spacing="generous">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E2D5C3]">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416]">
              Academics & Teaching Questions
            </h2>
            <Link
              href="/faqs/academics/"
              className="text-sm font-medium text-[#4A3028] hover:underline inline-block"
            >
              View Dedicated Academics Page
            </Link>
          </div>
          <FaqAccordion items={academicsFaqs} />
        </div>
      </Section>

      {/* Category 3: General Information */}
      <Section id="general" background="cream" spacing="generous">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E2D5C3]">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416]">
              General Campus & Safety Questions
            </h2>
            <Link
              href="/faqs/general/"
              className="text-sm font-medium text-[#4A3028] hover:underline inline-block"
            >
              View Dedicated General Page
            </Link>
          </div>
          <FaqAccordion items={generalFaqs} />
        </div>
      </Section>
    </>
  );
}
