import type { ReactNode } from 'react';
import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  headline: ReactNode;
  body?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  headline,
  body,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && (
        <ScrollReveal delay={0}>
          <div className="flex items-center gap-4 mb-5" style={{ justifyContent: centered ? 'center' : 'flex-start' }}>
            <span
              className="text-label"
              style={{ color: light ? 'var(--color-gg-sand)' : 'var(--color-gg-terracotta)' }}
            >
              {eyebrow}
            </span>
            <span
              className="block h-px w-8"
              style={{ backgroundColor: light ? 'var(--color-gg-sand)' : 'var(--color-gg-terracotta)', opacity: 0.6 }}
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>
      )}
      <ScrollReveal delay={1}>
        <h2
          className="text-display-md"
          style={{ color: light ? 'var(--color-gg-ivory)' : 'var(--color-gg-forest)' }}
        >
          {headline}
        </h2>
      </ScrollReveal>
      {body && (
        <ScrollReveal delay={2}>
          <p
            className="text-body mt-5 max-w-xl"
            style={{
              color: light ? 'rgba(244,240,232,0.72)' : 'var(--color-gg-olive)',
              marginLeft: centered ? 'auto' : undefined,
              marginRight: centered ? 'auto' : undefined,
            }}
          >
            {body}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
