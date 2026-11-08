"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAV_ITEMS, SITE_METADATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  // Continuous scroll-scrubbed transformation calculation
  // Progress 0 = top of page (100% full-width, 100% transparent, no border, no shadow, 0px radius)
  // Progress 1 = scrolled >= 130px (floating centered pill, dark black glassmorphic, 20px blur, 9999px radius)
  const updateScrollProgress = useCallback(() => {
    if (!pillRef.current || !wrapperRef.current) return;

    const scrollY = window.scrollY || 0;
    const threshold = 130; // 130px scroll distance for smooth, luxurious scrubbed interpolation
    const p = Math.min(1, Math.max(0, scrollY / threshold));

    // Get exact visible viewport width excluding scrollbar
    const W = document.documentElement.clientWidth || window.innerWidth;
    const isMobile = W < 768;
    const isTablet = W >= 768 && W < 1024;

    // 1. Top offset: 0px at top -> 16px (desktop/tablet) / 12px (mobile) when scrolled
    const targetTopOffset = isMobile ? 12 : 16;
    const currentTopOffset = p * targetTopOffset;

    // 2. Pill Width & Padding Calculation:
    // Desktop: contracts from 100% down to 86% of viewport (capped at 1180px)
    // Tablet: contracts from 100% down to 90% of viewport
    // Mobile: contracts from 100% down to 92% of viewport
    let targetWidth: number;
    let targetPaddingX: number;
    let startPaddingX: number;

    if (isMobile) {
      targetWidth = Math.round(W * 0.92);
      startPaddingX = 20; // 1.25rem (px-5)
      targetPaddingX = 18; // comfortable spacing from curved capsule ends
    } else if (isTablet) {
      targetWidth = Math.round(W * 0.90);
      startPaddingX = 32; // 2rem (px-8)
      targetPaddingX = 24;
    } else {
      targetWidth = Math.round(Math.min(W * 0.86, 1180));
      // At top (p = 0), align perfectly with max-w-7xl (1280px) and px-12 (48px)
      startPaddingX = W >= 1280 ? Math.round((W - 1280) / 2 + 48) : 48;
      targetPaddingX = 36;
    }

    // Physical width interpolation:
    const currentWidth = W - (W - targetWidth) * p;
    const currentPaddingX = startPaddingX - (startPaddingX - targetPaddingX) * p;

    // 3. Physical height / vertical padding:
    // Desktop: 1.75rem (28px) down to 0.65rem (10.4px) -> total height ~96px down to ~66px
    // Mobile: 1.25rem (20px) down to 0.55rem (8.8px) -> total height ~72px down to ~52px
    const pyStart = isMobile ? 1.25 : 1.75;
    const pyEnd = isMobile ? 0.55 : 0.65;
    const currentPyRem = pyStart - (pyStart - pyEnd) * p;

    // 4. Dark Black Glassmorphic Styling (Mandatory Frosted Glass):
    // Background: Deepest rich black (rgb(12, 10, 11)) with ~94% opacity for an unmistakably dark, intense black appearance while still maintaining active optical glass backdrop blur
    const bgAlpha = p * 0.94;
    // Genuine background blur: 0px -> 28px
    const blurPx = p * 28;
    // Optical vibrance: 100% -> 180% saturation to ensure glass looks refined and never flat grey
    const saturatePct = 100 + p * 80;
    // Subtle cream-tinted border: 0 -> 0.14 cream tint rgba(243, 235, 221, 0.14)
    const borderAlpha = p * 0.14;
    // Soft, restrained depth shadow:
    const shadowAlpha1 = p * 0.65;
    const shadowAlpha2 = p * 0.40;
    // Border radius: 0px -> 9999px (fully rounded capsule pill ends)
    const radiusPx = Math.round(p * 9999);

    // 5. Typography & Spacing Interpolation:
    const logoSizeRem = isMobile
      ? (1.5 - 0.25 * p).toFixed(3)
      : (1.85 - 0.4 * p).toFixed(3);
    const navGapRem = (2.25 - 0.85 * p).toFixed(3);
    const ctaPyRem = (0.55 - 0.18 * p).toFixed(3);
    const ctaPxRem = (1.3 - 0.35 * p).toFixed(3);

    // Apply directly to DOM nodes without triggering React re-renders (100% 60fps/120fps)
    wrapperRef.current.style.paddingTop = `${currentTopOffset.toFixed(1)}px`;

    const pill = pillRef.current;
    pill.style.width = p === 0 ? "100%" : `${currentWidth.toFixed(1)}px`;
    pill.style.backgroundColor = `rgba(12, 10, 11, ${bgAlpha.toFixed(3)})`;

    // Genuine hardware-accelerated frosted glass blur
    if (blurPx > 0.5) {
      const filterVal = `blur(${blurPx.toFixed(1)}px) saturate(${saturatePct.toFixed(0)}%)`;
      pill.style.backdropFilter = filterVal;
      pill.style.setProperty("-webkit-backdrop-filter", filterVal);
      pill.style.setProperty("--pill-blur", `${blurPx.toFixed(1)}px`);
      pill.style.setProperty("--pill-saturate", `${saturatePct.toFixed(0)}%`);
    } else {
      pill.style.backdropFilter = "none";
      pill.style.setProperty("-webkit-backdrop-filter", "none");
      pill.style.setProperty("--pill-blur", "0px");
      pill.style.setProperty("--pill-saturate", "100%");
    }

    pill.style.borderRadius = `${radiusPx}px`;
    pill.style.borderColor = `rgba(243, 235, 221, ${borderAlpha.toFixed(3)})`;
    pill.style.boxShadow =
      shadowAlpha1 > 0.02
        ? `0 16px 36px -8px rgba(0, 0, 0, ${shadowAlpha1.toFixed(3)}), 0 4px 12px -2px rgba(0, 0, 0, ${shadowAlpha2.toFixed(3)})`
        : "none";
    pill.style.paddingTop = `${currentPyRem.toFixed(2)}rem`;
    pill.style.paddingBottom = `${currentPyRem.toFixed(2)}rem`;
    pill.style.paddingLeft = `${currentPaddingX.toFixed(1)}px`;
    pill.style.paddingRight = `${currentPaddingX.toFixed(1)}px`;

    pill.style.setProperty("--logo-size", `${logoSizeRem}rem`);
    pill.style.setProperty("--nav-gap", `${navGapRem}rem`);
    pill.style.setProperty("--cta-py", `${ctaPyRem}rem`);
    pill.style.setProperty("--cta-px", `${ctaPxRem}rem`);
  }, []);

  useEffect(() => {
    // Run immediately on mount to establish exact state
    updateScrollProgress();

    const handleScroll = () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollProgress);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [updateScrollProgress]);

  // Route change: reset mobile menu & sync state
  useEffect(() => {
    setIsOpen(false);
    updateScrollProgress();
  }, [pathname, updateScrollProgress]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <header
        ref={wrapperRef}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none flex justify-center text-[#F3EBDD] select-none"
        style={{ paddingTop: 0 }}
      >
        <div
          ref={pillRef}
          className="pointer-events-auto flex items-center justify-between border dark-glass-pill"
          style={{
            width: "100%",
            backgroundColor: "rgba(23, 20, 22, 0)",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            borderRadius: "0px",
            borderColor: "rgba(243, 235, 221, 0)",
            boxShadow: "none",
            paddingTop: "1.75rem",
            paddingBottom: "1.75rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          {/* Logo / Brand Wordmark - text-only */}
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F3EBDD]"
            aria-label="JUBLIE School Home"
          >
            <span
              className="font-serif tracking-tight font-medium uppercase text-[#F3EBDD] leading-none"
              style={{
                fontSize: "var(--logo-size, 1.85rem)",
              }}
            >
              JUBLIE
            </span>
          </Link>

          {/* Desktop Navigation - text-only (Gallery removed per directive) */}
          <nav
            className="hidden md:flex items-center"
            style={{
              gap: "var(--nav-gap, 2.25rem)",
            }}
            aria-label="Main Navigation"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm tracking-wide transition-colors duration-200 py-1 relative font-normal whitespace-nowrap",
                    isActive
                      ? "text-[#F3EBDD] font-medium border-b border-[#D9C8B5]"
                      : "text-[#F3EBDD]/80 hover:text-[#F3EBDD]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center space-x-3 shrink-0">
            {/* Desktop CTA - text-only (softly curved rounded-md, NOT pill) */}
            <Link
              href="/admissions/"
              style={{
                paddingTop: "var(--cta-py, 0.55rem)",
                paddingBottom: "var(--cta-py, 0.55rem)",
                paddingLeft: "var(--cta-px, 1.3rem)",
                paddingRight: "var(--cta-px, 1.3rem)",
              }}
              className="hidden sm:inline-flex items-center text-sm font-medium transition-colors duration-200 rounded-md bg-white/10 hover:bg-white/20 border border-[#F3EBDD]/30 hover:border-[#F3EBDD]/60 text-[#F3EBDD] shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Enquire Now</span>
            </Link>

            {/* Mobile Menu Button - text-only MENU / CLOSE */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden px-3.5 py-1.5 rounded-md text-xs font-mono font-medium tracking-wider uppercase text-[#F3EBDD] border border-[#F3EBDD]/30 hover:bg-white/10 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3EBDD]"
              aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - pure text-only */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="fixed inset-0 bg-[#171416]/98 backdrop-blur-2xl text-[#F3EBDD] z-40 md:hidden flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
          style={{ paddingTop: "5.5rem" }}
        >
          <div className="space-y-6 pt-2">
            <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl sm:text-3xl font-serif py-3.5 border-b border-[#2D272B] flex items-center justify-between transition-colors",
                      isActive
                        ? "text-[#F3EBDD] font-medium pl-2 border-[#634137]"
                        : "text-[#D9C8B5] hover:text-[#F3EBDD]"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="text-xs font-mono uppercase tracking-wider text-[#D9C8B5] px-2 py-0.5 rounded border border-[#D9C8B5]/30">
                        Current
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 pb-6 border-t border-[#2D272B] space-y-4">
            <div className="space-y-1.5 text-xs text-[#D9C8B5]">
              <div className="font-mono uppercase tracking-wider text-[#F3EBDD]/70 text-[11px]">
                Admissions &amp; Enquiries
              </div>
              <p>
                Shop No. 11-1-307, New Aghapura X Road, Near Darus Salam, Aghapura, Nampally, Hyderabad
              </p>
              <p>
                Telephone:{" "}
                <a
                  href={SITE_METADATA.verifiedPhoneTel}
                  className="text-[#F3EBDD] underline underline-offset-2"
                >
                  {SITE_METADATA.verifiedPhone}
                </a>
              </p>
            </div>
            <Link
              href="/admissions/"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center text-sm font-medium px-6 py-3.5 bg-[#4A3028] text-[#F3EBDD] hover:bg-[#5A3B31] border border-[#634137] rounded-md transition-colors shadow-sm"
            >
              <span>Explore Admissions</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
