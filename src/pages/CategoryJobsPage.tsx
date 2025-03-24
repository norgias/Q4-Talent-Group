import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Building2, MapPin, DollarSign, Clock, Calendar } from 'lucide-react';

const CategoryJobsPage = () => {
  const { categoryId } = useParams();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryInfo, setCategoryInfo] = useState(null);

  // Mock category data - in real implementation, this would come from an API or context
  const categories = {
    'inside-sales': {
      title: 'Inside Sales',
      description: 'Sales roles focused on remote selling and building relationships via phone and digital channels.'
    },
    'b2b-sales': {
      title: 'B2B Sales',
      description: 'Positions specializing in business-to-business sales across various industries.'
    },
    'outbound-sales': {
      title: 'Outbound Sales',
      description: 'Proactive sales roles focused on reaching out to potential customers and generating new business.'
    },
    'saas-sales': {
      title: 'SaaS Sales',
      description: 'Sales positions within the software-as-a-service industry, selling cloud-based solutions.'
    },
    'sales-development': {
      title: 'Sales Development',
      description: 'Entry and mid-level positions focused on prospecting and qualifying leads.'
    },
    'account-management': {
      title: 'Account Management',
      description: 'Roles focused on maintaining and growing relationships with existing customers.'
    }
  };

  // Mock job data - this would be replaced with API calls to ismartRecruit
  const mockJobs = {
    'inside-sales': [
      {
        id: 1,
        title: 'Inside Sales Representative',
        company: 'TechStart Inc.',
        location: 'Remote',
        salary: '$60,000 - $80,000',
        employmentType: 'Full-time',
        postedDate: '2023-03-01',
        description: 'We are looking for an Inside Sales Representative to join our growing team...',
        responsibilities: [
          'Generate leads and build relationships with potential customers',
          'Conduct product demonstrations via video conferencing',
          'Collaborate with the marketing team on campaign strategies',
          'Meet or exceed monthly sales targets'
        ],
        requirements: [
          '2+ years of inside sales experience',
          'Strong communication and presentation skills',
          'Experience with CRM software',
          'Bachelor\'s degree preferred'
        ]
      },
      {
        id: 2,
        title: 'Senior Inside Sales Executive',
        company: 'GrowthCo',
        location: 'Remote (US-based)',
        salary: '$80,000 - $110,000 + Commission',
        employmentType: 'Full-time',
        postedDate: '2023-03-05',
        description: 'GrowthCo is seeking an experienced Inside Sales Executive to drive new business...',
        responsibilities: [
          'Develop and maintain a pipeline of qualified prospects',
          'Execute complex sales cycles from initial contact to close',
          'Prepare and deliver compelling presentations',
          'Achieve quarterly revenue targets'
        ],
        requirements: [
          '5+ years of inside sales experience in SaaS',
          'Track record of exceeding sales targets',
          'Excellent negotiation and closing skills',
          'Experience with Salesforce'
        ]
      }
    ],
    'b2b-sales': [
      {
        id: 3,
        title: 'B2B Sales Manager',
        company: 'Enterprise Solutions',
        location: 'Chicago, IL (Hybrid)',
        salary: '$90,000 - $120,000 + Bonus',
        employmentType: 'Full-time',
        postedDate: '2023-03-10',
        description: 'Enterprise Solutions is looking for a B2B Sales Manager to lead our team...',
        responsibilities: [
          'Manage and mentor a team of B2B sales representatives',
          'Develop and implement sales strategies',
          'Build relationships with key enterprise clients',
          'Forecast sales and track team performance'
        ],
        requirements: [
          '7+ years of B2B sales experience',
          '3+ years in a management role',
          'Strong analytical and leadership skills',
          'Bachelor\'s degree in Business or related field'
        ]
      }
    ]
    // Add more mock data for other categories as needed
  };

  useEffect(() => {
    // Simulate API call to get jobs for the specified category
    setLoading(true);
    
    // In a real implementation, this would be an API call to ismartRecruit
    // Example of future implementation:
    // const fetchJobs = async () => {
    //   try {
    //     const response = await fetch(`https://api.ismartrecruit.com/jobs?category=${categoryId}`, {
    //       headers: {
    //         'Authorization': 'Bearer YOUR_API_KEY'
    //       }
    //     });
    //     const data = await response.json();
    //     setCategoryInfo(categories[categoryId]);
    //     setJobs(data.jobs || []);
    //   } catch (error) {
    //     console.error('Error fetching jobs:', error);
    //     setJobs([]);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    
    // For now, using mock data
    setTimeout(() => {
      setCategoryInfo(categories[categoryId]);
      setJobs(mockJobs[categoryId] || []);
      setLoading(false);
    }, 1000);
  }, [categoryId]);

  if (loading) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-baby-blue mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading jobs...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!categoryInfo) {
    return (
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-navy">Category not found</h1>
            <Link to="/jobs" className="mt-4 inline-block text-baby-blue hover:underline">
              Return to job categories
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-baby-blue to-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Link to="/jobs" className="inline-flex items-center text-white hover:underline mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all categories
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {categoryInfo.title} Jobs
            </h1>
            <p className="text-lg md:text-xl">
              {categoryInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-navy">
                {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'} available
              </h2>
              <div className="text-gray-500 text-sm">
                Updated daily
              </div>
            </div>
          </div>

          {jobs.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h3 className="text-xl font-semibold text-navy mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-6">
                We don't have any open positions in this category at the moment.
              </p>
              <Link
                to="/jobs"
                className="inline-block bg-navy text-white px-6 py-3 rounded-full font-medium hover:bg-baby-blue transition-colors"
              >
                Explore other categories
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-navy">{job.title}</h3>
                        <div className="flex items-center mt-2">
                          <Building2 className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-gray-700">{job.company}</span>
                        </div>
                        <div className="flex items-center mt-2">
                          <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-gray-700">{job.location}</span>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
                        <div className="flex items-center text-gray-700">
                          <DollarSign className="h-4 w-4 text-baby-blue mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center mt-2 text-gray-700">
                          <Clock className="h-4 w-4 text-baby-blue mr-1" />
                          {job.employmentType}
                        </div>
                        <div className="flex items-center mt-2 text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          Posted {new Date(job.postedDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{job.description}</p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Responsibilities:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {job.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="bg-navy text-white px-6 py-2 rounded-full font-medium hover:bg-baby-blue transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-baby-blue bg-opacity-10 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Don't see the perfect role?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Submit your resume to our talent pool, and we'll notify you when a position matching your skills and experience becomes available.
            </p>
            <Link
              to="/talent-hub"
              className="inline-block bg-navy text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-baby-blue transition-colors"
            >
              Join Our Talent Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryJobsPage;
