
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Hublot = () => {
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
              <span className="text-[#D4AF37]">Hublot</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              The Art of Fusion. Bold and innovative timepieces that blend traditional 
              Swiss watchmaking with contemporary materials and avant-garde design.
            </p>
          </motion.div>

          <div className="glass rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#D4AF37]">Coming Soon</h2>
            <p className="text-muted-foreground">
              Our Hublot collection showcase is currently being prepared. 
              Contact us for available timepieces and private viewings.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hublot;
