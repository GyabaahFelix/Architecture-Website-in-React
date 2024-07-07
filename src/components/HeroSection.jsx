import React from 'react';
import Slider from 'react-slick';
import './HeroSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section className="hero">
      <Slider {...settings}>
        <div className="hero-slide">
          <div className="hero-content">
            <h1>Welcome to Our Architect Company</h1>
            <p>We design and build your dream spaces</p>
            <button>Get a Quote</button>
          </div>
        </div>
        <div className="hero-slide">
          <div className="hero-content">
            <h1>Creating Sustainable Solutions</h1>
            <p>Innovative designs for a better future</p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="hero-slide">
          <div className="hero-content">
            <h1>Your Vision, Our Expertise</h1>
            <p>Transforming ideas into reality</p>
            <button>Contact Us</button>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
