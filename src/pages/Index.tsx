
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StackComponents from '../components/StackComponents';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <StackComponents />
        <StatisticsSection />
        <TestimonialSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
