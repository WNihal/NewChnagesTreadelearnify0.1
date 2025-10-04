import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUsSection from '../components/home/WhyChooseUsSection';
import WhyJoinSection from '../components/home/WhyJoinSection';
import AcademyGallerySection from '../components/home/AcademyGallerySection';
import ContactSection from '../components/home/ContactSection';
import FAQSection from '../components/home/FAQSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <WhyJoinSection />
      <TestimonialsSection />
      <AcademyGallerySection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;