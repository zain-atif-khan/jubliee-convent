import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_METADATA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Understanding the Telangana State Board (SSC) Curriculum: A Guide for Parents",
  description:
    "An objective, informative examination of the Telangana State Board (SSC) curriculum structure from foundational classes to Class X board examinations.",
};

export default function UnderstandingSchoolCurriculumOptionsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Understanding the Telangana State Board (SSC) Curriculum: A Guide for Parents",
    description:
      "A clear overview of the Telangana State Board SSC syllabus structure from primary through secondary classes, assessment patterns, and educational benefits.",
    author: {
      "@type": "Organization",
      name: "JUBLIE Educational Research",
    },
    publisher: {
      "@type": "Organization",
      name: "JUBLIE School",
      url: SITE_METADATA.url,
    },
    datePublished: "2026-09-20",
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <PageHero
        title="Understanding the Telangana State Board (SSC) Curriculum"
        description="A clear, objective breakdown of the Telangana State Board (SSC) syllabus structure, developmental learning stages from Nursery to Class X, and what parents can expect."
        theme="cream"
      />

      <Section background="cream" spacing="generous">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link
              href="/resources/"
              className="text-sm font-medium text-[#4A3028] hover:underline inline-block"
            >
              Back to all educational articles
            </Link>
          </div>

          <div className="flex items-center gap-4 text-xs text-[#685F58] pb-6 mb-8 border-b border-[#E2D5C3]">
            <span className="font-medium text-[#4A3028]">
              Educational Insights
            </span>
            <span>•</span>
            <span>7 min read</span>
            <span>•</span>
            <span>September 2026</span>
          </div>

          <article className="prose prose-lg max-w-none text-[#332E30] space-y-8 leading-relaxed">
            <p className="text-lg text-[#171416] font-normal leading-relaxed">
              When investigating prospective schools, parents often encounter an alphabet soup of educational acronyms, curriculum titles, and pedagogy buzzwords. Understanding what these terms actually signify in the classroom is essential to selecting a curriculum aligned with your family&apos;s goals.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416] pt-4">
              1. The Foundational Years: Play-Based versus Direct Instruction
            </h2>
            <p>
              In early childhood (ages 3 to 7), children develop language through hearing spoken patterns, manipulating physical objects, and interacting socially. Modern educational research demonstrates that the most effective early years curricula do not force premature desk-bound memorisation.
            </p>
            <p>
              Instead, structured play with geometric blocks, guided storytelling, phonemic rhymes, and sensory exploration build the cognitive architecture required for formal reading fluency and numeracy in Grade 1.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416] pt-4">
              2. Primary and Middle School: Disciplinary Depth
            </h2>
            <p>
              As children enter primary school, the curriculum must introduce systematic academic disciplines:
            </p>
            <ul className="space-y-3 pl-4">
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span>
                  <strong>Language & Composition:</strong> Moving from phonetic decoding to reading comprehension, literary analysis, and clear paragraph structure.
                </span>
              </li>
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span>
                  <strong>Mathematical Reasoning:</strong> Building mental arithmetic, multi-digit operations, fractions, and word problem decoding.
                </span>
              </li>
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span>
                  <strong>Experimental Science:</strong> Introducing the scientific method—forming a hypothesis, gathering observations, and testing variables in a laboratory setting.
                </span>
              </li>
            </ul>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416] pt-4">
              3. The Role of Co-Curricular Balance
            </h2>
            <p>
              An effective curriculum is not solely academic. The physical, emotional, and creative faculties of children require intentional development. A robust school day incorporates visual arts, instrumental music, physical fitness, and public speaking alongside core sciences and humanities.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416] pt-4">
              4. Choosing What Suits Your Child
            </h2>
            <p>
              No curriculum operates in a vacuum. A nominally prestigious curriculum implemented by indifferent or overburdened educators will produce poor outcomes. Conversely, a thoughtful, balanced curriculum led by passionate, skilled teachers creates an inspiring and deeply rewarding educational experience.
            </p>
          </article>

          <div className="mt-12 pt-8 border-t border-[#E2D5C3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/academics/"
              className="text-base font-medium text-[#4A3028] hover:underline"
            >
              Review the JUBLIE Academic Framework
            </Link>
            <Button href="/admissions/" variant="outline">
              <span>Connect with Admissions</span>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
