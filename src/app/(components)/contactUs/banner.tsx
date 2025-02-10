import React from 'react';

const ContactBanner = () => {
  return (
    <div className="relative h-[300px] w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/api/placeholder/1920/300')`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-wide">
            WE ARE HERE TO HELP
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;