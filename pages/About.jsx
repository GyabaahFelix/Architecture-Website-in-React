// src/pages/About.jsx

import React from 'react';
import Header from '../components/Header'; // Adjust import path for Header
import FeaturedArticle from '../components/FeaturedArticle';
import RecentPosts from '../components/RecentPosts';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsletterSection';

const About = () => {
  return (
    <div>
        <Header />
        <FeaturedArticle />
        <RecentPosts />
        <NewsletterSection />
        <Footer />
    </div>
  );
};

export default About;
