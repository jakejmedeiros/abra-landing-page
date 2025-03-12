import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <h1 className="animated"><span className="highlight">Natural Language Function Execution</span><br/>With Just a Comment</h1>
        <p className="animated delay-1 roboto-mono-light-italic">Let users express what they want in plain language. abra maps their intent directly to your TypeScript functions.</p>
        <div className="animated delay-2 hero-cta">
          <a href="#getting-started" className="btn btn-outline roboto-mono-medium">Get Started</a>
        </div>
      </div>
    </section>
  );
}
 
export default Hero;