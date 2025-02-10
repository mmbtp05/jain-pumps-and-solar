import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../public/assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#002145] text-white relative">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-3">
                                <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <div>Jain Pumps Pvt Limited</div>
                                    <div className="text-gray-300">
                                        PLOT NO. 2, Ajmer Rd Mahent Nagar, Jai Ambey Colony, Civil Lines, Jaipur, Rajasthan 302001
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Email: www.jjain.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>Toll Free: +966746</span>
                            </div>
                        </div>
                    </div>

                    {/* Solar Solutions Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Solar Solutions</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/solar/structure" className="hover:text-gray-300">
                                    Structure
                                </Link>
                            </li>
                            <li>
                                <Link href="/solar/panels" className="hover:text-gray-300">
                                    Solar Panels
                                </Link>
                            </li>
                            <li>
                                <Link href="/solar/pump-sets" className="hover:text-gray-300">
                                    Solar Pump Sets
                                </Link>
                            </li>
                            <li>
                                <Link href="/solar/controller" className="hover:text-gray-300">
                                    Solar Controller
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Pump Solutions Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Pump Solutions</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/pumps/monoblock" className="hover:text-gray-300">
                                    Monoblock
                                </Link>
                            </li>
                            <li>
                                <Link href="/pumps/mini" className="hover:text-gray-300">
                                    Mini Pumps
                                </Link>
                            </li>
                            <li>
                                <Link href="/pumps/submersible" className="hover:text-gray-300">
                                    Submersible Pumps
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                            <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
                            <li><Link href="/media" className="hover:text-gray-300">Media</Link></li>
                            <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                            <li><Link href="/brochure" className="hover:text-gray-300">Brochure</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-8 py-6">
                <div className="relative flex flex-col lg:flex-row justify-between items-start gap-6">
                    {/* Follow Us Section */}
                    <div className="w-full lg:w-auto">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="hover:opacity-80">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:opacity-80">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Logo Section - Responsive positioning */}
                    <div className="hidden lg:block absolute lg:-right-[12%] w-1/3 bg-[#e3eeff] rounded-tl-[90px]">
                        <div className="flex justify-center">
                            <Image
                                src={logo}
                                alt="JJAIN"
                                width={180}
                                height={50}
                                className="h-auto w-auto"
                            />
                        </div>
                    </div>

                    {/* Mobile Logo - Shows only on smaller screens */}
                    <div className="lg:hidden w-full bg-[#e3eeff] rounded-lg">
                        <div className="flex justify-center">
                            <Image
                                src={logo}
                                alt="JJAIN"
                                width={180}
                                height={60}
                                className="h-auto w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 py-4 mt-6">
                <div className="container mx-auto px-4 lg:px-8">
                    <p className="text-center text-sm text-gray-400">
                        © 2024 JJAIN. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;