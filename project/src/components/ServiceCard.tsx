import React, { useState } from 'react';
import { DivideIcon as LucideIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  shortDescription, 
  fullDescription 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 group hover:bg-gray-800/90 hover:border-blue-500/30 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300 border border-blue-400/30">
          <Icon className="h-8 w-8 text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            {isExpanded ? fullDescription : shortDescription}
          </p>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="h-4 w-4 ml-1" />
              </>
            ) : (
              <>
                <span>Learn More</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </>
            )}
          </button>
        </div>
        
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-gray-900 transition-colors duration-200 font-medium backdrop-blur-sm"
        >
          Book a Free Call
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;