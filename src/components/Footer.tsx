
import React from "react";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 relative border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Info */}
          <div className="mb-8 md:mb-0 max-w-md">
            <div className="flex items-center mb-5">
              <div className="h-8 w-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/239c243a-8627-416b-ac27-45607806694d.png" 
                  alt="Sunerus Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="ml-2 text-lg font-bold text-gray-800">Sunerus</span>
            </div>
            <p className="text-gray-600 mb-4">
              Helping you discover safer products by identifying harmful ingredients.
              Scan and learn what's in your food, cosmetics, and household
              products.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-600" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-600" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-5 text-gray-800">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 mt-1 mr-3">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-gray-600">123 Health Blvd, Safety City, CA 91604</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 mr-3">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-gray-600">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gray-500 mr-3">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-gray-600">info@sunerus.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Sunerus. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 text-sm hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-gray-700">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
