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
  image: '/Archive/mainfrontview.png',
  imageAlt: 'Guests arriving at Green Glen retreat — the property front view with Himalayan hills in the background, Sattal, Uttarakhand',
} as const;

export const brandIntroContent = {
  eyebrow: 'About Green Glen',
  headline: 'Where the hills feel a little more like home.',
  body: [
    'Green Glen is a countryside eco-comfort retreat in Sattal, near Nainital, built around the warmth of a traditional mudhouse living room, open spaces and a genuinely personal approach to hospitality.',
    'It is a place for gathering, for slowing down, for sharing meals and for feeling, just for a while, that a corner of the hills belongs entirely to you.',
  ],
  pullQuote: '"Designed around the warmth of the hills."',
  image: '/Archive/outerarea.JPG',
  imageAlt: 'Outdoor area at Green Glen — open grounds with fresh Himalayan air and forest surroundings',
} as const;

export const mudhouseContent = {
  eyebrow: 'The Mudhouse',
  headline: 'Built with the soul of the hills.',
  body: 'The living room is the heart of Green Glen — built in the tradition of local mud-house architecture, with earthen walls, a mud floor, wooden beams and hand-crafted interiors that feel rooted in the landscape. The guest rooms, by contrast, feature warm wooden floors and earthy furnishings — comfortable, grounded and entirely personal.',
  pullQuote: 'Earth. Craft. Character.',
  caption: 'Earthen walls and mud floor in the living room; warm wooden floors in the guest rooms — a home for every sense.',
  image: '/Archive/viewfromwindow.JPG',
  imageAlt: 'View from inside the mudhouse at Green Glen — framed hill panorama through the window, Sattal',
} as const;

export const openSpaceContent = {
  eyebrow: 'Open Space',
  headline: 'Room to breathe.',
  body: 'Green Glen is as much about its open spaces as its interiors. Generous grounds, open sky, and the quiet company of the forest surround you. A place to slow your mornings, gather under the trees or simply do nothing at all.',
  image: '/Archive/chairsinnature.JPG',
  imageAlt: 'Chairs set amid nature at Green Glen — quiet outdoor seating under the trees, Himalayan hills all around',
} as const;

