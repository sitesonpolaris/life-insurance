import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { InsuranceRecommendation } from '../types';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

interface InsuranceProductPageProps {
  product: InsuranceRecommendation;
}

const InsuranceProductPage: React.FC<InsuranceProductPageProps> = ({ product }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main>
        <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900">
          <div className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg)' }}>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-12 h-12 text-blue-400" />
                <span className="text-blue-300 font-medium">Insurance Products</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {product.title}
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                {product.description}
              </p>
              <Link
                to="/#booking"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                Get a Quote
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                  <ul className="space-y-4">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal For</h2>
                  <ul className="space-y-4">
                    {product.idealFor.map((ideal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{ideal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Want to learn more about {product.title}?
                </h3>
                <p className="text-gray-600 mb-6">
                  Schedule a free consultation with our insurance experts to discuss how {product.title} can benefit you and your family.
                </p>
                <Link
                  to="/#booking"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Schedule Consultation
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InsuranceProductPage;