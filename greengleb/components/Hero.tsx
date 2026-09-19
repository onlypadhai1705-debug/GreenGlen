'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { heroContent } from '@/lib/content';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Trigger entrance animation after mount
    const t = setTimeout(() => setLoaded(true), 100);

    // Subtle parallax on scroll
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${y * 0.35}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    const target = document.getElementById('experience');
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Green Glen hero — mudhouse retreat in Sattal, Bhimtal, Uttarakhand"
      className="relative h-screen min-h-[600px] flex items-end overflow-hidden"
      style={{ backgroundColor: 'var(--color-gg-forest-dark)' }}
    >
      {/* Background Image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full will-change-transform"
        style={{ top: '-8%', height: '116%' }}
      >
        <Image
          src={heroContent.image}
          alt={heroContent.imageAlt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: 'center 40%',
            filter: 'brightness(0.72)',
            transition: 'opacity 1.2s ease',
            opacity: loaded ? 1 : 0,
          }}
        />
      </div>

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to top, rgba(17,26,18,0.92) 0%, rgba(17,26,18,0.3) 40%, transparent 70%),
            linear-gradient(to right, rgba(17,26,18,0.2) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="container-gg relative z-10 pb-20 md:pb-28">
        {/* Eyebrow */}
        <p
          className="text-label mb-6"
          style={{
            color: 'rgba(244,240,232,0.65)',
            letterSpacing: '0.22em',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(1.5rem)',
            transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
          }}
        >
          {heroContent.eyebrow}
        </p>

        {/* Headline */}
        <h1
          className="text-display-xl text-gg-ivory mb-3"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
          }}
        >
          {heroContent.headline[0]}
          <br />
          <em className="not-italic" style={{ color: 'rgba(244,240,232,0.85)' }}>
            {heroContent.headline[1]}
          </em>
        </h1>

        {/* Sub-headline */}
        <p
          className="font-display"
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'rgba(244,240,232,0.65)',
            marginBottom: '2.5rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'opacity 1s ease 0.7s, transform 1s ease 0.7s',
          }}
        >
          {heroContent.subline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'opacity 1s ease 0.9s, transform 1s ease 0.9s',
          }}
        >
          <Link
            href={heroContent.ctaPrimary.href}
            id="hero-cta-primary"
            className="btn-primary"
            style={{ backgroundColor: 'var(--color-gg-forest)', borderColor: 'var(--color-gg-forest)' }}
          >
            {heroContent.ctaPrimary.label}
          </Link>
          <Link
            href={heroContent.ctaSecondary.href}
            id="hero-cta-secondary"
            className="btn-outline"
          >
            {heroContent.ctaSecondary.label}
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll to content"
        className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-center gap-2 group"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1.3s',
        }}
      >
        <span
          className="text-label"
          style={{ color: 'rgba(244,240,232,0.45)', fontSize: '0.6rem' }}
        >
          Scroll
        </span>
        <ArrowDown
          size={14}
          strokeWidth={1.5}
          style={{ color: 'rgba(244,240,232,0.45)' }}
          className="group-hover:translate-y-1 transition-transform duration-300"
        />
      </button>
    </section>
  );
}
