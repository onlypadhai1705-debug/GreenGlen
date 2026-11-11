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

export const whatsappStayMessage =
  'Hi! I would like to plan a stay at Green Glen, Sattal. Could you please share availability and details?';

export const whatsappStayUrl =
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappStayMessage)}`;

export const navLinks = [
  { label: 'Stay', href: '#stay' },
  { label: 'Experience', href: '#experience' },
  { label: 'Birding', href: '#birdwatching' },
  { label: 'The Space', href: '#the-space' },
  { label: 'Groups & Retreats', href: '#groups' },
  { label: 'Location', href: '#location' },
] as const;

const heroImages = [
  {
    src: '/Archive/hero1.png',
    alt: 'Green Glen retreat nestled in the Himalayan pine forest of Sattal',
    objectPosition: 'center 40%',
  },
  {
    src: '/Archive/hero2.png',
    alt: 'Scenic natural landscape and mountain outdoors at Green Glen Sattal',
    objectPosition: 'center 35%',
  },
  {
    src: '/Archive/hero3.JPG',
    alt: 'Authentic mudhouse living and panoramic forest vistas at Green Glen',
    objectPosition: 'center 30%',
  },
] as const;

export const heroContent = {
  eyebrow: 'Sattal · Nainital · Uttarakhand',
  headline: ['A home away', 'from home.'],
  subline: 'In the heart of the hills.',
  ctaPrimary: { label: 'Plan Your Stay', href: whatsappStayUrl },
  ctaSecondary: { label: 'Explore Green Glen', href: '#experience' },
  image: heroImages[0].src,
  images: heroImages,
  imageAlt: 'Green Glen retreat in Sattal — mountain serenity in Uttarakhand',
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
  eyebrow: 'Guest Rooms',
  headline: 'Room to breathe.',
  body: 'Spacious guest rooms built for unhurried comfort. Warm wooden floors, earthy furnishings, and windows that open to the fresh mountain breeze and pine forest silence. A place to slow your mornings, rest deeply, and feel at home.',
  image: '/Archive/room1.JPG',
  imageAlt: 'Spacious guest room at Green Glen with warm wooden floors, earthy furnishings, and natural mountain light',
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
    image: '/Archive/mainfrontview.png',
    imageAlt: 'Guests arriving and gathering at Green Glen retreat — exclusive property for your group',
  },
  {
    id: 'artisan-living',
    eyebrow: '04',
    title: 'Artisan Mudhouse Architecture',
    body: 'Hand-plastered mud walls, natural stone hearths, artisanal wood screens, and handloom textiles. Built with vernacular Kumaoni wisdom to remain naturally cool through summer afternoons and warmly sheltered during crisp mountain nights.',
    image: '/Archive/artisanarea2.JPG',
    imageAlt: 'Artisan mudhouse interior with natural fireplace, woven textiles, and handcrafted wooden details at Green Glen',
  },
  {
    id: 'kainchi',
    eyebrow: '05',
    title: 'Kainchi Dham',
    body: 'Neem Karoli Baba\'s beloved ashram is nearby. Green Glen is a peaceful and convenient base for visiting.',
    image: '/Archive/neemkarolibaba.png',
    imageAlt: 'Neem Karoli Baba at Kainchi Dham — sacred ashram near Green Glen in Uttarakhand',
    objectPosition: 'center 20%',
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
    image: '/Archive/nightwholeview.JPG',
    imageAlt: 'Green Glen estate at night — whole property illuminated for private family & friends retreat',
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
    src: '/Archive/chairsinnature.JPG',
    alt: 'Quiet outdoor seating under the trees at Green Glen — surrounded by nature',
    category: 'The Landscape',
    aspect: 'landscape',
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
    alt: 'Artisan woodwork area at Green Glen — handcrafted spaces with local character',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-6',
    src: '/images/mudhouse-exterior.jpg',
    alt: 'Green Glen mudhouse exterior — traditional earthen clay walls',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-7',
    src: '/images/mudhouse-interior.jpg',
    alt: 'Guest living room at Green Glen — warm earthen mudhouse interiors',
    category: 'The House',
    aspect: 'portrait',
  },
  {
    id: 'gallery-8',
    src: '/Archive/playingarea.JPG',
    alt: 'Open outdoor lawn & recreation grounds at Green Glen',
    category: 'The Landscape',
    aspect: 'landscape',
  },
  {
    id: 'gallery-9',
    src: '/images/open-space.jpg',
    alt: 'Spacious outdoor lawn with handcrafted wooden seating and valley views',
    category: 'The Landscape',
    aspect: 'landscape',
  },
  {
    id: 'gallery-10',
    src: '/images/sattal-location.jpg',
    alt: 'Aerial view of Sattal lake surrounded by lush oak and pine forests',
    category: 'The Landscape',
    aspect: 'landscape',
  },
  {
    id: 'gallery-11',
    src: '/Archive/dayviewanotherside.JPG',
    alt: 'Sunlit two-storey exterior of Green Glen retreat with private balconies and lush lawns',
    category: 'The House',
    aspect: 'landscape',
  },
  {
    id: 'gallery-12',
    src: '/images/group-experience.jpg',
    alt: 'Guests enjoying an outdoor gathering on the lawns of Green Glen',
    category: 'The People',
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
    alt: 'Sunlit dining veranda at Green Glen — home-style meals with a view',
    category: 'Food',
    aspect: 'landscape',
  },
  {
    id: 'gallery-15',
    src: '/Archive/swingnightview.JPG',
    alt: 'The rustic wooden swing by night — quiet moments under the stars',
    category: 'Slow Moments',
    aspect: 'landscape',
  },
  {
    id: 'gallery-16',
    src: '/Archive/nightview.png',
    alt: 'Serene atmospheric night glow of Green Glen under mountain skies',
    category: 'Slow Moments',
    aspect: 'landscape',
  },
] as const;

export const ctaContent = {
  eyebrow: 'Plan Your Stay',
  headline: ['Come for the hills.', 'Stay for the feeling.'],
  body: 'Plan a slower stay at Green Glen.',
  ctaPrimary: { label: 'Plan Your Stay', href: whatsappStayUrl },
  ctaSecondary: { label: 'Talk to Us', href: whatsappStayUrl },
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

// ─── Activities / Experiences Section ────────────────────────────
export const activitiesContent = {
  eyebrow: 'At Green Glen & Beyond',
  headline: 'Days worth remembering.',
  body: 'The hills offer more than views. Sattal is a destination rich in nature, adventure and stillness — and Green Glen is your base for all of it.',
  activities: [
    {
      id: 'stargazing',
      title: 'Stargazing & Night Skies',
      body: 'With zero city light pollution, Sattal nights reveal the glowing Milky Way and silent pine canopy from our private lawn.',
      image: '/Archive/nightviewanotherside.JPG',
      imageAlt: 'Nighttime view of Green Glen lawn and illuminated mudhouse under clear Himalayan skies',
      icon: '✨',
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

export const birdWatchingContent = {
  eyebrow: 'Sattal · Western Himalayas · 500+ Avian Species',
  headline: 'Where Rare Feathers Meet Untouched Silence',
  subheading:
    'Sattal is universally celebrated among ornithologists as the birdwatching capital of Kumaon. At Green Glen, the mixed oak and pine forest begins right at your mudhouse doorstep — step outside at dawn with your binoculars and camera.',
  observationDeck: {
    title: 'The Forest Veranda & Natural Hide',
    subtitle: 'Morning birding directly from the retreat veranda',
    image: '/Archive/birdwatching.png',
    imageAlt: 'Guests birdwatching with binoculars and camera from the covered veranda deck at Green Glen',
    badge: 'Guest Experience · Living at Green Glen',
    quote:
      'We had barely poured our first morning tea on the veranda when a pair of Slaty-headed Parakeets landed on the oak bough right in front of us, followed shortly by the ethereal tail streamers of an Asian Paradise Flycatcher.',
    quoteAuthor: 'Pahadi Morning Observation',
    features: [
      'Early 5:30 AM hot ginger tea & packed breakfast boxes',
      'Binoculars & local field guides available in the lounge',
      'Tripod-friendly stone ledge overlooking natural forest perches',
      'Resident naturalist guided walks through the seven lakes basin',
    ],
  },
  stats: [
    { number: '500+', label: 'Recorded Avian Species' },
    { number: '0 Min', label: 'Commute — Forest at Doorstep' },
    { number: '5:30 AM', label: 'Dawn Guide & Chai Service' },
    { number: '7 Lakes', label: 'Interconnected Freshwater Basin' },
  ],
  species: [
    {
      id: 'paradise-flycatcher',
      commonName: 'Asian Paradise Flycatcher',
      scientificName: 'Terpsiphone paradisi',
      image: '/Archive/paradisefitcatcher.png',
      imageAlt: 'Asian Paradise Flycatcher white morph male perched gracefully on a forest branch',
      status: 'Summer Breeding Visitor (Apr – Sep)',
      habitat: 'Canopy streams & shaded oak ravines',
      call: 'Sharp nasal "tshreek-tshreek" and rich musical whistles',
      note: 'The crown jewel of Sattal birding. Males boast dazzling snow-white plumage with two trailing 30cm ribbon streamers that flutter like silk ribbons as they catch insects mid-air.',
    },
    {
      id: 'kalij-pheasant',
      commonName: 'Kalij Pheasant',
      scientificName: 'Lophura leucomelanos',
      image: '/Archive/bird.png',
      imageAlt: 'Male Kalij Pheasant with scarlet facial wattle, crest, and silver-streaked breast',
      status: 'Resident Himalayan Ground Dweller',
      habitat: 'Dense oak forest floor & retreat perimeter',
      call: 'Guttural clucking and loud sudden wing-whirring',
      note: 'A majestic Himalayan pheasant with glossy blue-black body, backward-swept crest, and vibrant scarlet eye-wattles. Regularly seen foraging along Green Glen’s lower stone pathways at dawn.',
    },
    {
      id: 'slaty-headed-parakeet',
      commonName: 'Slaty-headed Parakeet',
      scientificName: 'Psittacula himalayana',
      image: '/Archive/bird2.png',
      imageAlt: 'Pair of Slaty-headed Parakeets perched close together on a tree branch',
      status: 'Himalayan Altitudinal Migrant',
      habitat: 'Fruiting oak branches & hillside tree lines',
      call: 'High-pitched musical "tooi-tooi" in swift acrobatic flight',
      note: 'Instantly recognizable by their slate-grey hood, lime-green wings, bright yellow collar, and orange-coral upper bill. Highly social birds that often preen in pairs right above our garden lawn.',
    },
    {
      id: 'red-billed-blue-magpie',
      commonName: 'Red-billed Blue Magpie',
      scientificName: 'Urocissa erythroryncha',
      image: '/Archive/bird3.png',
      imageAlt: 'Red-billed Blue Magpie with crimson beak and cobalt-blue plumage feeding on forest branch',
      status: 'Resident Forest Icon',
      habitat: 'Mid-canopy & garden borders',
      call: 'Flute-like liquid whistles and animated chatter',
      note: 'One of the most charismatic inhabitants of the Kumaon forest. Boasts a bright orange-red bill, velvet-black head, and an astonishing 45cm graduated tail tipped with snow-white.',
    },
    {
      id: 'red-junglefowl',
      commonName: 'Red Junglefowl',
      scientificName: 'Gallus gallus',
      image: '/Archive/bird4.png',
      imageAlt: 'Red Junglefowl in rich golden-brown plumage foraging along the earth',
      status: 'Resident Native Ground Bird',
      habitat: 'Undergrowth, quiet trails & forest edges',
      call: 'Challenging dawn crow "kak-ka-kawk-ka"',
      note: 'The wild ancestor of all domestic poultry. Steps out cautiously from the thick brush at first light to scratch the leaf litter in clearings around the retreat.',
    },
  ],
  trails: [
    {
      name: 'The Studio Point Trail',
      distance: '1.8 km from retreat',
      description: 'World-renowned forest corridor famous among wildlife photographers for barbets, woodpeckers, minivets, and flycatchers.',
    },
    {
      name: 'Garud Tal & Hidimba Ridge',
      distance: '2.4 km from retreat',
      description: 'A tranquil lake basin and ridge line frequented by Plumbeous Water Redstarts, White-throated Laughingthrushes, and raptors.',
    },
    {
      name: 'Green Glen Garden & Forest Edge',
      distance: '0 km (On-site)',
      description: 'Natural fruiting bushes, bird baths, and canopy perches visible directly from your mudhouse room veranda.',
    },
  ],
} as const;
