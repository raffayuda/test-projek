"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Partners() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Group partners into slides (6 partners per slide)
  const partners = [
    { name: "PARKER", logo: "https://boxandtale.com/img/bnt-partners/PARKER.png" },
    { name: "RR CHOCOLATE", logo: "https://boxandtale.com/img/bnt-partners/RR_CHOCOLATE.png" },
    { name: "JBL", logo: "https://boxandtale.com/img/bnt-partners/JBL.png" },
    { name: "VIVAN", logo: "https://boxandtale.com/img/bnt-partners/VIVAN.png" },
    { name: "ROBOT", logo: "https://boxandtale.com/img/bnt-partners/ROBOT.png" },
    { name: "SCARLETT", logo: "https://boxandtale.com/img/bnt-partners/SCARLETT.png" },
    { name: "FUJIFILM", logo: "https://boxandtale.com/img/bnt-partners/FUJIFILM.png" },
    { name: "CORKCICLE", logo: "https://boxandtale.com/img/bnt-partners/CORKCICLE.png" },
    { name: "THE FACE SHOP", logo: "https://boxandtale.com/img/bnt-partners/THE_FACE_SHOP.png" },
    { name: "SONY", logo: "https://boxandtale.com/img/bnt-partners/SONY.png" },
    { name: "ERAJAYA", logo: "https://boxandtale.com/img/bnt-partners/ERAJAYA.png" },
  ]

  // Group partners into slides of 6
  const slides = []
  for (let i = 0; i < partners.length; i += 6) {
    slides.push(partners.slice(i, i + 6))
  }

  useEffect(() => {
    setTotalSlides(slides.length)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide, totalSlides])

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-medium text-center text-gray-600 mb-12">OUR PARTNERS</h2>

        <div className="relative">
          {/* Carousel navigation buttons */}
          {/* <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md z-10 hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-500" />
          </button> */}

          {/* Carousel container */}
          <div ref={carouselRef} className="overflow-hidden bg-white rounded-lg p-8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={`slide-${slideIndex}`}
                  className="w-full flex-shrink-0 flex items-center justify-between gap-8"
                >
                  {slide.map((partner, partnerIndex) => (
                    <div
                      key={`partner-${slideIndex}-${partnerIndex}`}
                      className="flex-1 flex items-center justify-center h-24"
                    >
                      <img
                        src={partner.logo || "/placeholder.svg"}
                        alt={partner.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md z-10 hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-500" />
          </button> */}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                currentSlide === index ? "bg-gray-500 w-3" : "bg-gray-300",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

