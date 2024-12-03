import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/HandwritingHero';
import HandwritingOverview from '../components/AbacusOverview';
import Footer from '../components/Footer';
import HomeTestimonials from '../components/hometestimonial';
import Course from '../components/home-course';
import FAQ from '../components/FranchiseFAQ';

export const HandwritingPage = () => {
    return (
      <div>
        <Header />
        <AboutUs />
        <HandwritingOverview />
        <FAQ/>
        <HomeTestimonials />
        <Course />
        <Footer />
      </div>
    );
  };
  
  export default HandwritingPage;