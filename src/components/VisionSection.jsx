import React from 'react';
import Slider from 'react-slick';
import './VisionSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VisionSection = () => {
  const settings = {
    dots: true, // Enables pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section className="vision">
      <h2>Our Vision</h2>
      <Slider {...settings}>
        <div className="vision-card">
          <h3>Innovative Designs</h3>
          <p>We strive to create innovative designs...</p>
        </div>
        <div className="vision-card">
          <h3>Sustainable Solutions</h3>
          <p>We are committed to providing sustainable solutions...</p>
        </div>
        <div className="vision-card">
          <h3>Client Satisfaction</h3>
          <p>We prioritize client satisfaction...</p>
        </div>
      </Slider>
      <button className="vision-btn">More about us</button>
    </section>
  );
};

export default VisionSection;
