// Portfolio.js
import React from 'react';
import Header from '../components/Header';
import PortfolioHero from '../components/Portfolio/PortfolioHero';
import FilterMenu from '../components/Portfolio/FilterMenu';
import Pagination from '../components/Portfolio/Pagination';
import Footer from '../components/Footer';

const Portfolio = () => (
  <div>
    <Header />
    <PortfolioHero />
    <FilterMenu />
    <Pagination />
    <Footer />
  </div>
);

export default Portfolio;
