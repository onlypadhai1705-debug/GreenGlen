'use client';

import Image from 'next/image';
import Link from 'next/link';
import { blurData } from '@/lib/blurData';
import { birdWatchingContent, whatsappStayUrl } from '@/lib/content';

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
        <div className="max-w-4xl mb-6 sm:mb-10">
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
              {birdWatchingContent.eyebrow}
            </span>
          </div>

          <h2
            id="birdwatching-heading"
            className="font-display mb-3"
            style={{
              fontSize: 'clamp(2rem, 6vw, 5.5rem)',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: 'var(--color-gg-ivory)',
            }}
          >
            The best homestay for birdwatchers
            <br />
            <em
              className="not-italic"
              style={{ color: 'rgba(244,240,232,0.55)' }}
            >
              near Bhimtal &amp; Sattal.
            </em>
          </h2>

          <p
            className="text-body max-w-2xl"
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              lineHeight: 1.65,
              color: 'rgba(244,240,232,0.72)',
            }}
          >
            Sattal is celebrated worldwide as one of the finest birding corridors on earth with 500+ recorded avian species. Green Glen is the best homestay for birdwatchers near Bhimtal and Sattal — built around the trees, not over them — so you can step onto your veranda at first light, breathe the cold pine air, and watch rare Himalayan birds right from your room.
          </p>
        </div>

        {/* Pure, Simple Photo Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
          {gallery.map((photo, i) => {
            const isFeatured = photo.featured;
            const isLast = i === gallery.length - 1;
            return (
              <div
                key={photo.src}
                className={`group relative overflow-hidden rounded-md sm:rounded-sm card-lift ${
                  isFeatured
                    ? 'col-span-2 lg:col-span-2 aspect-[16/10] sm:aspect-[16/9]'
                    : isLast
                    ? 'col-span-2 sm:col-span-1 aspect-[16/10] sm:aspect-[4/3]'
                    : 'col-span-1 aspect-square sm:aspect-[4/3]'
                }`}
                style={{
                  backgroundColor: 'rgba(28, 43, 30, 0.5)',
                  border: '1px solid rgba(201, 185, 154, 0.22)',
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={isFeatured || isLast ? '(max-width: 640px) 100vw, 50vw' : '(max-width: 768px) 50vw, 33vw'}
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
                      'linear-gradient(to top, rgba(17,26,18,0.92) 0%, rgba(17,26,18,0.25) 50%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Minimalist Caption */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 md:p-6 flex items-end justify-between">
                  <div>
                    <h3
                      className="font-display text-white"
                      style={{
                        fontSize: isFeatured ? 'clamp(1.125rem, 3.5vw, 1.5rem)' : 'clamp(0.9375rem, 2.8vw, 1.25rem)',
                        fontWeight: 300,
                        lineHeight: 1.2,
                      }}
                    >
                      {photo.title}
                    </h3>
                    <p
                      className="font-display italic mt-0.5"
                      style={{
                        fontSize: 'clamp(0.7rem, 2vw, 0.875rem)',
                        color: 'var(--color-gg-sand)',
                      }}
                    >
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Motive Footer */}
        <div
          className="mt-6 sm:mt-10 pt-5 sm:pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
          style={{ borderTop: '1px solid rgba(201, 185, 154, 0.15)' }}
        >
          <p
            className="text-body-sm"
            style={{ color: 'rgba(244,240,232,0.6)', maxWidth: '42ch' }}
          >
            Dawn bird walks, binoculars, and packed breakfast boxes arranged on request for wildlife enthusiasts and photographers.
          </p>

          <Link
            href={whatsappStayUrl}
            target="_blank"
            rel="noopener noreferrer"
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
