'use client';

import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { activitiesContent } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function ActivitiesSection() {
  return (
    <section
      id="experience"
      aria-labelledby="activities-heading"
      className="section-padding relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-gg-cream)',
      }}
    >
      <div className="container-gg">
        {/* Header with generous spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end" style={{ marginBottom: 'clamp(4rem, 10vw, 7rem)' }}>
          <div className="lg:col-span-7">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-5 mb-8">
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(200,116,86,0.12) 0%, rgba(168,184,159,0.12) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="text-label text-gg-terra" style={{ fontSize: '0.6rem' }}>03</span>
                </div>
                <span className="text-label text-gg-terra" style={{ letterSpacing: '0.24em' }}>{activitiesContent.eyebrow}</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 id="activities-heading" className="text-display-md text-gg-forest">
                {activitiesContent.headline}
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-5">
            <ScrollReveal delay={2}>
              <p 
                className="text-body" 
                style={{ 
                  color: 'var(--color-gg-olive)',
                  fontSize: '1.0625rem',
                  lineHeight: '1.85',
                }}
              >
                {activitiesContent.body}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Activities grid - Quadra 2-col on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6 md:gap-8">
          {activitiesContent.activities.map((act, i) => (
            <ScrollReveal
              key={act.id}
              delay={(i % 3) as 0 | 1 | 2}
              className={i === 2 ? 'col-span-2 lg:col-span-1' : 'col-span-1'}
            >
              <article
                className="card-lift group relative overflow-hidden h-full flex flex-col"
                style={{
                  backgroundColor: 'var(--color-gg-white)',
                  border: '1px solid rgba(201,185,154,0.25)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 4px 24px rgba(26, 46, 28, 0.06)',
                }}
              >
                {/* Image */}
                <div
                  className={`img-zoom relative overflow-hidden ${
                    i === 2 ? 'aspect-[16/9] sm:aspect-[3/2]' : 'aspect-square sm:aspect-[3/2]'
                  }`}
                >
                  <Image
                    src={act.image}
                    alt={act.imageAlt}
                    fill
                    sizes={i === 2 ? '(max-width: 768px) 100vw, 33vw' : '(max-width: 768px) 50vw, 33vw'}
                    quality={82}
                    placeholder="blur"
                    blurDataURL={
                      blurData[act.image] ??
                      'data:image/jpeg;base64,/9j/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAFAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQQBBAMAAAAAAAAAAAAAAQIDBAUSETEhQVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AqV+VFsoCIzEt2OFYwG5A3bjXiJyXCxpJIG5nNf8AXGmliVHUwdxCwPEFQBFCVSEf/9k='
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(26,46,28,0.4) 0%, transparent 60%)',
                    }}
                    aria-hidden="true"
                  />
                  {/* Icon badge with responsive sizing */}
                  <div
                    className="absolute top-2 right-2 sm:top-5 sm:right-5 w-7 h-7 sm:w-12 sm:h-12 text-xs sm:text-lg flex items-center justify-center rounded-full"
                    style={{
                      background: 'rgba(249,247,244,0.95)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(200,116,86,0.2)',
                    }}
                    aria-hidden="true"
                  >
                    {act.icon}
                  </div>
                </div>

                {/* Content with responsive padding */}
                <div className="flex-1 flex flex-col justify-between" style={{ padding: 'clamp(0.75rem, 2.5vw, 2.25rem)' }}>
                  <div>
                    <h3
                      className="font-display mb-1 sm:mb-2"
                      style={{
                        fontSize: 'clamp(0.85rem, 2.2vw, 1.625rem)',
                        fontWeight: 400,
                        color: 'var(--color-gg-forest)',
                        lineHeight: 1.3,
                      }}
                    >
                      {act.title}
                    </h3>
                    <p 
                      className="text-body line-clamp-2 sm:line-clamp-none" 
                      style={{ 
                        color: 'var(--color-gg-olive)',
                        fontSize: 'clamp(0.6875rem, 1.8vw, 1rem)',
                        lineHeight: '1.5',
                      }}
                    >
                      {act.body}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)' }}
                  aria-hidden="true"
                />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
