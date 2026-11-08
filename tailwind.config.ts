import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#171416",
          coffee: "#4A3028",
          maroon: "#4A3028",
          cream: "#F3EBDD",
          beige: "#D9C8B5",
          "surface-cream": "#FAF6F0",
          "surface-black": "#221D20",
          "border-cream": "#E2D5C3",
          "border-coffee": "#634137",
          "border-maroon": "#634137",
          "border-black": "#2D272B",
          "text-muted": "#685F58",
          "coffee-hover": "#5A3B31",
          "maroon-hover": "#5A3B31",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        xs: "8px",
        sm: "12px",
        md: "14px",
        DEFAULT: "14px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "28px",
        "4xl": "36px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
