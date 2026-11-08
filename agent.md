# JUBLIE Project Guidelines & Master Specification (`agent.md`)

> **CRITICAL DIRECTIVE FOR ALL AGENTS & DEVELOPERS:**  
> This document is the single source of truth for the entire JUBLIE project. You must thoroughly read and strictly adhere to all instructions, design philosophies, technical standards, and editorial policies contained herein before planning, writing content, designing UI/UX components, writing code, or modifying existing features. Do not deviate from these rules.

---

## 1. Project Philosophy & Visual Identity

JUBLIE embodies a simple, clean, premium, modern, and impressive visual identity. The design must project elegance, substance, and trust rather than flashiness.

### Aesthetic Principles
- **Restrained & Sophisticated Color Palette:** Use a disciplined color system with rich foundational tones, high-contrast readable neutrals, and purposeful accent hues. Avoid rainbow effects, neon overload, or arbitrary color changes.
- **Generous Spacing & White Space:** Ensure sections have room to breathe. Use consistent grid padding and section separation to highlight content without clutter.
- **Visual Hierarchy & Alignment:** Maintain absolute alignment across grids and containers. Structure information so the viewer's eye flows naturally from primary messages to supporting details.
- **Immersive & Interactive:** The website must feel like a living, polished digital experience, not a generic, static brochure or template.
- **Cinematic Storytelling & Purposeful Motion:** Integrate fluid micro-interactions, smooth reveals, and scroll-linked depth that enhance storytelling. Every animation must serve a clear purpose—never add motion solely for decoration, and never degrade frame rates or performance.

---

## 2. Strict Design & UI Prohibitions

To preserve our refined brand identity, the following elements are **strictly forbidden** across all pages, layouts, and components:

1. **NO Eyebrow / Kicker Text:**
   - Never place small introductory labels, uppercase sub-headers, or category tags immediately above headings (e.g., no "ABOUT OUR INSTITUTION" floating above the main H1/H2). Headings must stand strong on their own.
2. **NO Pill-Shaped Elements:**
   - Never use pill-shaped (`border-radius: 9999px` / `rounded-full`) buttons, badges, chips, tags, pills, or containers.
   - Use clean, modern geometric radius standards (e.g., sharp corners `0px` or subtle refinement `4px` to `8px` maximum, applied consistently).
3. **NO Decorative Status Dots:**
   - Never include pulsing green dots, blinking indicators, decorative colored circle markers, or arbitrary status pips next to text, headings, or cards.
4. **NO Cluttered Decorative Elements:**
   - Avoid floating shapes, arbitrary background blobs, messy zig-zags, and unnecessary decorative icons that add visual noise.

---

## 3. Typography & Hierarchy

A unified, predictable typography scale creates cohesion and authority. All pages must adhere to the same typographic system.

### Predefined Type Scale
- **H1 (Hero / Page Main Heading):** 
  - Desktop: `3.5rem` – `4.5rem` (56px – 72px) | Mobile: `2.25rem` – `2.75rem` (36px – 44px)
  - Line height: `1.1` – `1.15` | Tracking: slightly tight
- **H2 (Major Section Heading):** 
  - Desktop: `2.25rem` – `3rem` (36px – 48px) | Mobile: `1.75rem` – `2rem` (28px – 32px)
  - Line height: `1.2` – `1.25`
- **H3 (Sub-section / Card Group Heading):** 
  - Desktop: `1.5rem` – `1.75rem` (24px – 28px) | Mobile: `1.25rem` – `1.375rem` (20px – 22px)
  - Line height: `1.3`
- **Subheadings & Lead Paragraphs:** 
  - Desktop: `1.125rem` – `1.25rem` (18px – 20px) | Mobile: `1rem` – `1.125rem` (16px – 18px)
  - Line height: `1.5` – `1.6`
- **Body Text:** 
  - Standard: `1rem` (16px) | Line height: `1.6` – `1.7`
