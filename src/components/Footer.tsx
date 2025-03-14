import React from 'react';
import { Building2, Linkedin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <button onClick={scrollToTop} className="flex items-center hover:text-baby-blue transition-colors">
              <Building2 className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">Q4 Talent Group</span>
            </button>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p>123 Business Avenue</p>
            <p>San Francisco, CA 94105</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: contact@q4talent.com</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-baby-blue transition-colors"
            >
              <Linkedin className="h-6 w-6 mr-2" />
              Follow us on LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="mt-4 flex items-center hover:text-baby-blue transition-colors"
            >
              <ArrowUp className="h-6 w-6 mr-2" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;