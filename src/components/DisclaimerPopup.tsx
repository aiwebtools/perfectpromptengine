
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from "sonner";
import { Shield, Sparkles, X } from 'lucide-react';

interface DisclaimerPopupProps {
  onClose: () => void;
}

const DisclaimerPopup = ({ onClose }: DisclaimerPopupProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleAgree = () => {
    setIsAnimating(true);
    localStorage.setItem('disclaimerAgreed', 'true');
    
    setTimeout(() => {
      onClose();
      toast.success("Welcome to Perfect Prompt Engine!", {
        description: "Get ready to transform your AI interactions!"
      });
    }, 600);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-md overflow-hidden neo-blur rounded-xl"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-cyber-purple/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyber-blue/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 p-6">
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 mr-2 text-cyber-blue" />
            <h2 className="text-2xl font-bold text-gradient cyber-glow">
              Disclaimer
            </h2>
          </div>
          
          <div className="mb-6 space-y-4 text-zinc-300 text-sm">
            <p>
              By using Perfect Prompt Engine, you acknowledge and agree to our terms of service.
              This tool is provided for educational and productivity enhancement purposes only.
            </p>
            <p>
              We make no guarantees regarding the accuracy of AI-generated content.
              Users are solely responsible for reviewing any information generated
              through this tool and for complying with all applicable laws.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleAgree}
            className={`w-full cyber-button group ${isAnimating ? 'animate-pulse' : ''}`}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-bold tracking-wide">I AGREE</span>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DisclaimerPopup;
