'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { openSpaceContent } from '@/lib/content';

export default function OpenSpaceSection() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = 1 - (rect.bottom / (vh + rect.height));
      const scale = 1.06 - progress * 0.06;
      imgRef.current.style.transform = `scale(${Math.max(1, scale)})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      aria-labelledby="open-space-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-ivory)' }}
    >
      <div className="container-gg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-14">
          {/* Left: eyebrow + headline */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-label text-gg-terra">{openSpaceContent.eyebrow}</span>
                <span
                  className="block h-px w-8"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2
                id="open-space-heading"
                className="text-display-lg text-gg-forest"
              >
                {openSpaceContent.headline}
              </h2>
            </ScrollReveal>
          </div>

          {/* Right: body copy */}
          <div className="lg:col-span-5 lg:col-start-8">
            <ScrollReveal delay={2}>
              <p className="text-body" style={{ color: 'var(--color-gg-olive)' }}>
                {openSpaceContent.body}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Full-width image with scale-on-scroll */}
      <ScrollReveal>
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: '21/9', minHeight: '320px' }}
        >
          <div
            ref={imgRef}
            className="absolute inset-0 w-full h-full will-change-transform"
            style={{ transform: 'scale(1.06)', transformOrigin: 'center center' }}
          >
            <Image
              src={openSpaceContent.image}
              alt={openSpaceContent.imageAlt}
              fill
              sizes="100vw"
              quality={82}
              className="object-cover"
              style={{ objectPosition: 'center 40%' }}
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
