'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig, whatsappStayUrl } from '@/lib/content';

export default function MobileBottomDock() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling past the first 250px of the page
      setVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-label="Quick booking and contact actions"
      className={`fixed bottom-4 inset-x-3 sm:inset-x-6 z-40 lg:hidden pointer-events-none transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <div
        className="pointer-events-auto mx-auto max-w-md flex items-center justify-between p-2 pl-4 rounded-full shadow-2xl"
        style={{
          backgroundColor: 'rgba(20, 35, 22, 0.92)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(200, 116, 86, 0.35)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
        }}
      >
        {/* Brand Label */}
        <div className="flex flex-col">
          <span
            className="font-display tracking-wider leading-none"
            style={{ color: 'var(--color-gg-ivory)', fontSize: '0.8125rem' }}
          >
            GREEN GLEN
          </span>
          <span
            className="text-label mt-0.5"
            style={{ color: 'rgba(244, 240, 232, 0.55)', fontSize: '0.5625rem', letterSpacing: '0.12em' }}
          >
            Sattal · Uttarakhand
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Direct Call Button */}
          {siteConfig.phone && (
            <Link
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              aria-label={`Call Green Glen at ${siteConfig.phone}`}
              className="p-2.5 rounded-full transition-transform active:scale-90 flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(244, 240, 232, 0.1)',
                border: '1px solid rgba(244, 240, 232, 0.15)',
                color: 'var(--color-gg-ivory)',
              }}
            >
              <Phone size={15} strokeWidth={1.8} />
            </Link>
          )}

          {/* Primary WhatsApp Plan Stay Button */}
          <Link
            href={whatsappStayUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Plan stay via WhatsApp"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-medium transition-transform active:scale-95 shadow-md"
            style={{
              backgroundColor: 'var(--color-gg-terracotta)',
              color: 'var(--color-gg-white)',
              fontSize: '0.75rem',
              letterSpacing: '0.04em',
            }}
          >
            <MessageCircle size={15} strokeWidth={2} />
            <span>Plan Stay</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

