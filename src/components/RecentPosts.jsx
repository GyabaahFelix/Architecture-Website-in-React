import React from 'react';
import './RecentPosts.css';

const RecentPosts = () => {
    return (
        <section className="recent-posts">
            <h2>Recent Posts</h2>
            <article>
                <h3><a href="#">Post Title</a></h3>
                <p>Author | Date</p>
                <p>Brief summary of the post.</p>
            </article>
            <article>
                <h3><a href="#">Post Title</a></h3>
                <p>Author | Date</p>
                <p>Brief summary of the post.</p>
            </article>
            <article>
                <h3><a href="#">Post Title</a></h3>
                <p>Author | Date</p>
                <p>Brief summary of the post.</p>
            </article>
        </section>
    );
}

export default RecentPosts;
