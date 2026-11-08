import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { ALL_FAQS, SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Admissions | Nursery to Class X | JUBLIE School Hyderabad",
  description:
    "Learn about the admissions process for Nursery through Class X at JUBLIE School, Aghapura, Hyderabad. Verified information on documents, campus walkthroughs, and admissions enquiry.",
};

export default function AdmissionsPage() {
  const admissionsFaqs = ALL_FAQS.filter((f) => f.category === "admissions");

  const admissionsSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "JUBLIE School Admissions",
    description:
      "Admissions information for Nursery to Class X under the Telangana State Board (SSC) syllabus at JUBLIE School, Hyderabad.",
    url: `${SITE_METADATA.url}/admissions/`,
    telephone: SITE_METADATA.verifiedPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_METADATA.verifiedAddress,
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <JsonLd data={admissionsSchema} />

      {/* Hero */}
      <PageHero
        title="Admissions at JUBLIE"
        description="Enrolling students from Nursery to Class X under the Telangana State Board (SSC) syllabus. Submit an online enquiry or telephone our office directly at +91 92474 20386 to schedule a campus visit."
        theme="black"
      >
        <Button href="#enquiry-form" variant="primary">
          <span>Complete Online Enquiry</span>
        </Button>
        <Button href="#process" variant="outline-cream">
          <span>Read Four-Step Process</span>
        </Button>
      </PageHero>

      {/* 1. Admissions Process - Open Direct Layout (No Boxed Cards) */}
      <Section id="process" background="cream" spacing="generous">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-5">
            Our Four-Step Admissions Procedure
          </h2>
          <p className="text-lg text-[#4A4340] leading-relaxed">
            We aim to make the admissions experience clear and stress-free for both parents and prospective students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <span className="font-serif text-3xl text-[#4A3028] font-semibold block">01</span>
            <h3 className="font-serif text-2xl text-[#171416]">Online Enquiry</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Submit the online enquiry form below with your contact details and the grade level you are seeking.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <span className="font-serif text-3xl text-[#4A3028] font-semibold block">02</span>
            <h3 className="font-serif text-2xl text-[#171416]">Campus Walkthrough</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Visit our campus during regular school hours to observe classes, meet educators, and tour facilities.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <span className="font-serif text-3xl text-[#4A3028] font-semibold block">03</span>
            <h3 className="font-serif text-2xl text-[#171416]">Informal Interaction</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              An age-appropriate conversational session with the child to understand their curiosity and foundational skills.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <span className="font-serif text-3xl text-[#4A3028] font-semibold block">04</span>
            <h3 className="font-serif text-2xl text-[#171416]">Enrolment Offer</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Following mutual alignment and document verification, the school issues a formal offer of admission.
            </p>
          </div>
        </div>
      </Section>

      {/* 2. Documents & Eligibility - Open Editorial Layout */}
      <Section background="surface-cream" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight">
              Documentation Checklist
            </h2>
            <p className="text-base sm:text-lg text-[#4A4340] leading-relaxed">
              Please prepare copies of the following official records when completing your child&apos;s application:
            </p>
            <ul className="space-y-4 pt-2">
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span className="text-base text-[#332E30] leading-relaxed">
                  Official Birth Certificate issued by the competent civic authority.
                </span>
              </li>
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span className="text-base text-[#332E30] leading-relaxed">
                  Recent passport-sized photographs of the applicant and both parents or guardians.
                </span>
              </li>
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span className="text-base text-[#332E30] leading-relaxed">
                  Academic transcripts or report cards from the prior two academic terms (for Grade 1 upwards).
                </span>
              </li>
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span className="text-base text-[#332E30] leading-relaxed">
                  Transfer Certificate (original copy to be submitted prior to final enrollment commencement).
                </span>
              </li>
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span className="text-base text-[#332E30] leading-relaxed">
                  Proof of residential address and child immunization records.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight">
              Fee Policy & Transparency
            </h2>
            <p className="text-base sm:text-lg text-[#4A4340] leading-relaxed">
              JUBLIE adheres to clear and predictable fee guidelines. All components—tuition, laboratory provisions, library access, and athletic provisions—are structured transparently without unexpected mid-term levies.
            </p>
            <div className="p-8 bg-[#FAF6F0] border border-[#E2D5C3] rounded-3xl space-y-4">
              <h3 className="font-serif text-2xl text-[#171416]">Verified Fee Information Policy</h3>
              <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                Detailed fee breakdowns corresponding to specific grades and optional transport routes are provided directly to parents during the admissions consultation. This ensures that every family receives precise, verified figures tailored to their enrollment stage.
              </p>
              <div className="pt-2">
                <span className="text-xs text-[#685F58] block">
                  Enquiries regarding scholarships or financial assistance may be addressed to the bursar&apos;s office upon application.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Enquiry Form Section */}
      <Section id="enquiry-form" background="cream" spacing="generous">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-4">
            Admissions Enquiry Form
          </h2>
          <p className="text-base sm:text-lg text-[#4A4340]">
            Please submit this form to register your interest. Our admissions office will respond directly within two working days.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <EnquiryForm />
        </div>
      </Section>

      {/* 4. Admissions FAQs */}
      <Section background="surface-cream" spacing="generous">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-4">
            Admissions Questions & Answers
          </h2>
          <p className="text-base text-[#4A4340]">
            Answers to common questions about application deadlines, age eligibility, and campus walkthroughs.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={admissionsFaqs} />
        </div>
      </Section>
    </>
  );
}
