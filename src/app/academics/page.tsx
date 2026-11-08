import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { ALL_FAQS, SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academics | Telangana State Board (SSC) Syllabus | English Medium",
  description:
    "Explore the academic framework at JUBLIE School, Hyderabad. Offering English-medium education from Nursery to Class X under the Telangana State Board (SSC) syllabus.",
};

export default function AcademicsPage() {
  const academicFaqs = ALL_FAQS.filter((f) => f.category === "academics");

  const academicsSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "JUBLIE School Academics",
    description:
      "Telangana State Board (SSC syllabus) English-medium education from Nursery to Class X across Nursery, Primary, Upper Primary, and Secondary stages.",
    url: `${SITE_METADATA.url}/academics/`,
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
      <JsonLd data={academicsSchema} />

      {/* Hero */}
      <PageHero
        title="Telangana State Board (SSC) Academic Framework"
        description="A structured English-medium education from Nursery to Class X, designed to build strong foundations in languages, mathematics, sciences, and social disciplines in accordance with the Telangana State Board (SSC) syllabus."
        theme="maroon"
      >
        <Button href="/admissions/" variant="primary">
          <span>Explore Admissions</span>
        </Button>
        <Button href="#stages" variant="outline-cream">
          <span>Review Educational Stages</span>
        </Button>
      </PageHero>

      {/* 1. Academic Philosophy - Open Layout with Curved Image */}
      <Section background="cream" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight">
              Deep conceptual understanding over surface memorisation
            </h2>
            <p className="text-base sm:text-lg text-[#332E30] leading-relaxed">
              At JUBLIE, we approach education as an active process of discovery and synthesis. We believe that lasting intellectual confidence is built when students truly understand fundamental principles, rather than simply regurgitating memorised steps for an upcoming test.
            </p>
            <p className="text-base text-[#4A4340] leading-relaxed">
              Our curriculum blends systematic instruction with practical investigation. Teachers encourage students to explain the reasoning behind their answers, discuss alternative approaches to mathematical problems, and draw connections across disciplines.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-[#EAE0D0] rounded-3xl overflow-hidden border border-[#E2D5C3]/80 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"
                alt="Students studying reference material in the school library"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Educational Stages - Direct Open Layout (No Boxed Cards) */}
      <Section id="stages" background="surface-cream" spacing="generous">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-5">
            Four sequential stages from Nursery to Class X
          </h2>
          <p className="text-lg text-[#4A4340] leading-relaxed">
            Our educational framework is organised across four developmental stages, guiding students steadily from foundational play and early literacy to the Telangana State Board Secondary School Certificate (SSC) examination.
          </p>
        </div>

        <div className="space-y-12">
          {/* Nursery */}
          <div className="pt-6 pb-10 border-b border-[#D9C8B5]/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-2">
                <span className="font-serif text-3xl text-[#4A3028] font-semibold block">01</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171416]">Nursery Stage</h3>
                <div className="text-sm font-semibold text-[#4A3028]">Early Childhood Learning</div>
                <p className="text-sm text-[#685F58] pt-1">
                  Building spoken English confidence, vocabulary, sensory coordination, and friendly social habits.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-4 text-base text-[#332E30] leading-relaxed">
                <p>
                  In the nursery stage, children learn through structured sensory play, storytelling, rhymes, and interactive activities. Teachers introduce foundational phonics and simple counting through colourful physical objects and guided games.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4A4340] pt-2">
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Phonemic awareness & early English vocabulary
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Fine motor control and creative coloring
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Concrete number concepts and shape recognition
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Social cooperation, listening, and good manners
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary */}
          <div className="pt-4 pb-10 border-b border-[#D9C8B5]/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-2">
                <span className="font-serif text-3xl text-[#4A3028] font-semibold block">02</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171416]">Primary Stage</h3>
                <div className="text-sm font-semibold text-[#4A3028]">Classes I through V</div>
                <p className="text-sm text-[#685F58] pt-1">
                  Strengthening reading fluency, arithmetic computation, and observational environmental science.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-4 text-base text-[#332E30] leading-relaxed">
                <p>
                  Primary students develop confident reading and writing skills in English, learn multi-digit mathematical calculations, and study foundational environmental science. Language teachers introduce grammar and second language fundamentals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4A4340] pt-2">
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Reading comprehension and neat handwriting
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Multiplication, division, and basic geometry
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Environmental studies and nature observation
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Physical education drills and co-curricular arts
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upper Primary */}
          <div className="pt-4 pb-10 border-b border-[#D9C8B5]/80">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-2">
                <span className="font-serif text-3xl text-[#4A3028] font-semibold block">03</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171416]">Upper Primary Stage</h3>
                <div className="text-sm font-semibold text-[#4A3028]">Classes VI through VIII</div>
                <p className="text-sm text-[#685F58] pt-1">
                  Transitioning to discrete academic subjects under the Telangana State Board curriculum.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-4 text-base text-[#332E30] leading-relaxed">
                <p>
                  Subjects branch into General Science, Mathematics, Social Studies, English, and State Board languages. Students learn through structured textbook study, classroom problem-solving, and introductory scientific demonstrations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4A4340] pt-2">
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Science concepts and practical demonstration notes
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Algebraic fundamentals, fractions, and integers
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Indian history, geography, and civic institutions
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Formal letter writing and spoken English practice
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary */}
          <div className="pt-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 space-y-2">
                <span className="font-serif text-3xl text-[#4A3028] font-semibold block">04</span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#171416]">Secondary Stage</h3>
                <div className="text-sm font-semibold text-[#4A3028]">Classes IX and X (SSC Syllabus)</div>
                <p className="text-sm text-[#685F58] pt-1">
                  Rigorous syllabus completion and preparation for the Telangana State Board SSC examination.
                </p>
              </div>
              <div className="lg:col-span-8 space-y-4 text-base text-[#332E30] leading-relaxed">
                <p>
                  Secondary students focus on the complete Telangana State Board syllabus. Experienced teachers provide detailed subject explanations, regular unit tests, and thorough examination revision to ensure confident performance in the Class X board exams.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4A4340] pt-2">
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Physical Science and Biological Science syllabus mastery
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Complete State Board Mathematics problem solving
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Social Studies, economics, and contemporary issues
                  </div>
                  <div className="pl-3.5 border-l-2 border-[#4A3028]/40">
                    Periodic model papers, pre-board reviews, and exam technique
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Core Academic Disciplines - Open Direct 3-Column Text Layout (No Card Boxes) */}
      <Section background="cream" spacing="generous">
        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-5">
            Core disciplines taught across grades
          </h2>
          <p className="text-lg text-[#4A4340] leading-relaxed">
            Our subject offerings are designed to provide a comprehensive liberal arts and scientific education.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl text-[#171416]">Languages & Literature</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Grammar mastery, comprehensive reading of world literature, expressive writing, and second-language fluency.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl text-[#171416]">Mathematical Sciences</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Arithmetic foundations, algebraic structures, geometric proof, coordinate geometry, and data interpretation.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl text-[#171416]">Natural & Physical Sciences</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Physics, Chemistry, and Biology supported by hands-on experimentation in fully equipped laboratories.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl text-[#171416]">Social Sciences & History</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              World history, geography, civic governance, and economics to develop historical perspective and civic literacy.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl text-[#171416]">Digital Literacy & Computing</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Algorithmic logic, computational problem solving, data safety, and ethical application of digital technologies.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl text-[#171416]">Visual Arts & Athletics</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Studio arts, music performance, sportsmanship, and physical conditioning integrated directly into the weekly schedule.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Student Support & Mentorship - Curved Layout */}
      <Section background="surface-cream" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight">
              Individual learning support and continuous guidance
            </h2>
            <p className="text-base sm:text-lg text-[#332E30] leading-relaxed">
              Every child learns at a unique tempo. Our teachers provide small-group reinforcement sessions for students who benefit from extra practice in specific topics, ensuring no student falls behind quietly.
            </p>
            <p className="text-base text-[#4A4340] leading-relaxed">
              Similarly, students demonstrating advanced grasp in particular areas are provided with supplementary reading lists and enrichment challenges to sustain their intellectual momentum.
            </p>
            <div className="pt-2">
              <Button href="/admissions/" variant="primary">
                <span>Enquire About Enrollment</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-[#EAE0D0] rounded-3xl overflow-hidden border border-[#E2D5C3]/80 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
                alt="Students conducting science experiments under teacher supervision"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Academic FAQs */}
      <Section background="cream" spacing="generous">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-4">
            Frequently Asked Academic Questions
          </h2>
          <p className="text-base text-[#4A4340]">
            Direct information regarding assessments, homework expectations, and teacher qualifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={academicFaqs} />
        </div>
      </Section>
    </>
  );
}
