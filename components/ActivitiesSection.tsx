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

        {/* Activities grid with proper spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesContent.activities.map((act, i) => (
            <ScrollReveal key={act.id} delay={(i % 3) as 0 | 1 | 2}>
              <article
                className="card-lift group relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-gg-white)',
                  border: '1px solid rgba(201,185,154,0.25)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 4px 24px rgba(26, 46, 28, 0.06)',
                }}
              >
                {/* Image */}
                <div className="img-zoom relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                  <Image
                    src={act.image}
                    alt={act.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  {/* Icon badge with better spacing */}
                  <div
                    className="absolute"
                    style={{
                      top: '1.5rem',
                      right: '1.5rem',
                      background: 'rgba(249,247,244,0.95)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: '50%',
                      width: '3.5rem',
                      height: '3.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.375rem',
                      border: '1px solid rgba(200,116,86,0.2)',
                    }}
                    aria-hidden="true"
                  >
                    {act.icon}
                  </div>
                </div>

                {/* Content with generous padding */}
                <div style={{ padding: 'clamp(2rem, 5vw, 2.5rem)' }}>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.625rem',
                      fontWeight: 400,
                      color: 'var(--color-gg-forest)',
                      lineHeight: 1.3,
                      marginBottom: '1rem',
                    }}
                  >
                    {act.title}
                  </h3>
                  <p 
                    className="text-body" 
                    style={{ 
                      color: 'var(--color-gg-olive)',
                      fontSize: '1rem',
                      lineHeight: '1.8',
                    }}
                  >
                    {act.body}
                  </p>
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
