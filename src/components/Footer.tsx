
import React from "react";
import { Camera } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/80 pt-16 pb-8 relative border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-5">
              <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                <Camera className="text-black w-4 h-4" />
              </div>
              <span className="ml-2 text-lg font-bold text-gradient">Camera Pro</span>
            </div>
            <p className="text-foreground/70 mb-4">
              Professional photography equipment and solutions. Creating stunning visual experiences for modern businesses and individuals.
            </p>
            <div className="flex space-x-3">
              {/* Social media circles */}
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-foreground/70 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-foreground/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-foreground/70 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-5">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-5">Stay Updated</h3>
            <p className="text-foreground/70 mb-4">Subscribe to our newsletter for the latest updates and news.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-lg border border-white/10 bg-white/5 focus:outline-none focus:ring-1 focus:ring-white/30 flex-grow text-white"
              />
              <button 
                type="submit" 
                className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-white/90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Camera Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
