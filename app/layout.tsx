import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/content';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

const title =
  'Green Glen | Best Homestay in Sattal near Bhimtal | Birdwatching Retreat Nainital';
const description =
  'Green Glen is the best homestay in Sattal, near Bhimtal and Nainital, Uttarakhand. A private mud-house eco-comfort retreat for families, birdwatchers and groups up to 20 — 500+ bird species at your doorstep, home-style food, and exclusive use of the entire property. 6 hrs from Delhi.';

export const metadata: Metadata = {
  title: {
    default: title,
    template: '%s | Green Glen — Sattal Homestay',
  },
  description,
  keywords: [
    'best homestay in sattal',
    'best homestay near bhimtal',
    'best homestay for birdwatchers in bhimtal',
    'sattal homestay',
    'bhimtal homestay',
    'nainital homestay',
    'birdwatching homestay sattal',
    'birdwatching retreat bhimtal',
    'private group homestay uttarakhand',
    'eco homestay sattal nainital',
    'mud house retreat sattal',
    'family homestay sattal',
    'corporate retreat near bhimtal',
    'Green Glen sattal',
    'Green Glen bhimtal',
    'Green Glen nainital',
    'stay near kainchi dham',
    'kumaon birdwatching',
    'sattal bird sanctuary homestay',
    'uttarakhand eco retreat',
  ],
  authors: [{ name: 'Green Glen' }],
  creator: 'Green Glen',
  publisher: 'Green Glen',
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteConfig.siteUrl,
    title,
    description,
    siteName: 'Green Glen',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1400,
        height: 875,
        alt: 'Green Glen — Best Homestay in Sattal near Bhimtal, Nainital, Uttarakhand',
      },
    ],
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: [{ url: '/logo.png', type: 'image/png' }],
    shortcut: '/logo.png',
  },
  verification: {
    google: '36MNP6xFNL14Uo66Ur3Hx9s1y7lVYAo9sS7QJcyItUo',
  },
  category: 'travel',
};

// ─── Structured Data (JSON-LD) ────────────────────────────────────
const lodgingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Green Glen',
  alternateName: [
    'Green Glen Sattal',
    'Green Glen Homestay Sattal',
    'Green Glen Bhimtal',
  ],
  description:
    'Green Glen is the best homestay in Sattal near Bhimtal and Nainital, Uttarakhand. A private mud-house eco-comfort retreat offering exclusive stays for families, birdwatchers and groups of up to 20 guests.',
  url: siteConfig.siteUrl,
  image: [
    `${siteConfig.siteUrl}${siteConfig.ogImage}`,
    `${siteConfig.siteUrl}/Archive/hero1.png`,
    `${siteConfig.siteUrl}/Archive/hero2.png`,
  ],
  telephone: '+919599557593',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sattal',
    addressLocality: 'Sattal',
    addressRegion: 'Uttarakhand',
    postalCode: '263136',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '29.3803',
    longitude: '79.5530',
  },
  hasMap: 'https://maps.google.com/?q=Sattal,Nainital,Uttarakhand',
  priceRange: '₹₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Bank Transfer',
  checkinTime: '12:00',
  checkoutTime: '11:00',
  maximumAttendeeCapacity: 20,
  numberOfRooms: 5,
  petsAllowed: false,
  amenityFeature: [
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Exclusive Private Group Use',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Home-Style Customised Meals',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Mud-House Architecture',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Birdwatching on Premises — 500+ Species',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Forest at Doorstep',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Veranda with Natural Bird Hide',
      value: true,
    },
    {
      '@type': 'LocationFeatureSpecification',
      name: 'Near Kainchi Dham Ashram',
      value: true,
    },
  ],
  containsPlace: [
    {
      '@type': 'Accommodation',
      name: 'Mudhouse Guest Rooms',
      description: 'Warm wooden-floored guest rooms with earthy furnishings inside a traditional mud-house, Sattal.',
      numberOfRooms: 5,
      occupancy: { '@type': 'QuantitativeValue', maxValue: 20 },
    },
  ],
  nearbyAttractions: [
    {
      '@type': 'TouristAttraction',
      name: 'Sattal Lake',
      description: 'Seven interconnected freshwater lakes — world-renowned birdwatching destination near Bhimtal',
    },
    {
      '@type': 'TouristAttraction',
      name: 'Kainchi Dham — Neem Karoli Baba Ashram',
      description: 'Sacred ashram of Neem Karoli Baba, a popular spiritual destination in Nainital district',
    },
    {
      '@type': 'TouristAttraction',
      name: 'Bhimtal Lake',
      description: 'Major lake town near Sattal, 15 km from Green Glen',
    },
  ],
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://wa.me/919599557593?text=Hi%21%20I%20would%20like%20to%20plan%20a%20stay%20at%20Green%20Glen%2C%20Sattal.',
      inLanguage: 'en',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
    result: { '@type': 'LodgingReservation', name: 'Stay at Green Glen Sattal' },
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Green Glen homestay located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Green Glen is located in Sattal, Nainital, Uttarakhand, India — approximately 15 km from Bhimtal and 30 km from Nainital. It is about 6 hours by road from Delhi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Green Glen the best homestay in Sattal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Green Glen is widely regarded as the best homestay in Sattal for its unique mud-house architecture, exclusive private use for groups, home-style food, and unmatched access to Sattal\'s world-famous birdwatching forest right at the doorstep.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Green Glen from Bhimtal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Green Glen is approximately 15 km from Bhimtal lake, about 25–30 minutes by road. It is one of the best homestays near Bhimtal for birdwatchers and nature lovers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Green Glen good for birdwatching near Bhimtal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — Green Glen is the best homestay for birdwatchers near Bhimtal and Sattal. Sattal is home to 500+ recorded avian species including the Asian Paradise Flycatcher, Kalij Pheasant, and Red-billed Blue Magpie. The forest begins right at the retreat\'s doorstep.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many guests can Green Glen accommodate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Green Glen accommodates up to 20 guests on an exclusive basis — when you book, the entire property is yours. Rooms can comfortably accommodate triple share.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Green Glen Sattal for birdwatching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sattal is a year-round birdwatching destination. The peak birdwatching season is October to March for winter migrants. April to September brings summer breeding visitors like the Asian Paradise Flycatcher.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a stay at Green Glen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book directly via WhatsApp at +91 95995 57593 or visit greenglen.co.in and click "Plan Your Stay" to send a message.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <meta name="google-site-verification" content="36MNP6xFNL14Uo66Ur3Hx9s1y7lVYAo9sS7QJcyItUo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1C2B1E" />
        <meta name="geo.region" content="IN-UT" />
        <meta name="geo.placename" content="Sattal, Nainital, Uttarakhand" />
        <meta name="geo.position" content="29.3803;79.5530" />
        <meta name="ICBM" content="29.3803, 79.5530" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-gg-ivory text-gg-charcoal font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
