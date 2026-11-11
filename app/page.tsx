'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeStrip from '@/components/MarqueeStrip';
import BrandIntro from '@/components/BrandIntro';
import MudhouseSection from '@/components/MudhouseSection';
import OpenSpaceSection from '@/components/OpenSpaceSection';
import ExperienceGrid from '@/components/ExperienceGrid';
import BirdWatchingSection from '@/components/BirdWatchingSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import GroupSection from '@/components/GroupSection';
import FoodSection from '@/components/FoodSection';
import RetreatsSection from '@/components/RetreatsSection';
import LocationSection from '@/components/LocationSection';
import Gallery from '@/components/Gallery';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <MarqueeStrip />
        <BrandIntro />
        <MudhouseSection />
        <OpenSpaceSection />
        <ExperienceGrid />
        <BirdWatchingSection />
        <ActivitiesSection />
        <GroupSection />
        <FoodSection />
        <RetreatsSection />
        <LocationSection />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
