
import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalHeaderProps {
  className?: string;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ className }) => {
  return (
    <div className={cn("border-b border-amber border-opacity-30 pb-2 mb-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500 opacity-70"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500 opacity-70"></div>
          <div className="h-3 w-3 rounded-full bg-green-500 opacity-70"></div>
        </div>
        <div className="text-center flex-grow font-terminal text-amber">
          THE_DON_STONE.EXE
        </div>
        <div className="text-amber opacity-70 text-xs font-mono">
          {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default TerminalHeader;
