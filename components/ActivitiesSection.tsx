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
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-end" style={{ marginBottom: 'clamp(1.5rem, 3.5vw, 3rem)' }}>
          <div className="lg:col-span-7">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-3 sm:mb-4">
                <div
                  style={{
                    width: '40px',
                    height: '40px',
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

        {/* Mobile View: High-End Touch-Snap Peek Carousel */}
        <div className="block md:hidden">
          <div className="flex overflow-x-auto snap-x-mandatory gap-3.5 pb-3 -mx-4 px-4 scrollbar-none">
            {activitiesContent.activities.map((act) => (
              <article
                key={act.id}
                className="w-[82vw] max-w-[320px] flex-shrink-0 snap-center card-lift group relative overflow-hidden flex flex-col"
                style={{
                  backgroundColor: 'var(--color-gg-white)',
                  border: '1px solid rgba(201,185,154,0.25)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 4px 20px rgba(26, 46, 28, 0.08)',
                }}
              >
                {/* Image */}
                <div className="img-zoom relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={act.image}
                    alt={act.imageAlt}
                    fill
                    sizes="82vw"
                    quality={82}
                    placeholder="blur"
                    blurDataURL={blurData[act.image] ?? ''}
                    className="object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(26,46,28,0.4) 0%, transparent 60%)',
                    }}
                    aria-hidden="true"
                  />
                  {/* Floating Icon badge */}
                  <div
                    className="absolute top-3.5 right-3.5 w-10 h-10 text-base flex items-center justify-center rounded-full"
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

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="font-display mb-2 text-gg-forest"
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 400,
                        lineHeight: 1.3,
                      }}
                    >
                      {act.title}
                    </h3>
                    <p
                      className="text-body"
                      style={{
                        color: 'var(--color-gg-olive)',
                        fontSize: '0.875rem',
                        lineHeight: '1.6',
                      }}
                    >
                      {act.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            className="flex items-center justify-between pt-2 px-1 text-label"
            style={{ color: 'var(--color-gg-olive)', opacity: 0.5, fontSize: '0.625rem', letterSpacing: '0.12em' }}
          >
            <span>← Swipe activities →</span>
            <span>3 Curated Experiences</span>
          </div>
        </div>

        {/* Desktop View: 3-column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesContent.activities.map((act, i) => (
            <ScrollReveal
              key={act.id}
              delay={(i % 3) as 0 | 1 | 2}
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
                  className="img-zoom relative overflow-hidden aspect-[3/2]"
                >
                  <Image
                    src={act.image}
                    alt={act.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
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
                  {/* Icon badge */}
                  <div
                    className="absolute top-5 right-5 w-12 h-12 text-lg flex items-center justify-center rounded-full"
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

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between" style={{ padding: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}>
                  <div>
                    <h3
                      className="font-display mb-2"
                      style={{
                        fontSize: 'clamp(1.25rem, 2.2vw, 1.625rem)',
                        fontWeight: 400,
                        color: 'var(--color-gg-forest)',
                        lineHeight: 1.3,
                      }}
                    >
                      {act.title}
                    </h3>
                    <p 
                      className="text-body" 
                      style={{ 
                        color: 'var(--color-gg-olive)',
                        fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',
                        lineHeight: '1.6',
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
