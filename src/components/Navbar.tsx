import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-baby-blue" />
              <span className="ml-2 text-xl font-bold text-navy">Q4 Talent Group</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-navy">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-navy">
              Our Team
            </button>
            <Link to="/" className="text-gray-700 hover:text-navy">Job Seekers</Link>
            <Link to="/talent-hub" className="text-gray-700 hover:text-navy">Talent Hub</Link>
            <Link
              to="/contact"
              className="bg-baby-blue text-white px-4 py-2 rounded-md hover:bg-navy transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-gray-700 hover:text-navy w-full text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="block px-3 py-2 text-gray-700 hover:text-navy w-full text-left"
              >
                Our Team
              </button>
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-navy">
                Job Seekers
              </Link>
              <Link to="/talent-hub" className="block px-3 py-2 text-gray-700 hover:text-navy">
                Talent Hub
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-baby-blue text-white rounded-md hover:bg-navy transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
