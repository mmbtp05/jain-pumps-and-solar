'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import pumps from '../../../../../public/assets/pumps-segment.png';
import solar from '../../../../../public/assets/solar-segment.png';

const ProductsSection = () => {
    const products = [
        {
            title: "Solar Solutions",
            image: solar,
            href: "/products/solar-solutions",
            direction: -200 // slide from left
        },
        {
            title: "Pumps",
            image: pumps,
            href: "/products/pumps",
            direction: 200 // slide from right
        }
    ];

    return (
        <section className="bg-[#e3eeff] py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <svg 
                            className="w-5 h-5 text-blue-600" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                d="M12 3L20 18H4L12 3Z" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                            />
                        </svg>
                        <span className="text-blue-600 font-medium tracking-wide text-sm">
                            OUR PRODUCTS
                        </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                        Products
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We offer a range of services to help you take advantage of renewable energy
                        and reduce your carbon footprint.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: product.direction }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.8,
                                delay: 0.2,
                                type: "spring",
                                stiffness: 50
                            }}
                        >
                            <Link 
                                href={product.href}
                                className="group relative block"
                            >
                                <div className="relative h-96 bg-[#003366] rounded-2xl overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-contain"
                                    />
                                    {/* Navigation Arrow */}
                                    <motion.div 
                                        className="absolute right-4 bottom-4 w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <svg 
                                            className="w-6 h-6 text-[#003366]" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M9 5l7 7-7 7" 
                                            />
                                        </svg>
                                    </motion.div>
                                </div>
                                <motion.h3 
                                    className="text-2xl font-semibold text-gray-900 mt-6 mb-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {product.title}
                                </motion.h3>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;