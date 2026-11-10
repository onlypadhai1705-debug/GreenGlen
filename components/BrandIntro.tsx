import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { brandIntroContent } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function BrandIntro() {
  return (
    <section
      id="about"
      aria-labelledby="brand-intro-heading"
      className="section-padding relative organic-bg"
      style={{ backgroundColor: 'var(--color-gg-ivory)' }}
    >
      <div className="container-gg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-20 items-center">
          {/* Image with modern frame */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0}>
              <div className="relative group">
                <div className="img-zoom relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: 'var(--radius-lg)' }}>
                  <Image
                    src={brandIntroContent.image}
                    alt={brandIntroContent.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL={blurData[brandIntroContent.image] ?? ''}
                    className="object-cover"
                    style={{ objectPosition: 'center 35%' }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, rgba(26,46,28,0.2) 0%, transparent 40%)',
                      opacity: 0.6,
                    }}
                  />
                </div>
                {/* Organic shape accent */}
                <div
                  className="absolute -bottom-12 -right-12 w-40 h-40 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(200,116,86,0.15) 0%, rgba(168,184,159,0.15) 100%)',
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                    filter: 'blur(40px)',
                    zIndex: -1,
                  }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Text with balanced spacing */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-3 sm:mb-4">
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(200,116,86,0.12) 0%, rgba(168,184,159,0.12) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="text-label text-gg-terra" style={{ fontSize: '0.6rem' }}>01</span>
                </div>
                <span className="text-label text-gg-terra" style={{ letterSpacing: '0.24em' }}>{brandIntroContent.eyebrow}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2
                id="brand-intro-heading"
                className="text-display-md text-gg-forest"
                style={{ maxWidth: '640px', marginBottom: 'clamp(0.875rem, 2vw, 1.5rem)' }}
              >
                {brandIntroContent.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="flex flex-col gap-3 sm:gap-4" style={{ marginBottom: 'clamp(1.25rem, 3vw, 2rem)' }}>
                {brandIntroContent.body.map((para, i) => (
                  <p 
                    key={i} 
                    className="text-body" 
                    style={{ 
                      color: 'var(--color-gg-olive)', 
                      maxWidth: '600px',
                      fontSize: '1.0625rem',
                      lineHeight: '1.75',
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* Stats row with glass cards */}
            <ScrollReveal delay={3}>
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 md:gap-5" style={{ marginBottom: 'clamp(1.25rem, 3vw, 2rem)' }}>
                {[
                  { num: '20+', label: 'Guests max' },
                  { num: '500+', label: 'Bird species' },
                  { num: '6 hrs', label: 'From Delhi' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="glass-card text-center card-lift rounded-md sm:rounded-lg"
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(20px)',
                      padding: 'clamp(1rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1.5rem)',
                    }}
                  >
                    <div
                      className="font-display text-gg-forest"
                      style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
                        fontWeight: 400,
                        lineHeight: 1,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="text-label"
                      style={{ color: 'var(--color-gg-olive)', fontSize: 'clamp(0.5rem, 1.5vw, 0.625rem)' }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <blockquote
                className="relative font-display"
                style={{
                  paddingLeft: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--color-gg-forest)',
                  lineHeight: 1.4,
                  maxWidth: '560px',
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0"
                  style={{
                    width: '4px',
                    background: 'linear-gradient(to bottom, var(--color-gg-terracotta), var(--color-gg-sage))',
                    borderRadius: '2px',
                  }}
                  aria-hidden="true"
                />
                {brandIntroContent.pullQuote}
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
