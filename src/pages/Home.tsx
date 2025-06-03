import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import Benefits from '../components/sections/Benefits';
import Quiz from '../components/sections/Quiz';
import Recommendations from '../components/sections/Recommendations';
import Education from '../components/sections/Education';
import Testimonials from '../components/sections/Testimonials';
import Booking from '../components/sections/Booking';
import { QuizProvider } from '../context/QuizContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
 const location = useLocation();
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  const handleStartQuiz = () => {
    setShowQuiz(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizComplete = () => {
    setQuizCompleted(true);
    setShowQuiz(false);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header isQuizActive={showQuiz} onCloseQuiz={() => setShowQuiz(false)} />
      <main>
        <QuizProvider>
      {!showQuiz && !quizCompleted && (
        <>
          <Hero onStartQuiz={handleStartQuiz} />
          <Benefits />
          <Education />
          <Testimonials />
          <Booking />
        </>
      )}
      
      {showQuiz && (
      <>
        <Quiz onComplete={handleQuizComplete} />
      </>
       )}
      
      {quizCompleted && (
        <>
          <Recommendations />
          <Education />
        </>
      )}
    </QuizProvider>
  );
      </main>
      <Footer />
    </div>
  );
};

export default Home;