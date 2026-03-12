
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Disclaimer', href: '#disclaimer' },
    { name: 'More AI Tools', href: 'https://aiwebtools.lovable.app/?via=aiwebtools', external: true },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-zinc-300 hover:text-cyber-blue transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://chatgpt.com/g/g-FA8RUdQ42-perfect-prompt-engine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button"
            >
              USE PERFECT PROMPT ENGINE NOW
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-zinc-300 hover:text-cyber-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="block text-zinc-300 hover:text-cyber-blue transition-colors py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://chatgpt.com/g/g-FA8RUdQ42-perfect-prompt-engine" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cyber-button text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                USE PERFECT PROMPT ENGINE NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
