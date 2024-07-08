import React from 'react';
import './PortfolioHero.css';
import portfolioimage from '../../assets/portfolioimage.jpg';

const PortfolioHero = () => (
  <section className="portfoliohero">
    <div className="background">
      <img src={portfolioimage} alt="Portfolio Background" />
    </div>
    <div className="hero-content">
      <h1>Our Portfolio</h1>
      <p>Brief Description or Tagline</p>
    </div>
  </section>
);

export default PortfolioHero;