export const experiences = [
  {
    id: 'home',
    eyebrow: '01',
    title: 'Home Away from Home',
    body: 'Personalised hospitality designed entirely around your group. No crowd. No strangers. Just the people you came with.',
    image: '/Archive/happyfamily.png',
    imageAlt: 'Happy family enjoying their stay at Green Glen — smiles, togetherness and the hills',
  },
  {
    id: 'food',
    eyebrow: '02',
    title: 'Home-Style Food',
    body: 'Customised home food prepared to feel more like a meal at a loved one\'s table than a restaurant menu.',
    image: '/Archive/artisandinningarea.JPG',
    imageAlt: 'Artisan dining area at Green Glen — handcrafted space with home-style meals served with warmth',
  },
  {
    id: 'private',
    eyebrow: '03',
    title: 'Private Groups',
    body: 'The property accommodates groups of up to 20 guests exclusively — spacious rooms that easily fit an extra bed for those who prefer triple share. Your gathering. Your pace. Your space.',
    image: '/Archive/nightwholeview.JPG',
    imageAlt: 'Green Glen at night — the whole property illuminated, entirely for your group',
  },
  {
    id: 'birding',
    eyebrow: '04',
    title: 'Bird Watchers\' Paradise',
    body: 'Sattal is one of India\'s finest birding destinations. With over 500 species recorded in the region, Green Glen is an ideal base for early-morning bird walks through the mixed oak and pine forests.',
    image: '/Archive/paradisefitcatcher.png',
    imageAlt: 'Paradise Flycatcher — a spectacular and rare bird spotted regularly around Sattal near Green Glen',
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
  image: '/Archive/familygroup.png',
  imageAlt: 'Family and friends group at Green Glen — togetherness in the hills, exclusively yours',
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
    image: '/Archive/nightenjoyment.png',
    imageAlt: 'Guests enjoying the evening at Green Glen — night life, laughter and warmth by the hills',
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
  image: '/Archive/scenic.png',
  imageAlt: 'Scenic view of the Himalayan hills and forests near Sattal — location of Green Glen retreat',
  mapCta: 'Get Directions',
  mapUrl: '', // Add Google Maps URL here
} as const;

export const galleryImages = [
  {
    id: 'gallery-1',
    src: '/Archive/room1.JPG',
    alt: 'First guest room at Green Glen — warm wooden floors and earthy furnishings',
    category: 'The House',
    aspect: 'portrait',
  },
  {
    id: 'gallery-2',
    src: '/Archive/room2.JPG',
    alt: 'Second guest room at Green Glen — cosy and comfortable',
    category: 'The House',
    aspect: 'portrait',
  },
  {
    id: 'gallery-3',
    src: '/Archive/oldgates.JPG',
    alt: 'Entrance gates of Green Glen — a warm rustic welcome to the hills',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-4',
    src: '/Archive/sideview.JPG',
    alt: 'Side architectural view of Green Glen property nestled in the hills',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-5',
    src: '/Archive/artisanarea.JPG',
    alt: 'Artisan area at Green Glen — handcrafted spaces with local character',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-6',
    src: '/Archive/artisanarea2.JPG',
    alt: 'Artisan craft details at Green Glen — earthy textures and local craft',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-7',
    src: '/images/mudhouse-exterior.jpg',
    alt: 'Green Glen mudhouse exterior — traditional earthen clay walls',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-8',
    src: '/images/mudhouse-interior.jpg',
    alt: 'Guest room at Green Glen — warm and earthy interiors',
    category: 'The House',
    aspect: 'portrait',
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
    src: '/Archive/swingnightview.JPG',
    alt: 'The swing at Green Glen by night — a moment of pure stillness',
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
    src: '/Archive/culturedinnignarea.JPG',
    alt: 'Cultural dining area at Green Glen — warm and inviting ambience',
    category: 'Food',
    aspect: 'landscape',
  },
  {
    id: 'gallery-14',
    src: '/Archive/daydinningview.JPG',
    alt: 'Dining area in daylight at Green Glen — open and bright',
    category: 'Food',
    aspect: 'landscape',
  },
  {
    id: 'gallery-15',
    src: '/Archive/bird.png',
    alt: 'Wild bird spotted at Sattal near Green Glen — a birder\'s paradise',
    category: 'The Landscape',
    aspect: 'landscape',
  },
  {
    id: 'gallery-16',
    src: '/Archive/bird2.png',
    alt: 'Second rare bird species at Sattal near Green Glen',
    category: 'The Landscape',
    aspect: 'landscape',
  },
  {
    id: 'gallery-17',
    src: '/Archive/bird3.png',
    alt: 'Third rare bird species at Sattal — over 500 species in the region',
    category: 'The Landscape',
    aspect: 'landscape',
  },
  {
    id: 'gallery-18',
    src: '/Archive/bird4.png',
    alt: 'Fourth bird species at Sattal — dawn birding from Green Glen',
    category: 'The Landscape',
    aspect: 'landscape',
  },
  {
    id: 'gallery-19',
    src: '/images/group-experience.jpg',
    alt: 'Group gathering at Green Glen — exclusively yours',
    category: 'The People',
    aspect: 'landscape',
  },
  {
    id: 'gallery-20',
    src: '/Archive/dayfullview.JPG',
    alt: 'Full daytime view of Green Glen property nestled in the hills',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-21',
    src: '/Archive/dayviewanotherside.JPG',
    alt: 'Panoramic daytime view from another angle of Green Glen',
    category: 'The House',
    aspect: 'landscape',
  },
] as const;

export const ctaContent = {
  eyebrow: 'Plan Your Stay',
  headline: ['Come for the hills.', 'Stay for the feeling.'],
  body: 'Plan a slower stay at Green Glen.',
  ctaPrimary: { label: 'Plan Your Stay', href: '#contact' },
  ctaSecondary: { label: 'Talk to Us', href: '#contact' },
  image: '/Archive/nightview.png',
  imageAlt: 'Moody night-time view of Green Glen — the hills at their most atmospheric',
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

// ─── Activities / Experiences Section ────────────────────────────
export const activitiesContent = {
  eyebrow: 'At Green Glen & Beyond',
  headline: 'Days worth remembering.',
  body: 'The hills offer more than views. Sattal is a destination rich in nature, adventure and stillness — and Green Glen is your base for all of it.',
  activities: [
    {
      id: 'birding',
      title: "Bird Watchers' Paradise",
      body: 'Over 500 species in Sattal. Dawn walks through oak and pine forests with expert guides.',
      image: '/Archive/birdwatching.png',
      imageAlt: 'Early morning birding at Sattal with binoculars amid dense forest',
      icon: '🦅',
    },
    {
      id: 'kayaking',
      title: 'Kayaking on Sattal',
      body: 'Paddle across the interconnected lakes of Sattal — one of the most serene kayaking spots in India.',
      image: '/Archive/kayaking.png',
      imageAlt: 'Kayaking on Sattal lake surrounded by hills and forest',
      icon: '🚣',
    },
    {
      id: 'yoga',
      title: 'Yoga & Wellness',
      body: 'Morning yoga sessions in the open air, with the forest as your studio and birdsong as your soundtrack.',
      image: '/Archive/yogasession.png',
      imageAlt: 'Yoga session at Green Glen with Himalayan hills in background',
      icon: '🧘',
    },
    {
      id: 'fireside',
      title: 'Fireside Evenings',
      body: 'As the sun sets over the hills, gather around the fire. Stories, stars, and the warmth of the hills.',
      image: '/Archive/firewood.png',
      imageAlt: 'Cosy fireside evening at Green Glen retreat with guests gathered around',
      icon: '🔥',
    },
    {
      id: 'paragliding',
      title: 'Paragliding',
      body: 'Soar over the Kumaon hills. Bhimtal and Nainital offer thrilling tandem paragliding experiences nearby.',
      image: '/Archive/paragliding.png',
      imageAlt: 'Paragliding over Kumaon Himalayan hills near Nainital',
      icon: '🪂',
    },
    {
      id: 'ropeway',
      title: 'Ropeway & Adventure',
      body: 'The region offers ropeway experiences and adventure trails through stunning highland terrain.',
      image: '/Archive/ropewayactivity.png',
      imageAlt: 'Ropeway activity in the Himalayan hills near Sattal',
      icon: '🚡',
    },
  ],
} as const;
