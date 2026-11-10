import ScrollReveal from './ScrollReveal';

const testimonials: Array<{
  quote: string;
  author: string;
  detail: string;
  highlight: string;
}> = [
  {
    highlight: 'Warmth of Family Gathering',
    quote:
      'Having the entire estate exclusively for our family was an experience we will cherish for years. The conversations around the evening fire, the children playing in the open lawn, and meals that tasted like home — Green Glen truly lives up to its name.',
    author: 'Rajiv & Meenakshi Malhotra',
    detail: 'Family Gathering · 16 Guests · New Delhi',
  },
  {
    highlight: 'Unmatched Birding Experience',
    quote:
      'Sattal has been my favourite birding destination in India for years, but staying at Green Glen elevated the entire trip. Sighting the Asian Paradise Flycatcher right near the property at dawn was pure magic. The hosts are knowledgeable and so genuinely hospitable.',
    author: 'Dr. Alok Sen',
    detail: 'Birdwatching Expedition · Kolkata',
  },
  {
    highlight: 'Intimate Team Offsite',
    quote:
      'We wanted a space where our leadership team could slow down, reflect, and hold meaningful conversations without the sterile feel of a hotel. Green Glen offered the perfect balance of solitude, nature, and heartfelt mountain hospitality.',
    author: 'Ananya Sharma',
    detail: 'Leadership Retreat · Gurugram',
  },
];

export default function TestimonialsPlaceholder() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-padding bg-weave relative overflow-hidden"
    >
      <div className="divider-woven absolute top-0 left-0 right-0" aria-hidden="true" />

      <div className="container-gg">
        <ScrollReveal delay={0}>
          <div className="flex items-center gap-4 mb-5">
            <span className="text-label text-gg-terra">Guest Experiences</span>
            <span
              className="block h-px w-8"
              style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <h2
              id="testimonials-heading"
              className="text-display-md text-gg-forest"
            >
              Conversations from
              <br />
              <em className="font-display not-italic" style={{ color: 'var(--color-gg-terracotta)' }}>
                the heart of the hills.
              </em>
            </h2>
            <p className="text-body-sm max-w-sm" style={{ color: 'var(--color-gg-olive)' }}>
              Real moments shared by families, birdwatchers, and intimate groups who found a second home at Green Glen.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={(i % 3) as 0 | 1 | 2} className="h-full">
              <article
                className="card-lift flex flex-col justify-between h-full p-8 relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-gg-white)',
                  border: '1px solid rgba(201,185,154,0.35)',
                }}
              >
                <div>
                  <span
                    className="text-label inline-block mb-4 px-2.5 py-1"
                    style={{
                      backgroundColor: 'rgba(181,104,74,0.1)',
                      color: 'var(--color-gg-terracotta)',
                      fontSize: '0.625rem',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {t.highlight}
                  </span>
                  <div
                    className="font-display text-4xl mb-2"
                    style={{ color: 'var(--color-gg-terracotta)', opacity: 0.4, lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    &#8220;
                  </div>
                  <p
                    className="font-display text-lg mb-8"
                    style={{
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: 'var(--color-gg-forest)',
                      lineHeight: 1.5,
                    }}
                  >
                    {t.quote}
                  </p>
                </div>

                <footer className="pt-6" style={{ borderTop: '1px solid rgba(201,185,154,0.2)' }}>
                  <p
                    className="font-sans font-medium"
                    style={{ fontSize: '0.9375rem', color: 'var(--color-gg-charcoal)' }}
                  >
                    {t.author}
                  </p>
                  <p className="text-body-sm mt-0.5" style={{ color: 'var(--color-gg-olive-light)', fontSize: '0.8rem' }}>
                    {t.detail}
                  </p>
                </footer>

                {/* Subtle bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 hover:w-full transition-all duration-500"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)' }}
                  aria-hidden="true"
                />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="divider-woven absolute bottom-0 left-0 right-0" aria-hidden="true" />
    </section>
  );
}
