import React from 'react';
import { Building2, Users, BookOpen, Rocket, ArrowRight } from 'lucide-react';

function TalentHub() {
  return (
    <div className="min-h-screen">
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
    </div>
  );
}

export default TalentHub;
