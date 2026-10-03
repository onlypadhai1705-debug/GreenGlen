// ─── Green Glen Site Content & Config ───────────────────────────
// Update this file to modify any text, images, links or metadata.
// No component changes needed for content updates.

export const siteConfig = {
  name: 'Green Glen',
  tagline: 'A home away from home, in the heart of the hills.',
  location: 'Sattal · Nainital · Uttarakhand',
  locationFull: 'Sattal, Nainital, Uttarakhand, India',
  phone: '+91 95995 57593',
  email: '', // Add email address here
  whatsapp: '919599557593', // WhatsApp number with country code (no +, no spaces)
  bookingUrl: '', // Add booking URL if available
  googleMapsUrl: '', // Add Google Maps link here
  
  social: {
    instagram: '', // Add Instagram handle/URL
    facebook: '',  // Add Facebook URL
  },
  
  // SEO
  siteUrl: 'https://greenglen.in', // Update with actual domain
  ogImage: '/images/hero-green-glen.jpg',
} as const;

export const navLinks = [
  { label: 'Stay', href: '#stay' },
  { label: 'Experience', href: '#experience' },
  { label: 'The Space', href: '#the-space' },
  { label: 'Groups & Retreats', href: '#groups' },
  { label: 'Location', href: '#location' },
] as const;

export const heroContent = {
  eyebrow: 'Sattal · Nainital · Uttarakhand',
  headline: ['A home away', 'from home.'],
  subline: 'In the heart of the hills.',
  ctaPrimary: { label: 'Plan Your Stay', href: '#contact' },
  ctaSecondary: { label: 'Explore Green Glen', href: '#experience' },
  image: '/images/hero-green-glen.jpg',
  imageAlt: 'Green Glen mudhouse retreat nestled in the Himalayan hills at golden hour, Sattal, Uttarakhand',
} as const;

export const brandIntroContent = {
  eyebrow: 'About Green Glen',
  headline: 'Where the hills feel a little more like home.',
  body: [
    'Green Glen is a countryside eco-comfort retreat in Sattal, near Nainital, built around the warmth of a traditional mudhouse living room, open spaces and a genuinely personal approach to hospitality.',
    'It is a place for gathering, for slowing down, for sharing meals and for feeling, just for a while, that a corner of the hills belongs entirely to you.',
  ],
  pullQuote: '"Designed around the warmth of the hills."',
  image: '/images/mudhouse-interior.jpg',
  imageAlt: 'Warm intimate interior of Green Glen mudhouse with earthy clay walls and hand-woven textiles',
} as const;

export const mudhouseContent = {
  eyebrow: 'The Mudhouse',
  headline: 'Built with the soul of the hills.',
  body: 'The living room is the heart of Green Glen — built in the tradition of local mud-house architecture, with earthen walls, a mud floor, wooden beams and hand-crafted interiors that feel rooted in the landscape. The guest rooms, by contrast, feature warm wooden floors and earthy furnishings — comfortable, grounded and entirely personal.',
  pullQuote: 'Earth. Craft. Character.',
  caption: 'Earthen walls and mud floor in the living room; warm wooden floors in the guest rooms — a home for every sense.',
  image: '/images/mudhouse-exterior.jpg',
  imageAlt: 'Close-up architectural photograph of Green Glen mudhouse exterior showing traditional earthen clay walls and carved wooden window',
} as const;

export const openSpaceContent = {
  eyebrow: 'Open Space',
  headline: 'Room to breathe.',
  body: 'Green Glen is as much about its open spaces as its interiors. Generous grounds, open sky, and the quiet company of the forest surround you. A place to slow your mornings, gather under the trees or simply do nothing at all.',
  image: '/images/open-space.jpg',
  imageAlt: 'Open outdoor lawn area at Green Glen with wooden furniture, hammock and panoramic Himalayan hill views',
} as const;

