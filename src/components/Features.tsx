
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
    <section id="features" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-blue-600/80">
            Our platform helps you make informed choices about the products you buy and use every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group p-8 rounded-xl border border-border bg-card hover:border-blue-300/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-sm"></div>
              <div className="relative">
                <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 inline-flex">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">{feature.title}</h3>
                <p className="text-blue-600/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
