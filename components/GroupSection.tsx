import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import { groupContent, whatsappStayUrl } from '@/lib/content';
import { blurData } from '@/lib/blurData';

export default function GroupSection() {
  return (
    <section
      id="groups"
      aria-labelledby="group-section-heading"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-gg-cream)' }}
    >
      <div className="container-gg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">

          {/* Left: Typography-dominant block */}
          <div className="flex flex-col justify-center">
            {/* Eyebrow */}
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
                  <span className="text-label text-gg-terra" style={{ fontSize: '0.6rem' }}>05</span>
                </div>
                <span className="text-label text-gg-terra" style={{ letterSpacing: '0.24em' }}>{groupContent.eyebrow}</span>
              </div>
            </ScrollReveal>

            {/* The "20" statement — oversized */}
            <ScrollReveal delay={1}>
              <div className="flex items-end gap-3 sm:gap-6 mb-3 sm:mb-4 leading-none">
                <span
                  className="font-display"
                  aria-hidden="true"
                  style={{
                    fontSize: 'clamp(4.25rem, 15vw, 13rem)',
                    fontWeight: 300,
                    color: 'var(--color-gg-forest)',
                    lineHeight: 1,
                    opacity: 0.12,
                    userSelect: 'none',
                  }}
                >
                  20
                </span>
                <div style={{ paddingBottom: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
                  <span
                    className="text-label block mb-1 sm:mb-2"
                    style={{ color: 'rgba(74,107,69,0.7)' }}
                  >
                    Up to
                  </span>
                  <span
                    className="font-display block"
                    style={{
                      fontSize: 'clamp(1.25rem, 3vw, 2.25rem)',
                      fontWeight: 400,
                      color: 'var(--color-gg-forest)',
                    }}
                  >
                    Guests
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={1}>
              <h2
                id="group-section-heading"
                className="text-display-md text-gg-forest"
                style={{ marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)' }}
              >
                {groupContent.headline}
              </h2>
            </ScrollReveal>

            {/* Body */}
            <ScrollReveal delay={2}>
              <p 
                className="text-body" 
                style={{ 
                  color: 'var(--color-gg-olive)',
                  fontSize: '1.0625rem',
                  lineHeight: '1.75',
                  marginBottom: '0.75rem',
                }}
              >
                {groupContent.body}
              </p>
              <p 
                className="text-label" 
                style={{ 
                  color: 'rgba(74,107,69,0.7)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                }}
              >
                {groupContent.subtext}
              </p>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={3}>
              <div className="mt-6 sm:mt-8">
                <Link
                  href={whatsappStayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto justify-center magnetic-hover"
                >
                  Enquire for Your Group
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Image */}
          <div>
            <ScrollReveal delay={1}>
              <div
                className="img-zoom card-lift relative overflow-hidden"
                style={{ 
                  aspectRatio: '4/5',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <Image
                  src={groupContent.image}
                  alt={groupContent.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={85}
                  placeholder="blur"
                  blurDataURL={blurData[groupContent.image]}
                  className="object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
