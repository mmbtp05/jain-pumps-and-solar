'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import solarInstallation from '../../../../../public/assets/solar-installation.png';

const MotionImage = motion(Image);

const WhatWeDoSection = () => {
    const services = [
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                </svg>
            ),
            title: "VFD Enclosure Production",
            description: "Powering smart manufacturing with quality VFD enclosures for reliable motor control and energy efficiency."
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Support",
            description: "Providing dedicated technical support and after-sales service for seamless operations."
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: "Solar Solutions",
            description: "Empowering industries and agriculture with efficient solar-powered systems for a greener tomorrow."
        },
        {
            icon: (
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
            title: "Solar Structure Formation",
            description: "Building durable and customized solar structures to optimize energy harvesting."
        }
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4 lg:px-16">
                {/* Header */}
                <motion.div 
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none">
                            <path d="M12 3L20 18H4L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-blue-600 font-medium tracking-wide text-sm">
                            OUR SERVICES
                        </span>
                    </div>
                    <h2 className="text-4xl font-semibold text-gray-900">
                        What we do
                    </h2>
                </motion.div>

                {/* Services Grid with Center Image */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
                    {/* Left Services */}
                    <div className="space-y-6">
                        {services.slice(0, 2).map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 50
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#e3eeff] p-6 rounded-lg space-y-4"
                            >
                                <motion.div 
                                    className="text-[#003366]"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.2 + index * 0.2 }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <motion.div 
                        className="relative h-96 w-2/3 mx-auto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.8,
                            type: "spring",
                            bounce: 0.2
                        }}
                    >
                        <MotionImage
                            src={solarInstallation}
                            alt="Solar Installation"
                            className="rounded-lg object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            animate={{ 
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 4,
                                ease: "easeInOut",
                                repeat: Infinity,
                            }}
                        />
                    </motion.div>

                    {/* Right Services */}
                    <div className="space-y-6">
                        {services.slice(2, 4).map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.5,
                                    delay: index * 0.2,
                                    type: "spring",
                                    stiffness: 50
                                }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-[#e3eeff] p-6 rounded-lg space-y-4"
                            >
                                <motion.div 
                                    className="text-[#003366]"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: 0.2 + index * 0.2 }}
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;