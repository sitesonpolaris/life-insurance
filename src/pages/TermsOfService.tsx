import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-10 h-10 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Terms of Service</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you do not have permission to access our services.
              </p>

              <h2>Insurance Services</h2>
              <p>
                We provide insurance consultation and recommendation services. We are not an insurance carrier but work with established insurance providers to help you find appropriate coverage.
              </p>

              <h2>User Responsibilities</h2>
              <p>
                You agree to:
              </p>
              <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Notify us of any unauthorized access</li>
                <li>Use our services in compliance with applicable laws</li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                We strive to provide accurate information but cannot guarantee the accuracy of all content. We are not liable for any losses or damages arising from your use of our services.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content, features, and functionality are owned by SecureLife and are protected by copyright, trademark, and other intellectual property laws.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate or suspend your access to our services immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or us.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page.
              </p>

              <h2>Contact Information</h2>
              <p>
                For any questions about these Terms, please contact us at:
              </p>
              <ul>
                <li>Email: mr.shepeard@gmail.com</li>
                <li>Phone: (302)333-1456</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;