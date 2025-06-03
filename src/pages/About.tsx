import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AboutHero from '../components/sections/AboutHero';
import AboutSection from '../components/sections/About';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main>
        <AboutHero />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;