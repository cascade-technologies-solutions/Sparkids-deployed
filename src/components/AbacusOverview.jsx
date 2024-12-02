import React, { useState } from "react";
import point from "../Assets/courses-img/checkpoint.png";
import "../styles/AbacusOverview.css";

const Overview = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="page-container">
      {/* Tab Navigation (outside the box) */}
      <div className="tab-header">
        {["Overview", "Levels", "Details", "Opportunities"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${
              activeTab.toLowerCase() === tab.toLowerCase() ? "active" : ""
            }`}
            onClick={() => handleTabClick(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Box with Shadow for Content */}
      <div className="content-card">
        {activeTab === "overview" && (
          <div className="overview-content">
            <h2 className="main-title">What is Abacus ?</h2>
            <p className="description">
              Abacus is a Latin word that has its origins in the Greek words
              <i> abax</i> or <i>abakion</i> (meaning "table" or "tablet"),
              which in turn, possibly originated from the Semitic word{" "}
              <i>abaq</i>, meaning "sand". The abacus is one of many types of
              counting devices that are used to count large numbers.
            </p>
            <h3 className="sub-title">
              Unlock Your Child's Brain Potential with Abacus Learning!
            </h3>
            <p className="description">
              Unleash the limitless potential of your child’s mind with our
              Abacus program! Specially designed for children aged 4 to 15.
            </p>
            <p className="description">
              This course isn’t just about calculations; it’s a journey of
              holistic brain development. The Abacus program stimulates both
              sides of the brain, helping children improve cognitive abilities
              through visualization, memory, and concentration. Each level
              progressively builds upon skills, from simple calculations to
              advanced memory techniques.
            </p>
            <ul className="benefits-list">
            <li>
              <img src={point} alt="Checkpoint" /> Designed to enhance focus
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Faster problem-solving skills and mental agility
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Visualization & Concentration
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Memory Retention & Recall
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Photographic Memory
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Speed & Accuracy
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Listening Skills
            </li>
          </ul>
          </div>
        )}
        {activeTab === "levels" && <div>Levels Content</div>}
        {activeTab === "details" && <div>Details Content</div>}
        {activeTab === "opportunities" && <div>Opportunities Content</div>}
      </div>
    </div>
  );
};

export default Overview;
