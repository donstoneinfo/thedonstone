
import React from 'react';
import Terminal from './Terminal';
import TerminalHeader from './TerminalHeader';
import TerminalNavbar from './TerminalNavbar';
import { cn } from '@/lib/utils';

interface TerminalContainerProps {
  children: React.ReactNode;
  className?: string;
}

const TerminalContainer: React.FC<TerminalContainerProps> = ({ children, className }) => {
  return (
    <Terminal>
      <div className={cn("max-w-6xl mx-auto", className)}>
        <TerminalHeader />
        <TerminalNavbar />
        <main className="py-4">
          {children}
        </main>
        <footer className="mt-8 pt-4 border-t border-amber border-opacity-30 text-amber text-opacity-60 text-sm text-center">
          <p className="mb-2">© {new Date().getFullYear()} THE DON STONE // ALL RIGHTS RESERVED</p>
          <p className="text-xs">TERMINAL v1.0.1 // MEMORY: 640K // SYSTEM: OK</p>
        </footer>
      </div>
    </Terminal>
  );
};

export default TerminalContainer;
