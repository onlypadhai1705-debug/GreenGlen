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
        {/* Top: Editorial headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 items-end">
          <div className="lg:col-span-7">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-label text-gg-terra">{mudhouseContent.eyebrow}</span>
                <span
                  className="block h-px w-8"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
                  aria-hidden="true"
                />
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
          <div className="lg:col-span-4 lg:col-start-9">
            <ScrollReveal delay={2}>
              <p className="text-body" style={{ color: 'var(--color-gg-olive)' }}>
                {mudhouseContent.body}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Main image — full bleed within section */}
        <ScrollReveal delay={1}>
          <div className="relative w-full img-zoom" style={{ aspectRatio: '16/9' }}>
            <Image
              src={mudhouseContent.image}
              alt={mudhouseContent.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              quality={82}
              placeholder="blur"
              blurDataURL={blurData[mudhouseContent.image]}
              className="object-cover"
              style={{ objectPosition: 'center 35%' }}
            />
            {/* Overlay with pull quote */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(17,26,18,0.7) 0%, transparent 50%)',
              }}
              aria-hidden="true"
            />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-lg">
              <p
                className="font-display"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-gg-ivory)',
                  lineHeight: 1.15,
                }}
              >
                {mudhouseContent.pullQuote}
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Caption row */}
        <ScrollReveal delay={2}>
          <div className="flex items-center gap-4 mt-5">
            <span
              className="block h-px"
              style={{ width: '2rem', backgroundColor: 'var(--color-gg-sand)' }}
              aria-hidden="true"
            />
            <p className="text-body-sm" style={{ color: 'var(--color-gg-sand)' }}>
              {mudhouseContent.caption}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
