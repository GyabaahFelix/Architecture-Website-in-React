import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="contact-info">
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
        <p>Address: 123 Main St, City, State</p>
      </div>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
      <div className="copyright">
        <p>Copyright © 2022 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