export const experiences = [
  {
    id: 'home',
    eyebrow: '01',
    title: 'Home Away from Home',
    body: 'Personalised hospitality designed entirely around your group. No crowd. No strangers. Just the people you came with.',
    image: '/images/mudhouse-interior.jpg',
    imageAlt: 'Warm interior of Green Glen mudhouse — home away from home',
  },
  {
    id: 'food',
    eyebrow: '02',
    title: 'Home-Style Food',
    body: 'Customised home food prepared to feel more like a meal at a loved one\'s table than a restaurant menu.',
    image: '/images/home-food.jpg',
    imageAlt: 'Home-style North Indian thali meal at Green Glen — warm, personal and delicious',
  },
  {
    id: 'private',
    eyebrow: '03',
    title: 'Private Groups',
    body: 'The property accommodates groups of up to 20 guests exclusively — spacious rooms that easily fit an extra bed for those who prefer triple share. Your gathering. Your pace. Your space.',
    image: '/images/group-experience.jpg',
    imageAlt: 'Family group gathering outdoors at Green Glen retreat in the Himalayan hills',
  },
  {
    id: 'birding',
    eyebrow: '04',
    title: 'Bird Watchers\' Paradise',
    body: 'Sattal is one of India\'s finest birding destinations. With over 500 species recorded in the region, Green Glen is an ideal base for early-morning bird walks through the mixed oak and pine forests.',
    image: '/images/open-space.jpg',
    imageAlt: 'Dense forest canopy at Sattal — a bird watcher\'s paradise near Green Glen retreat',
  },
  {
    id: 'kainchi',
    eyebrow: '05',
    title: 'Kainchi Dham',
    body: 'Neem Karoli Baba\'s beloved ashram is nearby. Green Glen is a peaceful and convenient base for visiting.',
    image: '/images/kainchi-dham.jpg',
    imageAlt: 'Kainchi Dham ashram — Neem Karoli Baba temple in Uttarakhand near Green Glen',
  },
] as const;

export const groupContent = {
  number: '20',
  eyebrow: 'Exclusively Yours',
  headline: 'Just your people.',
  body: 'An intimate retreat designed for families, friends and private groups. When you come to Green Glen, the property is yours — all of it. Spacious rooms comfortably accommodate an extra bed for triple share.',
  subtext: 'Up to 20 guests · Exclusive property · Personalised hospitality',
  image: '/images/group-experience.jpg',
  imageAlt: 'Family group gathering at Green Glen Himalayan retreat',
} as const;

export const foodContent = {
  eyebrow: 'The Kitchen',
  headline: 'Food that feels like home.',
  body: 'Home-style food, prepared with care and customised to your group. The kind of meal that makes you slow down and stay a little longer at the table.',
  image: '/images/home-food.jpg',
  imageAlt: 'Home-style Indian thali meal with fresh rotis, dal and seasonal vegetables at Green Glen',
} as const;

export const retreats = [
  {
    id: 'family',
    title: 'Family & Friends',
    body: 'Private time with the people who matter. A shared space, open grounds and home-style food — the ingredients for the kind of trip you keep talking about.',
    cta: 'Plan a Group Stay',
    image: '/images/group-experience.jpg',
    imageAlt: 'Family and friends gathered outdoors at Green Glen Himalayan retreat',
  },
  {
    id: 'corporate',
    title: 'Corporate Offsites',
    body: 'A quieter environment for teams, conversations and focused time together. Away from the office, closer to clarity.',
    cta: 'Enquire for Teams',
    image: '/images/gallery-corporate.jpg',
    imageAlt: 'Small team working outdoors in mountain forest setting — corporate offsite at Green Glen',
  },
  {
    id: 'yoga',
    title: 'Yoga & Workshops',
    body: 'A natural setting for mindful retreats, yoga workshops and small gathering experiences. The hills provide the backdrop.',
    cta: 'Enquire for Retreats',
    image: '/images/gallery-yoga.jpg',
    imageAlt: 'Yoga practitioner on wooden deck at dawn with Himalayan forest views',
  },
] as const;

export const locationContent = {
  eyebrow: 'Find Us',
  headline: 'Somewhere between the forest and the lake.',
  location: 'Sattal, Nainital, Uttarakhand',
  fromDelhi: 'Approximately 6 hours from Delhi',
  fromLucknow: 'Approximately 5–6 hours from Lucknow',
  kainchiNote: 'Kainchi Dham / Neem Karoli Baba Ashram is nearby.',
  accessNote: 'Flat, step-friendly pathways throughout the property — easily accessible for senior guests and wheelchair users.',
  image: '/images/sattal-location.jpg',
  imageAlt: 'Aerial view of Sattal lake surrounded by dense green forest in Uttarakhand — location of Green Glen retreat',
  mapCta: 'Get Directions',
  mapUrl: '', // Add Google Maps URL here
} as const;

