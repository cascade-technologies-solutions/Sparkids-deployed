import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/AbacusHero';
import AbacusOverview from '../components/AbacusOverview';
import Footer from '../components/Footer';
import HomeTestimonials from '../components/hometestimonial';
import Course from '../components/home-course';

export const AbacusPage = () => {
    return (
      <div>
        <Header />
        <AboutUs />
        <AbacusOverview />
        <HomeTestimonials />
        <Course />
        <h1>Careers Page</h1>
        <Footer />
      </div>
    );
  };
  
  export default AbacusPage;