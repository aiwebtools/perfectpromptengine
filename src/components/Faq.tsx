
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlusCircle } from 'lucide-react';

const Faq = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  
  const faqs = [
    {
      question: "What exactly does Perfect Prompt Engine do?",
      answer: "Perfect Prompt Engine transforms your basic prompts into highly detailed, optimized instructions for AI systems. It analyzes your input, identifies missing context, adds specificity, and structures the prompt to get more comprehensive, accurate responses from any AI assistant."
    },
    {
      question: "Does it work with any AI system or just specific ones?",
      answer: "While Perfect Prompt Engine is optimized for OpenAI's models like GPT-4, the optimized prompts it generates can be used with any AI system that accepts text prompts, including Claude, Bard, Llama, and others. The techniques used in our optimization are universally effective for improving AI responses."
    },
    {
      question: "How much does it improve AI responses compared to my original prompts?",
      answer: "Users typically report 50-90% more detailed and useful responses when using our optimized prompts. The improvement is most noticeable for complex topics, technical questions, and creative tasks where specificity and context are crucial."
    },
    {
      question: "Can I use this for specialized domains like coding, medicine, or legal?",
      answer: "Absolutely! Perfect Prompt Engine is especially valuable for specialized domains. It recognizes domain-specific requirements and adds relevant context, technical specifications, and formatting that dramatically improves results for fields like programming, medical research, legal analysis, and more."
    },
    {
      question: "Is there a limit to how many prompts I can optimize?",
      answer: "There are no hard limits on prompt optimization. You can use Perfect Prompt Engine as frequently as needed to optimize your AI interactions, whether that's occasional use or multiple times daily."
    },
    {
      question: "Does it learn my style and preferences over time?",
      answer: "Yes, Perfect Prompt Engine continuously learns from your interactions. It adapts to your communication style, remembers your preferences for detail level and formatting, and improves its optimization based on your specific needs over time."
    }
  ];
  
  return (
    <div className="section-padding" id="faq" ref={containerRef}>
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="chip bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30 mb-4">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Got <span className="text-gradient">Questions?</span> We've Got Answers
          </h2>
          <p className="text-zinc-300 max-w-3xl mx-auto">
            Learn more about how Perfect Prompt Engine works and how it can help you get better results from AI.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-panel border border-white/10 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center">
                    <PlusCircle size={18} className="mr-2 text-cyber-blue flex-shrink-0" />
                    <span className="font-medium text-white">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-1 text-zinc-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
