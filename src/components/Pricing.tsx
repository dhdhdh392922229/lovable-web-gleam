
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24/7 support",
      "1GB storage"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    description: "Ideal for growing businesses and teams",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Team collaboration",
      "Custom branding"
    ],
    buttonText: "Try Now",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited everything",
      "Enterprise analytics",
      "Dedicated support",
      "100GB storage",
      "Advanced security",
      "Custom integrations",
      "SLA guarantee"
    ],
    buttonText: "Contact Us",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-black/80 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-foreground/80">
            Choose the plan that fits your needs. All plans include a 14-day trial with no credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl p-6 md:p-8 transition-all duration-300 flex flex-col
                ${plan.popular ? 
                  "border-2 border-white/30 bg-white/10 shadow-xl shadow-white/5" : 
                  "border border-white/10 bg-white/5 hover:shadow-lg"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-white text-black text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-3 flex items-baseline">
                  <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-foreground/70">/month</span>
                </div>
                <p className="mt-4 text-foreground/70">{plan.description}</p>
              </div>

              <ul className="mb-8 space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? 
                  "bg-white hover:bg-white/90 text-black" : 
                  "bg-white/10 hover:bg-white/20 text-white border border-white/20"}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
