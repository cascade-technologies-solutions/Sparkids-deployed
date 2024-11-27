import React from 'react';
import Header from '../components/Header';
import Mission from '../components/mission';
import QuestionSection from '../components/Question';
import Footer from '../components/Footer';
import Card from '../components/cardtest';

export const AboutPage = () => {
  return (
    <div>
      <Header />
      
      <Mission />
      <Card /><QuestionSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
