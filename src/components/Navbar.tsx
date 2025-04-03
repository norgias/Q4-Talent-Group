import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showJobSeekersDropdown, setShowJobSeekersDropdown] = useState(false);
  const [showMobileJobSeekersDropdown, setShowMobileJobSeekersDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Check if we're already on the home page
    if (location.pathname === '/') {
      // If on home page, just scroll to the section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home page with the section hash
      navigate(`/#${id}`);
    }
  };

  // Handle scrolling to section when URL has a hash
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.substring(1); // Remove the # character
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure the page has loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
            <div 
              className="relative group"
            >
              <button 
                className="flex items-center text-gray-700 hover:text-navy"
                onMouseEnter={() => setShowJobSeekersDropdown(true)}
              >
                Job Seekers
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {showJobSeekersDropdown && (
                <div 
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                  onMouseEnter={() => setShowJobSeekersDropdown(true)}
                  onMouseLeave={() => setShowJobSeekersDropdown(false)}
                >
                  <Link to="/jobs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy">
                    Job Board
                  </Link>
                  <Link to="/ask-a-question" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy">
                    Ask A Question
                  </Link>
                  <Link to="/wish-list" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-navy">
                    Wish List
                  </Link>
                </div>
              )}
            </div>
            <Link to="/talent-hub" className="text-gray-700 hover:text-navy">Talent Hub</Link>
            <Link
              to="/contact"
              className="bg-navy text-white px-4 py-2 rounded-md hover:bg-baby-blue transition-colors"
            >
              Talent Seeker
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
              <div>
                <button
                  onClick={() => setShowMobileJobSeekersDropdown(!showMobileJobSeekersDropdown)}
                  className="flex items-center justify-between px-3 py-2 text-gray-700 hover:text-navy w-full text-left"
                >
                  Job Seekers
                  <ChevronDown className="h-4 w-4" />
                </button>
                {showMobileJobSeekersDropdown && (
                  <div className="pl-6 space-y-1">
                    <Link to="/jobs" className="block px-3 py-2 text-gray-700 hover:text-navy">
                      Job Board
                    </Link>
                    <Link to="/ask-a-question" className="block px-3 py-2 text-gray-700 hover:text-navy">
                      Ask A Question
                    </Link>
                    <Link to="/wish-list" className="block px-3 py-2 text-gray-700 hover:text-navy">
                      Wish List
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/talent-hub" className="block px-3 py-2 text-gray-700 hover:text-navy">
                Talent Hub
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-navy text-white rounded-md hover:bg-baby-blue transition-colors"
              >
                Talent Seeker
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
