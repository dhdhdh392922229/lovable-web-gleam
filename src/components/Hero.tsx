
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const changingTexts = ["Make Better Choices", "Find Safer Products", "Identify Ingredients"];
  
  // Effect for text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* New backdrop with the uploaded images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b2c4a] to-[#0a1635]">
          <div className="absolute inset-0 opacity-50" 
            style={{
              backgroundImage: "url('/lovable-uploads/8bec9e09-ca8a-4b6d-9b05-4ef9169faff2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "soft-light",
            }}>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.3)_0%,_rgba(13,40,95,0.5)_100%)]"></div>
        
        {/* Add subtle dot pattern overlay like cluely.com */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)",
            backgroundSize: "16px 16px"
          }}>
        </div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Positioned lower as requested */}
          <div className="pt-16 md:pt-24">
            <h1 className="text-5xl md:text-6xl font-bold mb-5 tracking-tight">
              <span className="text-white block mb-2">Sunerus Helps You</span>
              <span className="text-white/90 block h-[60px] md:h-[72px] flex items-center justify-center transition-opacity duration-300">
                {changingTexts[textIndex]}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed mt-6">
              Scan products and instantly identify harmful or allergy-triggering ingredients, 
              with safer alternatives for food, makeup, skincare, and more.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 mt-8">
            <Button 
              size="lg" 
              className="bg-[#0ea5e9] text-white hover:bg-[#0284c7] font-medium px-10 py-6 h-14 rounded-full shadow-lg"
            >
              Scan Now
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 font-medium px-8 h-14 rounded-full flex items-center gap-2 shadow-lg"
            >
              <Apple size={18} />
              Download on iOS
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 font-medium px-8 h-14 rounded-full flex items-center gap-2 shadow-lg"
            >
              <Smartphone size={18} />
              Download on Android
            </Button>
          </div>
        </div>

        {/* Product Card with adjusted positioning */}
        <div className="mt-8 relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
            {/* Glowing effect behind card */}
            <div className="absolute -inset-1 bg-blue-500/20 blur-xl rounded-2xl"></div>
            
            <div className="relative p-6 md:p-8">
              {/* Analysis Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="#FFFFFF" strokeWidth="2"/>
                      <path d="M12 8V16" stroke="#FFFFFF" strokeWidth="2"/>
                      <path d="M8 12H16" stroke="#FFFFFF" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-3">Product Scan</h3>
                </div>
                <span className="px-4 py-1 text-xs text-white/80 font-medium bg-white/10 rounded-full border border-white/20">Scanning Complete</span>
              </div>
              
              {/* Product Image */}
              <div className="bg-black/30 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop"
                  alt="Product scan" 
                  className="w-full h-48 object-cover opacity-90"
                />
              </div>

              <p className="text-center text-white/80 mb-4 text-sm font-medium">Detected Ingredients:</p>
              
              {/* Ingredient Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 border border-white/20 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                    <p className="font-bold text-white">Red 40</p>
                  </div>
                  <p className="text-xs text-red-300 mb-1">High Risk</p>
                  <p className="text-sm text-white/80">Synthetic color linked to allergies</p>
                </div>
                
                <div className="p-4 border border-white/20 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    <p className="font-bold text-white">Titanium Dioxide</p>
                  </div>
                  <p className="text-xs text-yellow-300 mb-1">Medium Risk</p>
                  <p className="text-sm text-white/80">Possible carcinogen</p>
                </div>
                
                <div className="p-4 border border-white/20 bg-white/5 rounded-lg backdrop-blur-sm">
                  <div className="flex items-center mb-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    <p className="font-bold text-white">BHT</p>
                  </div>
                  <p className="text-xs text-orange-300 mb-1">Caution</p>
                  <p className="text-sm text-white/80">Preservative with health concerns</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
                <Button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 rounded-full shadow-md text-sm px-6">
                  View Safe Alternatives
                </Button>
                <Button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 rounded-full shadow-md text-sm px-6">
                  Full Health Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
