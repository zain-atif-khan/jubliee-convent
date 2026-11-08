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
  title: "Admissions FAQs | Nursery to Class X | JUBLIE School Hyderabad",
  description:
    "Find detailed answers regarding JUBLIE School admissions for Nursery to Class X, document requirements, and campus visit scheduling in Aghapura, Hyderabad.",
};

export default function AdmissionsFaqsPage() {
  const admissionsFaqs = ALL_FAQS.filter((f) => f.category === "admissions");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: admissionsFaqs.map((faq) => ({
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
        title="Admissions Frequently Asked Questions"
        description="Comprehensive guidance on how to apply for Nursery through Class X, documentation requirements, and scheduling a campus walkthrough. Call +91 92474 20386 for direct assistance."
        theme="black"
      >
        <Button href="/admissions/" variant="primary">
          <span>Go to Admissions Form</span>
        </Button>
        <Button href="/faqs/" variant="outline-cream">
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
            Admissions Process & Criteria
          </h2>

          <FaqAccordion items={admissionsFaqs} />

          <div className="mt-12 p-8 sm:p-10 bg-[#FAF6F0] border border-[#E2D5C3] rounded-3xl text-center shadow-sm">
            <h3 className="font-serif text-2xl text-[#171416] mb-3">
              Have a specific question not listed here?
            </h3>
            <p className="text-base text-[#4A4340] max-w-lg mx-auto mb-6">
              Our admissions team is available during office hours to assist with specific family circumstances or transfer questions.
            </p>
            <Button href="/contact/" variant="primary">
              <span>Contact Admissions Team</span>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
