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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Right side (image first on mobile, second on desktop) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <ScrollReveal delay={1}>
              <div className="img-zoom relative" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={foodContent.image}
                  alt={foodContent.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={82}
                  placeholder="blur"
                  blurDataURL={blurData[foodContent.image]}
                  className="object-cover"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Left side — editorial text */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-label text-gg-terra">{foodContent.eyebrow}</span>
                <span
                  className="block h-px w-8"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2
                id="food-section-heading"
                className="text-display-md text-gg-forest mb-7"
              >
                {foodContent.headline}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="text-body" style={{ color: 'var(--color-gg-olive)' }}>
                {foodContent.body}
              </p>
            </ScrollReveal>

            {/* Decorative line element */}
            <ScrollReveal delay={3}>
              <div className="mt-10 pt-10" style={{ borderTop: '1px solid rgba(74,82,64,0.15)' }}>
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--color-gg-forest)',
                    lineHeight: 1.35,
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
