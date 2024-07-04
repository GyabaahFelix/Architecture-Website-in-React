import React from 'react';
import './NewsletterSection.css';

const NewsletterSection = () => {
  return (
    <section className="newsletter">
      <h2>Subscribe to Our Newsletter</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email address:
          <input type="email" name="email" />
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsletterSection;
