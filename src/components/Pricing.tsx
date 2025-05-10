
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for occasional label checking",
    features: [
      "Scan up to 10 products per month",
      "Basic ingredient information",
      "Limited allergen detection",
      "Email support"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Premium",
    price: "$4.99",
    description: "Ideal for health-conscious consumers",
    features: [
      "Unlimited product scans",
      "Detailed ingredient analysis",
      "Full allergen detection",
      "Priority support",
      "Alternative product suggestions",
      "Country-specific ban flags"
    ],
    buttonText: "Try Now",
    popular: true
  },
  {
    name: "Family",
    price: "$9.99",
    description: "For families with specific health needs",
    features: [
      "Everything in Premium",
      "Up to 5 family profiles",
      "Custom allergen alerts",
      "Personalized ingredient warnings",
      "Shopping list integration",
      "24/7 dedicated support",
      "Early access to new features"
    ],
    buttonText: "Best Value",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/50 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-azure-400/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-opal-400/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-azure-600/80">
            Choose the plan that fits your needs. All plans include our core ingredient checking features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl p-6 md:p-8 transition-all duration-300 flex flex-col
                ${plan.popular ? 
                  "border-2 border-azure-500/50 bg-white dark:bg-gray-900 shadow-xl shadow-azure-500/10" : 
                  "border border-border bg-card hover:shadow-lg"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-max px-4 py-1 bg-gradient-to-r from-azure-500 to-opal-500 text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-azure-700">{plan.name}</h3>
                <div className="mt-3 flex items-baseline">
                  <span className="text-3xl md:text-4xl font-bold text-azure-800">{plan.price}</span>
                  {plan.price !== "Free" && <span className="ml-1 text-azure-600/70">/month</span>}
                </div>
                <p className="mt-4 text-azure-600/70">{plan.description}</p>
              </div>

              <ul className="mb-8 space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-azure-500 mr-2 shrink-0" />
                    <span className="text-azure-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? 
                  "bg-gradient-to-r from-azure-500 to-opal-500 hover:opacity-90" : 
                  "bg-azure-500 hover:bg-azure-600"}`}
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
