'usemain'; // NextJS client component flag
'use client';

import React, { useState, useMemo } from 'react';
import { AuraBackground } from '../../components/AuraBackground';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { PractitionerCard } from '../../components/PractitionerCard';
import { practitioners, SpecialtyInfo } from '../../data/mockData';

export default function SpecialistsDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('ALL');
  const [selectedCity, setSelectedCity] = useState<string>('ALL');

  // Gather unique cities from practitioners
  const cities = useMemo(() => {
    const list = new Set(practitioners.map((p) => p.location.city));
    return Array.from(list);
  }, []);

  // Filter practitioners based on active filters
  const filteredPractitioners = useMemo(() => {
    return practitioners.filter((p) => {
      // Name or credential search match
      const matchesSearch =
        p.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.credentials.some((cred) => cred.toLowerCase().includes(searchTerm.toLowerCase()));

      // Specialty match
      const matchesSpecialty =
        selectedSpecialty === 'ALL' || p.primarySpecialty === selectedSpecialty;

      // City match
      const matchesCity = selectedCity === 'ALL' || p.location.city === selectedCity;

      return matchesSearch && matchesSpecialty && matchesCity;
    });
  }, [searchTerm, selectedSpecialty, selectedCity]);

  return (
    <AuraBackground aura="Discovery">
      <Navbar />

      {/* Directory Page Header */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <span className="text-xs font-bold tracking-widest text-sphere-blue uppercase bg-sphere-blue/5 border border-sphere-blue/10 px-4 py-2 rounded-small shadow-sm inline-block">
          Specialist Registry
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-ink-navy tracking-tight mt-4">
          Zambia Specialist Directory
        </h1>
        <p className="text-sm md:text-base text-slate leading-relaxed mt-2 max-w-2xl">
          Search and find verified, HPCZ-accredited medical and mental wellness professionals. Browse details and download the mobile app to initiate direct, bidirectional clinical booking.
        </p>
      </header>

      {/* Filters & Search Controls Section */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-white border border-hairline rounded-standard p-6 md:p-8 shadow-sm flex flex-col gap-6">
          {/* Search bar input */}
          <div className="relative w-full">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-soft-slate"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by specialist name, title, or clinical credentials (e.g., 'UNZA', 'CBT')..."
              className="w-full pl-12 pr-4 py-3.5 bg-canvas border border-hairline rounded-standard text-sm text-ink-navy placeholder:text-soft-slate focus:outline-none focus:border-sphere-blue focus:ring-1 focus:ring-sphere-blue transition-all"
            />
          </div>

          {/* Specialty & Location Filter Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Specialty Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-soft-slate">
                Filter by Specialty
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full bg-canvas border border-hairline rounded-standard px-4 py-3 text-sm text-ink-navy focus:outline-none focus:border-sphere-blue focus:ring-1 focus:ring-sphere-blue transition-all cursor-pointer"
              >
                <option value="ALL">All Specialties</option>
                {Object.entries(SpecialtyInfo).map(([key, info]) => (
                  <option key={key} value={key}>
                    {info.displayName}
                  </option>
                ))}
              </select>
            </div>

            {/* City Selection */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-soft-slate">
                Filter by City
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-canvas border border-hairline rounded-standard px-4 py-3 text-sm text-ink-navy focus:outline-none focus:border-sphere-blue focus:ring-1 focus:ring-sphere-blue transition-all cursor-pointer"
              >
                <option value="ALL">All Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Results */}
      <main className="max-w-7xl mx-auto px-6 pb-24">
        {filteredPractitioners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPractitioners.map((practitioner) => (
              <PractitionerCard key={practitioner.id} practitioner={practitioner} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-hairline rounded-prominent p-12 text-center shadow-sm max-w-xl mx-auto flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-crisis-coral-soft rounded-standard border border-crisis-coral/10 flex items-center justify-center text-crisis-coral">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-ink-navy">No Specialists Found</h3>
            <p className="text-sm text-slate leading-relaxed">
              We couldn&apos;t find any healthcare professionals matching your selected filters. Try broadening your keywords or resetting your specialty and city options.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedSpecialty('ALL');
                setSelectedCity('ALL');
              }}
              className="mt-2 px-5 py-2.5 bg-ink-navy text-white text-xs font-bold tracking-wider uppercase rounded-standard hover:bg-sphere-blue transition-colors duration-200"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </AuraBackground>
  );
}
