import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE_METADATA } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Us | JUBLIE School Aghapura, Nampally, Hyderabad",
  description:
    "Contact JUBLIE School in Aghapura, Nampally, Hyderabad. Find our verified campus address, telephone number (+91 92474 20386), office hours, and online contact form.",
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "JUBLIE School Contact Information",
    description:
      "Direct contact details, telephone numbers, campus address, and online contact form for JUBLIE School, Hyderabad.",
    url: `${SITE_METADATA.url}/contact/`,
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
      <JsonLd data={contactSchema} />

      {/* Hero */}
      <PageHero
        title="Contact JUBLIE School"
        description="We welcome questions from prospective families, current parents, and community members. Our administrative office is ready to assist you."
        theme="black"
      >
        <Button href="#contact-form" variant="primary">
          <span>Send Online Message</span>
        </Button>
        <Button href="/admissions/" variant="outline-cream">
          <span>Admissions Enquiries</span>
        </Button>
      </PageHero>

      {/* Contact Details & Campus Office Info */}
      <Section background="cream" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-4">
                Campus Location & Office Details
              </h2>
              <p className="text-base text-[#4A4340] leading-relaxed">
                Families are welcome to visit during designated visiting hours. To ensure personalized attention from our admissions coordinator, we recommend scheduling an appointment in advance.
              </p>
            </div>

            <div className="space-y-6 bg-[#FAF6F0] border border-[#E2D5C3] p-8 sm:p-10 rounded-3xl shadow-sm">
              <div className="pb-5 border-b border-[#E2D5C3]">
                <span className="block text-xs font-mono uppercase tracking-wider text-[#4A3028] font-semibold mb-1">
                  School Address
                </span>
                <p className="text-base sm:text-lg text-[#171416] leading-relaxed">
                  {SITE_METADATA.verifiedAddress}
                </p>
                <div className="pt-2">
                  <a
                    href={SITE_METADATA.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[#4A3028] hover:underline inline-block"
                  >
                    View Campus Location on Google Maps
                  </a>
                </div>
              </div>

              <div className="pb-5 border-b border-[#E2D5C3]">
                <span className="block text-xs font-mono uppercase tracking-wider text-[#4A3028] font-semibold mb-1">
                  Telephone
                </span>
                <p className="text-base sm:text-lg text-[#171416] leading-relaxed">
                  <a href={`tel:${SITE_METADATA.verifiedPhone}`} className="text-[#4A3028] font-medium hover:underline">
                    {SITE_METADATA.verifiedPhone}
                  </a>
                </p>
                <span className="text-xs text-[#685F58] block mt-1">
                  Official school phone for admissions, general enquiries, and appointments.
                </span>
              </div>

              <div>
                <span className="block text-xs font-mono uppercase tracking-wider text-[#4A3028] font-semibold mb-1">
                  Visiting & Office Hours
                </span>
                <p className="text-base sm:text-lg text-[#171416] leading-relaxed">
                  {SITE_METADATA.workingHours}
                </p>
              </div>
            </div>

            <div className="p-8 bg-white border border-[#E2D5C3] rounded-3xl shadow-sm">
              <h3 className="font-serif text-xl text-[#171416] mb-2">
                Scheduling a Campus Walkthrough
              </h3>
              <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                Campus walkthroughs are conducted Tuesday through Friday at 10:00 AM and 2:00 PM. Please indicate your preferred date in your message or call our reception desk directly.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div id="contact-form" className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#171416] mb-2">
                Send a Message to Administration
              </h2>
              <p className="text-sm sm:text-base text-[#4A4340]">
                Fill out the form below. We will route your inquiry to the relevant coordinator and reply promptly.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
