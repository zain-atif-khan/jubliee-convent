import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: "section" | "div" | "article";
  background?: "cream" | "black" | "maroon" | "coffee" | "surface-cream" | "beige";
  containerWidth?: "default" | "narrow" | "wide" | "full";
  spacing?: "default" | "compact" | "generous" | "none";
}

export const Section: React.FC<SectionProps> = ({
  as: Component = "section",
  background = "cream",
  containerWidth = "default",
  spacing = "default",
  className,
  children,
  ...props
}) => {
  const bgStyles = {
    cream: "bg-[#F3EBDD] text-[#171416]",
    black: "bg-[#171416] text-[#F3EBDD]",
    maroon: "bg-[#4A3028] text-[#F3EBDD]",
    coffee: "bg-[#4A3028] text-[#F3EBDD]",
    "surface-cream": "bg-[#FAF6F0] text-[#171416]",
    beige: "bg-[#D9C8B5] text-[#171416]",
  };

  const spacingStyles = {
    none: "py-0",
    compact: "py-10 md:py-14",
    default: "py-16 md:py-24",
    generous: "py-20 md:py-32",
  };

  const containerStyles = {
    default: "container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl",
    narrow: "container mx-auto px-5 sm:px-8 max-w-4xl",
    wide: "container mx-auto px-5 sm:px-8 lg:px-12 max-w-[1440px]",
    full: "w-full px-0",
  };

  return (
    <Component className={cn(bgStyles[background], spacingStyles[spacing], className)} {...props}>
      <div className={containerStyles[containerWidth]}>{children}</div>
    </Component>
  );
};
