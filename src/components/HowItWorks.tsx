
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Sparkles, Zap, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const steps = [
    {
      icon: MessageCircle,
      title: "Submit Your Prompt",
      description: "Enter any prompt or question you'd normally ask an AI. No matter how simple or complex, our engine will work with it.",
      color: "cyber-blue"
    },
    {
      icon: Sparkles,
      title: "Automatic Optimization",
      description: "Our AI instantly analyzes your prompt, identifies missing elements, and enhances it with critical details and structure.",
      color: "cyber-purple"
    },
    {
      icon: Zap,
      title: "Receive Enhanced Results",
      description: "The optimized prompt is automatically submitted to the AI, producing a more detailed, accurate, and useful response.",
      color: "cyber-teal"
    },
    {
      icon: CheckCircle,
      title: "Save & Reuse",
      description: "Your optimized prompts are saved for future use, and the system learns your preferences over time for even better results.",
      color: "cyber-orange"
    }
  ];
  
  return (
    <div className="section-padding relative" id="how-it-works" ref={containerRef}>
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyber-purple opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyber-blue opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="chip bg-cyber-teal/20 text-cyber-teal border border-cyber-teal/30 mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Simple Process, <span className="text-gradient">Powerful Results</span>
          </h2>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            Our engine transforms your basic prompts into powerful instructions in just a few simple steps.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-teal hidden md:block"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            const colorClass = `text-${step.color}`;
            const bgColorClass = `bg-${step.color}/10`;
            const borderColorClass = `border-${step.color}/30`;
            
            return (
              <div key={index} className="relative mb-12 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex md:items-center gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                >
                  {/* Step content */}
                  <div className={`md:w-5/12 glass-panel rounded-xl p-6 border border-white/10 ${isEven ? 'md:text-right' : 'md:text-left'} text-left`}>
                    <span className="text-xl md:text-2xl font-bold text-gradient block mb-3">Step {index + 1}</span>
                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-zinc-300">{step.description}</p>
                  </div>
                  
                  {/* Center icon */}
                  <div className="md:w-2/12 flex justify-center relative">
                    <div className={`w-12 h-12 rounded-full ${bgColorClass} ${borderColorClass} border flex items-center justify-center relative z-10`}>
                      <IconComponent className={colorClass} size={24} />
                      <div className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-cyber-blue/30 to-cyber-purple/30 -z-10"></div>
                    </div>
                  </div>
                  
                  {/* Empty space for layout */}
                  <div className="md:w-5/12 hidden md:block"></div>
                </motion.div>
              </div>
            );
          })}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a 
            href="https://chatgpt.com/g/g-FA8RUdQ42-perfect-prompt-engine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button inline-block text-lg"
          >
            <Zap className="inline-block mr-2 -mt-1" size={18} />
            TRY IT NOW
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
