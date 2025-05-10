
import React from "react";
import { Sparkles, Zap, Shield, ArrowRightLeft, BarChart4, Palette } from "lucide-react";

const features = [
  {
    title: "Scan Products",
    description: "Simply scan a barcode or search for products to instantly check their ingredients.",
    icon: Palette,
  },
  {
    title: "Flag Harmful Ingredients",
    description: "Automatically flags ingredients that are controversial or banned in certain countries.",
    icon: Zap,
  },
  {
    title: "Allergy Protection",
    description: "Identify allergy-triggering ingredients and harmful substances with ease.",
    icon: Shield,
  },
  {
    title: "Safer Alternatives",
    description: "Get recommendations for products with safer ingredient profiles and fewer harmful additives.",
    icon: ArrowRightLeft,
  },
  {
    title: "Detailed Insights",
    description: "Learn what each ingredient does and why some are considered problematic.",
    icon: BarChart4,
  },
  {
    title: "Works Everywhere",
    description: "Check ingredients in food, makeup, skincare products, and more with our comprehensive database.",
    icon: Sparkles,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-azure-400">Features</span>
          </h2>
          <p className="text-gray-600">
            Our platform helps you make informed choices about the products you buy and use every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group p-8 rounded-xl border border-gray-100 bg-white hover:border-azure-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-azure-200 to-opal-200 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur-sm"></div>
              <div className="relative">
                <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-azure-50 to-opal-50 inline-flex">
                  <feature.icon className="h-6 w-6 text-azure-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
