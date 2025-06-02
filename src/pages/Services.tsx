
import { motion } from "framer-motion";
import { Shield, Search, Wrench, TrendingUp, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Acquisition & Sourcing",
      description: "We locate rare and exceptional timepieces from trusted networks worldwide",
      features: [
        "Global dealer network access",
        "Private collection sourcing",
        "Auction house partnerships",
        "Vintage watch specialists"
      ]
    },
    {
      icon: Shield,
      title: "Authentication & Appraisal",
      description: "Comprehensive verification using state-of-the-art technology and expertise",
      features: [
        "Multi-point authentication process",
        "Certified appraisal reports",
        "Provenance documentation",
        "Insurance valuations"
      ]
    },
    {
      icon: Wrench,
      title: "Restoration & Service",
      description: "Master craftsmen restore timepieces to their original glory",
      features: [
        "Swiss-trained watchmakers",
        "Original parts sourcing",
        "Movement servicing",
        "Case and dial restoration"
      ]
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Expert guidance on building a valuable watch portfolio",
      features: [
        "Market trend analysis",
        "Portfolio diversification",
        "ROI projections",
        "Exit strategy planning"
      ]
    },
    {
      icon: Heart,
      title: "Consignment Services",
      description: "Sell your timepieces through our prestigious platform",
      features: [
        "Professional photography",
        "Marketing expertise",
        "Competitive commission rates",
        "Global buyer network"
      ]
    },
    {
      icon: Clock,
      title: "Concierge Services",
      description: "Personalized white-glove service for discerning collectors",
      features: [
        "Private viewings",
        "Home delivery",
        "Watch collection management",
        "Maintenance scheduling"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We begin with an in-depth consultation to understand your preferences, requirements, and investment goals."
    },
    {
      step: "02",
      title: "Sourcing",
      description: "Our global network of dealers and collectors helps us locate the perfect timepiece for your collection."
    },
    {
      step: "03",
      title: "Authentication",
      description: "Every watch undergoes rigorous authentication by our certified experts using advanced technology."
    },
    {
      step: "04",
      title: "Delivery",
      description: "Your timepiece is delivered with full documentation, warranty, and our ongoing support."
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
              <span className="text-[#D4AF37]">Exceptional Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From acquisition to authentication, restoration to investment advisory, 
              we provide comprehensive services for the discerning watch collector.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {services.map((service, index) => (
              <div key={service.title} className="glass glass-hover rounded-xl p-8">
                <service.icon className="w-12 h-12 text-[#D4AF37] mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-[#D4AF37]">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-black">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-8 md:p-12 mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">Unmatched Expertise</h2>
                <p className="text-muted-foreground mb-4">
                  Our team combines decades of horological expertise with cutting-edge technology 
                  to provide services that exceed the expectations of the most discerning collectors.
                </p>
                <p className="text-muted-foreground mb-6">
                  From Swiss-trained master watchmakers to certified gemologists, every member 
                  of our team brings specialized knowledge and passion for mechanical excellence.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-[#D4AF37] mr-3" />
                    <span>Certified by Swiss Watch Industry Federation</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-[#D4AF37] mr-3" />
                    <span>25+ years combined experience</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-[#D4AF37] mr-3" />
                    <span>100% authentication accuracy rate</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-black/40 rounded-lg p-8 flex items-center justify-center">
                <Wrench className="w-24 h-24 text-[#D4AF37]" />
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a consultation with our experts and discover how we can serve your horological needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
