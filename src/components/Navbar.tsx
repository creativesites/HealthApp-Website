import React from 'react';
import Link from 'next/link';

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-hairline sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Icon representation */}
          <div className="w-10 h-10 bg-emerald/10 border border-emerald/20 flex items-center justify-center rounded-standard group-hover:bg-emerald/20 transition-all duration-300">
            <svg
              className="w-5 h-5 text-emerald"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
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
