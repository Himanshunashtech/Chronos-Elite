
import { motion } from "framer-motion";
import { ArrowLeft, Star, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Rolex = () => {
  const collections = [
    {
      name: "Submariner",
      description: "The ultimate diving watch, waterproof to 300 meters",
      price: "From $8,550",
      image: "/lovable-uploads/rolex-submariner.jpg",
      features: ["Oystersteel case", "Unidirectional bezel", "Chromalight display"]
    },
    {
      name: "Daytona",
      description: "Born to race, the cosmograph of choice for drivers",
      price: "From $14,550",
      image: "/lovable-uploads/rolex-daytona.jpg",
      features: ["Chronograph movement", "Tachymetric scale", "Oysterflex bracelet"]
    },
    {
      name: "GMT-Master II",
      description: "The traveler's watch with dual time zone display",
      price: "From $10,350",
      image: "/lovable-uploads/rolex-gmt.jpg",
      features: ["GMT function", "Bidirectional bezel", "Oyster bracelet"]
    },
    {
      name: "Datejust",
      description: "The epitome of classic elegance and precision",
      price: "From $7,650",
      image: "/lovable-uploads/rolex-datejust.jpg",
      features: ["Date display", "Cyclops lens", "Jubilee bracelet"]
    },
    {
      name: "Explorer",
      description: "Engineered for extreme conditions and exploration",
      price: "From $6,550",
      image: "/lovable-uploads/rolex-explorer.jpg",
      features: ["3-6-9 dial", "Chromalight", "Oyster case"]
    },
    {
      name: "Yacht-Master",
      description: "The regatta chronograph for sailing enthusiasts",
      price: "From $11,750",
      image: "/lovable-uploads/rolex-yacht-master.jpg",
      features: ["Regatta timer", "Oysterflex bracelet", "Waterproof to 100m"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container px-4">
          {/* Back Button */}
          <Link to="/collections" className="inline-flex items-center text-[#D4AF37] hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collections
          </Link>

          {/* Brand Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#D4AF37]">Rolex</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A crown for every achievement. Since 1905, Rolex has been synonymous with excellence, 
              precision, and prestige. Discover our collection of iconic timepieces that have 
              accompanied explorers, athletes, and visionaries throughout history.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <Star className="w-5 h-5 text-[#D4AF37] mr-2" />
                <span className="text-sm">Swiss Made</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#D4AF37] mr-2" />
                <span className="text-sm">Superlative Chronometer</span>
              </div>
              <div className="flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#D4AF37] mr-2" />
                <span className="text-sm">Since 1905</span>
              </div>
            </div>
          </motion.div>

          {/* Collections Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {collections.map((watch, index) => (
              <div key={watch.name} className="glass glass-hover rounded-xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-[#D4AF37]/20 to-black/40 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#D4AF37]">{watch.name}</span>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{watch.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{watch.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-[#D4AF37]">Key Features:</h4>
                    <ul className="space-y-1">
                      {watch.features.map((feature) => (
                        <li key={feature} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1 h-1 bg-[#D4AF37] rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#D4AF37]">{watch.price}</span>
                    <Button size="sm" className="bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black">
                      Inquire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Brand Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">The Crown Legacy</h2>
                <p className="text-muted-foreground mb-4">
                  Founded in London in 1905 by Hans Wilsdorf and Alfred Davis, Rolex moved to Geneva 
                  and became synonymous with precision and reliability. The brand has been at the 
                  forefront of watchmaking innovation for over a century.
                </p>
                <p className="text-muted-foreground mb-4">
                  From the first waterproof wristwatch to the perpetual, self-winding rotor, 
                  Rolex has consistently pushed the boundaries of horological excellence. Each 
                  timepiece is a testament to the brand's commitment to precision, performance, and prestige.
                </p>
                <p className="text-muted-foreground">
                  Today, Rolex continues to be the watch of choice for explorers, athletes, and 
                  achievers worldwide, maintaining its position as the most recognized luxury watch brand.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-black/40 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">1905</div>
                  <div className="text-muted-foreground">Founded</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rolex;
