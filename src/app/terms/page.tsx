import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use | Website Guidelines & Policies",
  description:
    "Review the terms and conditions governing the use of the JUBLIE School website, informational content, and application submissions.",
};

export default function TermsPage() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "JUBLIE School Terms of Use",
    description:
      "Terms of use governing the access and informational use of the JUBLIE School website.",
    url: `${SITE_METADATA.url}/terms/`,
  };

  return (
    <>
      <JsonLd data={termsSchema} />

      <PageHero
        title="Terms of Use"
        description="Conditions governing the access and informational use of the JUBLIE School website and its digital assets."
        theme="cream"
      />

      <Section background="cream" spacing="generous">
        <div className="max-w-3xl mx-auto space-y-8 text-[#332E30] leading-relaxed">
          <div>
            <h2 className="font-serif text-2xl text-[#171416] mb-3">1. Website Purpose</h2>
            <p>
              This website serves as an informational platform provided by JUBLIE School to communicate our educational vision, academic curriculum, campus facilities, and admissions procedures to prospective families, current students, and the wider educational community.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#171416] mb-3">2. Accuracy of Published Information</h2>
            <p>
              JUBLIE takes deliberate care to ensure that curriculum outlines, academic schedules, and operational details presented on this website are accurate and up to date. However, academic offerings, fee structures, and event schedules may undergo periodic revision by the Academic Council. Formal admissions terms and confirmed fee commitments are finalized during official enrollment consultations.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#171416] mb-3">3. Intellectual Property</h2>
            <p>
              All text, photographic imagery, architectural designs, logos, and graphic layouts displayed on this website are the intellectual property of JUBLIE School or licensed for educational publication. Reproduction, redistribution, or commercial use without prior written consent is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#171416] mb-3">4. Online Enquiry Submissions</h2>
            <p>
              Submitting an admissions enquiry or contact message through this platform does not constitute a guaranteed offer of admission or legal contract. Formal admission is contingent upon seat availability, campus interaction, and completion of institutional documentation.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#171416] mb-3">5. Inquiries and Legal Notice</h2>
            <p>
              For legal inquiries, copyright permissions, or administrative clarifications regarding our website policies, please contact:
            </p>
            <div className="p-6 sm:p-8 bg-[#FAF6F0] border border-[#E2D5C3] rounded-3xl mt-4 text-sm sm:text-base space-y-1 shadow-sm">
              <strong className="block text-[#171416]">JUBLIE School Administration Office</strong>
              <span>{SITE_METADATA.verifiedAddress}</span>
              <br />
              <span>Telephone: {SITE_METADATA.verifiedPhone}</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
