import React from 'react';
import Header from '../components/Header';
import Courseabacus from '../components/abacuscourse';
import RubikCourse from '../components/rubikcourse';
import ReadingCourse from '../components/readingcourse';
import QuestionSection from '../components/Question';
import Footer from '../components/Footer';

const CoursePage = () => {
  return (
    <div>
      <Header />
      <Courseabacus />
      <RubikCourse />
      <ReadingCourse />
      <QuestionSection />
      <Footer />
    </div>
  );
};

export default CoursePage;
