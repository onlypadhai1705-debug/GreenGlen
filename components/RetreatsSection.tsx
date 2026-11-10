import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { retreats } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function RetreatsSection() {
  return (
    <section
      aria-labelledby="retreats-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-cream)' }}
    >
      <div className="container-gg">
        {/* Header */}
        <div className="mb-20">
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-label text-gg-terra">Groups & Retreats</span>
              <span
                className="block h-px w-8"
                style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2
              id="retreats-heading"
              className="text-display-md text-gg-forest"
            >
              Come together.
            </h2>
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
                      href="#contact"
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
