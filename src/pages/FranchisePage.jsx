import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Franchisehero from "../components/franchiseHero";
import FranchiseInvestment from "../components/franchiseInvestment";
import FranchiseProcess from "../components/franchiseapplication";



const FranchisePage = () => {
    return (
      <div>
        <Header />
        <Franchisehero />
        <FranchiseInvestment />
        <FranchiseProcess />
        <Footer />
      </div>
    );
  };
  
  export default FranchisePage;