import React, { useEffect, useState } from 'react';
import QuizQuestion from '../ui/QuizQuestion';
import ProgressBar from '../ui/ProgressBar';
import { useQuiz } from '../../context/QuizContext';
import { ArrowLeft, ArrowRight, Calendar, Clock, Phone, User, Mail, MessageSquare } from 'lucide-react';
import { BookingFormData } from '../../types';
import { supabase } from '../../lib/supabaseClient';

interface QuizProps {
  onComplete: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    weekday: '',
    time: '',
    message: ''
  });

  const { 
    currentQuestionIndex, 
    progress, 
    currentQuestion,
    answers,
    quizState,
    setBookingData,
    goToNextQuestion, 
    goToPreviousQuestion,
    completeQuiz 
  } = useQuiz();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const submissionData = {
        ...formData,
        quiz_answers: answers
      };
      
      const { error } = await supabase
        .from('quiz_submissions')
        .insert([submissionData]);
        
      if (error) {
        console.error('Error submitting quiz:', error);
        // You might want to show an error message to the user here
        return;
      }
      
      setBookingData(submissionData);
      completeQuiz();
      onComplete();
    } catch (error) {
      console.error('Error submitting quiz:', error);
      // You might want to show an error message to the user here
    }
  };

  useEffect(() => {
    if (quizState === 'completed') {
      onComplete();
    }
  }, [quizState, onComplete]);

  if (showBookingForm) {
    return (
      <section className="py-12 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-3xl relative">
          <button
            onClick={() => setShowBookingForm(false)}
            className="absolute -top-2 right-0 text-gray-500 hover:text-gray-700"
          >
            Back to Quiz
          </button>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Schedule Your Free Consultation
            </h2>
            <p className="text-gray-600 mb-8">
              Great! Based on your answers, we have some recommendations for you. 
              Let's schedule a time to discuss them in detail.
            </p>
            
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Smith"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="weekday" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Day (Thu-Sat)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                            id="weekday"
                            name="weekday"
                            value={formData.weekday}
                            onChange={handleChange}
                            required
                            className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          >
                            <option value="">Select a day</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                          </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time (EST)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a time</option>
                      <option value="3:00 PM">3:00 PM EST</option>
                      <option value="4:00 PM">4:00 PM EST</option>
                      <option value="5:00 PM">5:00 PM EST</option>
                      <option value="6:00 PM">6:00 PM EST</option>
                      <option value="7:00 PM">7:00 PM EST</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Any specific questions? (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 pt-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="I'm interested in learning more about..."
                  ></textarea>
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors"
                >
                  See My Recommendations
                </button>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }

  if (!currentQuestion) {
    return null;
  }

  const currentAnswer = answers.find(
    (answer) => answer.questionId === currentQuestion.id
  );

  const handleBack = () => {
    goToPreviousQuestion();
  };

  const handleSkip = () => {
    goToNextQuestion();
  };

  const handleComplete = () => {
    setShowBookingForm(true);
  };

  return (
    <section className="py-12 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <ProgressBar progress={progress} />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>Question {currentQuestionIndex + 1} of {7}</span>
            <span>{progress}% Complete</span>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <QuizQuestion 
            question={currentQuestion}
            currentAnswer={currentAnswer}
          />
        </div>
        
        <div className="flex justify-between mt-8">
          <button
            onClick={handleBack}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-gray-600 hover:text-gray-900 transition-colors ${
              currentQuestionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ArrowLeft size={18} />
            Back
          </button>
          
          <div className="flex gap-4">
            {currentQuestion.type === 'multiple' ? (
              <button
                onClick={goToNextQuestion}
                disabled={!currentAnswer || (currentAnswer.value as (string | number)[]).length === 0}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  !currentAnswer || (currentAnswer.value as (string | number)[]).length === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSkip}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Skip
              </button>
            )}
            
            {currentQuestionIndex === 6 ? (
              <button
                onClick={handleComplete}
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Complete Quiz
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
