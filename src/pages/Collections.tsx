
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Collections = () => {
  const brands = [
    {
      name: "Rolex",
      description: "The crown of Swiss watchmaking, synonymous with precision and prestige",
      image: "/lovable-uploads/rolex-collection.jpg",
      path: "/collections/rolex",
      specialties: ["Submariner", "Daytona", "GMT-Master II", "Datejust"]
    },
    {
      name: "Patek Philippe",
      description: "Uncompromising quality and timeless elegance since 1839",
      image: "/lovable-uploads/patek-collection.jpg",
      path: "/collections/patek-philippe",
      specialties: ["Nautilus", "Aquanaut", "Calatrava", "Complications"]
    },
    {
      name: "Audemars Piguet",
      description: "Masters of complications and the iconic Royal Oak",
      image: "/lovable-uploads/ap-collection.jpg",
      path: "/collections/audemars-piguet",
      specialties: ["Royal Oak", "Royal Oak Offshore", "Millenary", "Code 11.59"]
    },
    {
      name: "Richard Mille",
      description: "Revolutionary materials and cutting-edge horological innovation",
      image: "/lovable-uploads/rm-collection.jpg",
      path: "/collections/richard-mille",
      specialties: ["RM 011", "RM 035", "RM 055", "Tourbillon Collection"]
    },
    {
      name: "Vacheron Constantin",
      description: "The oldest Swiss watch manufacturer with uninterrupted production",
      image: "/lovable-uploads/vc-collection.jpg",
      path: "/collections/vacheron-constantin",
      specialties: ["Patrimony", "Traditionnelle", "Overseas", "Métiers d'Art"]
    },
    {
      name: "Omega",
      description: "Precision timepieces with a rich history in space and sports",
      image: "/lovable-uploads/omega-collection.jpg",
      path: "/collections/omega",
      specialties: ["Speedmaster", "Seamaster", "De Ville", "Constellation"]
    },
    {
      name: "Cartier",
      description: "The jeweler of kings and king of jewelers",
      image: "/lovable-uploads/cartier-collection.jpg",
      path: "/collections/cartier",
      specialties: ["Santos", "Tank", "Ballon Bleu", "Panthère"]
    },
    {
      name: "Jaeger-LeCoultre",
      description: "The Grande Maison of the Vallée de Joux",
      image: "/lovable-uploads/jlc-collection.jpg",
      path: "/collections/jaeger-lecoultre",
      specialties: ["Reverso", "Master Control", "Atmos", "Duomètre"]
    },
    {
      name: "Hublot",
      description: "The art of fusion in extraordinary timepieces",
      image: "/lovable-uploads/hublot-collection.jpg",
      path: "/collections/hublot",
      specialties: ["Big Bang", "Classic Fusion", "Spirit of Big Bang", "MP Collection"]
    },
    {
      name: "TAG Heuer",
      description: "Swiss avant-garde precision since 1860",
      image: "/lovable-uploads/tag-collection.jpg",
      path: "/collections/tag-heuer",
      specialties: ["Monaco", "Carrera", "Formula 1", "Aquaracer"]
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
              <span className="text-[#D4AF37]">Luxury Collections</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our curated selection of the world's most prestigious timepieces, 
              each representing the pinnacle of horological excellence and craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass glass-hover rounded-xl overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-[#D4AF37]/20 to-black/40 flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#D4AF37]">{brand.name}</span>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#D4AF37]">{brand.name}</h3>
                  <p className="text-muted-foreground mb-4">{brand.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2 text-white">Signature Models:</h4>
                    <div className="flex flex-wrap gap-2">
                      {brand.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="text-xs px-2 py-1 bg-white/10 rounded-full text-[#D4AF37]"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link to={brand.path}>
                    <Button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] text-black hover:opacity-90">
                      Explore Collection
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
