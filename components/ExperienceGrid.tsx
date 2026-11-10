import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { experiences } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function ExperienceGrid() {
  return (
    <section
      id="stay"
      aria-labelledby="experience-grid-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-forest)' }}
    >
      <div className="container-gg mb-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
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
                What Green Glen
                <br />
                <em
                  className="font-display not-italic"
                  style={{ color: 'rgba(244,240,232,0.55)' }}
                >
                  is really about.
                </em>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={2} className="w-full sm:w-auto">
            <Link href="#contact" className="btn-outline w-full sm:w-auto justify-center">
              Plan Your Stay
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* Full-width immersive experience cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.id} delay={(i % 3) as 0 | 1 | 2}>
            <article
              className="group relative overflow-hidden"
              style={{ aspectRatio: '4/5', cursor: 'default' }}
            >
              <Image
                src={exp.image}
                alt={exp.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={78}
                placeholder="blur"
                blurDataURL={blurData[exp.image] ?? ''}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 30%' }}
              />
              {/* Persistent gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(17,26,18,0.9) 0%, rgba(17,26,18,0.3) 50%, transparent 70%)',
                }}
                aria-hidden="true"
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <span
                  className="font-display mb-2"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 300,
                    color: 'rgba(244,240,232,0.45)',
                    letterSpacing: '0.12em',
                  }}
                >
                  {exp.eyebrow}
                </span>
                <h3
                  className="font-display mb-3"
                  style={{
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                    fontWeight: 300,
                    color: 'var(--color-gg-ivory)',
                    lineHeight: 1.15,
                  }}
                >
                  {exp.title}
                </h3>
                <p
                  className="text-body-sm"
                  style={{ color: 'rgba(244,240,232,0.65)', maxWidth: '28ch' }}
                >
                  {exp.body}
                </p>
              </div>

              {/* Number large BG */}
              <span
                className="absolute top-5 right-5 font-display"
                style={{
                  fontSize: '5rem',
                  fontWeight: 300,
                  color: 'rgba(244,240,232,0.06)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
                aria-hidden="true"
              >
                {exp.eyebrow}
              </span>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
