import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import TalentHub from './pages/TalentHub';
import AskAQuestion from './pages/AskAQuestion';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/talent-hub" element={<TalentHub />} />
          <Route path="/ask-a-question" element={<AskAQuestion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
