
import React, { useRef } from 'react';
import HeroSection from './landing/HeroSection';
import FeaturesSection from './landing/FeaturesSection';
import DemoSection from './landing/DemoSection';
import TestimonialsSection from './landing/TestimonialsSection';
import CtaSection from './landing/CtaSection';
import FooterSection from './landing/FooterSection';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const demoRef = useRef<HTMLDivElement>(null);

  // Function to scroll to demo section
  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection onGetStarted={onGetStarted} onScrollToDemo={scrollToDemo} />
      
      {/* Features Section */}
      <FeaturesSection />

      {/* Demo Section with ref for scrolling */}
      <div ref={demoRef}>
        <DemoSection />
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CtaSection onGetStarted={onGetStarted} />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default LandingPage;
