import React from 'react';
import './FeaturedArticle.css';

const FeaturedArticle = () => {
    return (
        <section className="featured-article">
            <img src="placeholder.jpg" alt="Featured" />
            <div className="article-info">
                <h2><a href="#">Article Title</a></h2>
                <p>Author | Date</p>
                <p>Brief summary of the article.</p>
            </div>
        </section>
    );
}

export default FeaturedArticle;
