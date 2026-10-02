import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { groupContent } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function GroupSection() {
  return (
    <section
      id="groups"
      aria-labelledby="group-section-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-cream)' }}
    >
      <div className="container-gg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

          {/* Left: Typography-dominant block */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-label text-gg-terra">{groupContent.eyebrow}</span>
                <span
                  className="block h-px w-8"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>

            {/* The "16" statement — oversized */}
            <ScrollReveal delay={1}>
              <div className="flex items-end gap-6 mb-3 leading-none">
                <span
                  className="font-display"
                  aria-hidden="true"
                  style={{
                    fontSize: 'clamp(7rem, 18vw, 13rem)',
                    fontWeight: 300,
                    color: 'var(--color-gg-forest)',
                    lineHeight: 1,
                    opacity: 0.15,
                    userSelect: 'none',
                  }}
                >
                  20
                </span>
                <div className="pb-4">
                  <span
                    className="text-label block mb-1"
                    style={{ color: 'var(--color-gg-olive-light)' }}
                  >
                    Up to
                  </span>
                  <span
                    className="font-display block"
                    style={{
                      fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                      fontWeight: 300,
                      color: 'var(--color-gg-forest)',
                    }}
                  >
                    Guests
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={1}>
              <h2
                id="group-section-heading"
                className="text-display-lg text-gg-forest mb-6"
              >
                {groupContent.headline}
              </h2>
            </ScrollReveal>

            {/* Body */}
            <ScrollReveal delay={2}>
              <p className="text-body mb-4" style={{ color: 'var(--color-gg-olive)' }}>
                {groupContent.body}
              </p>
              <p className="text-label mt-2" style={{ color: 'var(--color-gg-sand)' }}>
                {groupContent.subtext}
              </p>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={3}>
              <div className="mt-10">
                <Link href="#contact" className="btn-primary w-full sm:w-auto justify-center">
                  Enquire for Your Group
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 lg:col-start-8">
            <ScrollReveal delay={1}>
              <div
                className="img-zoom relative"
                style={{ aspectRatio: '4/5' }}
              >
                <Image
                  src={groupContent.image}
                  alt={groupContent.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={80}
                  placeholder="blur"
                  blurDataURL={blurData[groupContent.image]}
                  className="object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
