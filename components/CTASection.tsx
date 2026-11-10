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
      style={{ minHeight: 'clamp(70vh, 85vw, 90vh)' }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={ctaContent.image}
          alt={ctaContent.imageAlt}
          fill
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL={blurData[ctaContent.image]}
          className="object-cover"
          style={{ objectPosition: 'center 35%' }}
        />
      </div>

      {/* Overlays */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(26,46,28,0.75)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(26,46,28,0.2) 0%, rgba(26,46,28,0.5) 100%)' }}
        aria-hidden="true"
      />

      {/* Content with generous spacing */}
      <div className="container-gg relative z-10 text-center" style={{ paddingTop: 'clamp(4rem, 10vw, 8rem)', paddingBottom: 'clamp(4rem, 10vw, 8rem)' }}>
        <ScrollReveal delay={0}>
          <div className="flex items-center justify-center gap-6 mb-10">
            <span
              className="block h-px"
              style={{ 
                width: 'clamp(3rem, 8vw, 5rem)', 
                backgroundColor: 'var(--color-gg-terracotta)', 
                opacity: 0.6 
              }}
              aria-hidden="true"
            />
            <span 
              className="text-label" 
              style={{ 
                color: 'rgba(200,116,86,0.9)',
                letterSpacing: '0.24em',
              }}
            >
              {ctaContent.eyebrow}
            </span>
            <span
              className="block h-px"
              style={{ 
                width: 'clamp(3rem, 8vw, 5rem)', 
                backgroundColor: 'var(--color-gg-terracotta)', 
                opacity: 0.6 
              }}
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h2
            id="cta-heading"
            className="text-display-xl"
            style={{ 
              lineHeight: 1.0,
              marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: 'var(--color-gg-white)',
            }}
          >
            {ctaContent.headline[0]}
            <br />
            <em
              className="not-italic"
              style={{ color: 'rgba(249,247,244,0.65)' }}
            >
              {ctaContent.headline[1]}
            </em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p
            className="font-display"
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'rgba(249,247,244,0.65)',
              maxWidth: '600px',
              margin: '0 auto',
              marginBottom: 'clamp(3rem, 6vw, 4rem)',
            }}
          >
            {ctaContent.body}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-5 sm:gap-6 w-full">
            <Link
              href={ctaContent.ctaPrimary.href}
              id="final-cta-primary"
              className="btn-primary w-full sm:w-auto justify-center magnetic-hover"
              style={{
                backgroundColor: 'var(--color-gg-terracotta)',
                borderColor: 'var(--color-gg-terracotta)',
                padding: '1.125rem 2.75rem',
                fontSize: '0.75rem',
              }}
            >
              {ctaContent.ctaPrimary.label}
            </Link>
            <Link
              href={ctaContent.ctaSecondary.href}
              id="final-cta-secondary"
              className="btn-outline w-full sm:w-auto justify-center magnetic-hover"
              style={{
                padding: '1.125rem 2.75rem',
              }}
            >
              {ctaContent.ctaSecondary.label}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
