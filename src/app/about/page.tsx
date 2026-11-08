import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | School History, Foundation & Management | JUBLIE Hyderabad",
  description:
    "Established in 1997 in Aghapura, Nampally, Hyderabad, JUBLIE is a private unaided English-medium school operating under new management since 2023. Offering Nursery to Class X under the Telangana State Board (SSC) syllabus.",
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "JUBLIE School",
    description:
      "Established in 1997, JUBLIE is a private unaided English-medium school in Aghapura, Nampally, Hyderabad under new management since 2023.",
    url: `${SITE_METADATA.url}/about/`,
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
      <JsonLd data={aboutSchema} />

      {/* Page Hero */}
      <PageHero
        title="About JUBLIE"
        description="Established in 1997 in Aghapura, Nampally, Hyderabad, JUBLIE is a private unaided English-medium school operating under new management since 2023, dedicated to structured learning, academic discipline, and student character."
        theme="black"
      >
        <Button href="/admissions/" variant="primary">
          <span>Admissions Information</span>
        </Button>
        <Button href="/academics/" variant="outline-cream">
          <span>Our Academic Approach</span>
        </Button>
      </PageHero>

      {/* 1. School Story & Origins - Open Editorial Layout with Curved Image */}
      <Section background="cream" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight">
              A private unaided school established in 1997, under new management since 2023
            </h2>
            <p className="text-base sm:text-lg text-[#332E30] leading-relaxed">
              Established in 1997 in the Aghapura and Nampally area of Hyderabad, JUBLIE was founded to provide accessible, disciplined, and high-standard English-medium education. In 2023, the institution transitioned to new management, initiating an era of renewed academic focus, structured curriculum supervision, and enhanced family communication.
            </p>
            <p className="text-base text-[#4A4340] leading-relaxed">
              We follow the Telangana State Board (SSC) syllabus from Nursery through Class X. Our educational philosophy emphasizes foundational literacy and numeracy, systematic laboratory work in sciences, and the development of polite, morally conscious young individuals.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-[#EAE0D0] rounded-3xl overflow-hidden border border-[#E2D5C3]/80 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
                alt="JUBLIE School Campus Central Building and Grounds"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Vision and Mission Detail - Direct Side-by-Side Editorial */}
      <Section background="maroon" spacing="generous">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-5">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EBDD]">Our Vision</h2>
            <p className="text-lg text-[#F3EBDD]/90 leading-relaxed">
              To nurture young people into articulate, intellectually capable, and morally grounded individuals who approach new challenges with calm confidence and a sincere desire to make meaningful contributions to their communities.
            </p>
            <ul className="space-y-3 pt-2 text-sm sm:text-base text-[#D9C8B5]">
              <li className="pl-4 border-l border-[#D9C8B5]/50">
                Cultivating reasoned judgment and respectful dialogue
              </li>
              <li className="pl-4 border-l border-[#D9C8B5]/50">
                Balancing scientific inquiry with artistic sensitivity
              </li>
              <li className="pl-4 border-l border-[#D9C8B5]/50">
                Fostering empathy and communal responsibility
              </li>
            </ul>
          </div>

          <div className="space-y-5 md:border-l md:border-[#634137] md:pl-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EBDD]">Our Mission</h2>
            <p className="text-lg text-[#F3EBDD]/90 leading-relaxed">
              To provide consistent, high-standard teaching that builds strong foundations in languages, mathematics, natural sciences, and the humanities, complemented by regular physical education and creative expression.
            </p>
            <ul className="space-y-3 pt-2 text-sm sm:text-base text-[#D9C8B5]">
              <li className="pl-4 border-l border-[#D9C8B5]/50">
                Small classroom ratios that enable individual mentorship
              </li>
              <li className="pl-4 border-l border-[#D9C8B5]/50">
                Regular professional enrichment programs for our faculty
              </li>
              <li className="pl-4 border-l border-[#D9C8B5]/50">
                Clear, ongoing communication with every family
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 3. Core Educational Values - Direct Text Layout (No Boxed Cards) */}
      <Section background="surface-cream" spacing="generous">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-5">
            Core values that define daily life at JUBLIE
          </h2>
          <p className="text-lg text-[#4A4340] leading-relaxed">
            These values are not abstract slogans; they are reflected in how our teachers interact with students, how conflicts are resolved, and how academic progress is cultivated.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl text-[#171416]">Intellectual Discipline</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Developing the patience to read carefully, verify information, and persevere through challenging problem sets.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl text-[#171416]">Inquiry & Curiosity</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Encouraging students to ask &quot;why&quot; and &quot;how&quot;, treating questions as valuable opportunities for discovery.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl text-[#171416]">Honesty & Accountability</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Owning one&apos;s actions, submitting honest work, and acknowledging mistakes as essential steps in personal growth.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl text-[#171416]">Mutual Consideration</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Treating fellow students, teachers, support staff, and school grounds with dignity, respect, and cleanliness.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Teaching Philosophy and Culture - Curved Asymmetric Showcase */}
      <Section background="cream" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] bg-[#EAE0D0] rounded-3xl overflow-hidden border border-[#E2D5C3]/80 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
                alt="Teacher leading an interactive group discussion in class"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight">
              Our approach to teaching and classroom mentorship
            </h2>
            <p className="text-base sm:text-lg text-[#332E30] leading-relaxed">
              We recruit teachers who combine mastery in their subject disciplines with an innate ability to connect warmly with young learners. Rather than standing as distant lecturers, our faculty guide students through structured inquiry and scaffolded practice.
            </p>
            <p className="text-base text-[#4A4340] leading-relaxed">
              Regular formative assessments allow teachers to identify gaps early, tailoring explanations before confusion becomes entrenched. In this way, every child gains the confidence to tackle advanced concepts without apprehension.
            </p>
            <div className="pt-2">
              <Button href="/academics/" variant="outline">
                <span>View Our Academic Stages</span>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Institutional Overview & Governance - Open Editorial Presentation */}
      <Section background="black" spacing="generous">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EBDD] leading-tight">
              School Facts and Governance
            </h2>
            <p className="text-base sm:text-lg text-[#D9C8B5] leading-relaxed">
              JUBLIE operates as a recognized private unaided institution adhering to Telangana State educational board standards. Under new management since 2023, the school emphasizes academic discipline, teacher mentorship, and safe facilities.
            </p>
          </div>

          <div className="p-8 sm:p-10 border border-[#2D272B] bg-[#221D20] rounded-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#D9C8B5] font-semibold mb-1">
                  Established
                </span>
                <span className="text-base text-[#F3EBDD]">1997</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#D9C8B5] font-semibold mb-1">
                  School Category
                </span>
                <span className="text-base text-[#F3EBDD]">Private Unaided</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#D9C8B5] font-semibold mb-1">
                  Management
                </span>
                <span className="text-base text-[#F3EBDD]">New Management (Since 2023)</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#D9C8B5] font-semibold mb-1">
                  Curriculum
                </span>
                <span className="text-base text-[#F3EBDD]">Telangana State Board (SSC)</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#D9C8B5] font-semibold mb-1">
                  Instruction Medium
                </span>
                <span className="text-base text-[#F3EBDD]">English Medium</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#D9C8B5] font-semibold mb-1">
                  Classes Offered
                </span>
                <span className="text-base text-[#F3EBDD]">Nursery to Class X</span>
              </div>
            </div>
          </div>

          <div className="text-center pt-2">
            <Button href="/contact/" variant="outline-cream">
              <span>Contact School Office</span>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
