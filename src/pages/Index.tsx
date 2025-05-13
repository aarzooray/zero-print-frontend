
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import ErwSection from '../components/ErwSection';
import ImpactMetrics from '../components/ImpactMetrics';
import AudienceColumns from '../components/AudienceColumns';
import HowItWorks from '../components/HowItWorks';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Mission />
      <ErwSection />
      <ImpactMetrics />
      <AudienceColumns />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
