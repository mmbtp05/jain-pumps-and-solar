'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&h=800',
    title: 'Solar Pumping Solutions',
    description: 'Efficient and sustainable solar-powered pumping systems for agriculture and industry',
    cta: 'Explore Solutions',
    link: '/products/solar'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1562864758-143c0cc8b5a4?q=80&w=1920&h=800',
    title: 'Smart Irrigation Systems',
    description: 'Advanced irrigation solutions with smart controls and monitoring',
    cta: 'Learn More',
    link: '/products/irrigation'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1920&h=800',
    title: 'Agricultural Pumps',
    description: 'High-performance pumps designed for modern agriculture',
    cta: 'View Products',
    link: '/products/pumps'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative h-[70vh] min-h-[400px] max-h-[500px] w-full overflow-hidden bg-gray-900">
      {/* Slides */}
      <div 
        className="relative h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="absolute flex h-full w-[300%]">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative h-full w-1/3">
              {/* Make entire slide clickable */}
              <Link href={slide.link} className="block h-full">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity hover:bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="max-w-4xl px-4 text-center text-white">
                    <h1 className="mb-2 text-3xl font-bold sm:text-4xl md:text-5xl">
                      {slide.title}
                    </h1>
                    <p className="mb-4 text-base sm:text-lg md:text-xl">
                      {slide.description}
                    </p>
                    <span className="inline-block rounded-lg bg-blue-600 px-6 py-2 text-base font-medium text-white transition-colors hover:bg-blue-700">
                      {slide.cta}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/40"
        aria-label="Previous slide"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/40"
        aria-label="Next slide"
      >
        <svg
          className="h-6 w-6"
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
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}