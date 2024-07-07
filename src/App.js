import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Import Home component
import Blog from './pages/Blog'; // Import Blog component
import About from './pages/About'; // Import About Us component (create if needed)
import Services from './pages/Services'; // Import Services component (create if needed)
import Portfolio from './pages/Portfolio'; // Import Portfolio component (create if needed)
import Contact from './pages/Contact'; // Import Contact Us component (create if needed)

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />  {/* Home route */}
          <Route path="/blog" element={<Blog />} /> {/* Blog route */}
          <Route path="/about-us" element={<About />} /> {/* About Us route */}
          <Route path="/services" element={<Services />} /> {/* Services route */}
          <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio route */}
          <Route path="/contact-us" element={<Contact />} /> {/* Contact Us route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
