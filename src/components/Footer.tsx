
import React from 'react';
import Logo from './Logo';
import { Zap, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-12 relative overflow-hidden">
      <div className="max-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and about */}
          <div className="md:col-span-1">
            <Logo size="md" />
            <p className="text-zinc-400 mt-4 mb-6">
              Break the chains of prompt limitations and unlock AI's full potential with Perfect Prompt Engine.
            </p>
            <a 
              href="https://chatgpt.com/g/g-FA8RUdQ42-perfect-prompt-engine" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button inline-block"
            >
              <Zap className="inline-block mr-2 -mt-1" size={16} />
              USE PERFECT PROMPT ENGINE NOW
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-zinc-400 hover:text-cyber-blue transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-zinc-400 hover:text-cyber-blue transition-colors">Disclaimer</a>
              </li>
              <li>
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyber-blue transition-colors">More AI Tools</a>
              </li>
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyber-blue transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="https://aiwebtools.ai/terms-of-services" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-cyber-blue transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="text-cyber-blue mr-2" />
                <a href="tel:+14758008096" className="text-zinc-400 hover:text-cyber-blue transition-colors">(475) 800-8096</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-cyber-blue mr-2" />
                <a href="mailto:Contact@ai-webtools.com" className="text-zinc-400 hover:text-cyber-blue transition-colors">Contact@ai-webtools.com</a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="https://www.aiwebtools.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-medium"
              >
                More AI Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm text-center md:text-left">
            <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-blue transition-colors">
              &copy; {currentYear} AI WEB TOOLS LLC. All rights reserved.
            </a>
          </p>
          <div className="mt-4 md:mt-0 text-zinc-500 text-sm">
            Perfect Prompt Engine works with all AI platforms
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
