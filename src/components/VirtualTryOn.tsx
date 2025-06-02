
import { useState, useRef, useEffect } from "react";
import { Camera, X, Loader } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface VirtualTryOnProps {
  watchImage: string;
  watchName: string;
  onClose: () => void;
}

const VirtualTryOn = ({ watchImage, watchName, onClose }: VirtualTryOnProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasCamera, setHasCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setHasCamera(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Camera access denied:', error);
      setIsLoading(false);
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      const ctx = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      ctx?.drawImage(video, 0, 0);
      
      // Here you would integrate with AR library to overlay the watch
      const dataURL = canvas.toDataURL('image/png');
      
      // For demo purposes, just download the image
      const link = document.createElement('a');
      link.download = `${watchName}_try_on.png`;
      link.href = dataURL;
      link.click();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
    >
      <div className="glass rounded-xl p-6 max-w-2xl w-full relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:bg-white/10"
        >
          <X className="w-6 h-6" />
        </Button>

        <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 text-center">
          Virtual Try-On: {watchName}
        </h3>

        {isLoading ? (
          <div className="flex items-center justify-center h-96">
            <Loader className="w-8 h-8 animate-spin text-[#D4AF37]" />
            <span className="ml-2 text-white">Accessing camera...</span>
          </div>
        ) : hasCamera ? (
          <div className="relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-96 object-cover rounded-lg"
            />
            <canvas ref={canvasRef} className="hidden" />
            
            {/* Virtual watch overlay */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <img
                src={watchImage}
                alt={watchName}
                className="w-32 h-32 object-contain opacity-80"
                style={{ filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))' }}
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
              <Button onClick={capturePhoto} className="bg-[#D4AF37] text-black">
                <Camera className="w-4 h-4 mr-2" />
                Capture
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-white">Camera access required for virtual try-on</p>
            <Button onClick={startCamera} className="mt-4 bg-[#D4AF37] text-black">
              Enable Camera
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default VirtualTryOn;
