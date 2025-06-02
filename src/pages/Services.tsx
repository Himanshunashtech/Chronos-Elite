
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Wrench, TrendingUp, RefreshCw, Eye, Award, Clock, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Authentication & Certification",
      description: "Expert verification of timepiece authenticity using advanced technology and decades of experience.",
      features: ["Certificate of Authenticity", "Detailed Condition Report", "Provenance Documentation", "Insurance Valuation"],
      price: "From $500"
    },
    {
      icon: Wrench,
      title: "Restoration & Servicing",
      description: "Complete restoration services performed by certified master watchmakers using original components.",
      features: ["Movement Overhaul", "Case Refinishing", "Dial Restoration", "Bracelet Refurbishment"],
      price: "From $800"
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic guidance on building a valuable watch collection with strong appreciation potential.",
      features: ["Market Analysis", "Portfolio Review", "Acquisition Strategy", "Exit Planning"],
      price: "From $1,500"
    },
    {
      icon: RefreshCw,
      title: "Consignment Services",
      description: "Sell your timepieces through our exclusive network with maximum exposure and returns.",
      features: ["Global Marketing", "Professional Photography", "Secure Storage", "Expert Pricing"],
      price: "15% Commission"
    },
    {
      icon: Eye,
      title: "Appraisal Services",
      description: "Professional appraisals for insurance, estate, or resale purposes by certified appraisers.",
      features: ["Insurance Appraisals", "Estate Valuations", "Resale Assessments", "Written Reports"],
      price: "From $300"
    },
    {
      icon: Award,
      title: "Collector Services",
      description: "Exclusive services for serious collectors including sourcing rare pieces and private sales.",
      features: ["Rare Watch Sourcing", "Private Sales", "Collection Management", "VIP Access"],
      price: "Custom Pricing"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We begin with a detailed discussion of your needs and objectives."
    },
    {
      step: "02",
      title: "Expert Assessment",
      description: "Our specialists examine your timepiece using state-of-the-art equipment."
    },
    {
      step: "03",
      title: "Detailed Proposal",
      description: "Receive a comprehensive proposal with timeline and transparent pricing."
    },
    {
      step: "04",
      title: "Service Execution",
      description: "Our master craftsmen perform the work with meticulous attention to detail."
    },
    {
      step: "05",
      title: "Quality Assurance",
      description: "Rigorous testing and quality control before returning your timepiece."
    }
  ];

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
              <span className="text-[#D4AF37]">Premium Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive horological services backed by decades of expertise and an unwavering commitment to excellence.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass glass-hover rounded-xl p-8 transform hover:scale-105 transition-all duration-300"
              >
                <service.icon className="w-12 h-12 text-[#D4AF37] mb-6" />
                <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-white/10 pt-4">
                  <p className="text-[#D4AF37] font-bold mb-4">{service.price}</p>
                  <Link to="/book-consultation">
                    <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black hover:opacity-90">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#D4AF37]">
              Our Service Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processes.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-[#D4AF37]">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            <div className="text-center">
              <Clock className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">10,000+</div>
              <div className="text-sm text-muted-foreground">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">50,000+</div>
              <div className="text-sm text-muted-foreground">Watches Serviced</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-[#D4AF37] mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Authentic Guarantee</div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="glass rounded-xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our specialists today to discuss your timepiece needs and schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-consultation">
                <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
