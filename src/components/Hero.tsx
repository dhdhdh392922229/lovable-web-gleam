
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient effects - lighter and cleaner */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-azure-200/30 rounded-full blur-3xl opacity-30 animate-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-opal-200/30 rounded-full blur-3xl opacity-30 animate-glow"></div>
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-azure-100 bg-azure-50/50">
            <span className="animate-pulse w-2 h-2 rounded-full bg-azure-300 mr-2"></span>
            <span className="text-sm font-medium text-azure-500">Hidden Ingredient Scanner</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-gray-800 block">Sunerus Helps You</span>
            <span className="text-azure-400 block">Scan for Hidden Ingredients</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Scan products and instantly identify harmful or allergy-triggering ingredients, with safer alternatives for food, makeup, skincare, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-azure-400 hover:bg-azure-500 text-white font-medium px-8">
              Scan Now
            </Button>
            <Button variant="outline" size="lg" className="group text-azure-500 border-azure-200">
              Learn More
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Hero Image - Ingredient Analysis Card */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-100 flex items-center justify-center rounded-full mr-3">
                    <img 
                      src="/lovable-uploads/239c243a-8627-416b-ac27-45607806694d.png" 
                      alt="Sunerus Icon" 
                      className="w-6 h-6 object-contain" 
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Ingredient Analysis</h3>
                </div>
                <span className="text-sm text-azure-400 font-medium">Scanning Complete</span>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 border border-red-100 bg-red-50 rounded-lg">
                    <div>
                      <p className="font-bold text-gray-800">Red 40</p>
                      <p className="text-red-600 text-sm font-medium">High Risk</p>
                      <p className="text-sm text-gray-600 mt-1">Synthetic color linked to allergies</p>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-yellow-100 bg-yellow-50 rounded-lg">
                    <div>
                      <p className="font-bold text-gray-800">Titanium Dioxide</p>
                      <p className="text-yellow-600 text-sm font-medium">Medium</p>
                      <p className="text-sm text-gray-600 mt-1">Possible carcinogen</p>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-orange-100 bg-orange-50 rounded-lg">
                    <div>
                      <p className="font-bold text-gray-800">BHT</p>
                      <p className="text-orange-600 text-sm font-medium">Caution</p>
                      <p className="text-sm text-gray-600 mt-1">Preservative with health concerns</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:justify-start gap-4">
                <Button className="bg-azure-400 hover:bg-azure-500 text-white">View Safe Alternatives</Button>
                <Button variant="outline" className="text-azure-500 border-azure-200">Full Health Report</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cleaner wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-white">
          <path fill="currentColor" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,208C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,176C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