- **Supporting / Caption / Legal Text:** 
  - Standard: `0.875rem` (14px) | Minimum allowed: `0.75rem` (12px) | Line height: `1.5`

### Typographic Rules
- Use clean, premium, high-legibility typefaces (e.g., a balanced modern serif or clean geometric/grotesque sans-serif for headings paired with a neutral, highly readable sans-serif for body copy).
- Never mix more than two font families across the entire platform.
- Ensure strict contrast ratios meeting or exceeding WCAG AAA standards for body text and AA for large headers.

---

## 4. Content, Voice & Editorial Standards

Content defines perception. The tone of JUBLIE must be articulate, confident, grounded, and welcoming.

### Voice & Language
- **Simple, Clear, Natural English:** Write directly and authentically. Avoid convoluted syntax, overly academic jargon, or pretentious vocabulary.
- **No Artificial Intelligence Clichés:** Strictly eliminate AI tropes, buzzwords, and marketing fluff, including:
  - *"delve", "testament to", "tapestry", "beacon of excellence", "transformative journey", "fostering a holistic environment", "unleash your potential", "elevate", "synergy", "cutting-edge"*.
- **No Exaggerated Claims:** Make grounded, factual, and credible statements.
- **No Repetitive Content:** Each section must provide distinct, informative value. Do not repeat value propositions across consecutive cards or paragraphs.
- **Spell Out Words Fully:** Never use unnecessary abbreviations, slang, or short forms (e.g., write "Mathematics" or "Physical Education" rather than informal truncations, unless an acronym is a universally recognized standard institution title).

### Factual Integrity
- **NEVER Hallucinate or Invent Data:** 
  - Never fabricate school information, historical dates, statistics, enrollment numbers, student-to-teacher ratios, campus acreage, academic boards, facilities, achievements, awards, or student/parent testimonials.
  - If official data is not yet provided, use cleanly designated, clearly identifiable configuration keys, props, or schema placeholders (e.g., `[School Motto Placeholder]`, `[Contact Phone Number]`) or request clarification from the project owner before publishing.

---

## 5. SEO Strategy & Content Structure

Every page must be structurally optimized for organic search discovery, indexability, and user intent.

### Heading Structure
- **One H1 per page:** The H1 must be clear, descriptive, and accurately capture the core mission and primary search topic of the page.
- **Logical H2 & H3 Hierarchy:** 
  - H2s must segment primary topics logically.
  - H3s must break down sub-topics or structured cards within that section.
  - Never skip heading levels (e.g., do not jump directly from H1 to H3).
- **Descriptive & Meaningful:** Headings must convey clear context even when read in isolation (avoid vague titles like "Learn More", "Features", or "Our Approach" without qualifying context).

### Meta Information & Structured Data
- Every page must specify:
  - Unique, keyword-aligned `title` (50–60 characters) formatted consistently: `Page Topic | JUBLIE`.
  - Compelling `meta description` (140–160 characters) summarizing page intent and driving click-through.
  - Canonical URL tags.
  - OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) and Twitter card tags.
  - Appropriate JSON-LD Schema markup (e.g., `EducationalOrganization`, `School`, `BreadcrumbList`, `WebPage`, `FAQPage` where relevant).

---

## 6. Functional & Backend Standards

A premium experience requires flawless execution behind the scenes.

- **Real, Working Functionality:**
  - Every button, hyperlink, form submission, modal trigger, tab switch, and filter must be wired and genuinely functional.
  - No dead links, `href="#"` placeholders without event handlers, or unresponsive forms.
- **Form Handling & Validation:**
  - Client-side validation with real-time, helpful error feedback.
  - Proper server-side sanitization, submission handling, rate-limiting, and state feedback (loading spinners, success confirmations, clear error handling).
  - Accessible form controls: explicit `<label>` bindings, autocomplete attributes, `aria-describedby` error associations, and keyboard focus states.
- **Backend & API Integrations:**
  - Standardized API route architecture with centralized request handlers and error interceptors.
  - Resilient network error recovery, timeout handling, and graceful offline/degraded fallbacks.
  - Secure credential management using environment variables (`.env`). No sensitive keys hardcoded in frontend bundles.

