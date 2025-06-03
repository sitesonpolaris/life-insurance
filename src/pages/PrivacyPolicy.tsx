import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PrivacyPolicy: React.FC = () => {
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
              <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including when you:
              </p>
              <ul>
                <li>Complete forms or request quotes</li>
                <li>Create an account</li>
                <li>Contact us for support</li>
                <li>Subscribe to our newsletters</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide insurance quotes and services</li>
                <li>Process your applications</li>
                <li>Communicate with you about your policy</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our services</li>
              </ul>

              <h2>Information Sharing</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li>Insurance carriers to provide quotes</li>
                <li>Service providers who assist our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2>Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2>Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;