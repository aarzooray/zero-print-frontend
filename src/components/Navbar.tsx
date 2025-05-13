
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300  ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center group">
              <span className="text-2xl font-bold text-zeroprint-green group-hover:scale-105 transition-transform">
                <span className="font-black">Zero</span>Print
                <span className="text-xs align-top bg-zeroprint-green/10 text-zeroprint-green px-2 py-0.5 rounded-full ml-1">beta</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="font-medium hover:text-zeroprint-green transition-colors border-b-2 border-transparent hover:border-zeroprint-green/30 py-1">
              Home
            </a>
            <a href="#mission" className="font-medium hover:text-zeroprint-green transition-colors border-b-2 border-transparent hover:border-zeroprint-green/30 py-1">
              About
            </a>
            <a href="#solutions" className="font-medium hover:text-zeroprint-green transition-colors border-b-2 border-transparent hover:border-zeroprint-green/30 py-1">
              Our Solutions
            </a>
            <a href="#how-it-works" className="font-medium hover:text-zeroprint-green transition-colors border-b-2 border-transparent hover:border-zeroprint-green/30 py-1">
              How It Works
            </a>
            <a href="#contact" className="font-medium hover:text-zeroprint-green transition-colors border-b-2 border-transparent hover:border-zeroprint-green/30 py-1">
              Contact
            </a>
            <a
              href="#join-waitlist"
              className="bg-zeroprint-green text-white px-5 py-2 rounded-lg hover:bg-zeroprint-green/90 transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg font-medium ml-2"
            >
              Join Waitlist
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-zeroprint-green hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-zeroprint-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#mission"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-zeroprint-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-zeroprint-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Solutions
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-zeroprint-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-zeroprint-green transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#join-waitlist"
              className="block px-4 py-3 mt-2 rounded-lg text-center bg-zeroprint-green text-white font-medium hover:bg-zeroprint-green/90 transition-colors shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
