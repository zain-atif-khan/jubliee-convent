"use client";

import React, { useState } from "react";
import { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

interface FaqAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number;
  theme?: "light" | "dark";
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  theme = "light",
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([defaultOpenIndex]);

  const toggleItem = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const isDark = theme === "dark";

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const itemId = `faq-item-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={index}
            className={cn(
              "border transition-colors duration-200 rounded-xl overflow-hidden",
              isDark
                ? isOpen
                  ? "border-[#634137] bg-[#221D20]"
                  : "border-[#2D272B] bg-[#1B171A] hover:border-[#3D353A]"
                : isOpen
                ? "border-[#4A3028] bg-[#FAF6F0]"
                : "border-[#E2D5C3] bg-white hover:border-[#D0BFAB]"
            )}
          >
            <button
              id={itemId}
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 min-h-[48px] flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <span
                className={cn(
                  "font-serif text-base sm:text-xl font-medium tracking-tight break-words",
                  isDark ? "text-[#F3EBDD]" : "text-[#171416]"
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  "text-xs font-mono font-medium tracking-wider px-2.5 py-1 rounded-md shrink-0 transition-colors duration-200 border",
                  isDark
                    ? isOpen
                      ? "text-[#F3EBDD] bg-[#4A3028] border-[#634137]"
                      : "text-[#D9C8B5] bg-white/5 border-white/10"
                    : isOpen
                    ? "text-[#F3EBDD] bg-[#4A3028] border-[#4A3028]"
                    : "text-[#4A3028] bg-black/5 border-[#E2D5C3]"
                )}
                aria-hidden="true"
              >
                {isOpen ? "CLOSE" : "OPEN"}
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={itemId}
                className={cn(
                  "px-6 pb-6 pt-1 text-base leading-relaxed border-t",
                  isDark
                    ? "text-[#D9C8B5] border-[#2D272B]"
                    : "text-[#332E30] border-[#EADFD0]"
                )}
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
