
import React from 'react';
import { Sparkles } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl'
  };

  return (
    <div className="flex items-center gap-2 font-bold">
      <div className="relative">
        <Sparkles 
          className={`${sizeClasses[size]} text-cyber-blue animate-pulse-glow`} 
        />
        <div className="absolute inset-0 blur-sm bg-cyber-blue opacity-50 rounded-full animate-pulse"></div>
      </div>
      <div>
        <span className={`${sizeClasses[size]} bg-gradient-to-r from-cyber-blue via-cyber-teal to-cyber-purple bg-clip-text text-transparent font-bold`}>
          Perfect Prompt Engine
        </span>
        <div className={`text-xs ${size === 'sm' ? 'text-[10px]' : ''} text-zinc-400 mt-[-2px]`}>
          Presented by <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-teal transition-colors">AiWebTools.Ai</a>
        </div>
      </div>
    </div>
  );
};

export default Logo;
