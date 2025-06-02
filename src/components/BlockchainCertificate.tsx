
import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ExternalLink, Copy, Check, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface BlockchainCertificateProps {
  watchName: string;
  serialNumber: string;
  certificationDate: string;
}

const BlockchainCertificate = ({ watchName, serialNumber, certificationDate }: BlockchainCertificateProps) => {
  const [copied, setCopied] = useState(false);
  
  // Generate a mock blockchain hash
  const blockchainHash = `0x${Math.random().toString(16).substr(2, 40)}`;
  const tokenId = Math.floor(Math.random() * 10000);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(blockchainHash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass rounded-xl p-6 border border-[#D4AF37]/30"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E99B] flex items-center justify-center">
          <Shield className="w-5 h-5 text-black" />
        </div>
        <div>
          <h3 className="font-semibold text-[#D4AF37]">Blockchain Certificate</h3>
          <p className="text-sm text-gray-400">Immutable Authenticity Proof</p>
        </div>
        <Badge className="ml-auto bg-green-500/20 text-green-400 border-green-500/30">
          <Lock className="w-3 h-3 mr-1" />
          Verified
        </Badge>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Timepiece</p>
            <p className="font-medium text-white">{watchName}</p>
          </div>
          <div>
            <p className="text-gray-400">Serial Number</p>
            <p className="font-medium text-white">{serialNumber}</p>
          </div>
          <div>
            <p className="text-gray-400">Token ID</p>
            <p className="font-medium text-white">#{tokenId}</p>
          </div>
          <div>
            <p className="text-gray-400">Certification Date</p>
            <p className="font-medium text-white">{certificationDate}</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4">
          <p className="text-gray-400 text-sm mb-2">Blockchain Hash</p>
          <div className="flex items-center gap-2 p-3 bg-black/30 rounded-lg">
            <code className="text-xs text-[#D4AF37] flex-1 font-mono break-all">
              {blockchainHash}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyToClipboard}
              className="text-gray-400 hover:text-white p-1 h-auto"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View on Blockchain
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10"
          >
            Download Certificate
          </Button>
        </div>
      </div>

      <div className="mt-4 p-3 bg-[#D4AF37]/10 rounded-lg">
        <p className="text-xs text-[#D4AF37]">
          <Shield className="w-3 h-3 inline mr-1" />
          This certificate is permanently stored on the Ethereum blockchain, ensuring 
          immutable proof of authenticity and provenance for resale value protection.
        </p>
      </div>
    </motion.div>
  );
};

export default BlockchainCertificate;
