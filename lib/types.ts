// ─── Green Glen Shared Types ─────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface Experience {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface Retreat {
  id: string;
  title: string;
  body: string;
  cta: string;
  image: string;
  imageAlt: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  checkin: string;
  checkout: string;
  guests: string;
  purpose: string;
  message: string;
}

export type GalleryCategory = 'All' | 'The House' | 'The Landscape' | 'The People' | 'Food' | 'Slow Moments' | 'Nearby';
