import React from 'react';

export type AuraType = 'Discovery' | 'Sessions' | 'SelfCare' | 'Payments' | 'Neutral';

interface AuraBackgroundProps {
  aura?: AuraType;
  children: React.ReactNode;
  className?: string;
}

const auraColors: Record<AuraType, { primary: string; secondary: string }> = {
  Discovery: {
    primary: 'rgba(220, 233, 251, 0.65)', // CalmDiscoveryAura #DCE9FB
    secondary: 'rgba(237, 245, 255, 0.45)',
  },
  Sessions: {
    primary: 'rgba(221, 243, 230, 0.65)', // CalmSessionsAura #DDF3E6
    secondary: 'rgba(239, 251, 243, 0.45)',
  },
  SelfCare: {
    primary: 'rgba(230, 225, 250, 0.65)', // CalmSelfCareAura #E6E1FA
    secondary: 'rgba(244, 240, 253, 0.45)',
  },
  Payments: {
    primary: 'rgba(246, 233, 210, 0.65)', // CalmPaymentsAura #F6E9D2
    secondary: 'rgba(255, 247, 231, 0.45)',
  },
  Neutral: {
    primary: 'rgba(241, 244, 248, 0.65)', // CalmMistSurface #F1F4F8
    secondary: 'rgba(250, 249, 246, 0.45)',
  },
};

export const AuraBackground: React.FC<AuraBackgroundProps> = ({
  aura = 'Discovery',
  children,
  className = '',
}) => {
  const colors = auraColors[aura];

  return (
    <div
      className={`relative min-h-screen bg-canvas text-ink-navy overflow-hidden transition-all duration-700 ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 86% 10%, ${colors.primary} 0%, ${colors.secondary} 35%, transparent 75%),
          radial-gradient(circle at 35% 0%, ${colors.secondary} 0%, transparent 60%),
          linear-gradient(rgba(251, 250, 247, 0.93), rgba(251, 250, 247, 0.95)),
          url('/images/ICFRb.jpg')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Soft ambient noise or subtle overlay can go here if needed, keeping it minimal for maximum performance */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
