import React from 'react';
import { Shield, Award, Users, Phone } from 'lucide-react';

const AboutHero: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg)' }}>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative">
                <img
                  src="https://qcxiqwlrqopfzlbcrcgq.supabase.co/storage/v1/object/public/media//jts.jpg"
                  alt="Jesse Shepeard"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-blue-600 p-4 rounded-xl shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Jesse Shepeard
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Licensed Life Insurance Agent dedicated to helping families secure their financial future
                through personalized insurance solutions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 rounded-lg p-4">
                  <Award className="w-8 h-8 text-blue-300 mb-3" />
                  <h3 className="text-lg font-semibold text-white">Licensed Professional</h3>
                  <p className="text-blue-200 text-sm">NC State Licensed Life Insurance Agent</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <Users className="w-8 h-8 text-blue-300 mb-3" />
                  <h3 className="text-lg font-semibold text-white">Families Protected</h3>
                  <p className="text-blue-200 text-sm">Helping hundreds of families secure their future</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <Phone className="w-8 h-8 text-blue-300 mb-3" />
                  <h3 className="text-lg font-semibold text-white">Personal Service</h3>
                  <p className="text-blue-200 text-sm">Direct support when you need it most</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/#booking"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Schedule a Consultation
                </a>
                <a
                  href="tel:+3023331456"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
                >
                  Call Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;