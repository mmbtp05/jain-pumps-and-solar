import React from 'react';
import { Wind, Home, Wheat, Factory } from 'lucide-react';

const SolutionsSection = () => {
  const categories = [
    { icon: <Wind className="w-12 h-12" />, name: 'Solar pump' },
    { icon: <Home className="w-12 h-12" />, name: 'Domestic' },
    { icon: <Wheat className="w-12 h-12" />, name: 'Agricultural' },
    { icon: <Factory className="w-12 h-12" />, name: 'Industrial' },
  ];

  return (
    <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Solutions & Goals</h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-blue-900 mb-3">
                {category.icon}
              </div>
              <h3 className="text-blue-900 text-lg font-medium">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="bg-blue-900 rounded-lg p-8 text-white relative">
            <div className="absolute top-4 right-4">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">VISION</h3>
            <p className="text-gray-100">
              To be a leader in sustainable water and energy solutions, driving innovation and reliability for a better tomorrow.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-blue-900 rounded-lg p-8 text-white relative">
            <div className="absolute top-4 right-4">
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 10V3L4 14h7v7l9-11h-7z" 
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">MISSION</h3>
            <p className="text-gray-100">
              To provide innovative and reliable water and energy solutions that empower industries and communities, while promoting sustainability and excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;