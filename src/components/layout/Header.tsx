import React, { useState } from 'react';
import { Shield, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface HeaderProps {
  isQuizActive: boolean;
  onCloseQuiz: () => void;
}

const Header: React.FC<HeaderProps> = ({ isQuizActive, onCloseQuiz }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (isQuizActive) {
      onCloseQuiz();
      window.location.href = `/#${sectionId}`;
      return;
    }
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (isQuizActive) onCloseQuiz();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isQuizActive) {
      onCloseQuiz();
    }
    handleNavClick(e, sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
          <Shield size={28} className="text-blue-600" />
          <span className="font-semibold text-xl text-gray-800">SecureLife</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
          <a 
            href="#insurance-types" 
            onClick={(e) => handleNavClick(e, 'insurance-types')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Insurance Types
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleNavClick(e, 'testimonials')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </a>
          <a 
            href="#booking" 
            onClick={(e) => handleNavClick(e, 'booking')}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Book Now
          </a>
        </nav>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity md:hidden ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform transition-transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2">
                <Shield size={24} className="text-blue-600" />
                <span className="font-semibold text-lg">SecureLife</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="space-y-4">
              <Link 
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              >
                About
              </Link>
              <a 
                href="#insurance-types"
                onClick={(e) => handleMobileNavClick(e, 'insurance-types')}
                className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              >
                Insurance Types
              </a>
              <a 
                href="#testimonials"
                onClick={(e) => handleMobileNavClick(e, 'testimonials')}
                className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              >
                Testimonials
              </a>
              <a 
                href="#booking"
                onClick={(e) => handleMobileNavClick(e, 'booking')}
                className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
              >
                Book Now
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
