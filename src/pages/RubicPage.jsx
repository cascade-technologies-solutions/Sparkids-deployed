import React from 'react';
import Header from '../components/Header';
import RubicHero from '../components/RubicHero';
import AbacusOverview from '../components/AbacusOverview';
import Footer from '../components/Footer';
import HomeTestimonials from '../components/hometestimonial';
import Course from '../components/home-course';

export const RubicPage = () => {
    return (
      <div>
        <Header />
        <RubicHero />
        <AbacusOverview />
        <HomeTestimonials />
        <Course />
        <Footer />
      </div>
    );
  };
  
  export default RubicPage;