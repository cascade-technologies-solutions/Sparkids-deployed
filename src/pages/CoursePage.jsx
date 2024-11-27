import React from 'react';
import Header from '../components/Header';
import Courseabacus from '../components/abacuscourse';
import RubikCourse from '../components/rubikcourse';
import ReadingCourse from '../components/readingcourse';
import QuestionSection from '../components/Question';
import Footer from '../components/Footer';
import Coursehandwriting from '../components/coursehandwriting';
import CourseHero from '../components/courseHero';
import CourseVedic from '../components/courseVedic';

const CoursePage = () => {
  return (
    <div>
      <Header />
      <CourseHero />
      <Courseabacus />
      <CourseVedic />
      <RubikCourse />
      <Coursehandwriting />
      <ReadingCourse />
      <QuestionSection />
      <Footer />
    </div>
  );
};

export default CoursePage;
