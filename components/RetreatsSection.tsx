import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { retreats, whatsappStayUrl } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function RetreatsSection() {
  return (
    <section
      aria-labelledby="retreats-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-cream)' }}
    >
      <div className="container-gg">
        {/* Header with High-Impact Highlight */}
        <div className="mb-8 sm:mb-12">
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-label text-gg-terra">Groups & Retreats</span>
              <span
                className="block h-px w-8"
                style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
                aria-hidden="true"
              />
              <span
                className="text-label px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5"
                style={{
                  backgroundColor: 'rgba(200, 116, 86, 0.12)',
                  border: '1px solid rgba(200, 116, 86, 0.3)',
                  color: 'var(--color-gg-terracotta)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.12em',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-gg-terracotta)' }} aria-hidden="true" />
                EXCLUSIVE PROPERTY BUYOUT
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
              <div>
                <h2
                  id="retreats-heading"
                  className="text-display-md text-gg-forest"
                >
                  Come together.
                  <span
                    className="block mt-2 font-display"
                    style={{
                      color: 'var(--color-gg-terracotta)',
                      fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                      fontWeight: 400,
                      fontStyle: 'italic',
                      lineHeight: 1.1,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Up to 20 pax comfortably.
                  </span>
                </h2>
              </div>

              <div className="max-w-md">
                <p
                  className="text-body"
                  style={{
                    color: 'var(--color-gg-olive)',
                    fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                    lineHeight: '1.7',
                  }}
                >
                  An intimate mountain estate reserved exclusively for your people. No strangers, no outside guests — spacious rooms, home-style meals, and open Himalayan lawns designed to host gatherings of up to 20 guests in complete comfort.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile View: High-End Touch-Snap Peek Carousel */}
        <div className="block md:hidden">
          <div className="flex overflow-x-auto snap-x-mandatory gap-3.5 pb-3 -mx-4 px-4 scrollbar-none">
            {retreats.map((retreat) => (
              <article
                key={retreat.id}
                className="w-[84vw] max-w-[330px] flex-shrink-0 snap-center group flex flex-col justify-between p-4 rounded-xl"
                style={{
                  backgroundColor: 'var(--color-gg-white)',
                  border: '1px solid rgba(201, 185, 154, 0.3)',
                  boxShadow: '0 4px 20px rgba(26, 46, 28, 0.08)',
                }}
              >
                <div>
                  <div className="img-zoom relative mb-4 rounded-lg overflow-hidden aspect-[4/3]">
                    <Image
                      src={retreat.image}
                      alt={retreat.imageAlt}
                      fill
                      sizes="84vw"
                      quality={80}
                      placeholder="blur"
                      blurDataURL={blurData[retreat.image]}
                      className="object-cover"
                      style={{ objectPosition: 'center 30%' }}
                    />
                  </div>

                  <h3
                    className="font-display mb-2 text-gg-forest"
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 300,
                      lineHeight: 1.25,
                    }}
                  >
                    {retreat.title}
                  </h3>

                  <p
                    className="text-body"
                    style={{
                      color: 'var(--color-gg-olive)',
                      fontSize: '0.875rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {retreat.body}
                  </p>
                </div>

                <div className="pt-4 mt-2" style={{ borderTop: '1px solid rgba(74,82,64,0.1)' }}>
                  <Link
                    href={whatsappStayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-label inline-flex items-center gap-2"
                    style={{
                      color: 'var(--color-gg-terracotta)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                    }}
                  >
                    <span>{retreat.cta}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div
            className="flex items-center justify-between pt-2 px-1 text-label"
            style={{ color: 'var(--color-gg-olive)', opacity: 0.5, fontSize: '0.625rem', letterSpacing: '0.12em' }}
          >
            <span>← Swipe retreat types →</span>
            <span>3 Formats</span>
          </div>
        </div>

        {/* Desktop View: 3-column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-14">
          {retreats.map((retreat, i) => (
            <ScrollReveal
              key={retreat.id}
              delay={(i % 3) as 0 | 1 | 2}
            >
              <article className="group flex flex-col h-full">
                {/* Image */}
                <div
                  className="img-zoom relative mb-6 rounded-sm overflow-hidden aspect-[4/3]"
                >
                  <Image
                    src={retreat.image}
                    alt={retreat.imageAlt}
                    fill
                    sizes="33vw"
                    quality={75}
                    placeholder="blur"
                    blurDataURL={blurData[retreat.image]}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 justify-between">
                  <div>
                    <h3
                      className="font-display mb-3"
                      style={{
                        fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)',
                        fontWeight: 300,
                        color: 'var(--color-gg-forest)',
                        lineHeight: 1.25,
                      }}
                    >
                      {retreat.title}
                    </h3>
                    <p
                      className="text-body mb-6"
                      style={{
                        color: 'var(--color-gg-olive)',
                        fontSize: '1rem',
                        lineHeight: '1.65',
                      }}
                    >
                      {retreat.body}
                    </p>
                  </div>
                  <div>
                    <Link
                      href={whatsappStayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-label inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                      style={{
                        color: 'var(--color-gg-terracotta)',
                        fontSize: '0.75rem',
                      }}
                    >
                      {retreat.cta}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
