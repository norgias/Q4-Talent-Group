import React from 'react';
import { Building2, Users, BookOpen, Rocket, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-baby-blue" />
              <span className="ml-2 text-xl font-bold text-navy">Q4 Talent Group</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-baby-blue">Home</a>
              <a href="#" className="text-gray-700 hover:text-baby-blue">Services</a>
              <a href="#" className="text-gray-700 hover:text-baby-blue">About</a>
              <a href="#" className="text-gray-700 hover:text-baby-blue">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-r from-white via-baby-blue to-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Q4 Talent Group</h1>
            <h2 className="text-3xl font-semibold mb-4">Unlock Smarter Sales and Better GTM hiring!</h2>
            <h3 className="text-xl max-w-3xl mx-auto">
              Access expert resources and premium recruiting services to hire and retain top-performing sales and GTM professionals.
            </h3>
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-navy">Membership Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Membership */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 text-baby-blue" />
                <h3 className="text-2xl font-bold ml-3 text-navy">Free Open Library</h3>
              </div>
              <p className="text-gray-600 mb-6">
                A free resource for companies looking for hiring insights, best practices, and foundational tools to build a strong sales & GTM hiring strategy.
              </p>
              <button className="w-full bg-baby-blue text-white py-3 px-6 rounded-md hover:bg-navy transition-colors font-semibold flex items-center justify-center">
                Free Access! <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            {/* Premium Membership */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-baby-blue" />
                <h3 className="text-2xl font-bold ml-3 text-navy">The Q4 Advantage</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Premium recruiting support, personalized hiring plans and full service talent acquisition to help you build winning teams.
              </p>
              <button className="w-full bg-baby-blue text-white py-3 px-6 rounded-md hover:bg-navy transition-colors font-semibold flex items-center justify-center">
                Learn More! <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy">Scaling Startups That Trust Us With Their Growth</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Example company logos - replace with actual client logos */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Rocket className="h-12 w-12 text-baby-blue" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-baby-blue" />
                <span className="ml-2 text-xl font-bold">Q4 Talent Group</span>
              </div>
              <p className="mt-4 text-gray-300">
                Empowering companies to build exceptional sales teams.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Case Studies</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Guides</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Q4 Talent Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;