import React from 'react';
import { Navbar } from './components/Navbar';
import { FloatingPetals } from './components/FloralDecorations';
import { HeroSection } from './components/HeroSection';
import { QuotesSection } from './components/QuotesSection';
import { EventsSection } from './components/EventsSection';
import { BridalEntrySection } from './components/BridalEntrySection';
import { RsvpAndBookingSection } from './components/RsvpAndBookingSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#120205] text-[#fbf5ee] selection:bg-[#c99738] selection:text-black font-cormorant">
      {/* Floating Rose Petals Background Effect */}
      <FloatingPetals />

      {/* Luxury Navigation Header */}
      <Navbar />

      {/* Main Wedding Content - 5 Grand Sections */}
      <main className="relative">
        {/* Section 1: Royal Hero & Announcement */}
        <HeroSection />

        {/* Section 2: Sacred Union & Wedding Quotes */}
        <QuotesSection />

        {/* Section 3: The 3 Ceremonies (Mehndi, Baraat, Walima) */}
        <EventsSection />

        {/* Section 4: The Royal Bridal Entry Video Showcase & Stage References */}
        <BridalEntrySection />

        {/* Section 5: RSVP, Blessings & Ali Digital Hub Booking Contact */}
        <RsvpAndBookingSection />
      </main>
    </div>
  );
}
