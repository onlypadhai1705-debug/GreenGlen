'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    q: 'Where is Green Glen homestay located?',
    a: 'Green Glen is located in Sattal, Nainital, Uttarakhand — approximately 15 km from Bhimtal lake and 30 km from Nainital. It is about 6 hours by road from Delhi via NH9/Kathgodam.',
  },
  {
    q: 'Is Green Glen good for birdwatching near Bhimtal?',
    a: 'Absolutely. Green Glen is the best homestay for birdwatchers near Bhimtal and Sattal. Sattal is home to 500+ recorded avian species — the oak and pine forest begins right at our doorstep. Wake at dawn, step out with binoculars and a cup of ginger chai, and the forest does the rest.',
  },
  {
    q: 'How far is Green Glen from Bhimtal?',
    a: 'Green Glen is approximately 15 km from Bhimtal lake — about 25–30 minutes by road. It is one of the most conveniently located homestays for travellers arriving from Bhimtal or Nainital.',
  },
  {
    q: 'How many guests can Green Glen accommodate?',
    a: 'Green Glen accommodates up to 20 guests on an exclusive, private basis. When you book, the entire property is yours — rooms, lawns, mudhouse living room and outdoor spaces. Rooms can comfortably fit an extra bed for triple share.',
  },
  {
    q: 'What is the best time to visit Sattal for birdwatching?',
    a: 'Sattal is a year-round birdwatching destination. October to March brings winter migrants; April to September is peak season for summer breeding visitors like the Asian Paradise Flycatcher. Green Glen\'s naturalist can guide you on the best trails any month.',
  },
  {
    q: 'What food is served at Green Glen?',
    a: 'Home-style food, customised to your group\'s preferences. Think warm dal, fresh rotis and seasonal vegetables — the kind of meal that makes you linger at the table.',
  },
  {
    q: 'How do I book a stay at Green Glen, Sattal?',
    a: 'Simply message us on WhatsApp at +91 95995 57593 or click "Plan Your Stay" on this page. We respond quickly and will share availability, pricing and all details.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-gg-cream, #f4f0e8)' }}
    >
      <div className="container-gg">
        <ScrollReveal delay={0}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-label text-gg-terra" style={{ letterSpacing: '0.24em' }}>
              Common Questions
            </span>
            <span
              className="block h-px w-8"
              style={{ backgroundColor: 'var(--color-gg-terracotta)', opacity: 0.5 }}
              aria-hidden="true"
            />
          </div>
          <h2
            id="faq-heading"
            className="text-display-md text-gg-forest"
            style={{ maxWidth: '640px', marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Everything you need to know about Green Glen, Sattal.
          </h2>
        </ScrollReveal>

        <dl className="flex flex-col" style={{ gap: '0' }}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={((i % 3) as 0 | 1 | 2)}>
              <div
                style={{
                  borderTop: '1px solid rgba(74,82,64,0.12)',
                  ...(i === faqs.length - 1
                    ? { borderBottom: '1px solid rgba(74,82,64,0.12)' }
                    : {}),
                }}
              >
                <dt>
                  <button
                    type="button"
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                    style={{
                      padding: 'clamp(1rem, 2.5vw, 1.5rem) 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      className="font-display text-gg-forest"
                      style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        fontWeight: 400,
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        flexShrink: 0,
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: '1px solid rgba(74,82,64,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-gg-terracotta)',
                        transition: 'transform 0.3s ease',
                        transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                        fontSize: '1.125rem',
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-answer-${i}`}
                  style={{
                    overflow: 'hidden',
                    maxHeight: open === i ? '400px' : '0',
                    transition: 'max-height 0.4s ease',
                    marginBottom: open === i ? 'clamp(1rem, 2vw, 1.5rem)' : '0',
                  }}
                >
                  <p
                    className="text-body"
                    style={{
                      color: 'var(--color-gg-olive)',
                      maxWidth: '680px',
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </p>
                </dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

