export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 md:px-16 lg:px-24">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold">Box & Tale</a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/our-story" className="hover:underline">Our Story</a>
              <a href="/boxes" className="hover:underline">Boxes</a>
              <a href="/subscription" className="hover:underline">Subscription</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/account" className="hover:opacity-80">
                <span className="sr-only">Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </a>
              <a href="/cart" className="hover:opacity-80">
                <span className="sr-only">Cart</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </a>
              <button className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </nav>
  );
}
