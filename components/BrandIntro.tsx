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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
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
                  className="absolute -bottom-8 -right-8 w-32 h-32 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(200,116,86,0.15) 0%, rgba(168,184,159,0.15) 100%)',
                    borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
                    filter: 'blur(30px)',
                    zIndex: -1,
                  }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-8">
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
                <span className="text-label text-gg-terra">{brandIntroContent.eyebrow}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2
                id="brand-intro-heading"
                className="text-display-md text-gg-forest mb-8"
                style={{ maxWidth: '600px' }}
              >
                {brandIntroContent.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="flex flex-col gap-5 mb-12">
                {brandIntroContent.body.map((para, i) => (
                  <p key={i} className="text-body" style={{ color: 'var(--color-gg-olive)', maxWidth: '560px' }}>
                    {para}
                  </p>
                ))}
              </div>
            </ScrollReveal>

            {/* Stats row with glass cards */}
            <ScrollReveal delay={3}>
              <div className="grid grid-cols-3 gap-4 mb-12">
                {[
                  { num: '20+', label: 'Guests max' },
                  { num: '500+', label: 'Bird species' },
                  { num: '6 hrs', label: 'From Delhi' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="glass-card p-5 text-center card-lift"
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <div
                      className="font-display text-gg-forest"
                      style={{
                        fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                        fontWeight: 400,
                        lineHeight: 1,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="text-label"
                      style={{ color: 'var(--color-gg-olive)', fontSize: '0.5625rem' }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <blockquote
                className="pl-8 font-display relative"
                style={{
                  fontSize: 'clamp(1.15rem, 2.2vw, 1.625rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'var(--color-gg-forest)',
                  lineHeight: 1.4,
                  maxWidth: '540px',
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0"
                  style={{
                    width: '3px',
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
