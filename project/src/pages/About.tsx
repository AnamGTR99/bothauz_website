import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import ScrollAnimation from '../components/ScrollAnimation';
import HolographicCard from '../components/HolographicCard';
import ParticleField from '../components/ParticleField';

const About = () => {
  const founders = [
    {
      name: "Bruno Jaamaa",
      role: "Co-Founder & Technical Director",
      image: "/bruno.jpg",
      bio: "Bruno brings deep expertise in artificial intelligence and machine learning systems. As a University of Melbourne graduate with a Bachelor of Science in Computing and Software Systems, he specializes in architecting scalable AI solutions that drive real business outcomes. His technical leadership ensures every system we build is robust, secure, and future-ready.",
      expertise: ["AI Architecture", "Machine Learning", "System Design", "Technical Strategy"]
    },
    {
      name: "Anam Milfer",
      role: "Co-Founder & Operations Director",
      image: "/anam.jpg",
      bio: "Anam combines technical expertise with exceptional client relationship management. Also a University of Melbourne graduate with a Bachelor of Science in Computing and Software Systems, she ensures seamless project delivery and client success. Her focus on operational excellence guarantees that every implementation exceeds expectations.",
      expertise: ["Project Management", "Client Relations", "Process Optimization", "Quality Assurance"]
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Patel",
      title: "Senior AI Developer",
      role: "Machine Learning Specialist",
      bio: "Previously led AI initiatives at fintech startups across Mumbai and Singapore."
    },
    {
      name: "Sarah Chen",
      title: "Full-Stack Developer",
      role: "Integration Specialist",
      bio: "Specialized in seamless API integrations for enterprise clients in Hong Kong."
    },
    {
      name: "Priya Sharma",
      title: "UX/UI Designer",
      role: "User Experience Lead",
      bio: "Designed user interfaces for award-winning SaaS platforms in Bangalore."
    },
    {
      name: "Michael Thompson",
      title: "DevOps Engineer",
      role: "Infrastructure Specialist",
      bio: "Built scalable cloud architectures for high-growth tech companies in Austin."
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gray-900">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
        <ParticleField />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About BotHauz
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Meet the team behind the custom AI solutions transforming businesses worldwide
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              BotHauz is a specialized AI solutions agency built for startups, agencies, and businesses that want to offload repetitive tasks and engage customers intelligently. We combine expert custom development with proprietary technology to deliver whitebox solutions that save you time and grow your revenue.
            </p>
            <div className="w-32 h-32 rounded-lg mx-auto mb-4 overflow-hidden border-4 border-blue-400/30 bg-gray-800/50 flex items-center justify-center">
              <img
                src="/favicon.png"
                alt="BotHauz Logo"
                className="w-24 h-24 object-contain"
                onError={(e) => {
                  console.error('Failed to load favicon image');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-sm text-gray-400 italic">
              "Building AI solutions that actually work for real businesses."
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* Founders Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Founders
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                University of Melbourne graduates leading the future of AI automation
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <ScrollAnimation key={founder.name} delay={index * 0.2}>
                  <HolographicCard className="p-8">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-400/30">
                        <img
                          src={founder.name === "Bruno Jaamaa" ? "/bruno copy.jpg" : "/anam copy.jpg"}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.error(`Failed to load image for ${founder.name}`);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{founder.name}</h3>
                        <p className="text-blue-400 font-medium mb-4">{founder.role}</p>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {founder.bio}
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {founder.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <button className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-600">
                          <Linkedin className="h-5 w-5 text-blue-400" />
                        </button>
                        <button className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-600">
                          <Mail className="h-5 w-5 text-blue-400" />
                        </button>
                      </div>
                    </div>
                  </HolographicCard>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Team Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Expert Team
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Specialized professionals delivering enterprise-grade AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <ScrollAnimation key={member.name} delay={index * 0.1}>
                  <HolographicCard className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center border-2 border-gray-500">
                        <span className="text-2xl text-gray-300">👤</span>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                        <p className="text-blue-400 text-sm font-medium mb-2">{member.title}</p>
                        <p className="text-blue-400 text-sm">{member.role}</p>
                      </div>
                      
                      <div className="text-xs text-gray-300 leading-relaxed">
                        {member.bio}
                      </div>
                    </div>
                  </HolographicCard>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Company Values */}
      <ScrollAnimation>
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <HolographicCard className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-blue-400/30">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Results-Driven</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every solution we build is designed to deliver measurable business impact and ROI.
                </p>
              </HolographicCard>

              <HolographicCard className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-blue-400/30">
                  <span className="text-2xl">🔧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Custom-Built</h3>
                <p className="text-gray-300 leading-relaxed">
                  We develop proprietary solutions from scratch, tailored specifically to your needs.
                </p>
              </HolographicCard>

              <HolographicCard className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl mx-auto mb-4 flex items-center justify-center border border-blue-400/30">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Partnership</h3>
                <p className="text-gray-300 leading-relaxed">
                  We're not just vendors – we're long-term partners invested in your success.
                </p>
              </HolographicCard>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* CTA Section */}
      <ScrollAnimation>
        <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 relative overflow-hidden">
          <ParticleField />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work with Our Team?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how our expertise can transform your business operations.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl text-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl border border-blue-400/30"
            >
              Book Your Free Consultation
            </a>
          </div>
        </section>
      </ScrollAnimation>
    </div>
  );
};

export default About;