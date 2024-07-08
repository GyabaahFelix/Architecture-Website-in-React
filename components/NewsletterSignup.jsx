import React from 'react';
import './NewsletterSignup.css';

const NewsletterSignup = () => {
    return (
        <section className="newsletter-signup">
            <h2>Subscribe to our Newsletter</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" />
                <label htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" />
                <button type="submit">Subscribe</button>
            </form>
        </section>
    );
}

export default NewsletterSignup;
