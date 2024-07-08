import React, { useState } from 'react';
import { FaHome, FaBuilding, FaCouch, FaTree } from 'react-icons/fa';
import './FilterMenu.css';

const FilterMenu = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Define expanded content for each filter
  const filterContent = {
    All: `
      <h2 class="section-heading" style="background-image: url('https://example.com/portfolio-image.jpg');">Explore Our Diverse Project Portfolio</h2>
      <p>Discover a world of design excellence across residential, commercial, interior, and exterior categories. Our team of talented professionals is dedicated to creating exceptional spaces that cater to your unique needs and aspirations.</p>

      <h2 class="section-heading" style="background-image: url('https://example.com/residential-image.jpg');">Residential Projects</h2>
      <p>Step into the comfort and elegance of our residential designs. We specialize in crafting personalized living environments that reflect the lifestyle and preferences of homeowners. From interior design to landscaping and exterior aesthetics, we strive to enhance functionality and property value.</p>

      <h2 class="section-heading" style="background-image: url('https://example.com/commercial-image.jpg');">Commercial Projects</h2>
      <p>Elevate your business with our commercial design expertise. We create functional and visually appealing environments that cater to the specific needs of your industry. Our focus on interior layout, facade design, signage, and branding elements ensures a cohesive and inviting atmosphere that boosts productivity and customer experience.</p>

      <h2 class="section-heading" style="background-image: url('https://example.com/interior-image.jpg');">Interior Design</h2>
      <p>Unlock the full potential of your indoor spaces with our comprehensive interior design services. We work closely with clients to craft functional, stylish, and comfortable environments that reflect their unique tastes and support their lifestyle or business objectives. From space planning to furniture selection, color schemes, and lighting design, we create harmonious and inviting spaces that optimize usability and aesthetics.</p>

      <h2 class="section-heading" style="background-image: url('https://example.com/exterior-image.jpg');">Exterior Design</h2>
      <p>Enhance the curb appeal and functionality of your outdoor spaces with our expert exterior design solutions. We focus on creating inviting entryways, designing captivating facades, and optimizing landscaping and hardscaping features to foster a sense of harmony between the built and natural environments. Sustainability and eco-friendly principles are at the heart of our exterior design approach.</p>
    `,
    Residential: `
      <h2>Residential Projects</h2>
      <p>Step into the comfort and elegance of our residential designs. We specialize in crafting personalized living environments that reflect the lifestyle and preferences of homeowners. From interior design to landscaping and exterior aesthetics, we strive to enhance functionality and property value.</p>
    `,
    Commercial: `
      <h2>Commercial Projects</h2>
      <p>Elevate your business with our commercial design expertise. We create functional and visually appealing environments that cater to the specific needs of your industry. Our focus on interior layout, facade design, signage, and branding elements ensures a cohesive and inviting atmosphere that boosts productivity and customer experience.</p>
    `,
    Interior: `
      <h2>Interior Design</h2>
      <p>Unlock the full potential of your indoor spaces with our comprehensive interior design services. We work closely with clients to craft functional, stylish, and comfortable environments that reflect their unique tastes and support their lifestyle or business objectives. From space planning to furniture selection, color schemes, and lighting design, we create harmonious and inviting spaces that optimize usability and aesthetics.</p>
    `,
    Exterior: `
      <h2>Exterior Design</h2>
      <p>Enhance the curb appeal and functionality of your outdoor spaces with our expert exterior design solutions. We focus on creating inviting entryways, designing captivating facades, and optimizing landscaping and hardscaping features to foster a sense of harmony between the built and natural environments. Sustainability and eco-friendly principles are at the heart of our exterior design approach.</p>
    `,
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <nav className="filter-menu">
        <ul>
          <li
            className={activeFilter === 'All' ? 'active' : ''}
            onClick={() => handleFilterClick('All')}
          >
            <FaHome /> All
          </li>
          <li
            className={activeFilter === 'Residential' ? 'active' : ''}
            onClick={() => handleFilterClick('Residential')}
          >
            <FaHome /> Residential
          </li>
          <li
            className={activeFilter === 'Commercial' ? 'active' : ''}
            onClick={() => handleFilterClick('Commercial')}
          >
            <FaBuilding /> Commercial
          </li>
          <li
            className={activeFilter === 'Interior' ? 'active' : ''}
            onClick={() => handleFilterClick('Interior')}
          >
            <FaCouch /> Interior
          </li>
          <li
            className={activeFilter === 'Exterior' ? 'active' : ''}
            onClick={() => handleFilterClick('Exterior')}
          >
            <FaTree /> Exterior
          </li>
        </ul>
      </nav>
      <div className="filter-content">
        <div dangerouslySetInnerHTML={{ __html: filterContent[activeFilter] }} />
      </div>
    </div>
  );
};

export default FilterMenu;
