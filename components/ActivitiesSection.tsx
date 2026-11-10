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
      className="section-padding bg-weave relative overflow-hidden"
    >
      {/* Decorative top divider */}
      <div className="divider-woven absolute top-0 left-0 right-0" aria-hidden="true" />

      <div className="container-gg">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-label text-gg-terra">{activitiesContent.eyebrow}</span>
                <span
                  className="block h-px flex-1 max-w-[2rem]"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 id="activities-heading" className="text-display-md text-gg-forest">
                {activitiesContent.headline}
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <ScrollReveal delay={2}>
              <p className="text-body" style={{ color: 'var(--color-gg-olive)' }}>
                {activitiesContent.body}
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Activities grid — 3 cols, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {activitiesContent.activities.map((act, i) => (
            <ScrollReveal key={act.id} delay={(i % 3) as 0 | 1 | 2}>
              <article
                className="card-lift group relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-gg-white)',
                  border: '1px solid rgba(201,185,154,0.3)',
                }}
              >
                {/* Image */}
                <div className="img-zoom relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                  <Image
                    src={act.image}
                    alt={act.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={78}
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
                        'linear-gradient(to top, rgba(28,43,30,0.4) 0%, transparent 60%)',
                    }}
                    aria-hidden="true"
                  />
                  {/* Icon badge */}
                  <span
                    className="absolute top-4 right-4"
                    aria-hidden="true"
                    style={{
                      background: 'rgba(244,240,232,0.92)',
                      borderRadius: '50%',
                      width: '2.75rem',
                      height: '2.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {act.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3
                    className="font-display mb-2"
                    style={{
                      fontSize: '1.375rem',
                      fontWeight: 300,
                      color: 'var(--color-gg-forest)',
                      lineHeight: 1.2,
                    }}
                  >
                    {act.title}
                  </h3>
                  <p className="text-body-sm" style={{ color: 'var(--color-gg-olive)' }}>
                    {act.body}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)' }}
                  aria-hidden="true"
                />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="divider-woven absolute bottom-0 left-0 right-0" aria-hidden="true" />
    </section>
  );
}
