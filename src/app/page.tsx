import Hero from "@/components/ui/home/Hero";
import Navigation from "@/components/ui/home/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Carousel */}
      <Hero />
      
      {/* Featured Boxes Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-gray-900">
        {/* Content remains the same */}
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        {/* Content remains the same */}
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-black text-white">
        {/* Content remains the same */}
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 lg:px-24 bg-gray-100 dark:bg-gray-900">
        {/* Content remains the same */}
      </footer>
    </div>
  );
}