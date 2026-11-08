import React from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description: string;
  theme?: "black" | "maroon" | "coffee" | "cream";
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  theme = "black",
  align = "left",
  children,
}) => {
  const themeStyles = {
    black: "bg-[#171416] text-[#F3EBDD] border-b border-[#2B2529]",
    maroon: "bg-[#4A3028] text-[#F3EBDD] border-b border-[#634137]",
    coffee: "bg-[#4A3028] text-[#F3EBDD] border-b border-[#634137]",
    cream: "bg-[#F3EBDD] text-[#171416] border-b border-[#E2D5C3]",
  };

  const textStyles = {
    black: "text-[#D9C8B5]",
    maroon: "text-[#F3EBDD]/80",
    coffee: "text-[#F3EBDD]/80",
    cream: "text-[#171416]/80",
  };

  return (
    <div className={cn("pt-32 pb-20 md:pt-40 md:pb-24", themeStyles[theme])}>
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl">
        <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
          {/* Strict: No eyebrow text above heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.15] mb-6 break-words">
            {title}
          </h1>
          <p className={cn("text-base sm:text-lg md:text-xl font-normal leading-relaxed break-words", textStyles[theme])}>
            {description}
          </p>
          {children && <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">{children}</div>}
        </div>
      </div>
    </div>
  );
};
