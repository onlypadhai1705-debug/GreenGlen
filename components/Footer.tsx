import Link from 'next/link';

import { siteConfig, footerLinks } from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      role="contentinfo"
      style={{ backgroundColor: 'var(--color-gg-forest)' }}
    >
      {/* Main footer grid */}
      <div className="container-gg py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-5">
            {/* Wordmark */}
            <Link href="/" aria-label="Green Glen — Return to homepage">
              <span
                className="font-display"
                style={{
                  fontSize: '1.375rem',
                  fontWeight: 300,
                  letterSpacing: '0.08em',
                  color: 'var(--color-gg-ivory)',
                }}
              >
                GREEN GLEN
              </span>
            </Link>

            <p
              className="text-body mt-4 max-w-xs"
              style={{ color: 'rgba(244,240,232,0.48)' }}
            >
              A mud-house eco-comfort retreat in Sattal, Nainital, Uttarakhand.
              A home away from home for families, friends and private groups.
            </p>

            <p
              className="text-label mt-5"
              style={{ color: 'rgba(244,240,232,0.35)', letterSpacing: '0.14em' }}
            >
              Sattal · Nainital · Uttarakhand
            </p>

            {/* Social links (only shown if configured) */}
            {(siteConfig.social.instagram || siteConfig.social.facebook) && (
              <div className="flex items-center gap-4 mt-6">
                {siteConfig.social.instagram && (
                  <Link
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Green Glen on Instagram"
                    className="transition-opacity hover:opacity-60 focus-visible:outline-none"
                    style={{ color: 'rgba(244,240,232,0.5)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                    </svg>
                  </Link>
                )}
                {siteConfig.social.facebook && (
                  <Link
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Green Glen on Facebook"
                    className="transition-opacity hover:opacity-60 focus-visible:outline-none"
                    style={{ color: 'rgba(244,240,232,0.5)' }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 md:col-start-7">
            <p
              className="text-label mb-6"
              style={{ color: 'var(--color-gg-terracotta)' }}
            >
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm transition-colors duration-200 focus-visible:outline-none"
                      style={{ color: 'rgba(244,240,232,0.5)' }}
                      onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'var(--color-gg-ivory)'; }}
                      onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(244,240,232,0.5)'; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact + CTA column */}
          <div className="md:col-span-3 md:col-start-10">
            <p
              className="text-label mb-6"
              style={{ color: 'var(--color-gg-terracotta)' }}
            >
              Get in Touch
            </p>

            {siteConfig.phone && (
              <div className="mb-3">
                <p className="text-body-sm" style={{ color: 'rgba(244,240,232,0.4)' }}>Phone</p>
                <Link
                  href={`tel:${siteConfig.phone}`}
                  className="text-body-sm transition-colors duration-200 focus-visible:outline-none"
                  style={{ color: 'rgba(244,240,232,0.75)' }}
                >
                  {siteConfig.phone}
                </Link>
              </div>
            )}

            {siteConfig.email && (
              <div className="mb-3">
                <p className="text-body-sm" style={{ color: 'rgba(244,240,232,0.4)' }}>Email</p>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-body-sm transition-colors duration-200 focus-visible:outline-none"
                  style={{ color: 'rgba(244,240,232,0.75)' }}
                >
                  {siteConfig.email}
                </Link>
              </div>
            )}

            {!siteConfig.phone && !siteConfig.email && (
              <p className="text-body-sm mb-6" style={{ color: 'rgba(244,240,232,0.4)' }}>
                Contact details coming soon.
              </p>
            )}

            {siteConfig.whatsapp && (
              <Link
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label inline-flex items-center gap-2 mt-2 transition-opacity hover:opacity-70 focus-visible:outline-none"
                style={{ color: 'rgba(244,240,232,0.6)', fontSize: '0.6rem' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.104 1.52 5.832L.057 23.784a.75.75 0 00.92.92l5.952-1.463A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.5a10.435 10.435 0 01-5.27-1.424l-.378-.221-3.535.868.883-3.534-.243-.39A10.5 10.5 0 1122.5 12 10.513 10.513 0 0112 22.5z" fill="currentColor"/>
                </svg>
                WhatsApp Us
              </Link>
            )}

            <div className="mt-8">
              <Link
                href="#contact"
                id="footer-cta"
                className="btn-primary"
                style={{
                  backgroundColor: 'var(--color-gg-terracotta)',
                  borderColor: 'var(--color-gg-terracotta)',
                  padding: '0.75rem 1.5rem',
                }}
              >
                Plan Your Stay
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: '1px solid rgba(244,240,232,0.08)' }}
      >
        <div className="container-gg py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-body-sm" style={{ color: 'rgba(244,240,232,0.28)' }}>
            © {year} Green Glen. All rights reserved.
          </p>
          <p className="text-body-sm" style={{ color: 'rgba(244,240,232,0.2)' }}>
            Sattal · Nainital · Uttarakhand · India
          </p>
        </div>
      </div>
    </footer>
  );
}
