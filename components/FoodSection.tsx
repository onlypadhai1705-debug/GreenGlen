import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { foodContent } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function FoodSection() {
  return (
    <section
      aria-labelledby="food-section-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-ivory)' }}
    >
      <div className="container-gg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">

          {/* Right side (image first on mobile, second on desktop) */}
          <div className="order-1 lg:order-2">
            <ScrollReveal delay={1}>
              <div 
                className="img-zoom relative overflow-hidden" 
                style={{ 
                  aspectRatio: '4/3',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <Image
                  src={foodContent.image}
                  alt={foodContent.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL={blurData[foodContent.image]}
                  className="object-cover"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Left side — editorial text */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
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
                  <span className="text-label text-gg-terra" style={{ fontSize: '0.6rem' }}>06</span>
                </div>
                <span className="text-label text-gg-terra" style={{ letterSpacing: '0.24em' }}>{foodContent.eyebrow}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2
                id="food-section-heading"
                className="text-display-md text-gg-forest"
                style={{ marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)' }}
              >
                {foodContent.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p 
                className="text-body" 
                style={{ 
                  color: 'var(--color-gg-olive)',
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                }}
              >
                {foodContent.body}
              </p>
            </ScrollReveal>

            {/* Decorative line element */}
            <ScrollReveal delay={3}>
              <div 
                className="pt-4 sm:pt-6" 
                style={{ 
                  marginTop: 'clamp(1.25rem, 3vw, 2rem)',
                  borderTop: '1px solid rgba(74,107,69,0.15)' 
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    color: 'var(--color-gg-forest)',
                    lineHeight: 1.4,
                  }}
                >
                  "The kind of meal that makes you<br />
                  slow down and stay at the table."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
