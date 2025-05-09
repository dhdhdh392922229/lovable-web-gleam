
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, content }: { icon: React.FC<any>, title: string, content: string }) => (
  <div className="flex items-start">
    <div className="mr-4 p-3 rounded-lg bg-azure-500/10">
      <Icon className="h-5 w-5 text-azure-400" />
    </div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-foreground/70">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-opal-500/5 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-foreground/80">
            Have questions or need assistance? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <ContactInfo 
              icon={Mail} 
              title="Email Us" 
              content="hello@camerapro.com" 
            />
            <ContactInfo 
              icon={Phone} 
              title="Call Us" 
              content="+1 (555) 123-4567" 
            />
            <ContactInfo 
              icon={MapPin} 
              title="Location" 
              content="100 Technology Drive, Suite 300, San Francisco, CA 94103" 
            />

            <div className="pt-6">
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {/* Social media icons as circles */}
                {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-azure-500/10 flex items-center justify-center hover:bg-azure-500/20 transition-opacity"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-azure-500/60 rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Card className="lg:col-span-3 border border-azure-500/10 bg-azure-500/5">
            <CardContent className="p-6">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="border-azure-500/10 bg-azure-500/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="border-azure-500/10 bg-azure-500/5"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Message subject"
                    className="border-azure-500/10 bg-azure-500/5"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={5}
                    className="border-azure-500/10 bg-azure-500/5"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-azure-500 to-opal-500 text-white hover:opacity-90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
