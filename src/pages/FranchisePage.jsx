import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Franchisehero from "../components/franchiseHero";
import FranchiseInvestment from "../components/franchiseInvestment";



const FranchisePage = () => {
    return (
      <div>
        <Header />
        <Franchisehero />
        <FranchiseInvestment />
        <Footer />
      </div>
    );
  };
  
  export default FranchisePage;