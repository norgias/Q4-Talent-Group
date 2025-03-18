import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CheckCircle, Building2, Trophy, Users, Target, Linkedin } from 'lucide-react';

const HomePage = () => {
  const achievements = [
    {
      number: "500+",
      text: "Successful Placements",
      icon: Trophy
    },
    {
      number: "98%",
      text: "Client Satisfaction Rate",
      icon: Users
    },
    {
      number: "45",
      text: "Partner Companies",
      icon: Building2
    }
  ];

  const testimonials = [
    {
      text: "Q4 Talent Group helped us build our entire sales team from scratch. Their understanding of our needs was exceptional.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc."
    },
    {
      text: "The quality of candidates and the speed of placement exceeded our expectations. Highly recommended!",
      author: "Michael Chen",
      position: "VP Sales, GrowthCo"
    },
    {
      text: "Their expertise in GTM talent acquisition is unmatched. They've become our go-to partner for all sales hiring.",
      author: "Emily Rodriguez",
      position: "Founder, SaaS Solutions"
    }
  ];

  const team = [
    {
      name: "John Smith",
      role: "Senior Tech Recruiter",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Emma Davis",
      role: "Sales Recruitment Lead",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      linkedin: "https://linkedin.com"
    },
    {
      name: "David Wilson",
      role: "GTM Strategy Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Lisa Chen",
      role: "Executive Recruiter",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-baby-blue to-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building elite sales & GTM teams for new start ups!
            </h1>
            <Link
              to="/contact"
              className="inline-block bg-white text-navy px-8 py-4 rounded-full text-lg font-semibold hover:bg-baby-blue hover:text-white transition-colors"
            >
              Schedule a Free Hiring Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="h-12 w-12 mx-auto text-baby-blue mb-4" />
                <h2 className="text-4xl font-bold text-navy mb-2">{achievement.number}</h2>
                <p className="text-gray-600">{achievement.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            Scaling start ups that trust us with their development
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <Building2 className="h-16 w-16 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-baby-blue mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                <p className="text-gray-600">Deep understanding of tech sales and GTM strategies</p>
              </div>
            </div>
            <div className="flex items-start">
              <Target className="h-6 w-6 text-baby-blue mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                <p className="text-gray-600">Consistent success in placing top-tier talent</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block bg-navy text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-baby-blue transition-colors"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            What our clients are saying
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="testimonial-slider"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <p className="text-lg text-gray-600 mb-6">{testimonial.text}</p>
                  <div>
                    <p className="font-semibold text-navy">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-4">
            Confidently build your team with our expert guidance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-50 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Linkedin className="text-white opacity-0 group-hover:opacity-100 h-8 w-8" />
                  </a>
                </div>
                <h3 className="text-xl font-semibold text-navy">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
