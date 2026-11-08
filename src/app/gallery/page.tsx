import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { GALLERY_ITEMS, SITE_METADATA } from "@/lib/constants";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Campus Gallery | Facilities & Student Life",
  description:
    "Explore photography of JUBLIE School's campus, science laboratories, learning library, art studios, and athletic spaces.",
};

export default function GalleryPage() {
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "JUBLIE School Campus Gallery",
    description:
      "Photographic showcase of JUBLIE School learning facilities, science rooms, and recreational grounds.",
    url: `${SITE_METADATA.url}/gallery/`,
  };

  return (
    <>
      <JsonLd data={gallerySchema} />

      {/* Hero */}
      <PageHero
        title="Campus Photography & Facilities"
        description="A visual walkthrough of our purpose-built learning spaces, science laboratories, creative studios, and outdoor athletic arenas."
        theme="black"
      >
        <Button href="/admissions/" variant="primary">
          <span>Schedule an In-Person Tour</span>
        </Button>
      </PageHero>

      {/* Main Gallery Grid */}
      <Section background="cream" spacing="generous">
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#171416] leading-tight mb-4">
            Curated Views of Campus Life
          </h2>
          <p className="text-base sm:text-lg text-[#4A4340] leading-relaxed">
            Click on any photograph to open the high-resolution lightbox viewer. Use keyboard arrow keys or touch gestures to navigate between images.
          </p>
        </div>

        <GalleryGrid items={GALLERY_ITEMS} />
      </Section>

      {/* Campus Video Tour Guidance - Softly curved container */}
      <Section background="cream" spacing="default">
        <div className="bg-[#FAF6F0] border border-[#E2D5C3] p-8 sm:p-12 lg:p-14 rounded-3xl max-w-4xl mx-auto shadow-sm">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#171416] leading-tight mb-3">
            Official Campus Video Presentations
          </h2>
          <p className="text-base text-[#4A4340] leading-relaxed mb-6">
            Official student documentary videos, musical recitals, and athletic highlights are presented during campus orientation open days and parent briefings. Families are invited to join an upcoming campus walkthrough to experience the atmosphere in person.
          </p>
          <Button href="/admissions/" variant="primary">
            <span>Arrange a Campus Walkthrough</span>
          </Button>
        </div>
      </Section>
    </>
  );
}
