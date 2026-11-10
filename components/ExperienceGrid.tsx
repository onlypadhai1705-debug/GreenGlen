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
      <div className="container-gg" style={{ marginBottom: 'clamp(4rem, 10vw, 7rem)' }}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-5 mb-8">
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'rgba(200, 116, 86, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="text-label" style={{ color: 'rgba(200,116,86,0.9)', fontSize: '0.6rem' }}>04</span>
                </div>
                <span className="text-label" style={{ color: 'rgba(200,116,86,0.85)', letterSpacing: '0.24em' }}>
                  The Experience
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2
                id="experience-grid-heading"
                className="text-display-lg"
                style={{ color: 'var(--color-gg-white)' }}
              >
                What Green Glen
                <br />
                <em
                  className="font-display not-italic"
                  style={{ color: 'rgba(249,247,244,0.55)' }}
                >
                  is really about.
                </em>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={2} className="w-full sm:w-auto">
            <Link href="#contact" className="btn-outline w-full sm:w-auto justify-center magnetic-hover">
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
                quality={82}
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
                    'linear-gradient(to top, rgba(26,46,28,0.92) 0%, rgba(26,46,28,0.4) 50%, transparent 70%)',
                }}
                aria-hidden="true"
              />

              {/* Content overlay with generous padding */}
              <div 
                className="absolute inset-0 flex flex-col justify-end" 
                style={{ padding: 'clamp(2rem, 5vw, 3rem)' }}
              >
                <span
                  className="font-display mb-3"
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    color: 'rgba(249,247,244,0.5)',
                    letterSpacing: '0.18em',
                  }}
                >
                  {exp.eyebrow}
                </span>
                <h3
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 400,
                    color: 'var(--color-gg-white)',
                    lineHeight: 1.2,
                    marginBottom: '1.25rem',
                  }}
                >
                  {exp.title}
                </h3>
                <p
                  className="text-body"
                  style={{ 
                    color: 'rgba(249,247,244,0.7)', 
                    maxWidth: '30ch',
                    fontSize: '1rem',
                    lineHeight: '1.75',
                  }}
                >
                  {exp.body}
                </p>
              </div>

              {/* Number large BG */}
              <span
                className="absolute font-display"
                style={{
                  top: 'clamp(1.5rem, 4vw, 2.5rem)',
                  right: 'clamp(1.5rem, 4vw, 2.5rem)',
                  fontSize: 'clamp(4rem, 8vw, 6rem)',
                  fontWeight: 300,
                  color: 'rgba(249,247,244,0.06)',
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
