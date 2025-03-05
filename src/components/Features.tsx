
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Zap, Brain, MessageSquare, RotateCcw, Activity } from 'lucide-react';

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const features = [
    {
      icon: Sparkles,
      title: "Instant Optimization",
      description: "Transforms any prompt into a more detailed, specific version in seconds, ensuring better AI responses every time.",
      color: "cyber-blue"
    },
    {
      icon: Brain,
      title: "Advanced Context Analysis",
      description: "Identifies missing context and automatically adds critical details that AI models need for comprehensive responses.",
      color: "cyber-purple"
    },
    {
      icon: MessageSquare,
      title: "Smart Follow-up Questions",
      description: "Proactively asks clarifying questions when your initial prompt lacks necessary details for optimal results.",
      color: "cyber-teal"
    },
    {
      icon: Zap,
      title: "Task-Specific Enhancement",
      description: "Tailors optimization based on the task type, whether it's coding, creative writing, data analysis, or research.",
      color: "cyber-orange"
    },
    {
      icon: RotateCcw,
      title: "Continuous Improvement",
      description: "Remembers your preferences and continuously improves optimization quality based on your specific needs and style.",
      color: "cyber-pink"
    },
    {
      icon: Activity,
      title: "Performance Analytics",
      description: "Tracks how your optimized prompts perform compared to original versions, with metrics on detail, clarity, and results.",
      color: "cyber-yellow"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <div className="section-padding bg-cyber-grid bg-fixed" id="features" ref={containerRef}>
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="chip bg-cyber-orange/20 text-cyber-orange border border-cyber-orange/30 mb-4">
            KEY FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Unlock the <span className="text-gradient">Full Potential</span> of AI
          </h2>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            Perfect Prompt Engine transforms how you interact with AI, delivering superior results through intelligent prompt optimization.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClass = `text-${feature.color}`;
            const bgColorClass = `bg-${feature.color}/10`;
            const borderColorClass = `border-${feature.color}/30`;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className={`p-3 rounded-lg mb-4 inline-block ${bgColorClass} ${borderColorClass} border`}>
                  <IconComponent className={colorClass} size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-zinc-300">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
