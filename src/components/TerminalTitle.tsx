
import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalTitleProps {
  children: React.ReactNode;
  animation?: 'typing' | 'glitch' | 'none';
  className?: string;
}

const TerminalTitle: React.FC<TerminalTitleProps> = ({ 
  children, 
  animation = 'none',
  className 
}) => {
  let animationClass = '';
  
  switch (animation) {
    case 'typing':
      animationClass = 'cursor';
      break;
    case 'glitch':
      animationClass = 'glitch';
      break;
    default:
      animationClass = '';
  }
  
  return (
    <h2 className={cn(
      "text-2xl md:text-4xl font-terminal text-amber mb-6 border-b border-amber pb-2",
      animationClass,
      className
    )}>
      {animation === 'typing' ? '> ' : ''}
      {children}
    </h2>
  );
};

export default TerminalTitle;
