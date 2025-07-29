import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import HolographicCard from './HolographicCard';

const TeamSection = () => {
  const founders = [
    {
      name: "Bruno Jaamaa",
      role: "Co-Founder & Technical Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
      bio: "Bruno brings deep expertise in artificial intelligence and machine learning systems. As a University of Melbourne graduate with a Bachelor of Science in Computing and Software Systems, he specializes in architecting scalable AI solutions that drive real business outcomes. His technical leadership ensures every system we build is robust, secure, and future-ready.",
      expertise: ["AI Architecture", "Machine Learning", "System Design", "Technical Strategy"]
    },
    {
      name: "Anam Milfer",
      role: "Co-Founder & Operations Director",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1",
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
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founders Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              University of Melbourne graduates leading the future of AI automation
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
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
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
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

        {/* Team Section */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Specialized professionals delivering enterprise-grade AI solutions
            </p>
          </div>
        </ScrollAnimation>

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
  );
};

export default TeamSection;