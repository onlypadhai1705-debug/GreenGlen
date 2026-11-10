export default function MarqueeStrip() {
  const items = [
    'Eco-Comfort Retreat',
    'Sattal · Nainital',
    "Bird Watchers' Paradise",
    'Private & Exclusive',
    'Home-Style Food',
    'Up to 20 Guests',
    'Himalayan Hills',
    'Slow Living',
  ];
  const doubled = [...items, ...items];

  return (
    <div
      className="marquee-container py-4 overflow-hidden"
      style={{
        backgroundColor: 'var(--color-gg-terracotta)',
        borderTop: '1px solid rgba(244,240,232,0.15)',
        borderBottom: '1px solid rgba(244,240,232,0.15)',
      }}
      aria-hidden="true"
    >
      <div className="animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-label inline-flex items-center gap-6 px-6"
            style={{ color: 'var(--color-gg-ivory)', fontSize: '0.65rem', letterSpacing: '0.2em' }}
          >
            {item}
            <span style={{ opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
