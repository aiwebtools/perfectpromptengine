
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const testimonials = [
    {
      quote: "Perfect Prompt Engine transformed how I use AI tools. It takes my basic questions and turns them into detailed prompts that get me exactly what I need, saving me countless hours of back-and-forth refinement.",
      author: "Sarah K.",
      role: "Content Creator",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=32"
    },
    {
      quote: "As a developer, I need precise answers to technical questions. This tool elevated my AI interactions from basic answers to comprehensive guides with code examples and best practices. Game-changer!",
      author: "Michael T.",
      role: "Software Engineer",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=67"
    },
    {
      quote: "I was skeptical at first, but the difference in quality between my original prompts and the optimized versions is night and day. It's like having an AI expert by my side crafting the perfect questions.",
      author: "Jennifer M.",
      role: "Digital Marketer",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      quote: "The optimization happens instantly and the results speak for themselves. My research queries now return detailed, structured information instead of just basic summaries. Absolutely worth it.",
      author: "David L.",
      role: "Academic Researcher",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=51"
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
    <div className="section-padding bg-black/40" id="testimonials" ref={containerRef}>
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="chip bg-cyber-yellow/20 text-cyber-yellow border border-cyber-yellow/30 mb-4">
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Users Are <span className="text-gradient">Saying</span>
          </h2>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            See how Perfect Prompt Engine has helped users achieve better results and save time across various use cases.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {testimonials.map((testimonial, index) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-panel rounded-xl p-6 border border-white/10 relative overflow-hidden"
              >
                <div className="absolute -top-2 -right-2 opacity-10">
                  <Quote size={80} className="text-white" />
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyber-blue/50 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.author}</h4>
                    <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-cyber-yellow fill-cyber-yellow" />
                    ))}
                  </div>
                </div>
                
                <p className="text-zinc-300 italic">{testimonial.quote}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
