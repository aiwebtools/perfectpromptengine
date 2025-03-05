
import React, { useEffect } from 'react';
import { Toaster } from "sonner";
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    const handleNavLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavLinkClick as EventListener);
    });
    
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavLinkClick as EventListener);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <VideoSection />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <Disclaimer />
      <Footer />
      <Toaster position="top-right" closeButton />
      
      {/* Loading animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed inset-0 z-50 bg-cyber-darker flex items-center justify-center pointer-events-none"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-bold text-gradient cyber-glow"
        >
          Perfect Prompt Engine
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
