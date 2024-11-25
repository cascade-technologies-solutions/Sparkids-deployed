import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Opportunity from '../components/opportunity';
import Sight from '../components/sight';
import Educator from '../components/educator';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Opportunity />
      <Educator />
      <Sight />
      <Footer />
    </div>
  );
};

export default HomePage;
