import React from 'react';
import { QuizQuestion as QuizQuestionType, QuizAnswer, QuizOption } from '../../types';
import { useQuiz } from '../../context/QuizContext';
import { HelpCircle } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentAnswer?: QuizAnswer;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, currentAnswer }) => {
  const { setAnswer, goToNextQuestion } = useQuiz();
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleOptionSelect = (option: QuizOption) => {
    const answer = {
      questionId: question.id,
      value: option.value,
    };
    setAnswer(answer);
    
    // Only auto-advance for single choice questions
    if (question.type === 'single') {
      setTimeout(() => {
        goToNextQuestion();
      }, 500);
    }
  };

  const handleMultipleSelect = (option: QuizOption) => {
    let currentValues = currentAnswer?.value as (string | number)[] || [];
    
    // Toggle the selection
    if (currentValues.includes(option.value)) {
      currentValues = currentValues.filter(v => v !== option.value);
    } else {
      currentValues = [...currentValues, option.value];
    }
    
    setAnswer({
      questionId: question.id,
      value: currentValues,
    });
  };

  const isSelected = (option: QuizOption) => {
    if (!currentAnswer) return false;
    
    if (Array.isArray(currentAnswer.value)) {
      return currentAnswer.value.includes(option.value);
    }
    
    return currentAnswer.value === option.value;
  };

  return (
    <div>
      <div className="flex items-start gap-2 mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">{question.text}</h3>
        {question.tooltip && (
          <div className="relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <HelpCircle size={20} />
            </button>
            {showTooltip && (
              <div className="absolute z-10 w-64 p-4 bg-white rounded-lg shadow-lg border border-gray-200 text-sm text-gray-600 -right-2 top-8">
                <div className="absolute -top-2 right-2 w-4 h-4 bg-white border-t border-l border-gray-200 transform rotate-45"></div>
                {question.tooltip}
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        {question.type === 'single' && (
          <>
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  isSelected(option)
                    ? 'border-blue-500 bg-blue-50 shadow-sm'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className={`font-medium ${isSelected(option) ? 'text-blue-700' : 'text-gray-800'}`}>
                  {option.text}
                </span>
              </button>
            ))}
          </>
        )}
        
        {question.type === 'multiple' && (
          <>
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleMultipleSelect(option)}
                className={`w-full text-left p-4 rounded-lg border transition-all ${
                  isSelected(option)
                    ? 'border-blue-500 bg-blue-50 shadow-sm'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                    isSelected(option) ? 'bg-blue-500 border-blue-500' : 'border-gray-300'
                  }`}>
                    {isSelected(option) && (
                      <svg xmlns="http://www.w3.org/2000/svg\" className="h-3 w-3 text-white\" fill="none\" viewBox="0 0 24 24\" stroke="currentColor">
                        <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`font-medium ${isSelected(option) ? 'text-blue-700' : 'text-gray-800'}`}>
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;