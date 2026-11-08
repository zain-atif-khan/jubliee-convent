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
  title: "Academics FAQs | Telangana State Board (SSC) Syllabus | JUBLIE",
  description:
    "Explore common questions regarding the Telangana State Board (SSC) syllabus, English medium instruction, classes offered from Nursery to Class X, and teaching methodologies at JUBLIE School.",
};

export default function AcademicsFaqsPage() {
  const academicsFaqs = ALL_FAQS.filter((f) => f.category === "academics");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: academicsFaqs.map((faq) => ({
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
        title="Academic Frequently Asked Questions"
        description="Detailed information regarding the Telangana State Board (SSC) syllabus, English medium instruction, educational stages from Nursery to Class X, and student assessments."
        theme="maroon"
      >
        <Button href="/academics/" variant="primary">
          <span>Read Full Curriculum</span>
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
            Curriculum, Classroom Life & Assessments
          </h2>

          <FaqAccordion items={academicsFaqs} />

          <div className="mt-12 p-8 sm:p-10 bg-[#FAF6F0] border border-[#E2D5C3] rounded-3xl text-center shadow-sm">
            <h3 className="font-serif text-2xl text-[#171416] mb-3">
              Want to learn more about our academic stages?
            </h3>
            <p className="text-base text-[#4A4340] max-w-lg mx-auto mb-6">
              Review our complete breakdown of foundational, primary, middle, and secondary education.
            </p>
            <Button href="/academics/" variant="primary">
              <span>View Academics Page</span>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
