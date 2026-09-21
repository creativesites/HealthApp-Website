import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Practitioner, SpecialtyInfo } from '../data/mockData';

interface PractitionerCardProps {
  practitioner: Practitioner;
}

export const PractitionerCard: React.FC<PractitionerCardProps> = ({ practitioner }) => {
  const specialtyLabel = SpecialtyInfo[practitioner.primarySpecialty]?.displayName || practitioner.primarySpecialty;

  return (
    <div className="bg-white border border-hairline rounded-standard shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Visual Header / Avatar Container */}
      <div className="relative h-48 w-full bg-mist-surface flex items-center justify-center overflow-hidden">
        {practitioner.imagePath ? (
          <Image
            src={practitioner.imagePath}
            alt={practitioner.fullName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="w-16 h-16 bg-sphere-blue/10 border border-sphere-blue/20 rounded-standard flex items-center justify-center text-xl font-bold text-sphere-blue">
            {practitioner.avatarInitials}
          </div>
        )}
        
        {/* Verification Tag */}
        {practitioner.isVerified && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md border border-emerald/25 text-emerald text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-small shadow-sm">
            HPCZ Verified
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category & Rating */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold text-sphere-blue tracking-wider uppercase">
            {specialtyLabel}
          </span>
          <div className="flex items-center gap-1">
            {/* Simple SVG star */}
            <svg className="w-4 h-4 text-honey-gold fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-xs font-bold text-ink-navy">{practitioner.rating}</span>
            <span className="text-xs text-soft-slate">({practitioner.reviewCount})</span>
          </div>
        </div>

        {/* Name & Credentials */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-ink-navy tracking-tight hover:text-sphere-blue transition-colors duration-200">
            {practitioner.title} {practitioner.fullName}
          </h3>
          <p className="text-xs text-soft-slate mt-1 font-semibold truncate">
            {practitioner.credentials.join(' • ')}
          </p>
        </div>

        {/* Bio summary */}
        <p className="text-sm text-slate line-clamp-3 leading-relaxed mb-6">
          {practitioner.bio}
        </p>

        {/* Location & Practice */}
        <div className="border-t border-hairline pt-4 mt-auto flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-xs text-slate">
            <svg className="w-4 h-4 text-soft-slate flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{practitioner.location.area}, {practitioner.location.city}</span>
          </div>
          {practitioner.practice && (
            <div className="flex items-center gap-2 text-xs text-slate">
              <svg className="w-4 h-4 text-soft-slate flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="truncate">{practitioner.practice.name}</span>
            </div>
          )}
        </div>

        {/* Action Button & Pricing */}
        <div className="flex items-center justify-between gap-4 mt-6 pt-4 border-t border-hairline">
          <div>
            <span className="text-[10px] font-bold text-soft-slate tracking-widest uppercase block">Starting at</span>
            <span className="text-base font-extrabold text-ink-navy">ZMW {practitioner.startingPriceZmw.toFixed(2)}</span>
          </div>
          <Link
            href={`/specialists/${practitioner.id}`}
            className="px-4 py-2 bg-mist-surface text-ink-navy border border-hairline hover:bg-ink-navy hover:text-white hover:border-ink-navy text-xs font-bold tracking-wider uppercase rounded-small transition-all duration-300"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
