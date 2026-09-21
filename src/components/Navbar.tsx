'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-hairline sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo container */}
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

        {/* Desktop Navigation Links */}
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-ink-navy hover:text-sphere-blue transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            // Close icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-hairline bg-white/95 backdrop-blur-lg absolute top-20 left-0 w-full shadow-lg transition-all duration-300 z-40 animate-in fade-in slide-in-from-top-5">
          <div className="flex flex-col p-6 gap-6">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-bold text-slate hover:text-ink-navy py-2 border-b border-hairline/50 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/specialists"
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-bold text-slate hover:text-ink-navy py-2 border-b border-hairline/50 transition-colors"
            >
              Find a Specialist
            </Link>
            
            <a
              href="/zambia-health-v1.apk"
              download
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-4 bg-ink-navy text-white text-center text-xs font-bold tracking-wider uppercase rounded-standard hover:bg-sphere-blue transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Android App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
