
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Clock, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Link } from "react-router-dom";
import WatchRing from "@/components/WatchRing";

const Index = () => {
  const featuredBrands = [
    { name: "Rolex", logo: "/lovable-uploads/rolex-logo.png" },
    { name: "Patek Philippe", logo: "/lovable-uploads/patek-logo.png" },
    { name: "Audemars Piguet", logo: "/lovable-uploads/ap-logo.png" },
    { name: "Richard Mille", logo: "/lovable-uploads/rm-logo.png" },
    { name: "Omega", logo: "/lovable-uploads/omega-logo.png" },
    { name: "Cartier", logo: "/lovable-uploads/cartier-logo.png" },
  ];

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden">
      <Navigation />
      
      {/* Enhanced Hero Section with 3D Watch Ring */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20 min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-black" />
        
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full glass relative z-10"
        >
          <span className="text-sm font-medium">
            <Crown className="w-4 h-4 inline-block mr-2" />
            Authenticated Luxury Timepieces
          </span>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-normal mb-4 tracking-tight text-left">
              <span className="text-gray-200">
                <TextGenerateEffect words="Where Time Becomes" />
              </span>
              <br />
              <span className="text-[#D4AF37] font-medium">
                <TextGenerateEffect words="Timeless Luxury" />
              </span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-left"
            >
              Discover the world's most prestigious timepieces. From vintage Rolex to contemporary Richard Mille, each watch tells a story of craftsmanship and excellence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <Link to="/collections">
                <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black hover:opacity-90 transform hover:scale-105 transition-all duration-300">
                  Explore Collections
                </Button>
              </Link>
              <Link to="/book-consultation">
                <Button size="lg" variant="link" className="text-white hover:text-[#D4AF37] transition-colors">
                  Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* 3D Watch Ring */}
          <div className="flex justify-center lg:justify-end">
            <WatchRing />
          </div>
        </div>
      </motion.section>

      {/* Featured Brands */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
            Prestigious Brands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in the world's most coveted watch manufacturers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {featuredBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="h-16 flex items-center justify-center mb-2">
                <span className="text-lg font-semibold text-[#D4AF37]">
                  {brand.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass glass-hover rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
          >
            <Shield className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Authenticated Pieces</h3>
            <p className="text-muted-foreground">
              Every timepiece undergoes rigorous authentication by our certified experts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass glass-hover rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
          >
            <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Premium Service</h3>
            <p className="text-muted-foreground">
              White-glove service from selection to delivery and beyond
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass glass-hover rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300"
          >
            <Clock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Investment Value</h3>
            <p className="text-muted-foreground">
              Expert guidance on timepieces that appreciate in value over time
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Begin Your Horological Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a private consultation with our watch experts and discover the perfect timepiece for your collection.
          </p>
          <Link to="/book-consultation">
            <Button size="lg" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black transform hover:scale-105 transition-all duration-300">
              Schedule Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
