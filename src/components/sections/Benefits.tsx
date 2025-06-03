import React from 'react';
import { Shield, Search, Zap, Heart } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Affordable, Reliable Coverage',
      description: 'Plans starting at less than $1 per day with coverage from top-rated carriers.'
    },
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: 'Tailored to Your Needs',
      description: 'Personalized recommendations based on your unique situation and goals.'
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'Takes Just Minutes',
      description: 'Our simple process helps you understand and choose the right coverage quickly.'
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: 'Peace of Mind for Your Family',
      description: 'Rest easy knowing your loved ones will be financially protected.'
    }
  ];

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Why Choose Our Life Insurance Solutions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 p-3 bg-blue-50 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;