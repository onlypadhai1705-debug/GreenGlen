import ScrollReveal from './ScrollReveal';

/**
 * Testimonials Placeholder
 *
 * This section is ready to receive real testimonials from Green Glen guests.
 * To populate: update the `testimonials` array in lib/content.ts with real reviews.
 * This component will automatically display them once added.
 */
const testimonials: Array<{
  quote: string;
  author: string;
  detail: string;
}> = [];
// ↑ Add real testimonials here. Example:
// {
//   quote: "Green Glen felt like staying at a relative's home in the hills — warm, personal and genuinely restorative.",
//   author: "Name",
//   detail: "Group of 8 · Corporate Offsite"
// }

export default function TestimonialsPlaceholder() {
  if (testimonials.length === 0) {
    return null; // Hidden until real testimonials are added
  }

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-cream)' }}
    >
      <div className="container-gg">
        <ScrollReveal delay={0}>
          <div className="flex items-center gap-4 mb-5">
            <span className="text-label text-gg-terra">Guest Stories</span>
            <span
              className="block h-px w-8"
              style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <h2
            id="testimonials-heading"
            className="text-display-md text-gg-forest mb-14"
          >
            Voices from the hills.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={(i % 3) as 0 | 1 | 2}>
              <blockquote className="flex flex-col gap-5">
                <div
                  className="font-display"
                  style={{ color: 'var(--color-gg-terracotta)', fontSize: '2rem', lineHeight: 1 }}
                  aria-hidden="true"
                >
                  &#8220;
                </div>
                <p
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--color-gg-forest)',
                    lineHeight: 1.5,
                  }}
                >
                  {t.quote}
                </p>
                <footer>
                  <p
                    className="font-sans font-medium"
                    style={{ fontSize: '0.875rem', color: 'var(--color-gg-charcoal)' }}
                  >
                    {t.author}
                  </p>
                  <p className="text-body-sm mt-0.5" style={{ color: 'var(--color-gg-sand)' }}>
                    {t.detail}
                  </p>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
