import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { experiences, whatsappStayUrl } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function ExperienceGrid() {
  // Split into 2 featured primary experiences (Home & Mudhouse) and 3 supporting pillars
  const featuredExperiences = [
    experiences[0], // Home Away from Home (happyfamily.png)
    experiences[3], // Artisan Mudhouse (artisanarea2.JPG)
  ];

  const supportingExperiences = [
    experiences[1], // Home-Style Food (artisandinningarea.JPG)
    experiences[2], // Private Groups (mainfrontview.png)
    experiences[4], // Kainchi Dham (neemkarolibaba.png)
  ];

  const allExperiences = [
    featuredExperiences[0],
    featuredExperiences[1],
    supportingExperiences[0],
    supportingExperiences[1],
    supportingExperiences[2],
  ];

  return (
    <section
      id="stay"
      aria-labelledby="experience-grid-heading"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-gg-forest-dark)' }}
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'rgba(181,104,74,0.08)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 w-[500px] h-[400px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'rgba(74,82,64,0.15)' }}
        aria-hidden="true"
      />

      <div className="container-gg relative z-10">
        {/* Header with Motive & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10">
          <div>
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="block h-px w-8"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.6 }}
                  aria-hidden="true"
                />
                <span
                  className="text-label"
                  style={{ color: 'var(--color-gg-terracotta)' }}
                >
                  The Guest Experience
                </span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2
                id="experience-grid-heading"
                className="font-display"
                style={{
                  fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-gg-ivory)',
                }}
              >
                What Green Glen
                <br />
                <em
                  className="not-italic"
                  style={{ color: 'rgba(244,240,232,0.55)' }}
                >
                  is really about.
                </em>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={2} className="w-full md:w-auto">
            <Link
              href={whatsappStayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full md:w-auto justify-center inline-flex items-center gap-3"
              style={{
                padding: '0.875rem 2rem',
                fontSize: '0.6875rem',
              }}
            >
              <span>Plan Your Stay</span>
              <span aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>
        </div>

        {/* Mobile View: High-End Touch-Snap Peek Carousel (Aman / Soneva luxury resort style) */}
        <div className="block md:hidden">
          <div className="flex overflow-x-auto snap-x-mandatory gap-3.5 pb-3 -mx-4 px-4 scrollbar-none">
            {allExperiences.map((exp) => (
              <article
                key={exp.id}
                className="w-[82vw] max-w-[330px] flex-shrink-0 snap-center group relative overflow-hidden rounded-lg flex flex-col justify-end"
                style={{
                  aspectRatio: '3/4',
                  backgroundColor: 'rgba(28, 43, 30, 0.65)',
                  border: '1px solid rgba(201, 185, 154, 0.28)',
                }}
              >
                <Image
                  src={exp.image}
                  alt={exp.imageAlt}
                  fill
                  sizes="82vw"
                  quality={82}
                  placeholder="blur"
                  blurDataURL={blurData[exp.image] ?? ''}
                  className="object-cover"
                  style={{ objectPosition: (exp as { objectPosition?: string }).objectPosition || 'center 35%' }}
                />

                {/* Rich Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(14,24,15,0.96) 0%, rgba(14,24,15,0.45) 50%, transparent 80%)',
                  }}
                  aria-hidden="true"
                />

                {/* Floating Top Number Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span
                    className="text-label px-2.5 py-1 rounded-full inline-flex items-center gap-1.5"
                    style={{
                      backgroundColor: 'rgba(14,24,15,0.85)',
                      border: '1px solid rgba(201,185,154,0.3)',
                      color: 'var(--color-gg-ivory)',
                      fontSize: '0.625rem',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: 'var(--color-gg-terracotta)' }}
                      aria-hidden="true"
                    />
                    {exp.eyebrow} · EXPERIENCE
                  </span>
                </div>

                {/* Content Overlay with Full Legibility */}
                <div className="relative z-10 p-5">
                  <h3
                    className="font-display mb-2 text-white"
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 300,
                      lineHeight: 1.25,
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p
                    className="text-body-sm"
                    style={{
                      color: 'rgba(244,240,232,0.82)',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {exp.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Swipe indicator label */}
          <div
            className="flex items-center justify-between pt-2 px-1 text-label"
            style={{ color: 'rgba(244,240,232,0.4)', fontSize: '0.625rem', letterSpacing: '0.12em' }}
          >
            <span>← Swipe experiences →</span>
            <span>5 Highlights</span>
          </div>
        </div>

        {/* Desktop View: Magazine Grid */}
        <div className="hidden md:block">
          {/* Row 1: Two Featured Experience Cards */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {featuredExperiences.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={i as 0 | 1}>
                <article
                  className="group relative overflow-hidden rounded-sm card-lift aspect-[16/11]"
                  style={{
                    backgroundColor: 'rgba(28, 43, 30, 0.5)',
                    border: '1px solid rgba(201, 185, 154, 0.22)',
                  }}
                >
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    fill
                    sizes="50vw"
                    quality={82}
                    placeholder="blur"
                    blurDataURL={blurData[exp.image] ?? ''}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: (exp as { objectPosition?: string }).objectPosition || 'center 35%' }}
                  />

                  {/* Cinematic Gradient Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(17,26,18,0.92) 0%, rgba(17,26,18,0.35) 50%, transparent 80%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Floating Top Number Badge */}
                  <div className="absolute top-5 left-5">
                    <span
                      className="text-label px-3 py-1.5 rounded-full inline-flex items-center gap-2"
                      style={{
                        backgroundColor: 'rgba(17,26,18,0.85)',
                        border: '1px solid rgba(201,185,154,0.3)',
                        color: 'var(--color-gg-ivory)',
                        fontSize: '0.5625rem',
                        backdropFilter: 'blur(6px)',
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: 'var(--color-gg-terracotta)' }}
                        aria-hidden="true"
                      />
                      {exp.eyebrow}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div
                    className="absolute bottom-0 inset-x-0 p-6 md:p-8"
                    style={{ maxWidth: '42ch' }}
                  >
                    <h3
                      className="font-display mb-2"
                      style={{
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        fontWeight: 300,
                        color: 'var(--color-gg-ivory)',
                        lineHeight: 1.2,
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      className="text-body-sm"
                      style={{
                        color: 'rgba(244,240,232,0.75)',
                        fontSize: '0.875rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {exp.body}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2: Three Balanced Supporting Cards */}
          <div className="grid grid-cols-3 gap-6">
            {supportingExperiences.map((exp, i) => (
              <ScrollReveal
                key={exp.id}
                delay={(i % 3) as 0 | 1 | 2}
              >
                <article
                  className="group relative overflow-hidden rounded-sm card-lift flex flex-col justify-end aspect-square"
                  style={{
                    backgroundColor: 'rgba(28, 43, 30, 0.5)',
                    border: '1px solid rgba(201, 185, 154, 0.2)',
                  }}
                >
                  <Image
                    src={exp.image}
                    alt={exp.imageAlt}
                    fill
                    sizes="33vw"
                    quality={80}
                    placeholder="blur"
                    blurDataURL={blurData[exp.image] ?? ''}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: (exp as { objectPosition?: string }).objectPosition || 'center 35%' }}
                  />

                  {/* Persistent Gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(17,26,18,0.92) 0%, rgba(17,26,18,0.3) 55%, transparent 85%)',
                    }}
                    aria-hidden="true"
                  />

                  {/* Floating Top Eyebrow */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-label px-2.5 py-1 rounded-sm"
                      style={{
                        backgroundColor: 'rgba(17,26,18,0.75)',
                        border: '1px solid rgba(201,185,154,0.25)',
                        color: 'var(--color-gg-sand)',
                        fontSize: '0.5625rem',
                      }}
                    >
                      {exp.eyebrow}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative z-10 p-5 md:p-6">
                    <h3
                      className="font-display mb-2"
                      style={{
                        fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                        fontWeight: 300,
                        color: 'var(--color-gg-ivory)',
                        lineHeight: 1.25,
                      }}
                    >
                      {exp.title}
                    </h3>
                    <p
                      className="text-body-sm"
                      style={{
                        color: 'rgba(244,240,232,0.7)',
                        lineHeight: 1.6,
                      }}
                    >
                      {exp.body}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
