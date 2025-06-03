import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext';
import { insuranceTypes } from '../../data/insuranceTypes';
import { CheckCircle, AlertCircle, ChevronDown, ChevronUp, Calendar } from 'lucide-react';

const Recommendations: React.FC = () => {
  const { answers, bookingData } = useQuiz();
  const [expandedType, setExpandedType] = useState<string | null>('term');

  const getProductPath = (type: string): string => {
    switch (type) {
      case 'term':
        return '/insurance/term-life';
      case 'whole':
        return '/insurance/whole-life';
      case 'iul':
        return '/insurance/indexed-universal-life';
      case 'group':
        return '/insurance/group-life';
      default:
        return '/';
    }
  };

  // Simple recommendation engine
  const getRecommendedTypes = () => {
    // In a real application, this would be more sophisticated
    // For this demo, we'll just use some basic logic
    
    const ageAnswer = answers.find(a => a.questionId === 'q1')?.value as string;
    const goalAnswer = answers.find(a => a.questionId === 'q3')?.value as string;
    const durationAnswer = answers.find(a => a.questionId === 'q6')?.value as string;
    const investmentAnswer = answers.find(a => a.questionId === 'q7')?.value as string;
    
    let recommendedTypes = [];
    
    // Primary recommendation
    if (
      (ageAnswer === 'under-30' || ageAnswer === '30-39') &&
      (goalAnswer === 'income-replacement' || goalAnswer === 'debt-payment') &&
      (durationAnswer === '10-20-years' || durationAnswer === '20-30-years') &&
      (investmentAnswer === 'protection-only')
    ) {
      recommendedTypes.push('term');
    } else if (
      (goalAnswer === 'inheritance' || goalAnswer === 'funeral-expenses') &&
      (durationAnswer === 'lifetime') &&
      (investmentAnswer === 'somewhat' || investmentAnswer === 'need-info')
    ) {
      recommendedTypes.push('whole');
    } else if (
      (goalAnswer === 'cash-value') &&
      (investmentAnswer === 'very-interested')
    ) {
      recommendedTypes.push('iul');
    } else {
      // Default recommendation if no clear pattern
      recommendedTypes.push('term');
    }
    
    // Secondary recommendations
    if (!recommendedTypes.includes('term')) recommendedTypes.push('term');
    if (!recommendedTypes.includes('whole')) recommendedTypes.push('whole');
    if (!recommendedTypes.includes('iul')) recommendedTypes.push('iul');
    
    return recommendedTypes;
  };
  
  const recommendedTypes = getRecommendedTypes();
  
  const toggleExpand = (type: string) => {
    setExpandedType(expandedType === type ? null : type);
  };

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {bookingData && (
          <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Your Consultation Request has been submitted!</h3>
                <p className="text-gray-600">
                  {bookingData.weekday} at {bookingData.time} EST
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  We've sent a confirmation email to {bookingData.email}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Your Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Based on your answers, here's what we recommend
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our analysis suggests these insurance options would be most suitable for your situation.
            Review each option and schedule a consultation to discuss the best fit for your needs.
          </p>
        </div>
        
        <div className="space-y-6">
          {recommendedTypes.map((type, index) => {
            const insurance = insuranceTypes.find(i => i.type === type);
            if (!insurance) return null;
            
            const isPrimary = index === 0;
            
            return (
              <div 
                key={type}
                className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                  isPrimary ? 'border-2 border-blue-500' : ''
                }`}
              >
                {isPrimary && (
                  <div className="bg-blue-500 text-white py-2 px-4 text-center text-sm font-semibold">
                    Best Match For Your Needs
                  </div>
                )}
                
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => toggleExpand(type)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {insurance.title}
                    </h3>
                    <div>
                      {expandedType === type ? (
                        <ChevronUp className="text-gray-600" />
                      ) : (
                        <ChevronDown className="text-gray-600" />
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mt-2">
                    {insurance.description}
                  </p>
                </div>
                
                {expandedType === type && (
                  <div className="px-6 pb-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {insurance.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="text-green-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3">Ideal For</h4>
                        <ul className="space-y-2">
                          {insurance.idealFor.map((ideal, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="text-blue-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{ideal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-center">
                      <Link 
                        to={getProductPath(insurance.type)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                      >
                        Learn More About This Option
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6 flex items-start gap-4">
          <AlertCircle className="text-yellow-500 w-6 h-6 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">
              Remember: Everyone's situation is unique
            </h4>
            <p className="text-gray-600">
              These recommendations are based on your quiz answers and serve as a starting point.
              For the most accurate advice, schedule a consultation with our insurance experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;