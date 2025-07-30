import React from 'react';

const LogoCarousel = () => {
  // Random company logos - replace with actual client logos later
  const companyLogos = [
    { name: "TechCorp", logo: "🏢" },
    { name: "DataFlow", logo: "📊" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "CloudSync", logo: "☁️" },
    { name: "SmartBiz", logo: "💼" },
    { name: "FutureTech", logo: "🚀" },
    { name: "DigitalCore", logo: "⚡" },
    { name: "AIVentures", logo: "🤖" },
    { name: "NextGen", logo: "🌟" },
    { name: "EliteSolutions", logo: "💎" },
    { name: "TechCorp", logo: "🏢" },
    { name: "DataFlow", logo: "📊" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "CloudSync", logo: "☁️" },
    { name: "SmartBiz", logo: "💼" },
    { name: "FutureTech", logo: "🚀" },
    { name: "DigitalCore", logo: "⚡" },
    { name: "AIVentures", logo: "🤖" },
    { name: "NextGen", logo: "🌟" },
    { name: "EliteSolutions", logo: "💎" },
  ];

  return (
    <div className="relative overflow-hidden bg-gray-800 py-12">
      <div className="flex animate-scroll">
        {companyLogos.map((company, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-4xl mb-2">{company.logo}</div>
              <div className="text-white text-sm font-medium opacity-70">
                {company.name}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-800 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-800 to-transparent z-10"></div>
    </div>
  );
};

export default LogoCarousel; 