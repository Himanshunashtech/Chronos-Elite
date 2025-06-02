
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WatchRing = () => {
  const [currentWatch, setCurrentWatch] = useState(0);

  const watches = [
    { 
      name: "Rolex Submariner", 
      price: "$12,500", 
      image: "/lovable-uploads/rolex-submariner.jpg",
      color: "#1a5f1a" 
    },
    { 
      name: "Patek Philippe Nautilus", 
      price: "$85,000", 
      image: "/lovable-uploads/patek-nautilus.jpg",
      color: "#2c5aa0" 
    },
    { 
      name: "AP Royal Oak", 
      price: "$32,000", 
      image: "/lovable-uploads/ap-royaloak.jpg",
      color: "#8b4513" 
    },
    { 
      name: "Richard Mille RM 011", 
      price: "$150,000", 
      image: "/lovable-uploads/rm-011.jpg",
      color: "#ff6347" 
    },
    { 
      name: "Omega Speedmaster", 
      price: "$6,500", 
      image: "/lovable-uploads/omega-speedmaster.jpg",
      color: "#4169e1" 
    },
    { 
      name: "Cartier Santos", 
      price: "$8,200", 
      image: "/lovable-uploads/cartier-santos.jpg",
      color: "#d4af37" 
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWatch((prev) => (prev + 1) % watches.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [watches.length]);

  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Central glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#D4AF37]/20 to-transparent rounded-full animate-pulse" />
      
      {/* Rotating ring container */}
      <motion.div
        className="relative w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {watches.map((watch, index) => {
          const angle = (index * 360) / watches.length;
          const isActive = index === currentWatch;
          
          return (
            <motion.div
              key={watch.name}
              className="absolute"
              style={{
                transform: `rotate(${angle}deg) translateY(-140px) rotate(-${angle}deg)`,
                transformOrigin: "50% 140px",
              }}
              animate={{
                scale: isActive ? 1.2 : 1,
                z: isActive ? 50 : 0,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="glass rounded-xl p-4 text-center min-w-[120px] cursor-pointer"
                style={{
                  borderColor: isActive ? watch.color : "rgba(255,255,255,0.1)",
                  boxShadow: isActive ? `0 0 20px ${watch.color}50` : "none",
                }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setCurrentWatch(index)}
              >
                <div 
                  className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center"
                  style={{ backgroundColor: watch.color + "30" }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
                <h4 className="text-xs font-semibold text-[#D4AF37] mb-1">
                  {watch.name.split(' ')[0]}
                </h4>
                <p className="text-xs text-white font-bold">{watch.price}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center display */}
      <motion.div
        key={currentWatch}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="glass rounded-xl p-6 text-center max-w-[200px]">
          <h3 className="text-lg font-bold text-[#D4AF37] mb-2">
            {watches[currentWatch].name}
          </h3>
          <p className="text-2xl font-bold text-white mb-2">
            {watches[currentWatch].price}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs bg-[#D4AF37] text-black px-3 py-1 rounded-full font-semibold"
          >
            View Details
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default WatchRing;
