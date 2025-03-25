
import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({ children, className }) => {
  return (
    <div className={cn(
      "min-h-screen flex flex-col bg-terminal-black text-amber p-4 font-mono relative overflow-hidden crt",
      className
    )}>
      <div className="absolute inset-0 bg-scanline animate-scan pointer-events-none z-10 opacity-10"></div>
      <div className="terminal-content z-20 flex-grow">
        {children}
      </div>
    </div>
  );
};

export default Terminal;
