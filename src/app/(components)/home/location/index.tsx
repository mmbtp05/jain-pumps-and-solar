import React from 'react';

const LocationSection = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 text-center mb-12">
                    Our Location
                </h2>

                {/* Map Container */}
                <div className="max-w-6xl mx-auto relative">
                    {/* Placeholder Map - Replace with actual Google Maps integration */}
                    <div className="relative w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                        {/* Map frame - For demonstration */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.677898196223!2d75.78790131504666!3d26.91275238312946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4046e8ff82f%3A0x4b1b5ffde5e1d9c6!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            // allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>

                        {/* Location Marker */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                {/* Marker Pin */}
                                <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
                                {/* Pulse Animation */}
                                <div className="absolute -inset-2 bg-blue-600/20 rounded-full animate-ping" />
                            </div>
                        </div>
                    </div>

                    {/* Location Details */}
                    <div className="mt-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Visit Our Office
                        </h3>
                        <p className="text-gray-600">
                            123 Business District, Industrial Area
                            <br />
                            Jaipur, Rajasthan 302001
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;