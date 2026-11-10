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
      className="relative py-24 md:py-36 bg-[#14231b] text-sand-100 overflow-hidden"
    >
      {/* Background Ambience & Handicraft Textures */}
      <div className="absolute inset-0 bg-weave opacity-20 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-terracotta-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-forest-700/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative Woven Top Border */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-terracotta-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-forest-700/60 text-terracotta-300 text-xs tracking-widest uppercase font-medium mb-4 backdrop-blur-sm">
            <svg
              className="w-3.5 h-3.5 text-terracotta-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
              <line x1="16" y1="8" x2="2" y2="22" />
              <line x1="17.5" y1="15" x2="9" y2="15" />
            </svg>
            <span>{birdWatchingContent.eyebrow}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-sand-50 font-light leading-[1.15] tracking-tight mb-6">
            {birdWatchingContent.headline}
          </h2>

          <p className="text-base sm:text-lg text-sand-300/90 leading-relaxed font-light">
            {birdWatchingContent.subheading}
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-8 border-t border-forest-800/80">
            {birdWatchingContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3 sm:p-4 rounded-xl bg-forest-900/40 border border-forest-800/60 backdrop-blur-xs text-left"
              >
                <div className="font-serif text-2xl sm:text-3xl text-sand-50 font-normal tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs text-sand-400 mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Masterpiece Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16">
          {/* Left Column: Observation Deck (Guests in Action) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-forest-900/50 border border-forest-800/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
            <div className="relative">
              {/* Image Frame */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden mb-6 border border-forest-700/50 shadow-lg">
                <Image
                  src={birdWatchingContent.observationDeck.image}
                  alt={birdWatchingContent.observationDeck.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL={blurData[birdWatchingContent.observationDeck.image]}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-medium tracking-wider uppercase text-sand-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-terracotta-400 animate-pulse" />
                    {birdWatchingContent.observationDeck.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="font-serif text-xl sm:text-2xl text-sand-50 font-normal">
                    {birdWatchingContent.observationDeck.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand-300 font-light mt-0.5">
                    {birdWatchingContent.observationDeck.subtitle}
                  </p>
                </div>
              </div>

              {/* Guest Quote Block */}
              <div className="relative p-5 rounded-2xl bg-forest-950/60 border border-forest-800/80 mb-6">
                <svg
                  className="w-6 h-6 text-terracotta-400/50 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm sm:text-base text-sand-200/90 font-light italic leading-relaxed">
                  &ldquo;{birdWatchingContent.observationDeck.quote}&rdquo;
                </p>
                <div className="text-xs text-terracotta-300 font-medium tracking-wide uppercase mt-3">
                  — {birdWatchingContent.observationDeck.quoteAuthor}
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                {birdWatchingContent.observationDeck.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-sand-300/90"
                  >
                    <svg
                      className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Species Field Guide */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-forest-900/50 border border-forest-800/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-terracotta-400 font-medium">
                    Native Avifauna
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-sand-50 font-normal">
                    Himalayan Species Field Guide
                  </h3>
                </div>
                <span className="hidden sm:inline-flex text-xs px-2.5 py-1 rounded-full bg-forest-800/70 text-sand-300 border border-forest-700/60">
                  Select Species
                </span>
              </div>

              {/* Species Tabs Selector */}
              <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-none">
                {birdWatchingContent.species.map((s) => {
                  const isSelected = s.id === selectedSpeciesId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSpeciesId(s.id)}
                      className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-left transition-all duration-200 shrink-0 border ${
                        isSelected
                          ? 'bg-terracotta-700/40 border-terracotta-500/80 text-sand-50 shadow-md ring-1 ring-terracotta-500/40'
                          : 'bg-forest-950/40 border-forest-800/60 text-sand-400 hover:text-sand-200 hover:border-forest-700'
                      }`}
                    >
                      <div className="relative w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-forest-700">
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
                      <span className="text-xs font-medium tracking-tight">
                        {s.commonName}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Species Detailed Showcase */}
              <div className="rounded-2xl bg-forest-950/60 border border-forest-800/80 p-5 sm:p-6 transition-all duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mb-5">
                  {/* Photo with subtle zoom */}
                  <div className="sm:col-span-5 relative aspect-[4/3] rounded-xl overflow-hidden border border-forest-700/70 shadow-md group/img">
                    <Image
                      key={activeSpecies.id}
                      src={activeSpecies.image}
                      alt={activeSpecies.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 30vw"
                      placeholder="blur"
                      blurDataURL={blurData[activeSpecies.image]}
                      className="object-cover transition-transform duration-500 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Species Nomenclature & Status */}
                  <div className="sm:col-span-7 text-left">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-forest-800/80 border border-forest-700/70 text-[11px] text-terracotta-300 font-medium mb-1.5">
                      {activeSpecies.status}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-sand-50 font-normal leading-snug">
                      {activeSpecies.commonName}
                    </h4>
                    <p className="text-xs sm:text-sm text-sand-400 italic font-light font-serif">
                      {activeSpecies.scientificName}
                    </p>

                    <div className="mt-3 pt-3 border-t border-forest-800/80 space-y-1.5">
                      <div className="text-xs text-sand-300">
                        <span className="text-sand-400 font-medium">Habitat: </span>
                        {activeSpecies.habitat}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call & Vocalization Note */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-forest-900/60 border border-forest-800/60 text-xs sm:text-sm text-sand-300/90 mb-4">
                  <svg
                    className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                  <div>
                    <span className="font-medium text-sand-200">Call & Sound: </span>
                    {activeSpecies.call}
                  </div>
                </div>

                {/* Field Note */}
                <p className="text-xs sm:text-sm text-sand-300/90 font-light leading-relaxed text-left">
                  {activeSpecies.note}
                </p>
              </div>
            </div>

            {/* Quick Sighting Prompt */}
            <div className="mt-6 pt-4 border-t border-forest-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-sand-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Active sightings documented in and around Green Glen retreat
              </span>
              <a
                href="#contact"
                className="text-terracotta-300 hover:text-terracotta-200 font-medium underline underline-offset-4"
              >
                Request Birding Itinerary &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Guided Trails & Photographers Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {birdWatchingContent.trails.map((trail, index) => (
            <div
              key={trail.name}
              className="p-6 rounded-2xl bg-forest-900/40 border border-forest-800/70 hover:border-forest-700 transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-widest text-terracotta-400 font-medium">
                  Trail 0{index + 1}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-forest-800/80 text-sand-300 border border-forest-700/60 font-mono">
                  {trail.distance}
                </span>
              </div>
              <h4 className="font-serif text-lg text-sand-50 font-normal mb-2">
                {trail.name}
              </h4>
              <p className="text-xs sm:text-sm text-sand-300 font-light leading-relaxed">
                {trail.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dedicated Birders CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-forest-900/80 via-forest-900/60 to-forest-950/90 border border-terracotta-500/30 p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-md shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block text-xs uppercase tracking-widest text-terracotta-300 font-semibold mb-3">
              Expeditions & Photography Workshops
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-sand-50 font-light mb-4">
              Plan Your Himalayan Birding Expedition
            </h3>
            <p className="text-sm sm:text-base text-sand-300/90 font-light mb-8 leading-relaxed">
              We arrange customized early dawn naturalist guides, packed breakfast thermoses, and exclusive mudhouse bookings for birding clubs and wildlife photographers.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-terracotta-700 hover:bg-terracotta-600 text-sand-50 text-sm font-medium tracking-wide transition-all duration-200 shadow-lg hover:shadow-terracotta-900/40 hover:-translate-y-0.5"
            >
              <span>Book Your Birding Stay</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
