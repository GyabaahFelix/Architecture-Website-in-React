// src/pages/Home.jsx

import React from 'react';
import Header from '../components/Header'; // Adjust import path for Header
import HomeHeroSection from '../components/Home/HeroSection';
import Introduction from '../components/Home/Introduction';
import VisionSection from '../components/Home/VisionSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeHeroSection />
      <Introduction />
      <VisionSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Home;
