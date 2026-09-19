import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { experiences } from '@/lib/content';

export default function ExperienceGrid() {
  return (
    <section
      id="stay"
      aria-labelledby="experience-grid-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-forest)' }}
    >
      <div className="container-gg">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-label" style={{ color: 'var(--color-gg-terracotta)' }}>
                  The Experience
                </span>
                <span
                  className="block h-px w-8"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2
                id="experience-grid-heading"
                className="text-display-md"
                style={{ color: 'var(--color-gg-ivory)' }}
              >
                What Green Glen<br />
                <em className="font-display not-italic" style={{ color: 'rgba(244,240,232,0.65)' }}>
                  is really about.
                </em>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={2}>
            <Link
              href="#contact"
              className="btn-outline"
              style={{ alignSelf: 'flex-end' }}
            >
              Plan Your Stay
            </Link>
          </ScrollReveal>
        </div>

        {/* Editorial grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: 'rgba(244,240,232,0.08)' }}
        >
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={(i % 4) as 0 | 1 | 2 | 3} className="h-full">
              <article
                className="img-zoom group relative flex flex-col h-full"
                style={{
                  backgroundColor: 'var(--color-gg-forest)',
                  minHeight: '420px',
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: '260px' }}>
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    quality={75}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: 'center 30%' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(17,26,18,0.5) 0%, transparent 60%)' }}
                    aria-hidden="true"
                  />
                  {/* Number */}
                  <span
                    className="absolute top-4 left-4 font-display"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 300,
                      color: 'rgba(244,240,232,0.5)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {exp.eyebrow}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col flex-1 p-6">
                  <h3
                    className="font-display mb-3"
                    style={{
                      fontSize: '1.375rem',
                      fontWeight: 300,
                      color: 'var(--color-gg-ivory)',
                      lineHeight: 1.2,
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-body-sm flex-1"
                    style={{ color: 'rgba(244,240,232,0.58)' }}
                  >
                    {exp.body}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
