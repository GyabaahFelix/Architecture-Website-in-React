import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Introduction from './components/Introduction';
import VisionSection from './components/VisionSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Introduction />
      <VisionSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default App;
