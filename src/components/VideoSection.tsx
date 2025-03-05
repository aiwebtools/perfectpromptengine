
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const VideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const videoId = 'LHaPL2oBUmY';
  
  return (
    <div className="bg-black/30 section-padding" id="video">
      <div className="max-container" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="chip bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 mb-4">
            WATCH IT IN ACTION
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See How Perfect Prompt Engine <span className="text-gradient">Transforms</span> AI Interactions
          </h2>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            Watch this demonstration of how our AI engine optimizes basic prompts into detailed instructions that deliver exceptional results.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_0_30px_rgba(14,165,233,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 pointer-events-none z-10 opacity-50"></div>
          <iframe 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&rel=0&showinfo=0&modestbranding=1&hd=1`}
            title="Perfect Prompt Engine Demo"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;
