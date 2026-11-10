import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { brandIntroContent } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function BrandIntro() {
  return (
    <section
      id="about"
      aria-labelledby="brand-intro-heading"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-gg-ivory)' }}
    >
      {/* Decorative large text */}
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display select-none pointer-events-none"
        style={{
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          fontWeight: 300,
          color: 'rgba(74,82,64,0.04)',
          lineHeight: 1,
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        HILLS
      </span>

      <div className="container-gg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0}>
              <div className="relative">
                <div className="img-zoom relative" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src={brandIntroContent.image}
                    alt={brandIntroContent.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    quality={82}
                    placeholder="blur"
                    blurDataURL={blurData[brandIntroContent.image] ?? ''}
                    className="object-cover"
                    style={{ objectPosition: 'center 35%' }}
                  />
                </div>
                {/* Offset decorative frame */}
                <div
                  className="absolute -bottom-5 -right-5 w-full h-full -z-10"
                  style={{ border: '1px solid rgba(201,185,154,0.4)' }}
                  aria-hidden="true"
                />
                {/* Corner accent */}
                <div
                  className="absolute -top-3 -left-3 w-12 h-12"
                  style={{
                    borderTop: '2px solid var(--color-gg-terracotta)',
                    borderLeft: '2px solid var(--color-gg-terracotta)',
                  }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 xl:col-span-6 xl:col-start-7 flex flex-col justify-center">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-label text-gg-terra">{brandIntroContent.eyebrow}</span>
                <span
                  className="block h-px w-8"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2
                id="brand-intro-heading"
                className="text-display-md text-gg-forest mb-7"
              >
                {brandIntroContent.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="flex flex-col gap-4 mb-10">
                {brandIntroContent.body.map((para, i) => (
                  <p key={i} className="text-body" style={{ color: 'var(--color-gg-olive)' }}>
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* Stats row */}
            <ScrollReveal delay={3}>
              <div
                className="grid grid-cols-3 gap-6 py-8 mb-8"
                style={{
                  borderTop: '1px solid rgba(74,82,64,0.12)',
                  borderBottom: '1px solid rgba(74,82,64,0.12)',
                }}
              >
                {[
                  { num: '20+', label: 'Guests max' },
                  { num: '500+', label: 'Bird species' },
                  { num: '6 hrs', label: 'From Delhi' },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div
                      className="font-display text-gg-forest"
                      style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                        fontWeight: 300,
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="text-label mt-1"
                      style={{ color: 'var(--color-gg-olive-light)', fontSize: '0.6rem' }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <blockquote
                className="pl-6 font-display"
                style={{
                  borderLeft: '2px solid var(--color-gg-terracotta)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--color-gg-forest)',
                  lineHeight: 1.3,
                }}
              >
                {brandIntroContent.pullQuote}
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
