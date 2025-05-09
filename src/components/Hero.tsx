
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Camera } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-azure-500/10 rounded-full blur-3xl opacity-20 animate-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-opal-500/10 rounded-full blur-3xl opacity-20 animate-glow"></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-azure-500/20 bg-azure-500/5">
            <span className="animate-pulse w-2 h-2 rounded-full bg-azure-500 mr-2"></span>
            <span className="text-sm font-medium text-azure-400">Launching soon</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gradient block mb-1">Modern Photography</span>
            <span>with Elegance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto">
            Experience the perfect blend of technology and elegance with our innovative platform. 
            Designed to elevate your digital presence with stunning visuals and powerful features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-azure-500 to-opal-500 text-white font-medium px-8 hover:opacity-90">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="group border-azure-500/20 bg-azure-500/5 hover:bg-azure-500/10 text-foreground">
              Learn More
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="glow-effect">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border border-azure-500/10 bg-black/50 backdrop-blur-sm">
              <div className="aspect-[16/9] w-full bg-black overflow-hidden flex items-center justify-center">
                <div className="relative animate-float">
                  <Camera size={240} className="text-gradient" />
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
