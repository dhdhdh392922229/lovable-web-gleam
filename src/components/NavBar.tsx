
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
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <div className="h-10 w-10 flex items-center justify-center">
            <img 
              src="/lovable-uploads/239c243a-8627-416b-ac27-45607806694d.png" 
              alt="Sunerus Logo" 
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="ml-3 text-xl font-bold text-gray-800">Sunerus</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-azure-500 transition-colors">Features</a>
          <a href="#contact" className="text-gray-600 hover:text-azure-500 transition-colors">Contact</a>
          <Button className="bg-azure-400 hover:bg-azure-500 text-white transition-colors">
            Get Started
          </Button>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden p-2 text-gray-600" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-azure-500 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-azure-500 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-azure-400 hover:bg-azure-500 w-full text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
