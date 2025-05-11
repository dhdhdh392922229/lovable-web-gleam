
import React from "react";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
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
            <p className="text-gray-600 mb-4 max-w-lg">
              Helping consumers make informed choices about the products they use by providing detailed information about ingredients and safer alternatives.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-auto">
            <form className="flex max-w-md mx-auto md:mx-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-azure-400 flex-grow"
              />
              <button 
                type="submit" 
                className="bg-azure-400 hover:bg-azure-500 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
            
            <div className="flex justify-center md:justify-end space-x-5 mt-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-600" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-600" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Sunerus Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
