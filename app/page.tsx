'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandIntro from '@/components/BrandIntro';
import MudhouseSection from '@/components/MudhouseSection';
import OpenSpaceSection from '@/components/OpenSpaceSection';
import ExperienceGrid from '@/components/ExperienceGrid';
import GroupSection from '@/components/GroupSection';
import FoodSection from '@/components/FoodSection';
import RetreatsSection from '@/components/RetreatsSection';
import LocationSection from '@/components/LocationSection';
import Gallery from '@/components/Gallery';
import TestimonialsPlaceholder from '@/components/TestimonialsPlaceholder';
import CTASection from '@/components/CTASection';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  // Intercept all "Plan Your Stay" / #contact links
  const handleBookingClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href="#contact"]');
    if (link) {
      e.preventDefault();
      setBookingOpen(true);
    }
  };

  return (
    // Using onClick on the div to intercept all booking CTAs globally
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={handleBookingClick}>
      <Navbar />
      <main id="main-content">
        <Hero />
        <BrandIntro />
        <MudhouseSection />
        <OpenSpaceSection />
        <ExperienceGrid />
        <GroupSection />
        <FoodSection />
        <RetreatsSection />
        <LocationSection />
        <Gallery />
        <TestimonialsPlaceholder />
        <CTASection />
      </main>
      <Footer />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
