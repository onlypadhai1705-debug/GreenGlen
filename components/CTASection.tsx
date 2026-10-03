import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { ctaContent } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function CTASection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: 'clamp(60vh, 80vw, 85vh)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={ctaContent.image}
          alt={ctaContent.imageAlt}
          fill
          sizes="100vw"
          quality={80}
          placeholder="blur"
          blurDataURL={blurData[ctaContent.image]}
          className="object-cover"
          style={{ objectPosition: 'center 35%' }}
        />
      </div>

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(17,26,18,0.72)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(17,26,18,0.3) 100%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-gg relative z-10 py-24 text-center">
        <ScrollReveal delay={0}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span
              className="block h-px w-12"
              style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.6 }}
              aria-hidden="true"
            />
            <span className="text-label" style={{ color: 'var(--color-gg-terracotta)' }}>
              {ctaContent.eyebrow}
            </span>
            <span
              className="block h-px w-12"
              style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.6 }}
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2
            id="cta-heading"
            className="text-display-xl text-gg-ivory mb-6"
            style={{ lineHeight: 1.0 }}
          >
            {ctaContent.headline[0]}
            <br />
            <em
              className="not-italic"
              style={{ color: 'rgba(244,240,232,0.65)' }}
            >
              {ctaContent.headline[1]}
            </em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p
            className="font-display mb-12"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(244,240,232,0.6)',
            }}
          >
            {ctaContent.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-5 w-full">
            <Link
              href={ctaContent.ctaPrimary.href}
              id="final-cta-primary"
              className="btn-primary w-full sm:w-auto justify-center"
              style={{
                backgroundColor: 'var(--color-gg-terracotta)',
                borderColor: 'var(--color-gg-terracotta)',
                padding: '1rem 2.5rem',
                fontSize: '0.75rem',
              }}
            >
              {ctaContent.ctaPrimary.label}
            </Link>
            <Link
              href={ctaContent.ctaSecondary.href}
              id="final-cta-secondary"
              className="btn-outline w-full sm:w-auto justify-center"
            >
              {ctaContent.ctaSecondary.label}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
