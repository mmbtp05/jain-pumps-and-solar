import React from 'react';

const ValuesSection = () => {
  const values = [
    {
      number: '01',
      title: 'Innovation',
      description: 'Advancing water and energy solutions through cutting-edge technology and smart engineering.'
    },
    {
      number: '02',
      title: 'Reliability',
      description: 'Delivering high-performance products built for durability and efficiency.'
    },
    {
      number: '03',
      title: 'Quality Excellence',
      description: 'Ensuring top-tier manufacturing and rigorous testing for long-lasting performance.'
    },
    {
      number: '04',
      title: 'Cost Savings',
      description: 'Minimize fuel and maintenance costs, ensuring long-term savings.'
    },
    {
      number: '05',
      title: 'Technological Advancement',
      description: 'Constantly improving with next-generation solar and pump technologies for better performance.'
    },
    {
      number: '06',
      title: 'Environmentally Friendly:',
      description: 'We contribute to reducing carbon emissions with clean energy.'
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you're looking to switch to solar energy or upgrade your Pump Services, our company is here to help.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-blue-900">
                  {value.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;