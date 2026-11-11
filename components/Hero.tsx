'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Leaf } from 'lucide-react';
import { heroContent } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const slides = heroContent.images;

  // Auto-advance slideshow smoothly every 5.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 150);
    
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
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
      className="relative min-h-[100svh] sm:min-h-[640px] md:min-h-[700px] flex items-end overflow-hidden"
      style={{ backgroundColor: 'var(--color-gg-forest-dark)' }}
    >
      {/* Background with enhanced parallax & smooth slideshow cross-fade */}
      <div
        ref={parallaxRef}
        className="absolute will-change-transform"
        style={{ 
          inset: '-10% 0', 
          height: '125%',
          transition: 'transform 0.1s linear'
        }}
      >
        {slides.map((slide, idx) => {
          const isActive = currentSlide === idx;
          return (
            <div
              key={slide.src}
              className="absolute inset-0"
              style={{
                opacity: loaded && isActive ? 1 : 0,
                transition: 'opacity 1600ms cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: isActive ? 1 : 0,
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                loading={idx === 0 ? 'eager' : 'lazy'}
                quality={82}
                sizes="100vw"
                placeholder="blur"
                blurDataURL={blurData[slide.src] ?? ''}
                className="object-cover"
                style={{
                  objectPosition: slide.objectPosition ?? 'center 35%',
                  filter: 'brightness(0.62) contrast(1.1)',
                  transform: isActive ? 'scale(1.02)' : 'scale(1.08)',
                  transition: 'transform 6000ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Enhanced gradient overlays for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(26,46,28,0.98) 0%, rgba(26,46,28,0.6) 30%, rgba(26,46,28,0.2) 55%, rgba(26,46,28,0) 80%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at bottom, rgba(26,46,28,0.4) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Floating organic shape */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '15%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(168, 184, 159, 0.08) 0%, transparent 70%)',
          borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
          filter: 'blur(60px)',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 2s ease 0.8s',
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
      <div className="container-gg relative z-10 pb-24 md:pb-36">
        {/* Location eyebrow with icon */}
        <div
          className="flex items-center gap-4 mb-10"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
          }}
        >
          <div
            className="flex items-center justify-center"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(168, 184, 159, 0.15)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Leaf size={14} strokeWidth={1.8} color="rgba(249,247,244,0.8)" />
          </div>
          <span
            className="block h-px flex-1 max-w-[60px]"
            style={{ 
              background: 'linear-gradient(to right, rgba(200,116,86,0.6), transparent)',
            }}
            aria-hidden="true"
          />
          <p
            className="text-label"
            style={{ color: 'rgba(249,247,244,0.7)', letterSpacing: '0.24em' }}
          >
            {heroContent.eyebrow}
          </p>
        </div>

        {/* Headline — enhanced reveal */}
        <div className="mb-8 max-w-5xl">
          <div className="overflow-hidden mb-2">
            <h1
              className="text-display-xl"
              style={{
                color: 'var(--color-gg-white)',
                display: 'block',
                transform: loaded ? 'translateY(0)' : 'translateY(110%)',
                transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1) 0.6s',
              }}
            >
              {heroContent.headline[0]}
            </h1>
          </div>
          <div className="overflow-hidden">
            <span
              className="text-display-xl block font-display"
              style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, rgba(249,247,244,0.9) 0%, rgba(168,184,159,0.7) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                transform: loaded ? 'translateY(0)' : 'translateY(110%)',
                transition: 'transform 1.3s cubic-bezier(0.16,1,0.3,1) 0.75s',
              }}
            >
              {heroContent.headline[1]}
            </span>
          </div>
        </div>

        {/* Subline with glass background */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'opacity 1s ease 1s, transform 1s ease 1s',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--radius-sm)',
            }}
          >
            <p
              className="font-display"
              style={{
                fontSize: 'clamp(1.15rem, 2.5vw, 1.875rem)',
                fontStyle: 'italic',
                color: 'rgba(249,247,244,0.8)',
                fontWeight: 400,
              }}
            >
              {heroContent.subline}
            </p>
          </div>
        </div>

        {/* CTAs with enhanced hover */}
        <div
          className="flex flex-col sm:flex-row gap-5"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(2rem)',
            transition: 'opacity 1s ease 1.15s, transform 1s ease 1.15s',
          }}
        >
          <Link
            href={heroContent.ctaPrimary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto justify-center magnetic-hover"
            style={{
              backgroundColor: 'var(--color-gg-terracotta)',
              borderColor: 'var(--color-gg-terracotta)',
            }}
          >
            {heroContent.ctaPrimary.label}
          </Link>
          <Link
            href={heroContent.ctaSecondary.href}
            className="btn-outline w-full sm:w-auto justify-center magnetic-hover"
          >
            {heroContent.ctaSecondary.label}
          </Link>
        </div>
      </div>

      {/* Stats strip with glass effect */}
      <div
        className="absolute bottom-12 right-0 md:right-20 z-10 hidden md:block"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 1.4s' }}
        aria-hidden="true"
      >
        <div
          style={{
            padding: '1.5rem 1.25rem',
            background: 'rgba(26, 46, 28, 0.4)',
            backdropFilter: 'blur(24px) saturate(180%)',
            WebkitBackdropFilter: 'blur(24px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          <div className="flex flex-col gap-6">
            {[
              { num: '20+', label: 'Guests' },
              { num: '500+', label: 'Bird Species' },
              { num: '6hrs', label: 'From Delhi' },
            ].map((stat, i) => (
              <div key={stat.label} className="text-right">
                <div
                  className="font-display"
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 400,
                    color: 'var(--color-gg-white)',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}
                >
                  {stat.num}
                </div>
                <div
                  className="text-label"
                  style={{ color: 'rgba(249,247,244,0.5)', fontSize: '0.5625rem' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minimalist Slideshow Indicators */}
      <div
        className="absolute bottom-6 left-4 sm:bottom-8 sm:left-8 md:left-12 z-20 flex items-center gap-1.5 sm:gap-2"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 1.5s' }}
        aria-label="Hero photo slideshow pagination"
      >
        {slides.map((slide, idx) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Show hero slide ${idx + 1}`}
            className="group relative py-2 px-1 focus-visible:outline-none cursor-pointer"
          >
            <span
              className="block h-[3px] rounded-full transition-all duration-500 ease-out"
              style={{
                width: currentSlide === idx ? '2rem' : '0.75rem',
                backgroundColor: currentSlide === idx
                  ? 'var(--color-gg-terracotta)'
                  : 'rgba(244, 240, 232, 0.4)',
                boxShadow: currentSlide === idx ? '0 0 10px rgba(200, 116, 86, 0.5)' : 'none',
              }}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator with enhanced animation */}
      <button
        onClick={scrollToContent}
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 group"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 1.6s' }}
      >
        <span
          className="text-label"
          style={{ color: 'rgba(249,247,244,0.5)', fontSize: '0.5625rem' }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(249,247,244,0.4), transparent)',
          }}
          aria-hidden="true"
        />
        <ArrowDown
          size={16}
          strokeWidth={1.5}
          style={{ color: 'rgba(249,247,244,0.5)' }}
          className="group-hover:translate-y-1 transition-transform duration-500 animate-float"
        />
      </button>
    </section>
  );
}
