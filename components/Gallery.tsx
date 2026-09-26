'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import Lightbox from './Lightbox';
import { galleryImages } from '@/lib/content';
import type { GalleryCategory } from '@/lib/types';

const CATEGORIES: GalleryCategory[] = [
  'All',
  'The House',
  'The Landscape',
  'The People',
  'Food',
  'Slow Moments',
  'Nearby',
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  const nextImage = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  }, [lightboxIndex, filtered.length]);

  return (
    <>
      <section
        id="gallery"
        aria-labelledby="gallery-heading"
        className="section-padding"
        style={{ backgroundColor: 'var(--color-gg-forest)' }}
      >
        <div className="container-gg">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <ScrollReveal delay={0}>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-label" style={{ color: 'var(--color-gg-terracotta)' }}>
                    Gallery
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
                  id="gallery-heading"
                  className="text-display-md"
                  style={{ color: 'var(--color-gg-ivory)' }}
                >
                  Green Glen<br />
                  <em
                    className="not-italic font-display"
                    style={{ color: 'rgba(244,240,232,0.5)' }}
                  >
                    in pictures.
                  </em>
                </h2>
              </ScrollReveal>
            </div>

            {/* Category filters */}
            <ScrollReveal delay={2}>
              <div
                role="tablist"
                aria-label="Filter gallery by category"
                className="flex flex-wrap gap-2"
              >
                {CATEGORIES.filter((cat) =>
                  cat === 'All' || galleryImages.some((img) => img.category === cat)
                ).map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeCategory === cat}
                    onClick={() => setActiveCategory(cat)}
                    className="text-label px-3 py-1.5 transition-all duration-200"
                    style={{
                      fontSize: '0.6rem',
                      color: activeCategory === cat ? 'var(--color-gg-ivory)' : 'rgba(244,240,232,0.4)',
                      borderBottom: activeCategory === cat
                        ? '1px solid var(--color-gg-terracotta)'
                        : '1px solid transparent',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Masonry-style editorial grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {filtered.map((image, i) => (
              <div key={image.id} className="break-inside-avoid">
                <ScrollReveal delay={((i % 3) as 0 | 1 | 2)}>
                  <button
                    onClick={() => openLightbox(i)}
                    className="w-full group relative overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{
                      aspectRatio: image.aspect === 'portrait' ? '3/4' : '4/3',
                      '--tw-ring-color': 'var(--color-gg-terracotta)',
                    } as React.CSSProperties}
                    aria-label={`View full-size: ${image.alt}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(to top, rgba(17,26,18,0.75) 0%, transparent 60%)' }}
                      aria-hidden="true"
                    >
                      <div>
                        <span className="text-label block" style={{ color: 'var(--color-gg-terracotta)', fontSize: '0.6rem' }}>
                          {image.category}
                        </span>
                        <p className="text-body-sm mt-1" style={{ color: 'rgba(244,240,232,0.8)' }}>
                          {image.alt.split('—')[0].trim()}
                        </p>
                      </div>
                    </div>
                  </button>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
