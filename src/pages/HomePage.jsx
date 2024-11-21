import React from 'react';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Courses from '../components/Our_courses';
import Franchise from '../components/Franchise';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <AboutUs />
      <Courses />
      <Franchise />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;


