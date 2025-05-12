
import React from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-[#1b2c4a] to-[#0a1635]">
        <NavBar />
        <Hero />
      </div>
      <div className="bg-black">
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
