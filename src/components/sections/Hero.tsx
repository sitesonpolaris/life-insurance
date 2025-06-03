import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface HeroProps {
  onStartQuiz: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuiz }) => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-cover bg-no-repeat opacity-80 bg-center md:bg-top" 
        style={{ backgroundImage: 'url(https://qcxiqwlrqopfzlbcrcgq.supabase.co/storage/v1/object/public/media//Family%20photo.jpg?auto=compress&cs=tinysrgb&w=1600)' }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-left">
          <ShieldCheck size={56} className="mb-6 text-blue-600" />
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Protect What Matters Most – Find the Right Life Insurance Plan Today
          </h1>
          
          <p className="text-xl text-white mb-10 max-w-2xl">
            Answer a few quick questions to get a personalized recommendation in under 3 minutes.
          </p>
          
          <button 
            onClick={onStartQuiz}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Take the Quiz
          </button>
          
          <div className="mt-10 text-sm text-white">
            No commitment. Free personalized recommendation.
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;