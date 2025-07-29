import React from 'react';
import ScrollAnimation from './ScrollAnimation';

const TrustBadges = () => {
  const platforms = [
    { name: 'Slack', logo: '💬', color: 'from-purple-500 to-pink-500' },
    { name: 'Salesforce', logo: '☁️', color: 'from-blue-500 to-cyan-500' },
    { name: 'Notion', logo: '📝', color: 'from-gray-500 to-gray-600' },
    { name: 'Trello', logo: '📋', color: 'from-blue-500 to-indigo-500' },
    { name: 'HubSpot', logo: '🎯', color: 'from-orange-500 to-red-500' },
    { name: 'Zapier', logo: '⚡', color: 'from-orange-500 to-yellow-500' },
    { name: 'Jira', logo: '🔧', color: 'from-blue-600 to-blue-700' },
    { name: 'Asana', logo: '✅', color: 'from-pink-500 to-rose-500' },
    { name: 'Airtable', logo: '📊', color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div className="bg-gray-800 py-8 border-y border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <p className="text-center text-sm font-medium text-gray-400 mb-6 font-mono tracking-wider">
            Seamless integrations with enterprise platforms
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {platforms.slice(0, 5).map((platform, index) => (
              <div
                key={platform.name}
                className="flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-300 ease-in-out cursor-pointer"
                title={`Integrated with ${platform.name}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center border border-white/20 transition-all duration-300 ease-in-out shadow-sm`}>
                  <span className="text-lg">{platform.logo}</span>
                </div>
                <span className="text-xs font-medium text-gray-400 transition-colors duration-300 text-center">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Bottom row - 4 logos centered */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-4">
            {platforms.slice(5, 9).map((platform, index) => (
              <div
                key={platform.name}
                className="flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-300 ease-in-out cursor-pointer"
                title={`Integrated with ${platform.name}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${platform.color} flex items-center justify-center border border-white/20 transition-all duration-300 ease-in-out shadow-sm`}>
                  <span className="text-lg">{platform.logo}</span>
                </div>
                <span className="text-xs font-medium text-gray-400 transition-colors duration-300 text-center">
                  {platform.name}
                </span>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default TrustBadges;