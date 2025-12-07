import React, { Suspense, useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Scrolltotop from './components/Scrolltotop';
import CustomCursor from "./components/CustomCursor";
import Splash from './components/SplashCursor';
import CountdownPage from "./pages/CountdownPage";

// Lazy load all page components
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const CoursePage = React.lazy(() => import("./pages/CoursePage"));
const FranchisePage = React.lazy(() => import("./pages/FranchisePage"));
const CareersPage = React.lazy(() => import("./pages/CareersPage"));
// Temporarily removed Insights page
// const Insight = React.lazy(() => import("./pages/InsightPage"));
const Contact = React.lazy(() => import("./pages/ContactPage"));
const AbacusPage = React.lazy(() => import("./pages/AbacusPage"));
const VedicPage = React.lazy(() => import("./pages/VedicPage"));
const RubicPage = React.lazy(() => import("./pages/RubicPage"));
const HandwritingPage = React.lazy(() => import("./pages/HandwritingPage"));
const ReadingPage = React.lazy(() => import("./pages/ReadingPage"));
const SpellingBeePage = React.lazy(() => import("./pages/SpellingBeePage"));

// Loading fallback component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    fontSize: '18px'
  }}>
    Loading...
  </div>
);

function App() {
  const [isLive, setIsLive] = useState(false);

  // Target Date: December 7, 2025 at 04:00 PM IST
  // ISO 8601 format with timezone offset for IST (+05:30)
  // 07/12/2025 = December 7th, 2025
  const targetDate = new Date("2025-12-07T16:00:00+05:30");

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      if (now >= targetDate) {
        setIsLive(true);
      }
    };

    checkTime();
    // Check every second just in case
    const timer = setInterval(checkTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isLive) {
    return <CountdownPage targetDate={targetDate} onComplete={() => setIsLive(true)} />;
  }

  return (
    <Router>
      <Header />
      <CustomCursor />
      <Scrolltotop />
      <Splash />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/abacus" element={<AbacusPage />} />
          <Route path="/vedic" element={<VedicPage />} />
          <Route path="/rubic" element={<RubicPage />} />
          <Route path="/handwriting" element={<HandwritingPage />} />
          <Route path="/reading" element={<ReadingPage />} />
          <Route path="/spellingbee" element={<SpellingBeePage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/careers" element={<CareersPage />} />
          {/* Temporarily removed Insights page
          <Route path="/insight" element={<Insight />} />
          */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
