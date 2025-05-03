import React from 'react';

const Articles: React.FC = () => {
  return (
    <section id="articles" className="articles">
      <h2>Medical Articles</h2>
      <div className="articles-grid">
        <article className="article-card">
          <h3>Understanding Common Symptoms</h3>
          <p>Learn about common medical symptoms and when to seek help</p>
          <a href="#" className="read-more">Read More</a>
        </article>
        <article className="article-card">
          <h3>Preventive Healthcare</h3>
          <p>Tips and guidelines for maintaining good health</p>
          <a href="#" className="read-more">Read More</a>
        </article>
        <article className="article-card">
          <h3>Medical Research Updates</h3>
          <p>Latest developments in medical research and treatments</p>
          <a href="#" className="read-more">Read More</a>
        </article>
      </div>
    </section>
  );
};

export default Articles; 