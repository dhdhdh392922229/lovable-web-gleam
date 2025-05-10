
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
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Users Say</span>
          </h2>
          <p className="text-blue-600/80">
            Hear from people who use Sunerus Label Check to make healthier product choices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border border-border transition-all duration-300 hover:shadow-lg overflow-hidden group">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.stars ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                
                <p className="mb-6 text-blue-600/80 italic">&ldquo;{testimonial.content}&rdquo;</p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-blue-100 dark:border-blue-800">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600/70">{testimonial.role}, {testimonial.company}</p>
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
