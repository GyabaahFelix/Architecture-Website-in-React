import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <header>
                <div className="logo">
                    <a href="#">Logo</a>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#" className="active">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                    <button>Search</button>
                </div>
            </header>
            <section className="hero">
                <div className="hero-content">
                    <h1>Our Portfolio</h1>
                    <p>Brief Description or Tagline</p>
                </div>
            </section>
            <section className="categories">
                <ul>
                    <li><a href="#">Residential</a></li>
                    <li><a href="#">Commercial</a></li>
                    <li><a href="#">Interior</a></li>
                    <li><a href="#">Exterior</a></li>
                </ul>
            </section>
            <section className="projects">
                <div className="project">
                    <img src="placeholder.jpg" alt="Project" />
                    <div className="project-title">Project Title</div>
                </div>
                <div className="project">
                    <img src="placeholder.jpg" alt="Project" />
                    <div className="project-title">Project Title</div>
                </div>
                <div className="project">
                    <img src="placeholder.jpg" alt="Project" />
                    <div className="project-title">Project Title</div>
                </div>
                <div className="project">
                    <img src="placeholder.jpg" alt="Project" />
                    <div className="project-title">Project Title</div>
                </div>
                <div className="project">
                    <img src="placeholder.jpg" alt="Project" />
                    <div className="project-title">Project Title</div>
                </div>
                <div className="project">
                    <img src="placeholder.jpg" alt="Project" />
                    <div className="project-title">Project Title</div>
                </div>
            </section>
            <section className="pagination">
                <a href="#">Previous</a>
                <a href="#" className="active">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">Next</a>
            </section>
            <footer>
                <div className="footer-section contact-info">
                    <h4>Contact Info</h4>
                    <p>Address: 123 Street, City, Country</p>
                    <p>Phone: +1234567890</p>
                    <p>Email: info@example.com</p>
                </div>
                <div className="footer-section social-media">
                    <h4>Social Media</h4>
                    <p>Facebook | Twitter | Instagram</p>
                </div>
                <div className="footer-section newsletter-signup">
                    <h4>Newsletter Signup</h4>
                    <form>
                        <input type="email" placeholder="Email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="footer-section copyright">
                    <p>© 2022 Website Name. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Portfolio;
