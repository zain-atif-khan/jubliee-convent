import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Data Protection & Family Confidentiality",
  description:
    "Review how JUBLIE School handles, protects, and safeguards personal information submitted through our admissions enquiry and contact forms.",
};

export default function PrivacyPolicyPage() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "JUBLIE School Privacy Policy",
    description:
      "Privacy policy explaining how family and student data is collected, used, and secured by JUBLIE School.",
    url: `${SITE_METADATA.url}/privacy-policy/`,
  };

  return (
    <>
      <JsonLd data={privacySchema} />

      <PageHero
        title="Privacy Policy"
        description="Our institutional commitment to protecting the privacy, confidentiality, and data security of prospective families, parents, and students."
        theme="cream"
      />

      <Section background="cream" spacing="generous">
        <div className="max-w-3xl mx-auto space-y-8 text-[#332E30] leading-relaxed">
          <div className="p-8 bg-[#FAF6F0] border-l-4 border-l-[#4A3028] border border-[#E2D5C3] rounded-3xl shadow-sm">
            <div className="text-sm">
              <strong className="block text-[#171416] mb-1 font-serif text-base">
                Data Protection Commitment
              </strong>
              JUBLIE does not sell, rent, lease, or trade family contact details or student educational records to any commercial marketing organizations or external third parties.
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#171416] mb-3">1. Information We Collect</h2>
            <p>
              When families interact with our website to make an admissions enquiry or contact our administrative office, we collect only the information necessary to fulfill that request. This may include:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#4A4340]">
              <li>Parent or guardian full name and relationship to the child.</li>
              <li>Contact telephone number and email address.</li>
              <li>Prospective student full name, intended grade of admission, and academic session.</li>
              <li>Any educational questions or notes voluntarily shared in enquiry forms.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#171416] mb-3">2. How Information is Used</h2>
            <p>
              Information gathered via online forms is used strictly by the JUBLIE Admissions and Administration Office to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#4A4340]">
              <li>Schedule campus tours and guided walkthroughs.</li>
              <li>Respond directly to parent inquiries regarding curriculum or admissions timelines.</li>
              <li>Process formal enrollment documentation upon request.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#171416] mb-3">3. Data Retention and Security</h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards to prevent unauthorized access, alteration, or disclosure of submitted information. Inactive enquiry records are securely archived or purged in accordance with institutional data retention standards.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#171416] mb-3">4. Cookies and Web Analytics</h2>
            <p>
              Our website uses basic, non-intrusive functional cookies to ensure page navigation works smoothly across devices. We do not use aggressive cross-site tracking pixels or invasive behavioral advertising tools.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl text-[#171416] mb-3">5. Contact Regarding Privacy</h2>
            <p>
              If you have any questions regarding how your family information is managed or wish to request the correction or removal of your details, please telephone our school administration office at{" "}
              <a
                href={`tel:${SITE_METADATA.verifiedPhone}`}
                className="text-[#4A3028] font-medium underline"
              >
                {SITE_METADATA.verifiedPhone}
              </a>
              {" "}or visit the campus in Aghapura, Nampally, Hyderabad.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
