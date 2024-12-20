import React from 'react';
//import Header from '../components/Header';
//import Footer from '../components/Footer';
import CareerHero from '../components/CareerHero';
import CareerCulture from '../components/CareerCulture';
import CareerApplication from '../components/CareerApplication';
import FAQ from '../components/FranchiseFAQ';
export const CareersPage = () => {
    return (
      <div>
        <CareerHero />
        <CareerCulture />
        <CareerApplication/>
        <FAQ />
      </div>
    );
  };
  
  export default CareersPage;