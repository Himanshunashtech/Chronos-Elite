
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Clock, Crown, Heart, Star, Gem, Zap, Globe, Users, TrendingUp } from "lucide-react";
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

  const collectionsData = [
    { name: "Vintage Classics", count: "120+", description: "Timeless pieces from the golden era" },
    { name: "Modern Luxury", count: "200+", description: "Contemporary masterpieces" },
    { name: "Limited Editions", count: "50+", description: "Rare and exclusive timepieces" },
    { name: "Investment Grade", count: "80+", description: "Appreciating value watches" },
  ];

  const testimonialsData = [
    { name: "Alexander M.", text: "Exceptional service and authentic pieces. My Daytona purchase was seamless.", rating: 5 },
    { name: "Victoria S.", text: "The most luxurious watch buying experience. Highly recommended.", rating: 5 },
    { name: "James R.", text: "Expert knowledge and white-glove service from start to finish.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden relative">
      <Navigation />
      
      {/* Enhanced Hero Section with 3D Watch Ring */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative container px-4 pt-40 pb-20 min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-black" />
        
        {/* Enhanced floating particles with 3D effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 6px rgba(212, 175, 55, 0.8)',
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Ambient light effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
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
              <motion.span 
                className="text-[#D4AF37] font-medium"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(212, 175, 55, 0.5)",
                    "0 0 20px rgba(212, 175, 55, 0.8)",
                    "0 0 10px rgba(212, 175, 55, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <TextGenerateEffect words="Timeless Luxury" />
              </motion.span>
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
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black hover:opacity-90 transform hover:scale-105 transition-all duration-300"
                >
                  Explore Collections
                </Button>
              </Link>
              <Link to="/book-consultation">
                <Button 
                  size="lg" 
                  variant="link" 
                  className="text-white hover:text-[#D4AF37] transition-colors"
                >
                  Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Enhanced 3D Watch Ring */}
          <div className="flex justify-center lg:justify-end">
            <WatchRing />
          </div>
        </div>
      </motion.section>

      {/* Collections Overview Section */}
      <section className="container px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
            Curated Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully selected timepieces across different categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collectionsData.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover rounded-xl p-6 text-center group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(212, 175, 55, 0.1), transparent)",
                    "linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent)",
                    "linear-gradient(225deg, rgba(212, 175, 55, 0.1), transparent)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="text-3xl font-bold text-[#D4AF37] mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {collection.count}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 relative z-10">{collection.name}</h3>
              <p className="text-muted-foreground text-sm relative z-10">{collection.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Brands with 3D hover effects */}
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
              className="glass glass-hover rounded-lg p-6 text-center transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ 
                rotateY: 15,
                rotateX: 5,
                z: 50 
              }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="h-16 flex items-center justify-center mb-2 relative z-10">
                <motion.span 
                  className="text-lg font-semibold text-[#D4AF37] group-hover:text-[#F4E99B] transition-colors"
                  whileHover={{ scale: 1.1 }}
                  style={{ 
                    textShadow: "0 0 10px rgba(212, 175, 55, 0.5)" 
                  }}
                >
                  {brand.name}
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics Section with 3D counters */}
      <section className="container px-4 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {[
            { icon: Users, number: "10,000+", label: "Happy Clients" },
            { icon: Star, number: "50,000+", label: "Watches Sold" },
            { icon: Globe, number: "150+", label: "Countries Served" },
            { icon: TrendingUp, number: "98%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="text-center group"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D4AF37]/10 mb-4 group-hover:bg-[#D4AF37]/20 transition-colors"
                whileHover={{ 
                  scale: 1.2,
                  rotateY: 360,
                }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-[#D4AF37]" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-[#D4AF37] mb-2"
                whileHover={{ scale: 1.1 }}
                animate={{
                  textShadow: [
                    "0 0 5px rgba(212, 175, 55, 0.3)",
                    "0 0 15px rgba(212, 175, 55, 0.6)",
                    "0 0 5px rgba(212, 175, 55, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {stat.number}
              </motion.div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section with enhanced 3D animations */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass glass-hover rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ 
              rotateX: 10,
              rotateY: 10,
              z: 50 
            }}
            style={{ 
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Shield className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-3 relative z-10">Authenticated Pieces</h3>
            <p className="text-muted-foreground relative z-10">
              Every timepiece undergoes rigorous authentication by our certified experts
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass glass-hover rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ 
              rotateX: 10,
              rotateY: -10,
              z: 50 
            }}
            style={{ 
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-3 relative z-10">Premium Service</h3>
            <p className="text-muted-foreground relative z-10">
              White-glove service from selection to delivery and beyond
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass glass-hover rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ 
              rotateX: -10,
              rotateY: 10,
              z: 50 
            }}
            style={{ 
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="relative z-10"
            >
              <Clock className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-3 relative z-10">Investment Value</h3>
            <p className="text-muted-foreground relative z-10">
              Expert guidance on timepieces that appreciate in value over time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section with 3D cards */}
      <section className="container px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#D4AF37]">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from our valued collectors and enthusiasts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass glass-hover rounded-xl p-6 relative overflow-hidden group"
              whileHover={{ 
                rotateY: 5,
                scale: 1.05,
                z: 30 
              }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="flex mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (index * 0.2) + (i * 0.1) }}
                  >
                    <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-muted-foreground mb-4 relative z-10">"{testimonial.text}"</p>
              <p className="font-semibold text-[#D4AF37] relative z-10">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section with 3D effects */}
      <section className="container px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0A0A]/80 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative z-10 overflow-hidden group"
          whileHover={{ 
            scale: 1.02,
            rotateX: 2,
            rotateY: 2 
          }}
          style={{ 
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}
        >
          {/* Enhanced background animation */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, #D4AF37 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, #D4AF37 0%, transparent 50%)",
                "radial-gradient(circle at 40% 50%, #D4AF37 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
            Begin Your Horological Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
            Schedule a private consultation with our watch experts and discover the perfect timepiece for your collection.
          </p>
          <Link to="/book-consultation">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black transform transition-all duration-300 relative z-10"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
