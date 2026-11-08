"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/types";
import { cn } from "@/lib/utils";

interface GalleryGridProps {
  items: GalleryItem[];
  showFilter?: boolean;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ items, showFilter = true }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const categories = ["All", ...Array.from(new Set(items.map((item) => item.category)))];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const handleNext = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [activeItemIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [activeItemIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setActiveItemIndex(null);
  }, []);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeItemIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItemIndex, handleClose, handleNext, handlePrev]);

  // Lock scroll when lightbox is active
  useEffect(() => {
    if (activeItemIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeItemIndex]);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  return (
    <div>
      {/* Category Filter Tabs - Softly curved geometric elements */}
      {showFilter && (
        <div className="flex flex-wrap gap-2.5 mb-12 pb-5 border-b border-[#E2D5C3]">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveItemIndex(null);
                }}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium transition-colors duration-200 rounded-md cursor-pointer border",
                  isSelected
                    ? "bg-[#4A3028] text-[#F3EBDD] border-[#4A3028]"
                    : "bg-white text-[#171416] border-[#D9C8B5] hover:bg-[#FAF6F0]"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {/* Grid of Images - Open direct layout without boxy card wrapping */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="group cursor-pointer transition-all duration-300"
            onClick={() => setActiveItemIndex(index)}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE0D0] rounded-2xl border border-[#E2D5C3]/80 group-hover:border-[#4A3028] transition-colors shadow-sm">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#171416]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-[#171416]/90 text-[#F3EBDD] text-xs font-mono tracking-wider uppercase rounded-md backdrop-blur-sm border border-white/20">
                  View Photograph
                </span>
              </div>
            </div>

            <div className="pt-4 px-1">
              <h3 className="font-serif text-xl font-medium text-[#171416] group-hover:text-[#4A3028] transition-colors mb-1">
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

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-[#171416]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          {/* Top Bar with Close */}
          <div className="absolute top-4 right-4 z-10 flex items-center space-x-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-[#2D272B] hover:bg-[#4A3028] text-[#F3EBDD] text-xs font-mono tracking-wider uppercase transition-colors rounded-md border border-white/10"
              aria-label="Close image viewer"
            >
              Close [ESC]
            </button>
          </div>

          {/* Navigation Controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-[#2D272B]/90 hover:bg-[#4A3028] text-[#F3EBDD] text-xs font-mono tracking-wider uppercase transition-colors rounded-md z-10 border border-white/10"
                aria-label="Previous photograph"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 px-3.5 py-2 bg-[#2D272B]/90 hover:bg-[#4A3028] text-[#F3EBDD] text-xs font-mono tracking-wider uppercase transition-colors rounded-md z-10 border border-white/10"
                aria-label="Next photograph"
              >
                Next
              </button>
            </>
          )}

          {/* Image & Caption Box */}
          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black rounded-t-2xl overflow-hidden">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
              />
            </div>
            <div className="w-full bg-[#221D20] text-[#F3EBDD] p-5 sm:p-6 border-t border-[#3D353A] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 rounded-b-2xl">
              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-medium">
                  {activeItem.title}
                </h4>
                <span className="text-xs text-[#D9C8B5] mt-0.5 block">
                  {activeItem.category}
                </span>
                <p className="text-sm text-[#D9C8B5] mt-1 max-w-2xl">{activeItem.caption}</p>
              </div>
              <div className="text-xs text-[#D9C8B5] shrink-0 self-end sm:self-center">
                Image {activeItemIndex! + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
