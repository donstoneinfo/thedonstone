
import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalCardProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

const TerminalCard: React.FC<TerminalCardProps> = ({ 
  children, 
  className,
  bordered = true
}) => {
  return (
    <div className={cn(
      "bg-background p-4 mb-6", 
      bordered && "border border-amber border-opacity-30",
      className
    )}>
      {children}
    </div>
  );
};

export default TerminalCard;
