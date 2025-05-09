
import React from "react";
import { Sparkles, Zap, Shield, ArrowRightLeft, BarChart4, Palette } from "lucide-react";

const features = [
  {
    title: "Stunning UI",
    description: "Beautiful interface that delivers an exceptional user experience across all devices.",
    icon: Palette,
  },
  {
    title: "Lightning Fast",
    description: "Optimized performance ensures your content loads quickly and efficiently.",
    icon: Zap,
  },
  {
    title: "Advanced Security",
    description: "Enterprise-level security to protect your data and privacy at all times.",
    icon: Shield,
  },
  {
    title: "Seamless Sync",
    description: "Sync across all your devices with real-time updates and zero conflicts.",
    icon: ArrowRightLeft,
  },
  {
    title: "Smart Analytics",
    description: "Gain valuable insights with comprehensive analytics and reporting tools.",
    icon: BarChart4,
  },
  {
    title: "Magical Experience",
    description: "A delightful experience that makes using the platform feel like magic.",
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
          <p className="text-foreground/80">
            Our platform combines cutting-edge technology with intuitive design to bring you the best experience possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group p-8 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-azure-500 to-opal-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-sm"></div>
              <div className="relative">
                <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-azure-100 to-opal-100 dark:from-azure-900/30 dark:to-opal-900/30 inline-flex">
                  <feature.icon className="h-6 w-6 text-gradient" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
