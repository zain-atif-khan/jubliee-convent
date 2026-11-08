import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_METADATA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Establishing Healthy Learning Routines at Home Without Pressure",
  description:
    "Actionable, research-grounded advice for parents on creating calm study habits, fostering reading enthusiasm, and balancing screen time with outdoor play.",
};

export default function SupportingChildrenLearningAtHomePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Establishing Healthy Learning Routines at Home Without Pressure",
    description:
      "Actionable recommendations for creating calm study spaces, encouraging reading habits, and balancing screen time with physical activity.",
    author: {
      "@type": "Organization",
      name: "JUBLIE Educational Research",
    },
    publisher: {
      "@type": "Organization",
      name: "JUBLIE School",
      url: SITE_METADATA.url,
    },
    datePublished: "2026-10-15",
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <PageHero
        title="Establishing Healthy Learning Routines at Home"
        description="Practical guidelines for parents seeking to cultivate independent study habits, deep reading, and a calm household routine."
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
              Parenting & Study Habits
            </span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span>October 2026</span>
          </div>

          <article className="prose prose-lg max-w-none text-[#332E30] space-y-8 leading-relaxed">
            <p className="text-lg text-[#171416] font-normal leading-relaxed">
              When children return home from school, learning does not stop—yet homework should never turn the evening into an emotional battlefield. The goal of home study is to build self-discipline, curiosity, and consolidation of classroom concepts, not to generate unnecessary stress.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416] pt-4">
              1. Designate a Consistent, Quiet Workspace
            </h2>
            <p>
              Children thrive on predictability. Establish a dedicated study desk with good lighting, necessary stationery, and minimal digital distractions. Having a regular spot signals to the child&apos;s brain that it is time to concentrate calmly.
            </p>
            <p>
              Keep handheld smartphones, tablets, and gaming consoles away from the study zone during designated homework intervals.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416] pt-4">
              2. Focus on Effort and Process Rather Than Speed
            </h2>
            <p>
              When reviewing schoolwork with your child, praise persistence, careful handwriting, and thorough checking rather than simply finishing fast. If a child gets stuck on a mathematics problem or spelling rule:
            </p>
            <ul className="space-y-3 pl-4">
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span>Ask: &quot;What part of the problem feels clear, and where does the question become puzzling?&quot;</span>
              </li>
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span>Encourage them to read the question out loud slowly. Often, vocalising the sentence clarifies comprehension.</span>
              </li>
              <li className="pl-4 border-l-2 border-[#4A3028]">
                <span>Avoid providing the answer immediately. Scaffold their thinking with a simpler analogous example.</span>
              </li>
            </ul>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416] pt-4">
              3. The Indispensable Role of Daily Reading
            </h2>
            <p>
              No single habit predicts academic ease and vocabulary breadth more reliably than recreational reading. Dedicate twenty to thirty minutes every evening where the entire household reads quietly—parents included.
            </p>
            <p>
              Provide access to physical books: non-fiction encyclopedias, historical narratives, poetry, and engaging fiction. When children see their parents read books with enjoyment, they absorb the value effortlessly.
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#171416] pt-4">
              4. Protect Sleep, Nutrition, and Outdoor Movement
            </h2>
            <p>
              A child who is chronically fatigued or sedentary cannot concentrate effectively during morning lessons. Ensure children obtain consistent sleep appropriate for their age, spend time outdoors in the late afternoon, and have balanced meals before evening study.
            </p>
          </article>

          <div className="mt-12 pt-8 border-t border-[#E2D5C3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/academics/"
              className="text-base font-medium text-[#4A3028] hover:underline"
            >
              Explore our academic curriculum
            </Link>
            <Button href="/contact/" variant="outline">
              <span>Connect with Our Faculty</span>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
