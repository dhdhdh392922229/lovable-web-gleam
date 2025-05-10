
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <div className="relative glow-effect">
            <div className="h-10 w-10 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-blue-300">
              <img 
                src="/lovable-uploads/239c243a-8627-416b-ac27-45607806694d.png" 
                alt="Sunerus Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
          </div>
          <span className="ml-3 text-xl font-bold text-blue-600">Sunerus</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-blue-600 hover:text-blue-800 transition-colors">Features</a>
          <a href="#pricing" className="text-blue-600 hover:text-blue-800 transition-colors">Pricing</a>
          <a href="#testimonials" className="text-blue-600 hover:text-blue-800 transition-colors">Testimonials</a>
          <a href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">Contact</a>
          <Button className="bg-blue-500 hover:bg-blue-600 transition-colors">
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden p-2 text-blue-600" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-blue-600 hover:text-blue-800 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-blue-600 hover:text-blue-800 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-blue-600 hover:text-blue-800 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-blue-600 hover:text-blue-800 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-blue-500 hover:bg-blue-600 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
