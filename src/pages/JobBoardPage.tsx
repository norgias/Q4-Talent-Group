import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, PhoneCall, Globe, Target, Building2 } from 'lucide-react';

const JobBoardPage = () => {
  const categories = [
    {
      id: 'inside-sales',
      title: 'Inside Sales',
      description: 'Sales roles focused on remote selling and building relationships via phone and digital channels.',
      icon: PhoneCall,
      jobCount: 24
    },
    {
      id: 'b2b-sales',
      title: 'B2B Sales',
      description: 'Positions specializing in business-to-business sales across various industries.',
      icon: Building2,
      jobCount: 18
    },
    {
      id: 'outbound-sales',
      title: 'Outbound Sales',
      description: 'Proactive sales roles focused on reaching out to potential customers and generating new business.',
      icon: Target,
      jobCount: 15
    },
    {
      id: 'saas-sales',
      title: 'SaaS Sales',
      description: 'Sales positions within the software-as-a-service industry, selling cloud-based solutions.',
      icon: Globe,
      jobCount: 21
    },
    {
      id: 'sales-development',
      title: 'Sales Development',
      description: 'Entry and mid-level positions focused on prospecting and qualifying leads.',
      icon: Users,
      jobCount: 12
    },
    {
      id: 'account-management',
      title: 'Account Management',
      description: 'Roles focused on maintaining and growing relationships with existing customers.',
      icon: Briefcase,
      jobCount: 9
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-baby-blue to-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Sales Role
            </h1>
            <p className="text-xl mb-6">
              Browse our curated selection of top sales positions at innovative startups
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            Explore Sales Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                to={`/jobs/${category.id}`} 
                className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="h-10 w-10 text-baby-blue mr-4" />
                  <h3 className="text-xl font-semibold text-navy">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">{category.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-gray-500">{category.jobCount} openings</span>
                  <span className="text-baby-blue font-medium">View Jobs →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-navy mb-6">
              Need help finding the right role?
            </h2>
            <p className="text-gray-600 mb-6">
              Let us know your preferences and we'll match you with the perfect sales opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-block bg-navy text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-baby-blue transition-colors text-center"
              >
                Contact a Recruiter
              </Link>
              <Link
                to="/wish-list"
                className="inline-block bg-white text-navy border border-navy px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Submit Your Job Wishlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobBoardPage;
