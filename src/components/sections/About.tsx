import React from 'react';
import { Shield, Briefcase } from 'lucide-react';
import Credentials from '../ui/Credentials';

interface Carrier {
  name: string;
  logo: string;
}

const About: React.FC = () => {
  const carriers: Carrier[] = [
    {
      name: 'National Life Group',
      logo: 'https://qcxiqwlrqopfzlbcrcgq.supabase.co/storage/v1/object/public/media//National-Life-Group.gif'
    },
    {
      name: 'Columbus Life Insurance Company',
      logo: 'https://qcxiqwlrqopfzlbcrcgq.supabase.co/storage/v1/object/public/media//clife-logo-2x.png'
    },
    {
      name: 'National Western Life Insurance Company',
      logo: 'https://qcxiqwlrqopfzlbcrcgq.supabase.co/storage/v1/object/public/media//National_Western_Life.png'
    }
  ];

  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="md:flex gap-12 items-start mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Trusted Access to Top Carriers
              </h2>
              <p className="text-gray-700 mb-6">
                Rather than being tied to just one provider, Jesse works with a variety of trusted
                insurance carriers, ensuring each client receives a personalized recommendation that
                fits their unique needs.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {carriers.map((carrier, index) => (
                  <div
                    key={carrier.name}
                    className="bg-white p-6 rounded-lg border border-gray-200 flex items-center justify-center"
                  >
                    <img 
                      src={carrier.logo} 
                      alt={carrier.name}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <Credentials />
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                More Than a Policy — A Partnership
              </h2>
              <p className="text-gray-700">
                Jesse believes in educating first, selling second. Whether you're just getting started
                or reviewing existing coverage, Jesse provides clear, compassionate guidance every step
                of the way.
              </p>
            </div>

            <div className="bg-blue-600 text-white rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <Briefcase className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Want to Build a Career with Us?
                  </h2>
                  <p className="text-blue-100">
                    If you're passionate about helping others and want to build a rewarding, flexible
                    career in life insurance, Jesse is growing a team of driven agents.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://agents.firstfinancialsecurity.com/FFSBB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Join My Team
                </a>
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;