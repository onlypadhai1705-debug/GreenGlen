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

        {/* Three retreat categories - Quadra 2-col on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-14">
          {retreats.map((retreat, i) => (
            <ScrollReveal
              key={retreat.id}
              delay={(i % 3) as 0 | 1 | 2}
              className={i === 2 ? 'col-span-2 md:col-span-1 h-full' : 'col-span-1 h-full'}
            >
              <article className="group flex flex-col h-full">
                {/* Image */}
                <div
                  className={`img-zoom relative mb-2 sm:mb-6 rounded-sm overflow-hidden ${
                    i === 2 ? 'aspect-[16/9] sm:aspect-[4/3]' : 'aspect-square sm:aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={retreat.image}
                    alt={retreat.imageAlt}
                    fill
                    sizes={i === 2 ? '(max-width: 768px) 100vw, 33vw' : '(max-width: 768px) 50vw, 33vw'}
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
                      className="font-display mb-1 sm:mb-3"
                      style={{
                        fontSize: 'clamp(0.85rem, 2.2vw, 1.5rem)',
                        fontWeight: 300,
                        color: 'var(--color-gg-forest)',
                        lineHeight: 1.25,
                      }}
                    >
                      {retreat.title}
                    </h3>
                    <p
                      className="text-body line-clamp-2 sm:line-clamp-none mb-2 sm:mb-6"
                      style={{
                        color: 'var(--color-gg-olive)',
                        fontSize: 'clamp(0.6875rem, 1.8vw, 1rem)',
                        lineHeight: '1.5',
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
                      className="text-label inline-flex items-center gap-1.5 sm:gap-2 group-hover:gap-3 transition-all duration-300"
                      style={{
                        color: 'var(--color-gg-terracotta)',
                        fontSize: 'clamp(0.5625rem, 1.6vw, 0.75rem)',
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
