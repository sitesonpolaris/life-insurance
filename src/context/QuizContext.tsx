import React, { createContext, useContext, useState, ReactNode } from 'react';
import { quizQuestions } from '../data/quizQuestions';
import { QuizAnswer, QuizQuestion, QuizState, BookingFormData } from '../types';

interface QuizContextType {
  currentQuestionIndex: number;
  answers: QuizAnswer[];
  bookingData: (BookingFormData & { quiz_answers?: QuizAnswer[] }) | null;
  quizState: QuizState;
  progress: number;
  currentQuestion: QuizQuestion | null;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  setAnswer: (answer: QuizAnswer) => void;
  setBookingData: (data: BookingFormData) => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [bookingData, setBookingData] = useState<BookingFormData & { quiz_answers?: QuizAnswer[] } | null>(null);
  const [quizState, setQuizState] = useState<QuizState>('not-started');

  const progress = Math.round(
    ((currentQuestionIndex + 1) / quizQuestions.length) * 100
  );

  const currentQuestion = 
    currentQuestionIndex < quizQuestions.length 
      ? quizQuestions[currentQuestionIndex]
      : null;

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const setAnswer = (answer: QuizAnswer) => {
    const newAnswers = [...answers];
    const existingAnswerIndex = newAnswers.findIndex(
      (a) => a.questionId === answer.questionId
    );

    if (existingAnswerIndex !== -1) {
      newAnswers[existingAnswerIndex] = answer;
    } else {
      newAnswers.push(answer);
    }

    setAnswers(newAnswers);
  };

  const completeQuiz = () => {
    if (bookingData) {
      setQuizState('completed');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setQuizState('not-started');
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        answers,
        bookingData,
        quizState,
        progress,
        currentQuestion,
        goToNextQuestion,
        goToPreviousQuestion,
        setAnswer,
        setBookingData,
        completeQuiz,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};