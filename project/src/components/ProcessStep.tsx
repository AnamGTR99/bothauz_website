import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center border border-blue-400/30 shadow-lg">
          <Icon className="h-8 w-8 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center border border-blue-300/50">
          <span className="text-xs font-bold text-white">{step}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
  );
};

export default ProcessStep;