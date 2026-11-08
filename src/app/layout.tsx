import type { Metadata } from "next";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_METADATA.url),
  title: {
    default: "JUBLIE School | English Medium State Board School, Aghapura, Hyderabad",
    template: "%s | JUBLIE School",
  },
  description:
    "Established in 1997 in Aghapura, Nampally, Hyderabad, JUBLIE is a private unaided English-medium school operating under new management since 2023. Offering Nursery to Class X under the Telangana State Board (SSC) syllabus.",
  applicationName: "JUBLIE School",
  authors: [{ name: "JUBLIE School" }],
  generator: "Next.js",
  keywords: [
    "School in Nampally Hyderabad",
    "English medium school in Hyderabad",
    "State Board school in Hyderabad",
    "Nursery to Class X school in Hyderabad",
    "Telangana State Board SSC school",
    "JUBLIE School Aghapura",
    "Private unaided school Hyderabad",
  ],
  openGraph: {
    title: "JUBLIE School | English Medium State Board School, Aghapura, Hyderabad",
    description:
      "Established in 1997 in Aghapura, Nampally, Hyderabad, JUBLIE is an English-medium private unaided school under new management since 2023, offering Nursery to Class X under the Telangana State Board (SSC) syllabus.",
    url: SITE_METADATA.url,
    siteName: "JUBLIE School",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JUBLIE School | English Medium State Board School, Aghapura, Hyderabad",
    description:
      "Established in 1997 in Aghapura, Nampally, Hyderabad, JUBLIE is an English-medium private unaided school under new management since 2023, offering Nursery to Class X under the Telangana State Board (SSC) syllabus.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "JUBLIE School",
    url: SITE_METADATA.url,
    telephone: SITE_METADATA.verifiedPhone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_METADATA.verifiedAddress,
      addressLocality: "Aghapura, Nampally",
      addressRegion: "Hyderabad, Telangana",
      addressCountry: "IN",
    },
    description: SITE_METADATA.description,
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={organizationSchema} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
