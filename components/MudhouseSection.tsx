import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { mudhouseContent } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function MudhouseSection() {
  return (
    <section
      id="the-space"
      aria-labelledby="mudhouse-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-cream)' }}
    >
      <div className="container-gg">
        {/* Header with generous spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end" style={{ marginBottom: 'clamp(3rem, 8vw, 5rem)' }}>
          <div className="lg:col-span-7">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-5 mb-8">
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(200,116,86,0.12) 0%, rgba(168,184,159,0.12) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="text-label text-gg-terra" style={{ fontSize: '0.6rem' }}>02</span>
                </div>
                <span className="text-label text-gg-terra" style={{ letterSpacing: '0.24em' }}>{mudhouseContent.eyebrow}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2
                id="mudhouse-heading"
                className="text-display-md text-gg-forest"
              >
                {mudhouseContent.headline}
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal delay={2}>
              <p 
                className="text-body" 
                style={{ 
                  color: 'var(--color-gg-olive)',
                  fontSize: '1.0625rem',
                  lineHeight: '1.85',
                }}
              >
                {mudhouseContent.body}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Main image with breathing room */}
        <ScrollReveal delay={1}>
          <div 
            className="relative w-full img-zoom" 
            style={{ 
              aspectRatio: '3/2',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}
          >
            <Image
              src={mudhouseContent.image}
              alt={mudhouseContent.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              quality={88}
              placeholder="blur"
              blurDataURL={blurData[mudhouseContent.image]}
              className="object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
            {/* Overlay with pull quote */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(26,46,28,0.75) 0%, rgba(26,46,28,0.2) 50%, transparent 70%)',
              }}
              aria-hidden="true"
            />
            <div 
              className="absolute" 
              style={{
                bottom: 'clamp(2rem, 5vw, 4rem)',
                left: 'clamp(2rem, 5vw, 4rem)',
                maxWidth: 'clamp(320px, 40vw, 600px)',
              }}
            >
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--color-gg-white)',
                  lineHeight: 1.2,
                }}
              >
                {mudhouseContent.pullQuote}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Caption with spacing */}
        <ScrollReveal delay={2}>
          <div className="flex items-center gap-5 mt-6">
            <span
              className="block h-px"
              style={{ width: '3rem', backgroundColor: 'rgba(212,196,168,0.6)' }}
              aria-hidden="true"
            />
            <p 
              className="text-body-sm" 
              style={{ 
                color: 'rgba(74,107,69,0.7)',
                fontSize: '0.9375rem',
              }}
            >
              {mudhouseContent.caption}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
