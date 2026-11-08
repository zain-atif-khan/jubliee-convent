import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-cream" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, external, children, disabled, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-md tracking-normal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

    const variantStyles = {
      primary:
        "bg-[#4A3028] text-[#F3EBDD] hover:bg-[#5A3B31] border border-[#4A3028] focus-visible:outline-[#4A3028] shadow-sm",
      secondary:
        "bg-[#171416] text-[#F3EBDD] hover:bg-[#252024] border border-[#171416] focus-visible:outline-[#171416] shadow-sm",
      outline:
        "bg-transparent text-[#4A3028] border border-[#4A3028] hover:bg-[#4A3028] hover:text-[#F3EBDD] focus-visible:outline-[#4A3028]",
      "outline-cream":
        "bg-transparent text-[#F3EBDD] border border-[#F3EBDD] hover:bg-[#F3EBDD] hover:text-[#171416] focus-visible:outline-[#F3EBDD]",
      ghost:
        "bg-transparent text-[#4A3028] hover:bg-[#EAE0D0] border border-transparent focus-visible:outline-[#4A3028]",
    };

    const sizeStyles = {
      sm: "px-5 py-2.5 text-sm",
      md: "px-7 py-3.5 text-base",
      lg: "px-9 py-4 text-base sm:text-lg",
    };

    const combinedClassName = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            className={combinedClassName}
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClassName}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClassName} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
