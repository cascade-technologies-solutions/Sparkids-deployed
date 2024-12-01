import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Franchisehero from "../components/franchiseHero";
import FranchiseInvestment from "../components/franchiseInvestment";
import FranchiseProcess from "../components/franchiseapplication";
import FranchiseOurstory from "../components/FranchiseOurstory";
import FranchiseSuccess from "../components/FranchiseSuccess";
import FranchiseSupport from "../components/FranchiseSupport";
import FAQ from "../components/FranchiseFAQ";
import QuestionSection from "../components/Question";


const FranchisePage = () => {
    return (
      <div>
        <Header />
        <Franchisehero />
        <FranchiseOurstory />
        <FranchiseInvestment />
        <FranchiseSupport />
        <FranchiseProcess />
        <FAQ />
        <FranchiseSuccess />
        <QuestionSection />
        <Footer />
      </div>
    );
  };
  
  export default FranchisePage;