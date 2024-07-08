// CategorySlides.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slidesData = {
  All: [
    { src: '/assets/all1.jpg', alt: 'All - 1' },
    { src: '/assets/all2.jpg', alt: 'All - 2' },
    { src: '/assets/all3.jpg', alt: 'All - 3' }
  ],
  Residential: [
    { src: '/assets/residential1.jpg', alt: 'Residential - 1' },
    { src: '/assets/residential2.jpg', alt: 'Residential - 2' },
    { src: '/assets/residential3.jpg', alt: 'Residential - 3' }
  ],
  Commercial: [
    { src: '/assets/commercial1.jpg', alt: 'Commercial - 1' },
    { src: '/assets/commercial2.jpg', alt: 'Commercial - 2' },
    { src: '/assets/commercial3.jpg', alt: 'Commercial - 3' }
  ],
  Interior: [
    { src: '/assets/interior1.jpg', alt: 'Interior - 1' },
    { src: '/assets/interior2.jpg', alt: 'Interior - 2' },
    { src: '/assets/interior3.jpg', alt: 'Interior - 3' }
  ],
  Exterior: [
    { src: '/assets/exterior1.jpg', alt: 'Exterior - 1' },
    { src: '/assets/exterior2.jpg', alt: 'Exterior - 2' },
    { src: '/assets/exterior3.jpg', alt: 'Exterior - 3' }
  ]
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  adaptiveHeight: true
};

const CategorySlides = ({ category }) => {
  const slides = slidesData[category] || [];

  return (
    <div className="category-slides">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlides;
