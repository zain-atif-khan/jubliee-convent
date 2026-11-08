import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ALL_FAQS, GALLERY_ITEMS, SITE_METADATA } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "JUBLIE School | English Medium State Board School, Aghapura, Hyderabad",
  description:
    "Established in 1997, JUBLIE is a private unaided English-medium school in Aghapura, Nampally, Hyderabad, offering comprehensive schooling from Nursery to Class X under the Telangana State Board (SSC) syllabus.",
};

export default function HomePage() {
  const previewFaqs = ALL_FAQS.slice(0, 4);
  const previewGallery = GALLERY_ITEMS.slice(0, 3);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "JUBLIE School",
    description:
      "Private unaided English-medium school in Aghapura, Nampally, Hyderabad, offering education from Nursery to Class X under the Telangana State Board (SSC) syllabus.",
    url: SITE_METADATA.url,
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
      <JsonLd data={homeSchema} />

      {/* 1. Cinematic Hero Section */}
      <section className="relative min-h-[94vh] flex items-center bg-[#171416] text-[#F3EBDD] overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1920&q=85"
            alt="JUBLIE School Campus Central Building and Grounds"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171416] via-[#171416]/75 to-[#171416]/40" />
        </div>

        <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            {/* Direct large editorial heading with no eyebrow text */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#F3EBDD] leading-[1.08] mb-8">
              A contemporary school for curious minds and grounded character.
            </h1>
            <p className="text-lg sm:text-xl text-[#D9C8B5] font-normal leading-relaxed mb-10 max-w-2xl">
              Established in 1997 and situated in Aghapura, Nampally, Hyderabad, JUBLIE is a private unaided English-medium school operating under new management since 2023. We offer thoughtful education from Nursery to Class X under the Telangana State Board (SSC) syllabus.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/admissions/" variant="primary" size="lg">
                <span>Admissions & Campus Visits</span>
              </Button>
              <Button href="/about/" variant="outline-cream" size="lg">
                <span>Discover Our Background</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction to JUBLIE - Direct Editorial Layout with Curved Imagery */}
      <Section background="cream" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight">
              An educational environment built on clarity, curiosity, and respect.
            </h2>
            <p className="text-[#332E30] text-base sm:text-lg leading-relaxed">
              Serving families in Nampally, Hyderabad since 1997, JUBLIE provides a disciplined, supportive, and engaging learning atmosphere. Operating under new management since 2023, the school follows the Telangana State Board SSC curriculum in English medium from Nursery through Class X.
            </p>
            <p className="text-[#4A4340] text-base leading-relaxed">
              Our educational approach balances conceptual mastery in languages and sciences with regular physical activities and thoughtful moral guidance in a welcoming community.
            </p>
            <div className="pt-2">
              <Button href="/about/" variant="outline">
                <span>Read About Our Foundation</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] bg-[#D9C8B5] overflow-hidden rounded-3xl border border-[#E2D5C3]/80 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80"
                alt="Students studying in the JUBLIE library reading area"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Educational Philosophy - Direct Text Layout (No Boxed Cards) */}
      <Section background="surface-cream" spacing="generous">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-5">
            Four guiding pillars of our educational philosophy
          </h2>
          <p className="text-lg text-[#4A4340] leading-relaxed">
            Our teaching methods focus on substantive understanding over superficial memorisation. We nurture both intellectual autonomy and social responsibility directly in everyday learning.
          </p>
        </div>

        {/* Open Direct Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]/80">
            <span className="font-serif text-3xl text-[#4A3028] font-semibold block">01</span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#171416]">Academic Foundations</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Systematic mastery in mathematics, sciences, languages, and social disciplines through clear explanations and regular practice.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]/80">
            <span className="font-serif text-3xl text-[#4A3028] font-semibold block">02</span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#171416]">Inquiry & Reasoning</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Encouraging students to question evidence, formulate reasoned arguments, and test hypotheses in science laboratories and seminar discussions.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]/80">
            <span className="font-serif text-3xl text-[#4A3028] font-semibold block">03</span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#171416]">Character & Integrity</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Cultivating empathy, personal accountability, punctuality, and mutual respect in daily classroom and sporting interactions.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#D9C8B5]/80">
            <span className="font-serif text-3xl text-[#4A3028] font-semibold block">04</span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#171416]">Individual Mentorship</h3>
            <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
              Close guidance from experienced teachers who monitor each child&apos;s pace and provide encouragement when difficulties arise.
            </p>
          </div>
        </div>
      </Section>

      {/* 4. Vision and Mission - Smooth Flowing Deep Maroon Section */}
      <Section background="maroon" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EBDD] leading-tight">
              Our Vision
            </h2>
            <p className="text-lg text-[#F3EBDD]/90 leading-relaxed">
              To be an exemplary centre of learning where intellectual honesty, personal kindness, and rigorous thinking are fostered together, preparing students to contribute constructively to society.
            </p>
            <p className="text-base text-[#F3EBDD]/70 leading-relaxed">
              We envision graduates who think clearly, speak truthfully, approach challenges with composure, and demonstrate respect for diverse perspectives.
            </p>
          </div>

          <div className="space-y-6 lg:border-l lg:border-[#634137] lg:pl-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EBDD] leading-tight">
              Our Mission
            </h2>
            <p className="text-lg text-[#F3EBDD]/90 leading-relaxed">
              To deliver a balanced curriculum that combines strong academic fundamentals with creative arts, physical health, and community responsibility in an atmosphere of warmth and disciplined guidance.
            </p>
            <p className="text-base text-[#F3EBDD]/70 leading-relaxed">
              We achieve this through continuous faculty development, small classroom groups, transparent communication with parents, and safe, well-equipped facilities.
            </p>
          </div>
        </div>
      </Section>

      {/* 5. Academic Experience - Open Asymmetric Layout with Curved Photo */}
      <Section background="cream" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight">
              A sequential curriculum tailored to each developmental stage
            </h2>
            <p className="text-lg text-[#332E30] leading-relaxed">
              Learning at JUBLIE follows a coherent continuum. From foundational language and sensory numeracy in early years to rigorous analytical study in secondary school, every subject builds logically upon the previous year.
            </p>
            <div className="space-y-5 pt-3">
              <div className="pb-4 border-b border-[#E2D5C3]">
                <h3 className="font-serif text-xl text-[#171416] mb-1">Foundational Stage</h3>
                <p className="text-sm text-[#4A4340] leading-relaxed">
                  Structured phonics, hands-on spatial numeracy, and communicative confidence for young learners.
                </p>
              </div>
              <div className="pb-4 border-b border-[#E2D5C3]">
                <h3 className="font-serif text-xl text-[#171416] mb-1">Primary Stage</h3>
                <p className="text-sm text-[#4A4340] leading-relaxed">
                  Core literature, mathematical problem solving, introductory science, and environmental studies.
                </p>
              </div>
              <div className="pb-4 border-b border-[#E2D5C3]">
                <h3 className="font-serif text-xl text-[#171416] mb-1">Middle & Secondary Stages</h3>
                <p className="text-sm text-[#4A4340] leading-relaxed">
                  Specialised laboratory sciences, advanced mathematics, historical analysis, and digital literacy.
                </p>
              </div>
            </div>
            <div className="pt-4">
              <Button href="/academics/" variant="primary">
                <span>Explore Full Academic Curriculum</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-[#D9C8B5] overflow-hidden rounded-3xl border border-[#E2D5C3]/80 shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
                alt="Students in a collaborative classroom discussion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Learning Environment and Facilities - Open Architectural Showcase (No Card Boxes) */}
      <Section background="surface-cream" spacing="generous">
        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-5">
            Purpose-built spaces for learning, research, and recreation
          </h2>
          <p className="text-lg text-[#4A4340] leading-relaxed">
            A school environment directly impacts concentration and wellbeing. JUBLIE provides modern, well-ventilated spaces where students can focus comfortably.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Facility 1 */}
          <div className="space-y-4">
            <div className="relative aspect-[16/11] bg-[#EAE0D0] rounded-3xl overflow-hidden border border-[#E2D5C3]/80 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                alt="Modern science laboratory workstations"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#171416] mb-2">Science Laboratories</h3>
              <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                Dedicated spaces for physics, chemistry, and biology with calibrated apparatus and safety protocols for student experiments.
              </p>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="space-y-4">
            <div className="relative aspect-[16/11] bg-[#EAE0D0] rounded-3xl overflow-hidden border border-[#E2D5C3]/80 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80"
                alt="School library reference section"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#171416] mb-2">Resource Library</h3>
              <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                A curated collection of literature, reference volumes, research journals, and quiet study alcoves for independent reading.
              </p>
            </div>
          </div>

          {/* Facility 3 */}
          <div className="space-y-4">
            <div className="relative aspect-[16/11] bg-[#EAE0D0] rounded-3xl overflow-hidden border border-[#E2D5C3]/80 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
                alt="Outdoor athletic field and sports turf"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#171416] mb-2">Sports Arena & Field</h3>
              <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                Open athletic fields, running tracks, and designated courts for football, basketball, badminton, and physical conditioning.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Activities Beyond Academics - Asymmetric Curved Image Composition */}
      <Section background="cream" spacing="generous">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-5 sm:gap-6">
              <div className="relative aspect-[4/5] bg-[#EAE0D0] rounded-3xl overflow-hidden border border-[#E2D5C3]/80 shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80"
                  alt="Student artwork and studio easels"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/5] bg-[#EAE0D0] rounded-3xl overflow-hidden border border-[#E2D5C3]/80 shadow-md mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80"
                  alt="Music rehearsal and performance space"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight">
              Enriching activities that broaden perspective and expression
            </h2>
            <p className="text-lg text-[#332E30] leading-relaxed">
              We believe a well-rounded school day incorporates creative expression, teamwork, and physical fitness. Students participate regularly in structured arts and co-curricular programs.
            </p>
            <div className="space-y-4 pt-2">
              <div className="pb-4 border-b border-[#E2D5C3]">
                <h3 className="font-serif text-xl text-[#171416] mb-1">Visual & Performing Arts</h3>
                <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                  Painting, drawing, sculpture, instrumental music, vocal training, and stage performance.
                </p>
              </div>
              <div className="pb-4 border-b border-[#E2D5C3]">
                <h3 className="font-serif text-xl text-[#171416] mb-1">Debate & Public Speaking</h3>
                <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                  Structured parliamentary debates, recitation, and research presentations to build clear articulation.
                </p>
              </div>
              <div className="pb-4 border-b border-[#E2D5C3]">
                <h3 className="font-serif text-xl text-[#171416] mb-1">Athletic Conditioning</h3>
                <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                  Regular team sports, gymnastics, track events, and games that encourage sportsmanship and resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. Why Families May Consider JUBLIE - Open Direct Editorial Columns */}
      <Section background="black" spacing="generous">
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F3EBDD] leading-tight mb-5">
            Key factors families evaluate when choosing JUBLIE
          </h2>
          <p className="text-lg text-[#D9C8B5] leading-relaxed">
            Selecting a school is an important family decision. Here are the core commitments that guide daily life at JUBLIE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          <div className="space-y-4 pt-4 border-t border-[#2D272B]">
            <h3 className="font-serif text-2xl text-[#F3EBDD]">Academic Focus Without Undue Strain</h3>
            <p className="text-sm sm:text-base text-[#D9C8B5] leading-relaxed">
              We maintain high expectations for conceptual mastery while structuring homework realistically so children retain enthusiasm for learning.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#2D272B]">
            <h3 className="font-serif text-2xl text-[#F3EBDD]">Dedicated and Approachable Educators</h3>
            <p className="text-sm sm:text-base text-[#D9C8B5] leading-relaxed">
              Our faculty members understand that learning happens when children feel safe asking questions and receiving thoughtful feedback.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#2D272B]">
            <h3 className="font-serif text-2xl text-[#F3EBDD]">Transparent Parent Partnership</h3>
            <p className="text-sm sm:text-base text-[#D9C8B5] leading-relaxed">
              We communicate honestly about each student&apos;s progress, strengths, and areas requiring attention, working together with parents.
            </p>
          </div>
        </div>
      </Section>

      {/* 9. Verified Highlights / Commitments - Direct Open Metrics */}
      <Section background="surface-cream" spacing="generous">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-4">
            Our institutional standards and operating commitments
          </h2>
          <p className="text-base sm:text-lg text-[#4A4340]">
            Grounding our educational work in measurable daily standards of safety, teacher guidance, and academic integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <div className="space-y-2 text-center sm:text-left pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3028] font-medium">Capped Classes</h3>
            <div className="text-xs font-semibold text-[#685F58]">Classroom Size Commitment</div>
            <p className="text-sm text-[#4A4340] leading-relaxed">Ensuring regular personal attention from teachers in every lesson.</p>
          </div>

          <div className="space-y-2 text-center sm:text-left pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3028] font-medium">Specialist Staff</h3>
            <div className="text-xs font-semibold text-[#685F58]">Faculty Mentorship</div>
            <p className="text-sm text-[#4A4340] leading-relaxed">Subject-qualified educators across sciences, humanities, languages, and physical training.</p>
          </div>

          <div className="space-y-2 text-center sm:text-left pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3028] font-medium">Secure Campus</h3>
            <div className="text-xs font-semibold text-[#685F58]">Safety Standard</div>
            <p className="text-sm text-[#4A4340] leading-relaxed">24/7 security perimeter, visitor check-in, and professional campus healthcare infirmary.</p>
          </div>

          <div className="space-y-2 text-center sm:text-left pt-4 border-t border-[#D9C8B5]">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3028] font-medium">Balanced Day</h3>
            <div className="text-xs font-semibold text-[#685F58]">Balanced Daily Schedule</div>
            <p className="text-sm text-[#4A4340] leading-relaxed">Structured mix of analytical subjects, creative studios, and physical exercise.</p>
          </div>
        </div>
      </Section>

      {/* 10. Gallery Preview - Curved Images without Card Wrapping */}
      <Section background="cream" spacing="generous">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-3">
              Campus Spaces in Action
            </h2>
            <p className="text-base text-[#4A4340] max-w-xl">
              A brief preview of our learning facilities, science rooms, and recreational grounds.
            </p>
          </div>
          <Button href="/gallery/" variant="outline">
            <span>View Complete Photography Gallery</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {previewGallery.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-[4/3] bg-[#EAE0D0] rounded-3xl overflow-hidden border border-[#E2D5C3]/80 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="pt-4 px-1">
                <h3 className="font-serif text-xl font-medium text-[#171416] mb-1">
                  {item.title}
                </h3>
                <span className="text-xs font-medium text-[#4A3028] block mb-1.5">
                  {item.category}
                </span>
                <p className="text-sm text-[#4A4340] leading-relaxed line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 11. Frequently Asked Questions Preview */}
      <Section background="surface-cream" spacing="generous">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-4">
            Common questions from prospective parents
          </h2>
          <p className="text-base text-[#4A4340]">
            Clear and direct answers about our admissions timelines, curriculum structure, and school operations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={previewFaqs} />
          <div className="text-center mt-10">
            <Button href="/faqs/" variant="outline">
              <span>Read All Frequently Asked Questions</span>
            </Button>
          </div>
        </div>
      </Section>

      {/* 12. Admissions Enquiry Section - Organic Curved Deep Maroon Container */}
      <Section background="cream" spacing="compact">
        <div className="bg-[#4A3028] text-[#F3EBDD] rounded-3xl sm:rounded-4xl p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-5">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F3EBDD] leading-tight">
                Begin your family&apos;s admissions enquiry with JUBLIE
              </h2>
              <p className="text-base sm:text-lg text-[#F3EBDD]/90 leading-relaxed max-w-2xl">
                We welcome prospective parents to schedule a campus tour, observe daily learning activities, and discuss how our academic approach fits your child&apos;s educational needs.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Button
                href="/admissions/"
                variant="primary"
                size="lg"
                className="whitespace-nowrap border border-[#F3EBDD]/40 hover:border-[#F3EBDD]/70 bg-[#4A3028] text-[#F3EBDD]"
              >
                <span>Explore Admissions</span>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 13. Contact Information Preview - Open Curved Editorial Presentation */}
      <Section background="cream" spacing="default">
        <div className="border border-[#E2D5C3] bg-[#FAF6F0] p-8 sm:p-12 lg:p-14 rounded-3xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#171416]">Campus Location</h3>
              <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                {SITE_METADATA.verifiedAddress}
              </p>
              <div className="pt-2">
                <a
                  href={SITE_METADATA.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#4A3028] hover:underline inline-block"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#171416]">Admissions & Enquiries</h3>
              <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                Telephone:{" "}
                <a href={SITE_METADATA.verifiedPhoneTel} className="text-[#4A3028] font-medium hover:underline">
                  {SITE_METADATA.verifiedPhone}
                </a>
                <br />
                Grades: {SITE_METADATA.gradesOffered}
              </p>
              <div className="pt-2">
                <Link href="/admissions/" className="text-sm font-medium text-[#4A3028] hover:underline inline-block">
                  Submit Online Enquiry
                </Link>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-[#171416]">School Office Hours</h3>
              <p className="text-sm sm:text-base text-[#4A4340] leading-relaxed">
                {SITE_METADATA.workingHours}
              </p>
              <div className="pt-2">
                <Link href="/contact/" className="text-sm font-medium text-[#4A3028] hover:underline inline-block">
                  Schedule an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
