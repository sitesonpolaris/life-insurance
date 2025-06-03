import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App.tsx';
import About from './pages/About.tsx';
import Home from './pages/Home.tsx';
import TermLifePage from './pages/TermLifePage';
import WholeLifePage from './pages/WholeLifePage';
import IndexedUniversalLifePage from './pages/IndexedUniversalLifePage';
import GroupLifePage from './pages/GroupLifePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/insurance/term-life" element={<TermLifePage />} />
        <Route path="/insurance/whole-life" element={<WholeLifePage />} />
        <Route path="/insurance/indexed-universal-life" element={<IndexedUniversalLifePage />} />
        <Route path="/insurance/group-life" element={<GroupLifePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  </StrictMode>
);
