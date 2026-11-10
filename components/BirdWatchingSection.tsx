'use client';

import { useState } from 'react';
import Image from 'next/image';
import { blurData } from '@/lib/blurData';
import { birdWatchingContent } from '@/lib/content';

export default function BirdWatchingSection() {
  const [selectedSpeciesId, setSelectedSpeciesId] = useState<string>(
    birdWatchingContent.species[0].id
  );

  const activeSpecies =
    birdWatchingContent.species.find((s) => s.id === selectedSpeciesId) ||
    birdWatchingContent.species[0];

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
      {/* Decorative Woven Dividers */}
      <div
        className="divider-woven absolute top-0 left-0 right-0"
        style={{ opacity: 0.3 }}
        aria-hidden="true"
      />
      <div
        className="divider-woven absolute bottom-0 left-0 right-0"
        style={{ opacity: 0.3 }}
        aria-hidden="true"
      />

      {/* Atmospheric Radial Ambient Light */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(181, 104, 74, 0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 right-10 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(74, 82, 64, 0.25) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
        aria-hidden="true"
      />

      <div className="container-gg relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              className="block h-px w-8"
              style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.6 }}
              aria-hidden="true"
            />
            <span
              className="text-label inline-flex items-center gap-2"
              style={{ color: 'var(--color-gg-terracotta)' }}
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                <line x1="16" y1="8" x2="2" y2="22" />
                <line x1="17.5" y1="15" x2="9" y2="15" />
              </svg>
              <span>{birdWatchingContent.eyebrow}</span>
            </span>
            <span
              className="block h-px w-8"
              style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.6 }}
              aria-hidden="true"
            />
          </div>

          <h2
            id="birdwatching-heading"
            className="text-display-md mb-6"
            style={{ color: 'var(--color-gg-ivory)' }}
          >
            {birdWatchingContent.headline}
          </h2>

          <p
            className="text-body max-w-2xl mx-auto"
            style={{ color: 'rgba(244, 240, 232, 0.72)' }}
          >
            {birdWatchingContent.subheading}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8" style={{ borderTop: '1px solid rgba(201, 185, 154, 0.18)' }}>
            {birdWatchingContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 rounded-sm text-left transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(28, 43, 30, 0.45)',
                  border: '1px solid rgba(201, 185, 154, 0.2)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    fontWeight: 300,
                    color: 'var(--color-gg-ivory)',
                    lineHeight: 1,
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-label mt-2"
                  style={{
                    color: 'var(--color-gg-sand)',
                    fontSize: '0.625rem',
                    letterSpacing: '0.14em',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Masterpiece Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Left Column: Observation Deck (Real Guests in Action) */}
          <div
            className="lg:col-span-6 card-lift flex flex-col justify-between p-6 sm:p-8 rounded-sm"
            style={{
              backgroundColor: 'rgba(28, 43, 30, 0.5)',
              border: '1px solid rgba(201, 185, 154, 0.25)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div>
              {/* Photo Frame */}
              <div
                className="img-zoom relative overflow-hidden rounded-sm mb-6"
                style={{ aspectRatio: '16/10' }}
              >
                <Image
                  src={birdWatchingContent.observationDeck.image}
                  alt={birdWatchingContent.observationDeck.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={blurData[birdWatchingContent.observationDeck.image]}
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(17,26,18,0.88) 0%, rgba(17,26,18,0.2) 60%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-label px-3 py-1.5 rounded-full inline-flex items-center gap-2"
                    style={{
                      backgroundColor: 'rgba(17,26,18,0.85)',
                      border: '1px solid rgba(201,185,154,0.35)',
                      color: 'var(--color-gg-ivory)',
                      fontSize: '0.5625rem',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse"
                      style={{ backgroundColor: 'var(--color-gg-terracotta)' }}
                      aria-hidden="true"
                    />
                    {birdWatchingContent.observationDeck.badge}
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                      fontWeight: 300,
                      color: 'var(--color-gg-ivory)',
                      lineHeight: 1.2,
                    }}
                  >
                    {birdWatchingContent.observationDeck.title}
                  </h3>
                  <p
                    className="text-body-sm mt-0.5"
                    style={{ color: 'rgba(244,240,232,0.72)' }}
                  >
                    {birdWatchingContent.observationDeck.subtitle}
                  </p>
                </div>
              </div>

              {/* Guest Field Quote */}
              <blockquote
                className="p-5 rounded-sm mb-6 font-display"
                style={{
                  backgroundColor: 'rgba(17, 26, 18, 0.65)',
                  borderLeft: '2px solid var(--color-gg-terracotta)',
                  borderRight: '1px solid rgba(201, 185, 154, 0.15)',
                  borderTop: '1px solid rgba(201, 185, 154, 0.15)',
                  borderBottom: '1px solid rgba(201, 185, 154, 0.15)',
                  fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                  color: 'rgba(244, 240, 232, 0.88)',
                  lineHeight: 1.55,
                }}
              >
                &ldquo;{birdWatchingContent.observationDeck.quote}&rdquo;
                <div
                  className="text-label not-italic mt-3"
                  style={{ color: 'var(--color-gg-sand)', fontSize: '0.625rem' }}
                >
                  — {birdWatchingContent.observationDeck.quoteAuthor}
                </div>
              </blockquote>

              {/* Amenities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {birdWatchingContent.observationDeck.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--color-gg-terracotta)' }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span
                      className="text-body-sm"
                      style={{ color: 'rgba(244,240,232,0.78)' }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Himalayan Species Field Guide */}
          <div
            className="lg:col-span-6 card-lift flex flex-col justify-between p-6 sm:p-8 rounded-sm"
            style={{
              backgroundColor: 'rgba(28, 43, 30, 0.5)',
              border: '1px solid rgba(201, 185, 154, 0.25)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div>
              {/* Field Guide Title */}
              <div
                className="flex items-center justify-between mb-5 pb-4"
                style={{ borderBottom: '1px solid rgba(201,185,154,0.18)' }}
              >
                <div>
                  <span
                    className="text-label"
                    style={{ color: 'var(--color-gg-terracotta)' }}
                  >
                    Native Avifauna
                  </span>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.35rem, 2.5vw, 1.75rem)',
                      fontWeight: 300,
                      color: 'var(--color-gg-ivory)',
                      lineHeight: 1.2,
                    }}
                  >
                    Himalayan Species Field Guide
                  </h3>
                </div>
                <span
                  className="text-label px-2.5 py-1 rounded-sm"
                  style={{
                    backgroundColor: 'rgba(17,26,18,0.7)',
                    border: '1px solid rgba(201,185,154,0.25)',
                    color: 'var(--color-gg-sand)',
                    fontSize: '0.5625rem',
                  }}
                >
                  Interactive Guide
                </span>
              </div>

              {/* Species Tabs Selector */}
              <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
                {birdWatchingContent.species.map((s) => {
                  const isSelected = s.id === selectedSpeciesId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSpeciesId(s.id)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-sm transition-all duration-300 text-left cursor-pointer flex-shrink-0"
                      style={{
                        backgroundColor: isSelected
                          ? 'var(--color-gg-terracotta)'
                          : 'rgba(17,26,18,0.65)',
                        border: isSelected
                          ? '1px solid var(--color-gg-terra-light)'
                          : '1px solid rgba(201,185,154,0.18)',
                        color: isSelected ? 'var(--color-gg-ivory)' : 'rgba(244,240,232,0.7)',
                      }}
                    >
                      <div
                        className="relative w-7 h-7 rounded-full overflow-hidden flex-shrink-0"
                        style={{ border: '1px solid rgba(201,185,154,0.4)' }}
                      >
                        <Image
                          src={s.image}
                          alt={s.commonName}
                          fill
                          sizes="28px"
                          placeholder="blur"
                          blurDataURL={blurData[s.image]}
                          className="object-cover"
                        />
                      </div>
                      <span
                        className="text-label truncate"
                        style={{
                          fontSize: '0.625rem',
                          letterSpacing: '0.08em',
                          color: isSelected
                            ? 'var(--color-gg-ivory)'
                            : 'rgba(244,240,232,0.85)',
                        }}
                      >
                        {s.commonName}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Species Detailed Showcase */}
              <div
                className="p-5 sm:p-6 rounded-sm mb-6 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(17, 26, 18, 0.75)',
                  border: '1px solid rgba(201, 185, 154, 0.25)',
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mb-5">
                  {/* Photo with subtle zoom */}
                  <div
                    className="sm:col-span-5 img-zoom relative rounded-sm overflow-hidden"
                    style={{
                      aspectRatio: '4/3',
                      border: '1px solid rgba(201,185,154,0.3)',
                    }}
                  >
                    <Image
                      key={activeSpecies.id}
                      src={activeSpecies.image}
                      alt={activeSpecies.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      placeholder="blur"
                      blurDataURL={blurData[activeSpecies.image]}
                      className="object-cover"
                    />
                  </div>

                  {/* Species Taxonomy & Status */}
                  <div className="sm:col-span-7">
                    <span
                      className="text-label inline-block px-2.5 py-0.5 rounded-full mb-2"
                      style={{
                        backgroundColor: 'rgba(181,104,74,0.2)',
                        border: '1px solid rgba(181,104,74,0.4)',
                        color: 'var(--color-gg-terra-light)',
                        fontSize: '0.5625rem',
                      }}
                    >
                      {activeSpecies.status}
                    </span>
                    <h4
                      className="font-display"
                      style={{
                        fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                        fontWeight: 300,
                        color: 'var(--color-gg-ivory)',
                        lineHeight: 1.15,
                      }}
                    >
                      {activeSpecies.commonName}
                    </h4>
                    <p
                      className="font-display italic mt-0.5"
                      style={{
                        fontSize: '0.9375rem',
                        color: 'var(--color-gg-sand)',
                      }}
                    >
                      {activeSpecies.scientificName}
                    </p>

                    <div
                      className="mt-3 pt-3 text-body-sm"
                      style={{
                        borderTop: '1px solid rgba(201,185,154,0.15)',
                        color: 'rgba(244,240,232,0.7)',
                      }}
                    >
                      <span style={{ color: 'var(--color-gg-sand)' }}>Habitat: </span>
                      {activeSpecies.habitat}
                    </div>
                  </div>
                </div>

                {/* Call & Vocalization Note */}
                <div
                  className="flex items-start gap-3 p-3 rounded-sm mb-4 text-body-sm"
                  style={{
                    backgroundColor: 'rgba(28, 43, 30, 0.6)',
                    border: '1px solid rgba(201, 185, 154, 0.15)',
                    color: 'rgba(244, 240, 232, 0.82)',
                  }}
                >
                  <span
                    style={{ color: 'var(--color-gg-terracotta)' }}
                    aria-hidden="true"
                  >
                    🔊
                  </span>
                  <div>
                    <span style={{ color: 'var(--color-gg-sand)', fontWeight: 400 }}>
                      Call & Sound:{' '}
                    </span>
                    {activeSpecies.call}
                  </div>
                </div>

                {/* Field Note */}
                <p
                  className="text-body-sm text-left"
                  style={{ color: 'rgba(244,240,232,0.75)', lineHeight: 1.65 }}
                >
                  {activeSpecies.note}
                </p>
              </div>
            </div>

            {/* Quick Sighting Footer */}
            <div
              className="pt-4 flex flex-wrap items-center justify-between gap-3 text-body-sm"
              style={{
                borderTop: '1px solid rgba(201,185,154,0.18)',
                color: 'rgba(244,240,232,0.6)',
                fontSize: '0.8125rem',
              }}
            >
              <span className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: '#4ade80' }}
                  aria-hidden="true"
                />
                Documented regularly at Green Glen retreat
              </span>
              <a
                href="#contact"
                className="text-label"
                style={{
                  color: 'var(--color-gg-terracotta)',
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                }}
              >
                Request Birding Itinerary &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Guided Trails Strip (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {birdWatchingContent.trails.map((trail, index) => (
            <div
              key={trail.name}
              className="card-lift p-6 rounded-sm text-left"
              style={{
                backgroundColor: 'rgba(28, 43, 30, 0.45)',
                border: '1px solid rgba(201, 185, 154, 0.2)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-label"
                  style={{ color: 'var(--color-gg-terracotta)' }}
                >
                  Trail 0{index + 1}
                </span>
                <span
                  className="text-label px-2.5 py-0.5 rounded-sm"
                  style={{
                    backgroundColor: 'rgba(17,26,18,0.75)',
                    border: '1px solid rgba(201,185,154,0.2)',
                    color: 'var(--color-gg-sand)',
                    fontSize: '0.625rem',
                  }}
                >
                  {trail.distance}
                </span>
              </div>
              <h4
                className="font-display mb-2"
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 300,
                  color: 'var(--color-gg-ivory)',
                  lineHeight: 1.25,
                }}
              >
                {trail.name}
              </h4>
              <p
                className="text-body-sm"
                style={{ color: 'rgba(244,240,232,0.7)' }}
              >
                {trail.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dedicated Birders CTA Banner */}
        <div
          className="p-8 sm:p-12 text-center rounded-sm relative overflow-hidden"
          style={{
            backgroundColor: 'rgba(28, 43, 30, 0.65)',
            border: '1px solid rgba(181, 104, 74, 0.45)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <span
              className="text-label inline-block mb-3"
              style={{ color: 'var(--color-gg-terracotta)' }}
            >
              Expeditions & Photography Workshops
            </span>
            <h3
              className="font-display mb-4"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 300,
                color: 'var(--color-gg-ivory)',
                lineHeight: 1.15,
              }}
            >
              Plan Your Himalayan Birding Stay
            </h3>
            <p
              className="text-body mb-8"
              style={{ color: 'rgba(244,240,232,0.78)' }}
            >
              We arrange customized early dawn naturalist guides, packed breakfast thermoses, and exclusive mudhouse bookings for birding clubs and wildlife photographers.
            </p>
            <a
              href="#contact"
              className="btn-primary"
              style={{
                backgroundColor: 'var(--color-gg-terracotta)',
                borderColor: 'var(--color-gg-terracotta)',
                padding: '1rem 2.5rem',
                fontSize: '0.75rem',
              }}
            >
              <span>Book Your Birding Stay</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
