
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-azure-500/20 rounded-full blur-3xl opacity-30 animate-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-opal-500/20 rounded-full blur-3xl opacity-30 animate-glow"></div>
        <div className="absolute inset-0 bg-grid opacity-20"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-azure-200 bg-azure-50/50 dark:border-azure-700 dark:bg-azure-900/30">
            <span className="animate-pulse w-2 h-2 rounded-full bg-azure-500 mr-2"></span>
            <span className="text-sm font-medium text-azure-700 dark:text-azure-300">Launching soon</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient block mb-1">Beautiful Design</span>
            <span>with Azure & Opal</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto">
            Experience the perfect blend of technology and elegance with our innovative platform. 
            Designed to elevate your digital presence with stunning visuals and powerful features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-azure-500 to-opal-500 hover:opacity-90 text-white font-medium px-8">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="group">
              Learn More
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="glow-effect">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-900/50 backdrop-blur-sm">
              <div className="aspect-[16/9] w-full bg-azure-50 dark:bg-gray-900 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-azure-100 to-opal-100 dark:from-azure-900/30 dark:to-opal-900/30 flex items-center justify-center">
                  <div className="relative animate-float">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-azure-400 to-opal-400 opacity-80 blur-2xl absolute inset-0"></div>
                    <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
                      <div className="w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-azure-500 to-opal-500 flex items-center justify-center text-white text-6xl font-bold">
                        AO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-background">
          <path fill="currentColor" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,208C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
