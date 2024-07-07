// src/pages/About.jsx

import React from 'react';
import Header from '../components/Header'; // Adjust import path for Header
import FeaturedArticle from '../components/FeaturedArticle';
import RecentPosts from '../components/RecentPosts';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main>
        <FeaturedArticle />
        <RecentPosts />
        <NewsletterSignup />
        <Footer />
      </main>
    </div>
  );
};

export default About;
