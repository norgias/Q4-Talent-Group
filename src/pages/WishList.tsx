import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    context: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-baby-blue to-navy text-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Wish List</h1>
          <p className="text-xl">
            We're constantly adding new startup partners & working on active roles across a variety of industries.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baby-blue focus:border-baby-blue"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baby-blue focus:border-baby-blue"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baby-blue focus:border-baby-blue"
              />
            </div>
             <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                LinkedIn Profile
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/your-profile"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

          
            <div className="mt-6">
              <label htmlFor="context" className="block text-sm font-medium text-gray-700 mb-1">
                What type of sales job are you looking for?
              </label>
              <textarea
                id="context"
                name="context"
                value={formData.context}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-baby-blue focus:border-baby-blue"
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-navy text-white py-3 px-6 rounded-md hover:bg-baby-blue transition-colors font-semibold"
              >
                Schedule Consultation
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
