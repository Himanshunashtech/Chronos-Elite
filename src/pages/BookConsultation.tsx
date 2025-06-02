
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Mail, Phone, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useState } from "react";

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    interest: "",
    message: ""
  });

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const interests = [
    "Rolex", "Patek Philippe", "Audemars Piguet", "Richard Mille",
    "Vacheron Constantin", "Omega", "Cartier", "Jaeger-LeCoultre",
    "Hublot", "TAG Heuer", "Investment Guidance", "Watch Servicing"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation booking:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container px-4">
          <Link to="/" className="inline-flex items-center text-[#D4AF37] hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#D4AF37]">Book Consultation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule a private appointment with our horological experts. Experience our timepieces firsthand and receive personalized guidance for your collection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consultation Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#D4AF37]">Schedule Your Visit</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-white/5 border-white/20"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <Input
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Preferred Time
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white/5 border border-white/20 rounded-md text-white"
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time} className="bg-black">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Area of Interest
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-white/5 border border-white/20 rounded-md text-white"
                  >
                    <option value="">Select your interest</option>
                    {interests.map((interest) => (
                      <option key={interest} value={interest} className="bg-black">
                        {interest}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Additional Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your preferences, budget range, or any specific timepieces you're interested in..."
                    className="bg-white/5 border-white/20 min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black hover:opacity-90 transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  Schedule Consultation
                </Button>
              </form>
            </motion.div>

            {/* Consultation Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">What to Expect</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                    Private viewing of our exclusive timepiece collection
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                    Expert authentication and provenance verification
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                    Personalized investment and collection guidance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0" />
                    Complimentary champagne and refreshments
                  </li>
                </ul>
              </div>

              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Contact Information</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    <strong>Geneva Flagship:</strong><br />
                    Rue du Rhône 123, 1204 Geneva<br />
                    +41 22 123 4567
                  </p>
                  <p className="text-muted-foreground">
                    <strong>London Boutique:</strong><br />
                    Bond Street 456, London W1S 2YY<br />
                    +44 20 7123 4567
                  </p>
                  <p className="text-muted-foreground">
                    <strong>New York Showroom:</strong><br />
                    Fifth Avenue 789, New York NY 10022<br />
                    +1 212 123 4567
                  </p>
                </div>
              </div>

              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Opening Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Monday - Friday:</strong> 10:00 AM - 7:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
                  <p><strong>Sunday:</strong> 12:00 PM - 5:00 PM</p>
                  <p className="text-sm text-[#D4AF37] mt-3">
                    *Private appointments available outside regular hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookConsultation;
