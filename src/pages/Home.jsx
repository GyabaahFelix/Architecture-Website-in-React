// src/pages/Home.jsx

import React from 'react';
import Header from '../components/Header'; // Adjust import path for Header
import HeroSection from '../components/HeroSection';
import Introduction from '../components/Introduction';
import VisionSection from '../components/VisionSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Introduction />
      <VisionSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;
