"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
      {/* Top Banner */}
      <div className="bg-gray-200 text-center py-2">
        <p className="text-sm text-[#a3907a]">
          FREE SHIPPING FOR YOUR FIRST ORDER!
        </p>
      </div>

      {/* Sub Navigation - Box Selection */}
      <div className="bg-[#c4b7a6] text-center py-3">
        <p>
          CHOOSE THE BOX, GIFT ITEMS, & CARD |{" "}
          <Link href="/build-a-box" className="font-medium">
            BUILD A BOX
          </Link>
        </p>
      </div>

      {/* Promotion Banner */}
      <div className="bg-[#2b2a29] text-white text-center py-3">
        <p>EID HOLIDAY OFF 28 MAR - 6 APR 2025 | NEXT SHIPPING 7 APR 2025</p>
      </div>

      {/* Main Navigation */}
      <nav className="bg-transparent absolute top-32 z-50 w-full text-white flex justify-between items-center px-6 py-4 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            <img
              src={`${pathname == "/" ? "https://boxandtale.com/img/logo_white.png" : "https://boxandtale.com/img/logo-colored.png"}`}
              alt="Box & Tale"
              className="w-22 h-22"
            />
          </Link>
        </div>

        {/* Main Menu */}
        <div className="hidden md:flex md:flex-col gap-5 items-center space-x-8">
          {/* Account Links */}
          <div className="flex items-center space-x-6 justify-end w-full">
            <Link href="/login" className={`text-sm hover:opacity-80 ${pathname != "/" ? "text-[#a3907a]" : ""}`}>
              Login
            </Link>
            <Link href="/register" className={`text-sm hover:opacity-80 ${pathname != "/" ? "text-[#a3907a]" : ""}`}>
              Register
            </Link>
            <Link href="/cart" className={`text-sm hover:opacity-80 ${pathname != "/" ? "text-[#a3907a]" : ""}`}>
              Cart
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link
              href="/build-a-box"
              className={`uppercase font-bold hover:opacity-80 ${pathname != "/" ? "text-[#a3907a]" : ""}`}
            >
              BUILD A BOX
            </Link>
            <Link
              href="/premade"
              className={`uppercase font-bold hover:opacity-80 ${pathname != "/" ? "text-[#a3907a]" : ""}`}
            >
              PREMADE
            </Link>
            <Link
              href="/corporate-gifts"
              className={`uppercase font-bold hover:opacity-80 ${pathname != "/" ? "text-[#a3907a]" : ""}`}
            >
              CORPORATE GIFTS
            </Link>
            <Link
              href="/blog"
              className={`uppercase font-bold hover:opacity-80 ${pathname != "/" ? "text-[#a3907a]" : ""}`}
            >
              BLOG
            </Link>
            <div className="relative group" ref={dropdownRef}>
              <button
                className={`uppercase font-bold hover:opacity-80 flex items-center ${pathname != "/" ? "text-[#a3907a]" : ""}`}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                ABOUT US <span className="ml-1">▼</span>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 ${showDropdown ? "block" : "hidden"}`}
              >
                <Link 
                  href="/about" 
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  About Us
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Contact Us
                </Link>
                <Link 
                  href="/faq" 
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  FAQ
                </Link>
                <Link 
                  href="/privacy-policy" 
                  className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  onClick={() => setShowDropdown(false)}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}