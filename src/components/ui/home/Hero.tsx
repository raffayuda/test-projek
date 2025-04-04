"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bgImg: "https://boxandtale.com/storage/slides/8k53VVC84thAT68c3rZ28mBU5wOC5iAdxW0PJbHM.webp",
      title: "Customize Your Gift",
      subtitle: "Choose Your Font Type",
      description: "Choose The Box & Personalize!"
    },
    {
      bgImg: "/api/placeholder/1920/1080",
      title: "Luxury Gift Boxes",
      subtitle: "Premium Selections",
      description: "Perfect for any occasion"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${slide.bgImg})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-end pr-24">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl font-light mb-2">{slide.title}</h2>
              <h1 className="text-6xl font-serif mb-6">{slide.subtitle}</h1>
              <p className="text-2xl mb-8">{slide.description}</p>
              <Link 
                href="/build-a-box" 
                className="inline-block bg-white text-black rounded-full px-16 py-4 text-lg font-medium hover:bg-opacity-90 transition-all"
              >
                Build a Box
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}