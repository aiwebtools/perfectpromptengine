
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Key } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const elements = containerRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const depth = parseFloat((el as HTMLElement).dataset.depth || '0.1');
        const moveX = (x - 0.5) * depth * 40;
        const moveY = (y - 0.5) * depth * 40;
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16" id="hero">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-blue opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyber-purple opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-container relative z-10" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="chip bg-cyber-blue/20 text-cyber-blue border border-cyber-blue/30">
                AI PROMPT OPTIMIZATION
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="block mb-2">Break the Chains of</span>
              <span className="text-gradient cyber-glow animate-pulse-glow">Prompt Limitations</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-zinc-300 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Transform your basic prompts into powerful, detailed instructions that unlock AI's full potential. Get more precise, comprehensive responses every time.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
                href="https://chatgpt.com/g/g-FA8RUdQ42-perfect-prompt-engine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button text-base sm:text-lg py-3 px-8"
              >
                <Zap className="inline-block mr-2 -mt-1" size={18} />
                USE PERFECT PROMPT ENGINE NOW
              </a>
              <a 
                href="#how-it-works" 
                className="px-6 py-3 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-base sm:text-lg"
              >
                Learn More
              </a>
            </motion.div>
          </div>
          
          <div className="perspective hidden lg:block">
            <motion.div
              initial={{ opacity: 0, rotateY: 30, rotateX: 15 }}
              animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="relative preserve-3d"
            >
              <div className="parallax-element" data-depth="0.2">
                <div className="absolute -top-14 -right-10 w-24 h-24 bg-cyber-purple/30 rounded-full blur-xl"></div>
              </div>
              <div className="parallax-element" data-depth="0.3">
                <div className="absolute -bottom-10 -left-5 w-20 h-20 bg-cyber-blue/30 rounded-full blur-xl"></div>
              </div>
              
              <div className="glass-panel rounded-xl p-6 border border-white/20 shadow-2xl">
                <div className="mb-4 flex items-center">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="ml-auto flex items-center">
                    <Sparkles className="text-cyber-blue mr-2" size={16} />
                    <span className="text-xs text-cyber-blue">Perfect Prompt Engine</span>
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-zinc-400 text-sm mb-2">User prompt:</p>
                    <p className="text-white">Tell me about quantum computing</p>
                  </div>
                  
                  <div className="glass-panel rounded-lg p-4 border-cyber-blue/20">
                    <p className="text-cyber-blue text-sm mb-2">Optimized prompt:</p>
                    <p className="text-white">
                      <span className="text-gradient font-medium">Provide a comprehensive explanation of quantum computing</span>, covering its fundamental principles, how qubits differ from classical bits, key quantum algorithms (Shor's, Grover's), current technological implementations, major challenges in the field, potential real-world applications, and how it might revolutionize fields like cryptography, medicine, and artificial intelligence. Include both technical aspects and practical implications for the future.
                    </p>
                  </div>
                  
                  <div className="parallax-element" data-depth="0.1">
                    <div className="flex justify-end">
                      <div className="chip bg-cyber-teal/20 text-cyber-teal border border-cyber-teal/30 flex items-center">
                        <Key size={12} className="mr-1" />
                        10x more detailed response
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
