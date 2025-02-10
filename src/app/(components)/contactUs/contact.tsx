import React from 'react';
import Image from 'next/image';
import contact from '../../../../public/assets/contact-page.png'

const ContactSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Address and Get in Touch */}
        <div className="space-y-12">
          {/* Address Card */}
          <div className="bg-blue-50 rounded-lg overflow-hidden">
            <div className="h-[240px] relative">
              <Image
                src={contact}
                alt="Solar Panel Installation"
                className="object-cover"
                fill
                priority
              />
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Address</h2>
              <div>
                <h3 className="font-medium text-gray-900">Jain Pumps Pvt Limited</h3>
                <p className="text-gray-600 mt-1">
                  PLOT NO. 2, Ajmer Rd, Mahavir Nagar, Jai Ambey Colony, Civil Lines, Jaipur, Rajasthan (302001), India
                </p>
              </div>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in touch with us</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((index) => (
                <div key={index}>
                  <h3 className="font-medium text-gray-900">Jain Pumps Pvt Limited</h3>
                  <p className="text-gray-600 mt-1">
                    PLOT NO. 2, Ajmer Rd, Mahavir Nagar, Jai Ambey Colony, Civil Lines, Jaipur, Rajasthan (302001), India
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Map and Contact Form */}
        <div className="space-y-8">
          {/* Map */}
          <div className="h-[300px] bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0308721697913!2d75.78336937531155!3d26.933724976844755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5164efdb58d%3A0x42c57a3e06d4f6e!2sJain%20Pumps%20Pvt%20Limited!5e0!3m2!1sen!2sin!4v1707566951099!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="Jain Pumps Location"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Leave us a message.</h2>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name*" 
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email*" 
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Mobile No.*" 
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 placeholder-gray-500"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message/Issue" 
                  rows={4}
                  className="w-full px-4 py-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 placeholder-gray-500 resize-none"
                ></textarea>
              </div>
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-blue-900 text-white py-3 px-6 rounded-full hover:bg-blue-800 transition-colors duration-300 font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;