import React from 'react';
import Header from '../components/Header';
import AbacusHero from '../components/AbacusHero';
import AbacusOverview from '../components/AbacusOverview';
import Footer from '../components/Footer';
import HomeTestimonials from '../components/hometestimonial';
import Course from '../components/home-course';
import FAQ from '../components/FranchiseFAQ';

export const AbacusPage = () => {
    return (
      <div>
        <Header />
        <AbacusHero />
        <AbacusOverview />
        <FAQ/>
        <HomeTestimonials />
        <Course />
        <Footer />
      </div>
    );
  };
  
  export default AbacusPage;