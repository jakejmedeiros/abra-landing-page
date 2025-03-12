import React from 'react';
import Header from './layout/Header';
import Hero from './sections/Hero';
import CodeSnippet from './sections/CodeSnippet';
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
      <Hero />
      <CodeSnippet />
      <HowItWorks />
      <GettingStarted />
      <FAQ />
      <Footer />
    </div>
  );
}

export default LandingPage;