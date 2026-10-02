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

const title = 'Green Glen — Eco-Retreat in Sattal, Nainital, Uttarakhand';
const description =
  'Green Glen is a boutique mud-house eco-retreat in Sattal, near Nainital, Uttarakhand. A home away from home for families, friends and private groups of up to 20. Conveniently located near Kainchi Dham, approximately 6 hours from Delhi and 5–6 hours from Lucknow.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Green Glen Sattal',
    'Green Glen Nainital',
    'Sattal resort',
    'Nainital retreat',
    'eco retreat Sattal',
    'mud house stay Uttarakhand',
    'family retreat near Nainital',
    'private group stay Sattal Nainital',
    'corporate retreat Uttarakhand',
    'yoga retreat Sattal',
    'stay near Kainchi Dham',
    'birding Sattal',
    'bird watching Nainital',
  ],
  authors: [{ name: 'Green Glen' }],
  creator: 'Green Glen',
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
        alt: 'Green Glen — Mud-house eco-retreat in Sattal, Nainital, Uttarakhand',
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
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Green Glen',
  description,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sattal',
    addressRegion: 'Uttarakhand',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    // Coordinates placeholder — update with actual lat/lng
    latitude: '29.3803',
    longitude: '79.5530',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Private Group Exclusive Stay', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Home-Style Food', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Mud-House Architecture', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Open Outdoor Spaces', value: true },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1C2B1E" />
      </head>
      <body className="bg-gg-ivory text-gg-charcoal font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
