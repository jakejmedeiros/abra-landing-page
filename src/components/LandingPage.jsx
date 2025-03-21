import React from 'react';
import Header from './layout/Header';
import Hero from './sections/Hero';
import AbraAssistant from './AbraAssistant';
import HowItWorks from './sections/HowItWorks';
import GettingStarted from './sections/GettingStarted';
import FAQ from './sections/FAQ';
import Footer from './layout/Footer';
import './LandingPage.css';
import './modern-styles.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <div className="hero-container">
        <Hero />
        <AbraAssistant />
      </div>
      <HowItWorks />
      <GettingStarted />
      <FAQ />
      <Footer />
    </div>
  );
}

export default LandingPage;
