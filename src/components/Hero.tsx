
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white">
      {/* Light background for the hero section */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-azure-200/30 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-opal-200/30 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hidden Ingredient Scanner Badge */}
          <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full bg-azure-100/50">
            <span className="text-sm font-medium text-azure-500">Hidden Ingredient Scanner</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900 block">Sunerus Helps You</span>
            <span className="text-azure-400 block">Scan for Hidden Ingredients</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Scan products and instantly identify harmful or allergy-triggering ingredients, with safer alternatives for food, makeup, skincare, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-azure-400 hover:bg-azure-500 text-white font-medium px-8">
              Scan Now
            </Button>
            <Button variant="outline" size="lg" className="group text-gray-800 border-gray-300">
              Learn More
              <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>

        {/* Ingredient Analysis Card */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
            <div className="p-6 md:p-8">
              {/* Analysis Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#60A5FA" strokeWidth="2"/>
                      <path d="M12 8V16" stroke="#60A5FA" strokeWidth="2"/>
                      <path d="M8 12H16" stroke="#60A5FA" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 ml-3">Ingredient Analysis</h3>
                </div>
                <span className="text-sm text-azure-400 font-medium">Scanning Complete</span>
              </div>
              
              {/* Product Image - Changed to food-related image */}
              <div className="bg-black rounded-lg mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop"
                  alt="Healthy food bowl" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-2 absolute top-2 left-2 bg-white/80 rounded-md flex items-center">
                  <span className="font-medium text-sm">Food Analysis</span>
                </div>
              </div>

              <p className="text-center text-gray-600 mb-4">Detected Ingredients:</p>
              
              {/* Ingredient Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 border border-gray-300 rounded-lg">
                  <p className="font-bold text-gray-800">Red 40</p>
                  <p className="text-sm text-gray-500">High Risk</p>
                  <p className="text-sm text-gray-600 mt-1">Synthetic color linked to allergies</p>
                </div>
                
                <div className="p-4 border border-gray-300 rounded-lg">
                  <p className="font-bold text-gray-800">Titanium Dioxide</p>
                  <p className="text-sm text-gray-500">Medium</p>
                  <p className="text-sm text-gray-600 mt-1">Possible carcinogen</p>
                </div>
                
                <div className="p-4 border border-gray-300 rounded-lg">
                  <p className="font-bold text-gray-800">BHT</p>
                  <p className="text-sm text-gray-500">Caution</p>
                  <p className="text-sm text-gray-600 mt-1">Preservative with health concerns</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
                <Button variant="outline" className="text-gray-800 border-gray-300 hover:bg-gray-50">View Safe Alternatives</Button>
                <Button variant="outline" className="text-gray-800 border-gray-300 hover:bg-gray-50">Full Health Report</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
