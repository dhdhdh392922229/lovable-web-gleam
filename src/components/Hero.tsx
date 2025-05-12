
import React from "react";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Blue backdrop overlay with radial gradient inspired by the uploaded images */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-70" 
            style={{
              backgroundImage: "url('/lovable-uploads/982d5b37-ee21-4774-aa74-56ba77df0003.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              mixBlendMode: "soft-light",
            }}>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.3)_0%,_rgba(13,40,95,0.5)_100%)]"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-white block">Sunerus Helps You</span>
            <span className="text-white/90 block">Make Better Choices</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto">
            Scan products and instantly identify harmful or allergy-triggering ingredients, 
            with safer alternatives for food, makeup, skincare, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-white/90 font-medium px-8 h-14 rounded-full shadow-lg"
            >
              Scan Now
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 font-medium px-8 h-14 rounded-full flex items-center gap-2 shadow-lg"
            >
              <Apple size={20} />
              Download on iOS
            </Button>
            
            <Button 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 font-medium px-8 h-14 rounded-full flex items-center gap-2 shadow-lg"
            >
              <Smartphone size={20} />
              Download on Android
            </Button>
          </div>
        </div>

        {/* Product Card */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="p-6 md:p-8">
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
                <span className="text-sm text-white/80 font-medium">Scanning Complete</span>
              </div>
              
              {/* Product Image - Updated to something else */}
              <div className="bg-black/30 rounded-lg mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1000&auto=format&fit=crop"
                  alt="Product scan" 
                  className="w-full h-48 object-cover opacity-90"
                />
              </div>

              <p className="text-center text-white/80 mb-4">Detected Ingredients:</p>
              
              {/* Ingredient Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 border border-white/20 bg-white/5 rounded-lg backdrop-blur-sm">
                  <p className="font-bold text-white">Red 40</p>
                  <p className="text-sm text-white/60">High Risk</p>
                  <p className="text-sm text-white/80 mt-1">Synthetic color linked to allergies</p>
                </div>
                
                <div className="p-4 border border-white/20 bg-white/5 rounded-lg backdrop-blur-sm">
                  <p className="font-bold text-white">Titanium Dioxide</p>
                  <p className="text-sm text-white/60">Medium</p>
                  <p className="text-sm text-white/80 mt-1">Possible carcinogen</p>
                </div>
                
                <div className="p-4 border border-white/20 bg-white/5 rounded-lg backdrop-blur-sm">
                  <p className="font-bold text-white">BHT</p>
                  <p className="text-sm text-white/60">Caution</p>
                  <p className="text-sm text-white/80 mt-1">Preservative with health concerns</p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
                <Button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 rounded-full shadow-md">
                  View Safe Alternatives
                </Button>
                <Button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20 rounded-full shadow-md">
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
