import Hero from "@/components/ui/home/Hero";
import Navigation from "@/components/ui/home/Navigation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />      

      {/* Featured Boxes Section */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Magical Boxes</h2>
          <p className="text-lg max-w-2xl mx-auto">Each box contains a beautifully illustrated story book and thematic toys, crafts, and activities for an immersive experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((box) => (
            <div key={box} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="aspect-w-3 aspect-h-2 bg-gray-200">
                <Image 
                  src={`/api/placeholder/600/400`} 
                  alt={`Story Box ${box}`} 
                  width={600} 
                  height={400}
                  className="object-cover w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">The {['Forest', 'Ocean', 'Space'][box-1]} Adventure</h3>
                <p className="mb-4">Discover the mysteries of the {['enchanted forest', 'deep blue sea', 'vast universe'][box-1]} with our exciting adventure box.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">$29.99</span>
                  <a href={`/boxes/${box}`} className="text-sm font-medium px-4 py-2 rounded-full bg-black text-white hover:bg-opacity-80 transition-all">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/boxes" className="inline-block rounded-full border border-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-all">See All Boxes</a>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50 dark:bg-gray-900">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg max-w-2xl mx-auto">Bringing magical storytelling experiences to your doorstep in three simple steps</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Choose Your Adventure",
              description: "Select a single box or subscribe for monthly adventures delivered to your door.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              )
            },
            {
              title: "Receive Your Box",
              description: "Your carefully packaged box arrives with a story book and themed activities.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="8" x2="8" y2="8"></line>
                  <line x1="16" y1="12" x2="8" y2="12"></line>
                  <line x1="16" y1="16" x2="8" y2="16"></line>
                </svg>
              )
            },
            {
              title: "Embark on an Adventure",
              description: "Read, play, and create together while bonding over imaginative storytelling.",
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              )
            }
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-black bg-opacity-5 dark:bg-opacity-20 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 md:px-16 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Parents Say</h2>
          <p className="text-lg max-w-2xl mx-auto">Join thousands of families already enjoying our storytelling adventures</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "My kids look forward to their Box & Tale delivery every month. It's amazing how excited they get about reading!",
              name: "Sarah T.",
              role: "Mother of two"
            },
            {
              quote: "The quality of both the books and activities is outstanding. These boxes have created so many special moments for our family.",
              name: "Michael K.",
              role: "Father of three"
            },
            {
              quote: "Box & Tale has transformed our bedtime routine. My daughter can't wait to continue the adventures each night.",
              name: "Emily L.",
              role: "Mother of one"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <div className="mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Adventure</h2>
          <p className="text-lg mb-8">Sign up for our newsletter to receive special offers, storytelling tips, and updates on new box releases.</p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-full text-black"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-opacity-90 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 lg:px-24 bg-gray-100 dark:bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Box & Tale</h3>
            <p className="mb-4">Creating magical storytelling experiences for children and families.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:opacity-80">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="/boxes" className="hover:underline">All Boxes</a></li>
              <li><a href="/subscription" className="hover:underline">Subscription</a></li>
              <li><a href="/gift" className="hover:underline">Gift a Box</a></li>
              <li><a href="/past-boxes" className="hover:underline">Past Boxes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/our-story" className="hover:underline">Our Story</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/reviews" className="hover:underline">Reviews</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/shipping" className="hover:underline">Shipping</a></li>
              <li><a href="/returns" className="hover:underline">Returns</a></li>
              <li><a href="/account" className="hover:underline">My Account</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">© 2025 Box & Tale. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/terms" className="hover:underline text-sm">Terms of Service</a>
              <a href="/privacy" className="hover:underline text-sm">Privacy Policy</a>
              <a href="/cookies" className="hover:underline text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}