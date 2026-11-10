'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { heroContent } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContent = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      aria-label="Green Glen hero"
      className="relative h-screen min-h-[640px] flex items-end overflow-hidden"
      style={{ backgroundColor: 'var(--color-gg-forest-dark)' }}
    >
      {/* Background */}
      <div
        ref={parallaxRef}
        className="absolute will-change-transform"
        style={{ inset: '-10% 0', height: '120%' }}
      >
        <Image
          src={heroContent.image}
          alt={heroContent.imageAlt}
          fill
          preload
          loading="eager"
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurData[heroContent.image] ?? ''}
          className="object-cover"
          style={{
            objectPosition: 'center 35%',
            filter: 'brightness(0.65)',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1.4s ease',
          }}
        />
      </div>

      {/* Multi-layer overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(17,26,18,0.95) 0%, rgba(17,26,18,0.4) 35%, rgba(17,26,18,0.1) 60%, transparent 80%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(17,26,18,0.3) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      {/* Top hair line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(244,240,232,0.3), transparent)',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 2s ease 1s',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-gg relative z-10 pb-20 md:pb-32">
        {/* Location eyebrow */}
        <div
          className="flex items-center gap-4 mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(1.5rem)',
            transition: 'opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s',
          }}
        >
          <span
            className="block h-px w-10"
            style={{ backgroundColor: 'var(--color-gg-terracotta)' }}
            aria-hidden="true"
          />
          <p
            className="text-label"
            style={{ color: 'rgba(244,240,232,0.6)', letterSpacing: '0.22em' }}
          >
            {heroContent.eyebrow}
          </p>
        </div>

        {/* Headline — split lines for staggered reveal */}
        <div className="overflow-hidden mb-2">
          <h1
            className="text-display-xl text-gg-ivory"
            style={{
              display: 'block',
              transform: loaded ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 1s cubic-bezier(0.76,0,0.24,1) 0.55s',
            }}
          >
            {heroContent.headline[0]}
          </h1>
        </div>
        <div className="overflow-hidden mb-6">
          <span
            className="text-display-xl block font-display"
            style={{
              fontStyle: 'italic',
              color: 'rgba(244,240,232,0.7)',
              transform: loaded ? 'translateY(0)' : 'translateY(110%)',
              transition: 'transform 1.1s cubic-bezier(0.76,0,0.24,1) 0.7s',
            }}
          >
            {heroContent.headline[1]}
          </span>
        </div>

        {/* Subline */}
        <p
          className="font-display"
          style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.75rem)',
            fontStyle: 'italic',
            color: 'rgba(244,240,232,0.55)',
            marginBottom: '2.5rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(1.5rem)',
            transition: 'opacity 1s ease 0.95s, transform 1s ease 0.95s',
          }}
        >
          {heroContent.subline}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(1.5rem)',
            transition: 'opacity 1s ease 1.1s, transform 1s ease 1.1s',
          }}
        >
          <Link
            href={heroContent.ctaPrimary.href}
            className="btn-primary w-full sm:w-auto justify-center"
            style={{
              backgroundColor: 'var(--color-gg-terracotta)',
              borderColor: 'var(--color-gg-terracotta)',
            }}
          >
            {heroContent.ctaPrimary.label}
          </Link>
          <Link
            href={heroContent.ctaSecondary.href}
            className="btn-outline w-full sm:w-auto justify-center"
          >
            {heroContent.ctaSecondary.label}
          </Link>
        </div>
      </div>

      {/* Stats strip */}
      <div
        className="absolute bottom-8 right-0 md:right-16 z-10 hidden md:flex flex-col gap-5"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 1.4s' }}
        aria-hidden="true"
      >
        {[
          { num: '20+', label: 'Guests' },
          { num: '500+', label: 'Bird Species' },
          { num: '6hrs', label: 'From Delhi' },
        ].map((stat) => (
          <div key={stat.label} className="text-right">
            <div
              className="font-display"
              style={{
                fontSize: '1.5rem',
                fontWeight: 300,
                color: 'var(--color-gg-ivory)',
                lineHeight: 1,
              }}
            >
              {stat.num}
            </div>
            <div
              className="text-label"
              style={{ color: 'rgba(244,240,232,0.4)', fontSize: '0.55rem' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 1.6s' }}
      >
        <span
          className="text-label"
          style={{ color: 'rgba(244,240,232,0.4)', fontSize: '0.55rem' }}
        >
          Scroll
        </span>
        <ArrowDown
          size={14}
          strokeWidth={1.5}
          style={{ color: 'rgba(244,240,232,0.4)' }}
          className="group-hover:translate-y-1 transition-transform duration-300 animate-float"
        />
      </button>
    </section>
  );
}
