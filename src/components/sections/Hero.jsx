import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
  <div className="hero-background"></div>
  <div className="container">
    <h1 className="animated">
      <span className="highlight">Execute Functions in Plain English</span>
    </h1>
    <p className="animated delay-1 roboto-mono-light-italic">
      Annotate your functions. Abra handles user intent.
    </p>
    <div className="animated delay-2 hero-cta">
      <a href="#getting-started" className="btn btn-outline roboto-mono-medium">Get Started</a>
    </div>
  </div>
</section>
  );
}

export default Hero;
