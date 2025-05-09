
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop&crop=faces&q=80",
    content: "This platform completely transformed our online presence. The professional style gives our brand a modern and trustworthy look. Highly recommend!",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Product Designer",
    company: "DesignLab",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&crop=faces&q=80",
    content: "The attention to detail in the design is outstanding. The subtle animations and glow effects add so much value to the user experience.",
    stars: 5
  },
  {
    name: "Emily Rodriguez",
    role: "CEO",
    company: "StartupVision",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&crop=faces&q=80",
    content: "We've tried several platforms before, but nothing compares to this one. The interface is intuitive and the support team is always available.",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-foreground/80">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border border-white/10 transition-all duration-300 hover:shadow-lg overflow-hidden group">
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 left-0 h-1 bg-white transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.stars ? "text-white fill-white" : "text-gray-600"}`}
                    />
                  ))}
                </div>
                
                <p className="mb-6 text-foreground/80 italic">&ldquo;{testimonial.content}&rdquo;</p>
                
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-white/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/70">{testimonial.role}, {testimonial.company}</p>
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
