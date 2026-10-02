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

        {/* Three retreat categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {retreats.map((retreat, i) => (
            <ScrollReveal key={retreat.id} delay={(i as 0 | 1 | 2)} className="h-full">
              <article className="group flex flex-col h-full">
                {/* Image */}
                <div
                  className="img-zoom relative mb-6"
                  style={{ aspectRatio: '4/3' }}
                >
                  <Image
                    src={retreat.image}
                    alt={retreat.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={75}
                    placeholder="blur"
                    blurDataURL={blurData[retreat.image]}
                    className="object-cover"
                    style={{ objectPosition: 'center 30%' }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <h3
                    className="font-display mb-3"
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 300,
                      color: 'var(--color-gg-forest)',
                      lineHeight: 1.2,
                    }}
                  >
                    {retreat.title}
                  </h3>
                  <p
                    className="text-body flex-1 mb-6"
                    style={{ color: 'var(--color-gg-olive)' }}
                  >
                    {retreat.body}
                  </p>
                  <Link
                    href="#contact"
                    className="text-label inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    style={{ color: 'var(--color-gg-terracotta)' }}
                  >
                    {retreat.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
