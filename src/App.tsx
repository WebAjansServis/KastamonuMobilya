import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { CustomMeasureSection } from './components/CustomMeasureSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { WhyUsSection } from './components/WhyUsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ProcessSection } from './components/ProcessSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { OfferCtaSection } from './components/OfferCtaSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] flex flex-col selection:bg-[#B45309] selection:text-white">
      
      {/* Sticky Header */}
      <Header onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 2. Trust Section (134+ reviews) */}
        <TrustSection />

        {/* 3. Services */}
        <ServicesSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 4. Custom Measurement Highlight */}
        <CustomMeasureSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 5. Projects & Gallery */}
        <ProjectsGallery />

        {/* 6. Why Kastamobilya */}
        <WhyUsSection />

        {/* 7. Customer Reviews */}
        <ReviewsSection />

        {/* 8. Process */}
        <ProcessSection />

        {/* 9. Service Areas (Arnavutköy & nearby) */}
        <ServiceAreasSection />

        {/* 10. High Contrast Offer CTA */}
        <OfferCtaSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

        {/* 11. FAQ Accordion */}
        <FaqSection />

        {/* 12. Contact Form & Maps */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Fixed Action Bar */}
      <MobileStickyBar />

      {/* Interactive Custom Quote Calculator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

    </div>
  );
}
