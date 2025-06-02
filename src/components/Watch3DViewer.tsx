
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "./ui/button";

interface Watch3DViewerProps {
  watchName: string;
  watchImage: string;
}

const Watch3DViewer = ({ watchName, watchImage }: Watch3DViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    setRotation(prev => ({
      x: prev.x + deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));

    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setRotation({ x: 0, y: 0 });
    setZoom(1);
  };

  const handleZoom = (direction: 'in' | 'out') => {
    setZoom(prev => {
      const newZoom = direction === 'in' ? prev * 1.2 : prev / 1.2;
      return Math.max(0.5, Math.min(3, newZoom));
    });
  };

  return (
    <div className="glass rounded-xl p-6">
      <h3 className="text-xl font-semibold text-[#D4AF37] mb-4 text-center">
        360° View: {watchName}
      </h3>
      
      <div
        ref={containerRef}
        className="relative w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `scale(${zoom}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: 'preserve-3d'
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="relative">
            {/* Main watch image */}
            <motion.img
              src={watchImage}
              alt={watchName}
              className="w-64 h-64 object-contain drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(212, 175, 55, 0.3))'
              }}
              animate={{
                rotateY: rotation.y,
                rotateX: rotation.x
              }}
            />
            
            {/* Reflection effect */}
            <div 
              className="absolute top-full left-0 w-full h-32 opacity-20"
              style={{
                background: `linear-gradient(to bottom, 
                  url(${watchImage}) center/contain no-repeat, 
                  transparent)`,
                transform: 'scaleY(-1)',
                maskImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))'
              }}
            />
          </div>
        </motion.div>

        {/* Lighting effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-white/10 to-transparent rounded-full blur-xl" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-radial from-[#D4AF37]/20 to-transparent rounded-full blur-lg" />
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleZoom('out')}
          className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
        >
          <ZoomOut className="w-4 h-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={resetView}
          className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleZoom('in')}
          className="border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
        >
          <ZoomIn className="w-4 h-4" />
        </Button>
      </div>

      <p className="text-sm text-gray-400 text-center mt-2">
        Click and drag to rotate • Scroll to zoom
      </p>
    </div>
  );
};

export default Watch3DViewer;
