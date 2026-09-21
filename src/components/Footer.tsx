import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-matte text-slate border-t border-dark-matte-border w-full py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 border border-dark-matte-border rounded-standard overflow-hidden bg-white flex items-center justify-center p-0.5 shadow-sm">
              <Image
                src="/images/80b61d5c-35e3-4a07-a723-80c971d28f31.png"
                alt="Zambia Health Sanctuary Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <span className="text-white text-lg font-bold tracking-tight">
              Zambia Health Sanctuary
            </span>
          </div>
          <p className="text-sm text-soft-slate leading-relaxed">
            A secure digital platform connecting patient communities with accredited healthcare specialists across Zambia. Our directory features practitioners registered with the Health Professions Council of Zambia (HPCZ).
          </p>
        </div>

        {/* Links column */}
        <div className="flex flex-col gap-4">
          <span className="text-white text-sm font-bold uppercase tracking-wider">
            Quick Links
          </span>
          <div className="flex flex-col gap-2.5">
            <Link
              href="/"
              className="text-sm hover:text-white transition-colors duration-200"
            >
              Home / Overview
            </Link>
            <Link
              href="/specialists"
              className="text-sm hover:text-white transition-colors duration-200"
            >
              Specialist Directory
            </Link>
            <a
              href="/zambia-health-v1.apk"
              download
              className="text-sm hover:text-white transition-colors duration-200"
            >
              Download Android Showcase APK
            </a>
          </div>
        </div>

        {/* Accreditation column */}
        <div className="flex flex-col gap-4">
          <span className="text-white text-sm font-bold uppercase tracking-wider">
            Regulatory Compliance
          </span>
          <p className="text-sm text-soft-slate leading-relaxed">
            All practitioners listed on the Zambia Health Sanctuary platform must maintain active accreditation with the HPCZ. Practice affiliations include major medical institutions: University Teaching Hospital (UTH) Lusaka, Levy Mwanawasa University Teaching Hospital, and Ndola Specialist Polyclinic.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-dark-matte-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-soft-slate">
        <span>
          &copy; {new Date().getFullYear()} Zambia Health Sanctuary. All rights reserved.
        </span>
        <span className="tracking-wide uppercase font-semibold text-[10px] bg-dark-matte-surface px-3 py-1.5 rounded-small border border-dark-matte-border text-emerald">
          Official Clinical ShowCase v1.0.0
        </span>
      </div>
    </footer>
  );
};
