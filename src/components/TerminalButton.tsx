
import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const TerminalButton: React.FC<TerminalButtonProps> = ({
  children,
  onClick,
  className,
  variant = 'default',
  size = 'md',
  disabled = false,
}) => {
  const baseStyles = "font-terminal transition-colors cursor-pointer";
  
  const variantStyles = {
    default: "bg-amber text-terminal-black hover:bg-amber-light",
    outline: "border border-amber text-amber hover:bg-amber hover:bg-opacity-10",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  };
  
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };
  
  const disabledStyles = disabled 
    ? "opacity-50 pointer-events-none" 
    : "";
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {variant === 'outline' ? '[ ' : ''}
      {children}
      {variant === 'outline' ? ' ]' : ''}
    </button>
  );
};

export default TerminalButton;
