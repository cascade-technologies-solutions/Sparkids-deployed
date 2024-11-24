import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Opportunity from '../components/opportunity';
import Educator from '../components/educator';
import Sights from '../components/sight';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Opportunity />
      <Educator />
      <Sights />
      <Footer />
    </div>
  );
};

export default HomePage;


