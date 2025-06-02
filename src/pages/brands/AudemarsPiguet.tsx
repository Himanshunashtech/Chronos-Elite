
import { motion } from "framer-motion";
import { ArrowLeft, Star, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const AudemarsPiguet = () => {
  const collections = [
    {
      name: "Royal Oak",
      description: "The iconic octagonal bezel design that revolutionized luxury sports watches",
      price: "From $18,500",
      features: ["Tapisserie dial", "Integrated bracelet", "Self-winding movement"]
    },
    {
      name: "Royal Oak Offshore",
      description: "Bold and powerful, the ultimate expression of contemporary luxury",
      price: "From $22,800",
      features: ["Chronograph function", "Rubber strap", "Water resistant to 100m"]
    },
    {
      name: "Millenary",
      description: "Elliptical case showcasing the beauty of mechanical movement",
      price: "From $15,600",
      features: ["Oval case", "Open-worked dial", "Hand-wound movement"]
    },
    {
      name: "Code 11.59",
      description: "Contemporary round case design with architectural inspiration",
      price: "From $25,300",
      features: ["Round case", "Chronograph", "Interchangeable straps"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-20">
        <div className="container px-4">
          <Link to="/collections" className="inline-flex items-center text-[#D4AF37] hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Collections
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#D4AF37]">Audemars Piguet</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Masters of complications since 1875. Audemars Piguet has consistently pushed the 
              boundaries of haute horlogerie, creating timepieces that blend traditional Swiss 
              craftsmanship with avant-garde design and technical innovation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <Star className="w-5 h-5 text-[#D4AF37] mr-2" />
                <span className="text-sm">Vallée de Joux</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#D4AF37] mr-2" />
                <span className="text-sm">Independent</span>
              </div>
              <div className="flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#D4AF37] mr-2" />
                <span className="text-sm">Since 1875</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {collections.map((watch, index) => (
              <div key={watch.name} className="glass glass-hover rounded-xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-[#D4AF37]/20 to-black/40 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#D4AF37]">{watch.name}</span>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#D4AF37]">Innovation & Tradition</h2>
                <p className="text-muted-foreground mb-4">
                  From the remote Vallée de Joux, Audemars Piguet has been creating extraordinary 
                  timepieces for nearly 150 years. The manufacture has remained in the hands of 
                  the founding families, ensuring continuity of vision and values.
                </p>
                <p className="text-muted-foreground">
                  The brand revolutionized the industry with the Royal Oak in 1972, the first 
                  luxury sports watch in stainless steel, designed by Gérald Genta. This iconic 
                  timepiece established a new category and remains the cornerstone of the collection.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#D4AF37]/20 to-black/40 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">1875</div>
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

export default AudemarsPiguet;
