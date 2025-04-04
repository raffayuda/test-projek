"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      // Menggunakan gambar dari public folder
      bgImg: "images/video-1.png", // Pastikan file ini ada di folder public/images
      title: "Welcome to Box & Tale!",
      subtitle: "Get Free Shipping",
      description: "for Your First Order",
      promoCode: "MYFIRSTORDER",
    },
    {
      // Menggunakan URL absolut dari Unsplash
      bgImg: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1920&auto=format&fit=crop",
      title: "Customize Your Gift",
      subtitle: "Choose Your Font Type",
      description: "Choose The Box & Personalize!",
    },
    {
      // Menggunakan URL absolut dari Unsplash
      bgImg: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1920&auto=format&fit=crop",
      title: "Luxury Gift Boxes",
      subtitle: "Premium Selections",
      description: "Perfect for any occasion",
    },
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-screen bg-gray-900">
      {" "}
      {/* Tambahkan background fallback */}
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background image dengan fallback */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.bgImg})`,
              backgroundColor: "rgba(0,0,0,0.8)", // Fallback background color
            }}
          >
            {/* Tambahkan image element sebagai fallback */}
            <img
              src={slide.bgImg || "/placeholder.svg"}
              alt="Background"
              className="hidden object-cover w-full h-full"
              onError={(e) => {
                console.error("Failed to load image:", slide.bgImg)
                e.currentTarget.style.display = "none"
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-end pr-12 md:pr-24">
            <div className="text-white max-w-xl text-right">
              <h3 className="text-xl md:text-2xl font-light mb-2">{slide.title}</h3>
              <h2 className="text-4xl md:text-6xl font-serif mb-2">{slide.subtitle}</h2>
              <p className="text-xl md:text-3xl mb-4">{slide.description}</p>

              {slide.promoCode && (
                <div className="mb-6">
                  <p className="text-lg mb-1">Use Promo Code</p>
                  <p className="text-2xl font-medium">{slide.promoCode}</p>
                </div>
              )}

              <Link
                href="/build-a-box"
                className="inline-block border border-white text-white rounded-full px-10 py-3 text-lg font-medium hover:bg-white hover:text-black transition-all"
              >
                Custom a Gift
              </Link>
            </div>
          </div>
        </div>
      ))}
      {/* Custom a Gift Button - Top Right */}
      
      {/* Carousel Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

