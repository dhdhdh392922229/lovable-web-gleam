
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Parent of child with allergies",
    company: "California",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&crop=faces&q=80",
    content: "Sunerus has been a lifesaver for my family. My daughter has multiple allergies, and this app helps us quickly identify safe products while shopping.",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Health Conscious Consumer",
    company: "New York",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=faces&q=80",
    content: "I've been trying to avoid certain additives in my food, and Sunerus makes it so easy to scan and check ingredients. The database is comprehensive!",
    stars: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Clean Beauty Advocate",
    company: "Miami",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&crop=faces&q=80",
    content: "As someone who's very particular about skincare ingredients, this app has helped me avoid harmful chemicals and find cleaner alternatives.",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-azure-400">Users Say</span>
          </h2>
          <p className="text-gray-600">
            Hear from people who use Sunerus to make healthier product choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-100 transition-all duration-300 hover:shadow-lg overflow-hidden group">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-azure-300 to-opal-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.stars ? "text-azure-300 fill-azure-300" : "text-gray-200"}`}
                    />
                  ))}
                </div>
                
                <p className="mb-6 text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-gray-100">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
