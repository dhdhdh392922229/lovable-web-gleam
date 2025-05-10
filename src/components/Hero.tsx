
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-azure-400/20 rounded-full blur-3xl opacity-30 animate-glow"></div>
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
            <span className="text-gradient block mb-1">Sunerus</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto">
            Scan products and instantly identify harmful or allergy-triggering ingredients, with safer alternatives for food, makeup, skincare, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-azure-300 hover:bg-azure-400 text-white font-medium px-8">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="group text-azure-400 border-azure-300">
              Learn More
              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="glow-effect">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <div className="h-full w-full flex items-center justify-center p-8">
                  <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Ingredient Analysis</h3>
                    <div className="space-y-4">
                      <div className="p-3 border-l-4 border-red-500 bg-red-50 rounded">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-bold text-gray-800">Red 40</p>
                            <p className="text-red-600 text-sm font-medium">High Risk</p>
                          </div>
                          <span className="text-sm text-gray-600">Synthetic color linked to allergies</span>
                        </div>
                      </div>
                      
                      <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50 rounded">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-bold text-gray-800">Titanium Dioxide</p>
                            <p className="text-yellow-600 text-sm font-medium">Medium</p>
                          </div>
                          <span className="text-sm text-gray-600">Possible carcinogen</span>
                        </div>
                      </div>
                      
                      <div className="p-3 border-l-4 border-orange-400 bg-orange-50 rounded">
                        <div className="flex justify-between">
                          <div>
                            <p className="font-bold text-gray-800">BHT</p>
                            <p className="text-orange-600 text-sm font-medium">Caution</p>
                          </div>
                          <span className="text-sm text-gray-600">Preservative with health concerns</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between">
                      <Button className="bg-azure-300 hover:bg-azure-400 text-white">View Safe Alternatives</Button>
                      <Button variant="outline" className="text-azure-400 border-azure-300">Full Health Report</Button>
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