export const galleryImages = [
  {
    id: 'gallery-1',
    src: '/images/hero-green-glen.jpg',
    alt: 'Green Glen retreat — full daytime view of the property',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-2',
    src: '/images/mudhouse-exterior.jpg',
    alt: 'Green Glen mudhouse — another view of the property',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-3',
    src: '/images/mudhouse-interior.jpg',
    alt: 'Guest room at Green Glen — warm and earthy interiors',
    category: 'The House',
    aspect: 'portrait',
  },
  {
    id: 'gallery-4',
    src: '/Archive/room2.JPG',
    alt: 'Second guest room at Green Glen — cosy and comfortable',
    category: 'The House',
    aspect: 'portrait',
  },
  {
    id: 'gallery-5',
    src: '/Archive/viewfromwindow.JPG',
    alt: 'Panoramic hill view from window at Green Glen — Sattal, Uttarakhand',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-6',
    src: '/Archive/sideview.JPG',
    alt: 'Side view of Green Glen property nestled in the hills',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-7',
    src: '/Archive/oldgates.JPG',
    alt: 'Entrance gates of Green Glen — a warm welcome to the hills',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-8',
    src: '/images/open-space.jpg',
    alt: 'Open grounds at Green Glen with fresh air and natural surroundings',
    category: 'The Landscape',
    aspect: 'landscape',
  },
  {
    id: 'gallery-9',
    src: '/Archive/playingarea.JPG',
    alt: 'Open playing area at Green Glen — space for everyone',
    category: 'The Landscape',
    aspect: 'landscape',
  },
  {
    id: 'gallery-10',
    src: '/images/sattal-location.jpg',
    alt: 'Views around Sattal — lush forests and mountain landscapes',
    category: 'The Landscape',
    aspect: 'landscape',
  },
  {
    id: 'gallery-11',
    src: '/images/group-experience.jpg',
    alt: 'Green Glen at night — the whole property lit up beautifully',
    category: 'Slow Moments',
    aspect: 'landscape',
  },
  {
    id: 'gallery-12',
    src: '/Archive/nightviewanotherside.JPG',
    alt: 'Night view from another side of Green Glen — serene and atmospheric',
    category: 'Slow Moments',
    aspect: 'landscape',
  },
  {
    id: 'gallery-13',
    src: '/images/cta-background.jpg',
    alt: 'The swing at Green Glen by night — a moment of pure stillness',
    category: 'Slow Moments',
    aspect: 'landscape',
  },
  {
    id: 'gallery-14',
    src: '/images/home-food.jpg',
    alt: 'Dining area at Green Glen — fresh home-style meals served daily',
    category: 'Food',
    aspect: 'landscape',
  },
  {
    id: 'gallery-15',
    src: '/Archive/culturedinnignarea.JPG',
    alt: 'Cultural dining area at Green Glen — warm and inviting ambience',
    category: 'Food',
    aspect: 'landscape',
  },
  {
    id: 'gallery-16',
    src: '/Archive/artisanarea.JPG',
    alt: 'Artisan area at Green Glen — handcrafted spaces with local character',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-17',
    src: '/Archive/artisanarea2.JPG',
    alt: 'Artisan craft details at Green Glen — earthy textures and local craft',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-18',
    src: '/images/gallery-yoga.jpg',
    alt: 'Chairs in nature at Green Glen — quiet outdoor seating amid trees',
    category: 'Slow Moments',
    aspect: 'landscape',
  },
  {
    id: 'gallery-19',
    src: '/images/gallery-corporate.jpg',
    alt: 'Artisan dining area — great for corporate offsites and team gatherings',
    category: 'The People',
    aspect: 'landscape',
  },
  {
    id: 'gallery-20',
    src: '/images/kainchi-dham.jpg',
    alt: 'Kainchi Dham ashram — Neem Karoli Baba temple nearby Green Glen',
    category: 'Nearby',
    aspect: 'portrait',
  },
] as const;

export const ctaContent = {
  eyebrow: 'Plan Your Stay',
  headline: ['Come for the hills.', 'Stay for the feeling.'],
  body: 'Plan a slower stay at Green Glen.',
  ctaPrimary: { label: 'Plan Your Stay', href: '#contact' },
  ctaSecondary: { label: 'Talk to Us', href: '#contact' },
  image: '/images/cta-background.jpg',
  imageAlt: 'Himalayan hills at dusk with a single warm light glowing from a mudhouse',
} as const;

export const footerLinks = [
  { label: 'Stay', href: '#stay' },
  { label: 'Experience', href: '#experience' },
  { label: 'Groups', href: '#groups' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
] as const;

// Booking Form Options
export const purposeOptions = [
  'Family & Friends',
  'Corporate Offsite',
  'Yoga / Workshop',
  'Private Celebration',
  'Other',
] as const;
