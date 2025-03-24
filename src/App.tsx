import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import TalentHub from './pages/TalentHub';
import AskAQuestion from './pages/AskAQuestion';
import WishList from './pages/WishList';
import JobBoardPage from './pages/JobBoardPage';  // New import
import CategoryJobsPage from './pages/CategoryJobsPage';  // New import
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
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/jobs" element={<JobBoardPage />} />  {/* New route */}
          <Route path="/jobs/:categoryId" element={<CategoryJobsPage />} />  {/* New route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
