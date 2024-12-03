import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/ReadingHero';
import ReadingOverview from '../components/AbacusOverview';
import Footer from '../components/Footer';
import HomeTestimonials from '../components/hometestimonial';
import Course from '../components/home-course';

export const ReadingPage = () => {
    return (
      <div>
        <Header />
        <AboutUs />
        <ReadingOverview />
        <HomeTestimonials />
        <Course />
        <Footer />
      </div>
    );
  };
  
  export default ReadingPage;