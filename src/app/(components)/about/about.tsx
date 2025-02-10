import React from 'react';
import Image from 'next/image';
import about from '../../../../public/assets/about-jain-page.png'

const AboutSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Jain Pumps is an Jaipur, Rajasthan based leading enterprise
                specialized in manufacturing fabricated submersible pumps. Our
                products are known for their best-in-class innovative design, high
                quality, sustainable performance and durable next-generation
                complete pumping solutions to match the customers growing needs
                across the globe.
              </p>
              <p className="text-lg">
                A research & development based organization, Jain Pumps has grown
                multi-fold by always working for better solutions and the team of
                dedicated & diligent technocrats continuously put their best to
                this aim. At Jain Pumps, we also believe that it is our
                responsibility to create a sustainable environment for our
                next-generation thus ensuring energy conserving and eco-friendly
                pumping solutions.
              </p>
              <p className="text-lg">
                We also care for the needs of society, thus use to supply fresh
                drinking water to communities, water for irrigation & agriculture
                purposes, boost water pressure in high-rise buildings in rural &
                urban communities.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-64 lg:h-96 px-12">
            <Image
              src={about}
              alt="Irrigation System in Action"
              className="rounded-lg shadow-xl w-full h-full object-fill"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;