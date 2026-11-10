import ScrollReveal from './ScrollReveal';

const testimonials: Array<{
  quote: string;
  author: string;
  detail: string;
  highlight: string;
  stayType: string;
  season: string;
}> = [
  {
    highlight: 'Warmth of Family Gathering',
    stayType: 'Family Gathering · 16 Guests',
    season: 'Autumn Stay',
    quote:
      'Having the entire estate exclusively for our family was an experience we will cherish for years. The conversations around the evening fire, the children playing in the open lawn, and meals that tasted like home — Green Glen truly lives up to its name.',
    author: 'Rajiv & Meenakshi Malhotra',
    detail: 'New Delhi',
  },
  {
    highlight: 'Unmatched Birding Experience',
    stayType: 'Birdwatching Expedition',
    season: 'Spring Migration',
    quote:
      'Sattal has been my favourite birding destination in India for years, but staying at Green Glen elevated the entire trip. Sighting the Asian Paradise Flycatcher right near the property at dawn was pure magic. The hosts are knowledgeable and so genuinely hospitable.',
    author: 'Dr. Alok Sen',
    detail: 'Kolkata',
  },
  {
    highlight: 'Intimate Team Offsite',
    stayType: 'Leadership Retreat',
    season: 'Winter Fireside',
    quote:
      'We wanted a space where our leadership team could slow down, reflect, and hold meaningful conversations without the sterile feel of a hotel. Green Glen offered the perfect balance of solitude, nature, and heartfelt mountain hospitality.',
    author: 'Ananya Sharma',
    detail: 'Gurugram',
  },
];

const highlights = [
  { label: 'Exclusive Estate', value: 'Up to 20 Guests Max' },
  { label: 'Authentic Hospitality', value: 'Home-Cooked Meals' },
  { label: 'Forest Living', value: '500+ Avian Species' },
  { label: 'Guest Rating', value: '5.0 ★ Exceptional' },
];

export default function TestimonialsPlaceholder() {
  return (
    <section
      id="guest-experience"
      aria-labelledby="testimonials-heading"
      className="section-padding bg-weave relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-gg-cream)' }}
    >
      <div className="divider-woven absolute top-0 left-0 right-0" aria-hidden="true" />

      <div className="container-gg">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="block h-px w-8"
                style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.6 }}
                aria-hidden="true"
              />
              <span className="text-label text-gg-terra">
                Guest Experiences · Real Conversations
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <h2
              id="testimonials-heading"
              className="font-display mb-6 text-gg-forest"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              We came as visitors.
              <br />
              <em
                className="not-italic"
                style={{ color: 'var(--color-gg-terracotta)' }}
              >
                We left as family.
              </em>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <p
              className="text-body max-w-2xl"
              style={{ color: 'var(--color-gg-olive)', lineHeight: 1.75 }}
            >
              Real moments shared by families, birdwatchers, and intimate retreat groups who found an unhurried mountain rhythm and heartfelt Pahadi warmth at Green Glen.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={(i % 3) as 0 | 1 | 2} className="h-full">
              <article
                className="card-lift flex flex-col justify-between h-full p-7 md:p-8 rounded-sm relative overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-gg-white)',
                  border: '1px solid rgba(201,185,154,0.35)',
                }}
              >
                <div>
                  {/* Top Meta: Category + Stars */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className="text-label px-2.5 py-1 rounded-sm"
                      style={{
                        backgroundColor: 'rgba(181,104,74,0.08)',
                        color: 'var(--color-gg-terracotta)',
                        fontSize: '0.625rem',
                        letterSpacing: '0.12em',
                      }}
                    >
                      {t.stayType}
                    </span>
                    <span
                      className="text-xs tracking-wider"
                      style={{ color: 'var(--color-gg-terracotta)' }}
                      aria-label="5 stars"
                    >
                      ★★★★★
                    </span>
                  </div>

                  {/* Quote Glyph */}
                  <div
                    className="font-display text-4xl mb-1"
                    style={{ color: 'var(--color-gg-terracotta)', opacity: 0.35, lineHeight: 1 }}
                    aria-hidden="true"
                  >
                    &#8220;
                  </div>

                  {/* Body Quote */}
                  <p
                    className="font-display text-lg mb-8"
                    style={{
                      fontWeight: 300,
                      fontStyle: 'italic',
                      color: 'var(--color-gg-forest)',
                      lineHeight: 1.55,
                    }}
                  >
                    {t.quote}
                  </p>
                </div>

                {/* Author Footer */}
                <footer
                  className="pt-5 flex items-center justify-between gap-3"
                  style={{ borderTop: '1px solid rgba(201,185,154,0.2)' }}
                >
                  <div>
                    <p
                      className="font-sans font-medium"
                      style={{ fontSize: '0.9375rem', color: 'var(--color-gg-charcoal)' }}
                    >
                      {t.author}
                    </p>
                    <p
                      className="text-body-sm mt-0.5"
                      style={{ color: 'var(--color-gg-olive-light)', fontSize: '0.8rem' }}
                    >
                      {t.detail}
                    </p>
                  </div>
                  <span
                    className="text-label text-[10px]"
                    style={{ color: 'var(--color-gg-sand)' }}
                  >
                    {t.season}
                  </span>
                </footer>

                {/* Subtle bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: 'var(--color-gg-terracotta)' }}
                  aria-hidden="true"
                />
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Highlights Bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-sm text-center"
          style={{
            backgroundColor: 'rgba(253, 251, 247, 0.75)',
            border: '1px solid rgba(201, 185, 154, 0.3)',
          }}
        >
          {highlights.map((h) => (
            <div key={h.label} className="p-2">
              <div
                className="font-display text-lg sm:text-xl text-gg-forest"
                style={{ fontWeight: 400 }}
              >
                {h.value}
              </div>
              <div
                className="text-label mt-1"
                style={{ color: 'var(--color-gg-olive)', fontSize: '0.625rem' }}
              >
                {h.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="divider-woven absolute bottom-0 left-0 right-0" aria-hidden="true" />
    </section>
  );
}
