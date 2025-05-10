
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-5">
              <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center overflow-hidden border border-blue-300">
                <img 
                  src="/lovable-uploads/239c243a-8627-416b-ac27-45607806694d.png" 
                  alt="Sunerus Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="ml-2 text-lg font-bold text-blue-600">Sunerus</span>
            </div>
            <p className="text-blue-600/70 mb-4">
              Helping consumers make informed choices about the products they use by providing detailed information about ingredients and safer alternatives.
            </p>
            <div className="flex space-x-3">
              {/* Social media circles */}
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center hover:bg-blue-200 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5 text-blue-700">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-600/70 hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#features" className="text-blue-600/70 hover:text-blue-600 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-blue-600/70 hover:text-blue-600 transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-blue-600/70 hover:text-blue-600 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-blue-600/70 hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-5 text-blue-700">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-blue-600/70 hover:text-blue-600 transition-colors">Ingredient Database</a></li>
              <li><a href="#" className="text-blue-600/70 hover:text-blue-600 transition-colors">Safer Alternatives</a></li>
              <li><a href="#" className="text-blue-600/70 hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-blue-600/70 hover:text-blue-600 transition-colors">User Guides</a></li>
              <li><a href="#" className="text-blue-600/70 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-5 text-blue-700">Stay Updated</h3>
            <p className="text-blue-600/70 mb-4">Subscribe to our newsletter for the latest updates on ingredient research and app features.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-lg border border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-500 flex-grow"
              />
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-blue-600/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Sunerus Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
