import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Franchisehero from "../components/franchiseHero";
import FranchiseInvestment from "../components/franchiseInvestment";
import FranchiseProcess from "../components/franchiseapplication";
import FranchiseOurstory from "../components/FranchiseOurstory";
import FranchiseSuccess from "../components/FranchiseSuccess";
import FranchiseSupport from "../components/FranchiseSupport";



const FranchisePage = () => {
    return (
      <div>
        <Header />
        <Franchisehero />
        <FranchiseOurstory />
        <FranchiseInvestment />
        <FranchiseSupport />
        <FranchiseProcess />
        <FranchiseSuccess />
        <Footer />
      </div>
    );
  };
  
  export default FranchisePage;