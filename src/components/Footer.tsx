
import React from "react";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
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
              Helping consumers make informed choices about the products they use by providing detailed information about ingredients and safer alternatives.
            </p>
            <div className="flex space-x-3">
              {/* Social media icons */}
              <a 
                href="#" 
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Instagram className="w-4 h-4 text-gray-600" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-gray-600" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5 text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-azure-400 transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-azure-400 transition-colors">Features</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-azure-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-5 text-gray-800">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-azure-400 transition-colors">Ingredient Database</a></li>
              <li><a href="#" className="text-gray-600 hover:text-azure-400 transition-colors">Safer Alternatives</a></li>
              <li><a href="#" className="text-gray-600 hover:text-azure-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-azure-400 transition-colors">User Guides</a></li>
              <li><a href="#" className="text-gray-600 hover:text-azure-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-5 text-gray-800">Stay Updated</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates on ingredient research and app features.</p>
            <form className="flex">
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
