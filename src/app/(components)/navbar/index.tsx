'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/app/(constants)/navigation';
import MobileMenu from './mobileMenu';
import logo from '../../../../public/assets/logo.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full top-0 z-50 flex">
      {/* Left section with logo and blue background */}
      <div className="w-[30%] bg-white h-26">
        <div className="w-full bg-[#e3eeff] rounded-tr-[20vw] flex items-center justify-center h-26 relative">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Jain Pumps and Solar"
              width={180}
              height={140}
              className="h-20 w-auto"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Right section with navigation */}
      <div className="flex-1 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-20">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-base font-medium transition-colors ${pathname === link.href
                        ? 'text-blue-800'
                        : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {link.name}
                  </Link>

                  {link.submenu && activeDropdown === link.name && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className={`block px-4 py-3 text-base ${pathname === sublink.href
                                ? 'text-blue-800 bg-gray-50'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                              }`}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <MobileMenu isOpen={isOpen} links={navigationLinks} />
      </div>
    </nav>
  );
}