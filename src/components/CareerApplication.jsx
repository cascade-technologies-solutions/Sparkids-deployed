import React from "react";
import "../styles/CareerApplication.css"; 
import arrowImage from "../Assets/franchise-img/franchisearrow.png";

const steps = [
  {
    number: "01",
    title: "Application Submission",
    description: "Submit your resume and cover letter via our website.",
  },
  {
    number: "02",
    title: "Initial Screening",
    description: "Our HR team will review your application and shortlist candidates.",
  },
  {
    number: "03",
    title: "Interview Process",
    description: "Attend interviews with our hiring team to assess your skills and fit.",
  },
  {
    number: "04",
    title: "Offer & Negotiation",
    description: "Receive an offer and discuss details like salary and joining date.",
  },
  {
    number: "05",
    title: "Onboarding",
    description: "Complete onboarding formalities and start your journey with us.",
  },
  {
    number: "06",
    title: "Begin Your Career",
    description: "Join your team and contribute to our mission.",
  },
];

const CareerApplication = () => {
  return (
    <div className="career-container">
      <h1 className="heading">Career Application Process</h1>
      <h3 className="subheading">Your journey to inspire young minds begins here. Join Sparkids Academy and 
        make a difference in <br/>the lives of future leaders</h3>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div className="step-wrapper" key={step.number}>
            <div className="step-box">
              <div className="step-number-line">
                <span className="step-number">{step.number}</span>
                <div className="thin-line"></div>
              </div>
              <p className="step-content">
                {step.title}: <span>{step.description}</span>
              </p>
            </div>
            {index !== steps.length - 1 && (
              <img
                src={arrowImage}
                alt=""
                className={`arrow-image arrow-${index % 2 === 0 ? "right" : "left"}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerApplication;
