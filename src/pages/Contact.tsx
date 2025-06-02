
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const locations = [
    {
      city: "Geneva",
      address: "12 Rue du Rhône, 1204 Geneva, Switzerland",
      phone: "+41 22 123 4567",
      email: "geneva@chronoselite.com",
      hours: "Mon-Sat: 10:00-19:00"
    },
    {
      city: "London",
      address: "45 Bond Street, Mayfair, London W1S 4QT, UK",
      phone: "+44 20 7123 4567",
      email: "london@chronoselite.com",
      hours: "Mon-Sat: 10:00-18:00"
    },
    {
      city: "New York",
      address: "789 Madison Avenue, New York, NY 10065, USA",
      phone: "+1 212 123 4567",
      email: "newyork@chronoselite.com",
      hours: "Mon-Sat: 10:00-19:00"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#D4AF37]">Contact Us</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to begin your horological journey? Our experts are here to assist you 
              in finding the perfect timepiece for your collection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Your first name" className="bg-white/5 border-white/10" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Your last name" className="bg-white/5 border-white/10" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-white/5 border-white/10" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input placeholder="Your phone number" className="bg-white/5 border-white/10" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Interest</label>
                  <select className="w-full p-3 rounded-md bg-white/5 border border-white/10 text-white">
                    <option value="">Select your interest</option>
                    <option value="buying">Buying a Watch</option>
                    <option value="selling">Selling a Watch</option>
                    <option value="authentication">Authentication Service</option>
                    <option value="restoration">Restoration Service</option>
                    <option value="investment">Investment Advisory</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your watch interests or requirements..." 
                    className="bg-white/5 border-white/10 min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black">
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">Schedule a Consultation</h2>
                <p className="text-muted-foreground mb-6">
                  Experience our timepieces in person. Book a private appointment at one of our exclusive showrooms.
                </p>
                <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black">
                  Book Appointment
                </Button>
              </div>

              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">Global Headquarters</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-[#D4AF37] mr-3" />
                    <span>12 Rue du Rhône, Geneva, Switzerland</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#D4AF37] mr-3" />
                    <span>+41 22 123 4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#D4AF37] mr-3" />
                    <span>contact@chronoselite.com</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-[#D4AF37] mr-3" />
                    <span>Mon-Sat: 10:00-19:00 CET</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">Our Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {locations.map((location) => (
                <div key={location.city} className="glass glass-hover rounded-xl p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-[#D4AF37]">{location.city}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start justify-center">
                      <MapPin className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{location.address}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="w-4 h-4 text-[#D4AF37] mr-2" />
                      <span className="text-muted-foreground">{location.phone}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#D4AF37] mr-2" />
                      <span className="text-muted-foreground">{location.email}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[#D4AF37] mr-2" />
                      <span className="text-muted-foreground">{location.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
