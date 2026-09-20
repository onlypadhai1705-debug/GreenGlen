import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { brandIntroContent } from '@/lib/content';

export default function BrandIntro() {
  return (
    <section
      id="experience"
      aria-labelledby="brand-intro-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-ivory)' }}
    >
      <div className="container-gg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left — Image (larger, offset) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <ScrollReveal delay={0}>
              <div
                className="img-zoom relative"
                style={{
                  aspectRatio: '4/5',
                  marginTop: '-3rem',
                  marginBottom: '2rem',
                }}
              >
                <Image
                  src={brandIntroContent.image}
                  alt={brandIntroContent.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  quality={80}
                  className="object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
                {/* Decorative frame offset */}
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full -z-10"
                  style={{ border: '1px solid rgba(74,82,64,0.18)' }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Editorial text */}
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
              <div className="flex flex-col gap-4">
                {brandIntroContent.body.map((para, i) => (
                  <p key={i} className="text-body" style={{ color: 'var(--color-gg-olive)' }}>
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* Pull quote */}
            <ScrollReveal delay={3}>
              <blockquote
                className="mt-10 pl-6 font-display"
                style={{
                  borderLeft: '2px solid var(--color-gg-terracotta)',
                  fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
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
