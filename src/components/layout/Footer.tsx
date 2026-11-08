import React from "react";
import Link from "next/link";
import { FOOTER_NAV_ITEMS, SITE_METADATA } from "@/lib/constants";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171416] text-[#F3EBDD] border-t border-[#2D272B] pt-16 pb-12">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-[#2D272B]">
          {/* Brand & Introduction */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-tight uppercase font-medium">
                JUBLIE
              </span>
            </Link>
            <p className="text-[#D9C8B5] text-base leading-relaxed max-w-md">
              Established in 1997 in Aghapura, Nampally, Hyderabad. An English-medium private unaided school under new management since 2023, offering Nursery to Class X under the Telangana State Board (SSC) syllabus.
            </p>
            <div className="space-y-4 pt-2 text-sm text-[#D9C8B5]">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#F3EBDD] font-medium mb-0.5">
                  School Address
                </span>
                <span>{SITE_METADATA.verifiedAddress}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#F3EBDD] font-medium mb-0.5">
                  Telephone
                </span>
                <a
                  href={`tel:${SITE_METADATA.verifiedPhone}`}
                  className="hover:text-[#F3EBDD] transition-colors"
                >
                  {SITE_METADATA.verifiedPhone}
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#F3EBDD] font-medium mb-0.5">
                  Visiting &amp; Office Hours
                </span>
                <span>{SITE_METADATA.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Footer Navigation Columns */}
          {FOOTER_NAV_ITEMS.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="font-sans text-xs uppercase tracking-wider text-[#F3EBDD] font-semibold">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#D9C8B5] hover:text-[#F3EBDD] transition-colors inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D9C8B5] gap-4">
          <p>© {new Date().getFullYear()} JUBLIE School. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy/" className="hover:text-[#F3EBDD] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="hover:text-[#F3EBDD] transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact/" className="hover:text-[#F3EBDD] transition-colors">
              Campus Visit
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
