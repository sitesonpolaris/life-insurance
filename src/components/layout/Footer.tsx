import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield size={24} className="text-blue-400" />
              <span className="font-semibold text-xl">SecureLife</span>
            </div>
            <p className="text-gray-300 mb-4">
              Helping families secure their future with the right life insurance coverage.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div> */}
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#insurance-types" className="text-gray-300 hover:text-white transition-colors">Insurance Types</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Insurance Products</h3>
            <ul className="space-y-2">
              <li><Link to="/insurance/term-life" className="text-gray-300 hover:text-white transition-colors">Term Life Insurance</Link></li>
              <li><Link to="/insurance/whole-life" className="text-gray-300 hover:text-white transition-colors">Whole Life Insurance</Link></li>
              <li><Link to="/insurance/indexed-universal-life" className="text-gray-300 hover:text-white transition-colors">Indexed Universal Life</Link></li>
              <li><Link to="/insurance/group-life" className="text-gray-300 hover:text-white transition-colors">Group Life Insurance</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Compare Plans</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(302)333-1456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>mr.shepeard@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SecureLife Insurance. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link> | 
            <Link to="/terms-of-service" className="hover:text-white transition-colors ml-2">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;