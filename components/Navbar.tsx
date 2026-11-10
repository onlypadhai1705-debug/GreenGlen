'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf } from 'lucide-react';
import { navLinks, siteConfig } from '@/lib/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'nav-scrolled py-4' : 'py-8'
        }`}
        style={{ backgroundColor: scrolled ? undefined : 'transparent' }}
      >
        <div className="container-gg flex items-center justify-between">
          {/* Logo / Wordmark with icon */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-none flex items-center gap-3 group"
            aria-label={`${siteConfig.name} — Return to homepage`}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: scrolled 
                  ? 'linear-gradient(135deg, rgba(26,46,28,0.1) 0%, rgba(168,184,159,0.1) 100%)'
                  : 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
              }}
              className="group-hover:scale-110"
            >
              <Leaf 
                size={16} 
                strokeWidth={1.8} 
                color={scrolled ? 'var(--color-gg-forest)' : 'rgba(249,247,244,0.9)'}
              />
            </div>
            <span
              className="font-display font-normal tracking-[0.12em] transition-colors duration-500"
              style={{
                fontSize: '1.25rem',
                color: scrolled ? 'var(--color-gg-forest)' : 'var(--color-gg-white)',
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
              }}
            >
              GREEN GLEN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-10"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-label transition-all duration-400 focus-visible:outline-none relative group"
                style={{ 
                  color: scrolled ? 'var(--color-gg-olive)' : 'rgba(249,247,244,0.8)',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = scrolled
                    ? 'var(--color-gg-forest)'
                    : 'var(--color-gg-white)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = scrolled
                    ? 'var(--color-gg-olive)'
                    : 'rgba(249,247,244,0.8)';
                }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"
                  style={{
                    background: scrolled 
                      ? 'var(--color-gg-forest)'
                      : 'var(--color-gg-white)',
                  }}
                  aria-hidden="true"
                />
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="#contact"
              id="nav-cta"
              className="btn-primary ml-3 magnetic-hover"
              style={{
                backgroundColor: scrolled ? 'var(--color-gg-forest)' : 'rgba(249,247,244,0.1)',
                borderColor: scrolled ? 'var(--color-gg-forest)' : 'rgba(249,247,244,0.3)',
                color: 'var(--color-gg-white)',
                padding: '0.75rem 1.75rem',
                boxShadow: scrolled ? '0 4px 12px rgba(26, 46, 28, 0.15)' : 'none',
              }}
            >
              Plan Your Stay
            </Link>
          </nav>

          {/* Mobile: CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="#contact"
              className="btn-primary"
              style={{
                backgroundColor: 'transparent',
                borderColor: scrolled ? 'var(--color-gg-forest)' : 'rgba(244,240,232,0.4)',
                color: scrolled ? 'var(--color-gg-forest)' : 'var(--color-gg-ivory)',
                padding: '0.4rem 0.8rem',
                fontSize: '0.65rem',
              }}
              onClick={handleNavClick}
            >
              Plan Your Stay
            </Link>
            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 focus-visible:outline-none"
              style={{ color: scrolled ? 'var(--color-gg-forest)' : 'var(--color-gg-ivory)' }}
            >
              {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: 'var(--color-gg-forest)' }}
      >
        <div className="flex flex-col justify-center items-center h-full gap-10 py-24">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="text-display-sm text-gg-ivory transition-opacity duration-200 hover:opacity-70"
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
                transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms, color 0.2s ease`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <div
            className="mt-4"
            style={{
              opacity: menuOpen ? 1 : 0,
              transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : '0ms',
              transition: `opacity 0.4s ease ${navLinks.length * 60}ms`,
            }}
          >
            <Link
              href="#contact"
              onClick={handleNavClick}
              className="btn-outline"
              style={{ borderColor: 'rgba(244,240,232,0.35)', fontSize: '0.7rem' }}
            >
              Plan Your Stay
            </Link>
          </div>

          {/* Location */}
          <p
            className="text-label absolute bottom-10"
            style={{ color: 'rgba(244,240,232,0.4)' }}
          >
            Sattal · Nainital · Uttarakhand
          </p>
        </div>
      </div>
    </>
  );
}
