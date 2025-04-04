import Link from "next/link";

export default function Navigation() {
  return (
    <header>
      {/* Top Banner */}
      <div className="bg-gray-200 text-center py-2">
        <p className="text-sm text-[#a3907a]">FREE SHIPPING FOR YOUR FIRST ORDER!</p>
      </div>
      
      {/* Sub Navigation - Box Selection */}
      <div className="bg-[#c4b7a6] text-center py-3">
        <p>CHOOSE THE BOX, GIFT ITEMS, & CARD | <Link href="/build-a-box" className="font-medium">BUILD A BOX</Link></p>
      </div>
      
      {/* Promotion Banner */}
      <div className="bg-[#2b2a29] text-white text-center py-3">
        <p>EID HOLIDAY OFF 28 MAR - 6 APR 2025 | NEXT SHIPPING 7 APR 2025</p>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-[#2b2a29] text-white flex justify-between items-center px-6 py-4 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <img src="/logo.png" alt="Box & Tale" className="h-16" />
          </Link>
        </div>
        
        {/* Main Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/build-a-box" className="uppercase font-medium hover:opacity-80">BUILD A BOX</Link>
          <Link href="/premade" className="uppercase font-medium hover:opacity-80">PREMADE</Link>
          <Link href="/corporate-gifts" className="uppercase font-medium hover:opacity-80">CORPORATE GIFTS</Link>
          <Link href="/blog" className="uppercase font-medium hover:opacity-80">BLOG</Link>
          <div className="relative group">
            <Link href="/about" className="uppercase font-medium hover:opacity-80 flex items-center">
              ABOUT US <span className="ml-1">▼</span>
            </Link>
          </div>
        </div>
        
        {/* Account Links */}
        <div className="flex items-center space-x-6">
          <Link href="/login" className="text-sm hover:opacity-80">Login</Link>
          <Link href="/register" className="text-sm hover:opacity-80">Register</Link>
          <Link href="/cart" className="text-sm hover:opacity-80">Cart</Link>
        </div>
      </nav>
    </header>
  );
}