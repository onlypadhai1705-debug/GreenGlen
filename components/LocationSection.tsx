import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Navigation } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { locationContent } from '@/lib/content';

// Extended type to handle new optional fields
type ExtendedLocationContent = typeof locationContent & {
  fromBhimtal?: string;
  fromNainital?: string;
  fromKathgodam?: string;
};
const loc = locationContent as ExtendedLocationContent;
import { blurData } from '@/lib/blurData';

export default function LocationSection() {
  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-ivory)' }}
    >
      <div className="container-gg">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6 sm:mb-10 items-end">
          <div className="lg:col-span-7">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-label text-gg-terra">{loc.eyebrow}</span>
                <span
                  className="block h-px w-8"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
                  aria-hidden="true"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2
                id="location-heading"
                className="text-display-md text-gg-forest"
              >
                {loc.headline}
              </h2>
            </ScrollReveal>
          </div>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">

          {/* Image */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0}>
              <div className="img-zoom relative" style={{ aspectRatio: '16/10' }}>
                <Image
                  src={locationContent.image}
                  alt={locationContent.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  quality={80}
                  placeholder="blur"
                  blurDataURL={blurData[locationContent.image]}
                  className="object-cover"
                  style={{ objectPosition: 'center 40%' }}
                />
                {/* Location pin overlay */}
                <div
                  className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-3"
                  style={{ backgroundColor: 'rgba(17,26,18,0.82)', backdropFilter: 'blur(8px)' }}
                >
                  <MapPin size={14} style={{ color: 'var(--color-gg-terracotta)' }} strokeWidth={1.5} />
                  <span className="text-label" style={{ color: 'rgba(244,240,232,0.85)', fontSize: '0.625rem' }}>
                    Sattal · Nainital · Uttarakhand
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Location details */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-5 sm:gap-7">

            {/* Location info with schema.org microdata */}
            <ScrollReveal delay={1}>
              <address
                itemScope
                itemType="https://schema.org/LodgingBusiness"
                style={{ fontStyle: 'normal' }}
              >
                <meta itemProp="name" content="Green Glen" />
                <meta itemProp="telephone" content="+919599557593" />
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <p className="text-label text-gg-terra mb-3">Location</p>
                  <p
                    className="font-display"
                    style={{
                      fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                      fontWeight: 300,
                      color: 'var(--color-gg-forest)',
                      lineHeight: 1.4,
                    }}
                  >
                    <span itemProp="addressLocality">Sattal</span>,{' '}
                    <span itemProp="addressRegion">Nainital, Uttarakhand</span>,{' '}
                    <span itemProp="addressCountry">India</span>
                  </p>
                </div>
              </address>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div style={{ height: '1px', backgroundColor: 'rgba(74,82,64,0.15)' }} aria-hidden="true" />
            </ScrollReveal>

            {/* From Bhimtal — KEY SEO signal */}
            <ScrollReveal delay={2}>
              <div>
                <p className="text-label text-gg-terra mb-3">From Bhimtal</p>
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                    fontWeight: 300,
                    color: 'var(--color-gg-forest)',
                    lineHeight: 1.4,
                  }}
                >
                  {loc.fromBhimtal ?? '15 km from Bhimtal lake'}
                </p>
                <p className="text-body-sm mt-2" style={{ color: 'var(--color-gg-sand)' }}>
                  Closest major town — 25 min by road
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div style={{ height: '1px', backgroundColor: 'rgba(74,82,64,0.15)' }} aria-hidden="true" />
            </ScrollReveal>

            {/* From Delhi */}
            <ScrollReveal delay={2}>
              <div>
                <p className="text-label text-gg-terra mb-3">From Delhi</p>
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                    fontWeight: 300,
                    color: 'var(--color-gg-forest)',
                    lineHeight: 1.4,
                  }}
                >
                  {loc.fromDelhi}
                </p>
                <p className="text-body-sm mt-2" style={{ color: 'var(--color-gg-sand)' }}>
                  Via NH9 / Kathgodam route
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div style={{ height: '1px', backgroundColor: 'rgba(74,82,64,0.15)' }} aria-hidden="true" />
            </ScrollReveal>

            {/* From Lucknow */}
            <ScrollReveal delay={2}>
              <div>
                <p className="text-label text-gg-terra mb-3">From Lucknow</p>
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                    fontWeight: 300,
                    color: 'var(--color-gg-forest)',
                    lineHeight: 1.4,
                  }}
                >
                  {loc.fromLucknow}
                </p>
                <p className="text-body-sm mt-2" style={{ color: 'var(--color-gg-sand)' }}>
                  Via Rampur / Haldwani route
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div style={{ height: '1px', backgroundColor: 'rgba(74,82,64,0.15)' }} aria-hidden="true" />
            </ScrollReveal>

            {/* Kainchi Dham */}
            <ScrollReveal delay={3}>
              <div>
                <p className="text-label text-gg-terra mb-3">Nearby</p>
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                    fontWeight: 300,
                    color: 'var(--color-gg-forest)',
                    lineHeight: 1.4,
                  }}
                >
                  Kainchi Dham
                </p>
                <p className="text-body-sm mt-2" style={{ color: 'var(--color-gg-olive)' }}>
                  {loc.kainchiNote}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div style={{ height: '1px', backgroundColor: 'rgba(74,82,64,0.15)' }} aria-hidden="true" />
            </ScrollReveal>

            {/* Accessibility */}
            <ScrollReveal delay={4}>
              <div>
                <p className="text-label text-gg-terra mb-3">Accessibility</p>
                <p className="text-body-sm" style={{ color: 'var(--color-gg-olive)' }}>
                  {loc.accessNote}
                </p>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={4}>
              {loc.mapUrl ? (
                <Link
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-dark w-full sm:w-auto gap-2"
                  id="location-directions-cta"
                >
                  <Navigation size={13} strokeWidth={1.5} />
                  {loc.mapCta}
                </Link>
              ) : (
                <div
                  className="btn-outline-dark w-full sm:w-auto gap-2 opacity-50 cursor-default"
                  title="Directions link coming soon"
                  aria-label="Directions — link coming soon"
                >
                  <Navigation size={13} strokeWidth={1.5} />
                  {loc.mapCta}
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
