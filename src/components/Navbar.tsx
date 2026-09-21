import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-hairline sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Icon representation */}
          <div className="relative w-11 h-11 border border-hairline rounded-standard overflow-hidden bg-white flex items-center justify-center p-0.5 shadow-sm">
            <Image
              src="/images/80b61d5c-35e3-4a07-a723-80c971d28f31.png"
              alt="Zambia Health Sanctuary Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-ink-navy block">
              Zambia Health Sanctuary
            </span>
            <span className="text-xs text-slate tracking-wide uppercase block -mt-1 font-semibold">
              HPCZ Verified Directory
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-semibold text-slate hover:text-ink-navy transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/specialists"
            className="text-sm font-semibold text-slate hover:text-ink-navy transition-colors duration-200"
          >
            Find a Specialist
          </Link>
          <span className="h-4 w-[1px] bg-hairline"></span>
          <a
            href="/zambia-health-v1.apk"
            download
            className="px-5 py-2.5 bg-ink-navy text-white text-xs font-bold tracking-wider uppercase rounded-standard hover:bg-sphere-blue hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
          >
            Download Android App
          </a>
        </div>

        {/* Mobile App Download Button Only (visible on mobile) */}
        <div className="md:hidden">
          <a
            href="/zambia-health-v1.apk"
            download
            className="px-4 py-2 bg-ink-navy text-white text-xs font-bold tracking-wider uppercase rounded-standard hover:bg-sphere-blue transition-all"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
};
