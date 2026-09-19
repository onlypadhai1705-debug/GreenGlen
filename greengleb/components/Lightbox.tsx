'use client';

import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '@/lib/types';

interface LightboxProps {
  images: readonly GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const current = images[currentIndex];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery lightbox"
      className="lightbox-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute top-5 right-5 z-10 p-2 transition-opacity hover:opacity-70 focus-visible:outline-none"
        style={{ color: 'rgba(244,240,232,0.8)' }}
      >
        <X size={24} strokeWidth={1.5} />
      </button>

      {/* Counter */}
      <div
        className="absolute top-5 left-5 z-10 text-label"
        style={{ color: 'rgba(244,240,232,0.45)', fontSize: '0.625rem' }}
        aria-live="polite"
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 z-10 p-3 transition-opacity hover:opacity-70 focus-visible:outline-none"
        style={{ color: 'rgba(244,240,232,0.7)' }}
      >
        <ChevronLeft size={28} strokeWidth={1.2} />
      </button>

      {/* Image */}
      <div
        className="relative w-full max-w-5xl mx-auto"
        style={{ maxHeight: '85vh' }}
      >
        <div
          className="relative"
          style={{
            aspectRatio: current.aspect === 'portrait' ? '3/4' : '16/10',
            maxHeight: '85vh',
          }}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="90vw"
            quality={90}
            className="object-contain"
            priority
          />
        </div>
        {/* Caption */}
        <div className="mt-4 text-center">
          <span className="text-label" style={{ color: 'rgba(244,240,232,0.45)', fontSize: '0.625rem' }}>
            {current.category}
          </span>
          <p className="text-body-sm mt-1" style={{ color: 'rgba(244,240,232,0.6)' }}>
            {current.alt}
          </p>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-4 md:right-8 z-10 p-3 transition-opacity hover:opacity-70 focus-visible:outline-none"
        style={{ color: 'rgba(244,240,232,0.7)' }}
      >
        <ChevronRight size={28} strokeWidth={1.2} />
      </button>
    </div>
  );
}