---

## 7. Frontend Engineering & Code Quality

The codebase must reflect clean engineering practices, scalability, and maintainability.

### Architecture & Component Design
- **Single Responsibility & Modularity:** Break interfaces down into reusable, self-contained components with clean property interfaces (TypeScript interfaces/types mandatory).
- **Design Tokens & Theme Consistency:** Centralize all colors, typography values, spacing scales, shadows, and breakpoints in design tokens or framework configuration (e.g., Tailwind config / CSS variables).
- **Strict Typing:** Avoid `any` types. Provide robust interfaces for all data models, API payloads, and component props.
- **Code Cleanliness:** Remove unused imports, dead CSS classes, and commented-out code blocks before merging.

### Responsive Design
- **Mobile-First Approach:** Design and test on mobile screen widths (320px–375px), tablets (768px–1024px), standard laptops (1280px–1440px), and ultrawide screens (1920px+).
- **Touch Targets:** Minimum interactive touch target size of 44px × 44px on touch viewports.
- **Fluid Layouts:** Utilize flexbox, CSS grid, and responsive clamp calculations for smooth scaling across intermediate viewport sizes.

---

## 8. Performance & Optimization

JUBLIE must achieve near-perfect Lighthouse performance benchmarks across both mobile and desktop.

- **Fast Loading Metrics:** Aim for Core Web Vitals targets:
  - Largest Contentful Paint (LCP) < 2.0s
  - First Input Delay (FID) / Interaction to Next Paint (INP) < 100ms
  - Cumulative Layout Shift (CLS) < 0.05
- **Asset Optimization:**
  - Next-gen image formats (`WebP`, `AVIF`) with explicit `width`, `height`, and `sizes` attributes to prevent layout shifts.
  - Responsive image `srcset` and lazy loading for images below the fold.
  - Minify and tree-shake JavaScript and CSS bundles.
  - Self-host fonts with `font-display: swap` or preload critical font files.
- **Smooth Animation Performance:**
  - Animate exclusively using GPU-accelerated CSS properties (`transform`, `opacity`).
  - Never trigger costly layout repaints or reflows (e.g., do not animate `width`, `height`, `margin`, `top`, `left`).
  - Honor user preferences with `@media (prefers-reduced-motion: reduce)`.

---

## 9. Accessibility (a11y)

The website must be welcoming and usable for all visitors without barrier.

- **WCAG 2.1 AA Compliance (Minimum):**
  - High contrast text on all backgrounds.
  - Visible, non-intrusive focus rings on interactive elements for keyboard navigators.
  - Logical DOM order matching visual reading flow.
  - Informative `alt` text on all contextual images; empty `alt=""` for purely decorative imagery.
  - Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Correct ARIA attributes (`aria-expanded`, `aria-controls`, `aria-label`, `aria-hidden`) on dynamic UI components such as accordions, mobile navigation drawers, and dialogs.

---

## 10. Execution Checklist for Agents & Engineers

Before declaring any task or phase complete, verify against this checklist:

- [ ] Has `agent.md` been consulted and honored throughout the implementation?
- [ ] Are all headings structured properly (H1 -> H2 -> H3) with SEO-rich, natural descriptions?
- [ ] Are eyebrow text, pill buttons/chips, and decorative status dots completely absent?
- [ ] Is all copy written in clear, simple, human English with zero AI fluff or exaggerated claims?
- [ ] Are all dates, statistics, facts, and testimonials authentic (or verified with the project owner)?
- [ ] Does every button, link, and interactive widget function as expected without broken states?
- [ ] Is typography scale and spacing strictly consistent with the global scale?
- [ ] Is the design fully responsive and tested across mobile, tablet, and desktop?
- [ ] Are animations smooth, lightweight, purposeful, and GPU-accelerated?
- [ ] Are metadata, OpenGraph tags, and semantic schema implemented?

