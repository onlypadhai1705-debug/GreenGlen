'use client';

import Image from 'next/image';
import Link from 'next/link';
import { blurData } from '@/lib/blurData';
import { birdWatchingContent } from '@/lib/content';

export default function BirdWatchingSection() {
  const gallery = [
    {
      src: birdWatchingContent.observationDeck.image,
      alt: birdWatchingContent.observationDeck.imageAlt,
      title: 'The Forest Veranda Deck',
      subtitle: 'Dawn birding from your mudhouse veranda',
      featured: true,
    },
    ...birdWatchingContent.species.map((s) => ({
      src: s.image,
      alt: s.imageAlt,
      title: s.commonName,
      subtitle: s.scientificName,
      featured: false,
    })),
  ];

  return (
    <section
      id="birdwatching"
      aria-labelledby="birdwatching-heading"
      className="section-padding relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-gg-forest-dark)',
        color: 'var(--color-gg-ivory)',
      }}
    >
      <div className="container-gg">
        {/* Huge Heading with Motive */}
        <div className="max-w-4xl mb-14 md:mb-18">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="block h-px w-8"
              style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.6 }}
              aria-hidden="true"
            />
            <span
              className="text-label"
              style={{ color: 'var(--color-gg-terracotta)' }}
            >
              Sattal · 500+ Avian Species · Western Himalayas
            </span>
          </div>

          <h2
            id="birdwatching-heading"
            className="font-display mb-6"
            style={{
              fontSize: 'clamp(2.75rem, 6.5vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--color-gg-ivory)',
            }}
          >
            Silence for the soul.
            <br />
            <em
              className="not-italic"
              style={{ color: 'rgba(244,240,232,0.55)' }}
            >
              A sanctuary for feathers.
            </em>
          </h2>

          <p
            className="text-body max-w-2xl"
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              lineHeight: 1.75,
              color: 'rgba(244,240,232,0.72)',
            }}
          >
            Sattal is celebrated worldwide as one of the finest birding corridors on earth. We built Green Glen around the trees, not over them — so you can step onto your veranda at first light, breathe the cold pine air, and watch rare Himalayan birds right from your room.
          </p>
        </div>

        {/* Pure, Simple Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {gallery.map((photo) => (
            <div
              key={photo.src}
              className={`group relative overflow-hidden rounded-sm card-lift ${
                photo.featured ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
              style={{
                aspectRatio: photo.featured ? '16/10' : '4/3',
                backgroundColor: 'rgba(28, 43, 30, 0.4)',
                border: '1px solid rgba(201, 185, 154, 0.2)',
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={
                  photo.featured
                    ? '(max-width: 768px) 100vw, 66vw'
                    : '(max-width: 768px) 100vw, 33vw'
                }
                quality={82}
                placeholder="blur"
                blurDataURL={blurData[photo.src] ?? ''}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    'linear-gradient(to top, rgba(17,26,18,0.85) 0%, rgba(17,26,18,0.15) 50%, transparent 100%)',
                }}
                aria-hidden="true"
              />

              {/* Minimalist Caption */}
              <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 flex items-end justify-between">
                <div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: photo.featured ? '1.5rem' : '1.25rem',
                      fontWeight: 300,
                      color: 'var(--color-gg-ivory)',
                      lineHeight: 1.2,
                    }}
                  >
                    {photo.title}
                  </h3>
                  <p
                    className="font-display italic mt-0.5"
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-gg-sand)',
                    }}
                  >
                    {photo.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Motive Footer */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderTop: '1px solid rgba(201, 185, 154, 0.15)' }}
        >
          <p
            className="text-body-sm"
            style={{ color: 'rgba(244,240,232,0.6)', maxWidth: '42ch' }}
          >
            Dawn bird walks, binoculars, and packed breakfast boxes arranged on request for wildlife enthusiasts and photographers.
          </p>

          <Link
            href="#contact"
            className="btn-outline inline-flex items-center gap-3"
            style={{
              padding: '0.875rem 2rem',
              fontSize: '0.6875rem',
            }}
          >
            <span>Plan Your Birding Stay</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
