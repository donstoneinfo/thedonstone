
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavItemProps {
  to: string;
  label: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, active }) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "px-4 py-2 transition-colors duration-200",
        active ? "text-amber border-amber border-b-2" : "text-amber text-opacity-60 hover:text-amber-light"
      )}
    >
      [{label}]
    </Link>
  );
};

const TerminalNavbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routes = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/discography', label: 'DISCOGRAPHY' },
    { path: '/mixes', label: 'MIXES' },
    { path: '/playlists', label: 'PLAYLISTS' },
    { path: '/events', label: 'EVENTS' },
    { path: '/links', label: 'LINKS' },
  ];

  return (
    <>
      <div className="hidden md:flex justify-center border-y border-amber border-opacity-30 my-4 py-2 font-terminal">
        {routes.map((route) => (
          <NavItem
            key={route.path}
            to={route.path}
            label={route.label}
            active={location.pathname === route.path}
          />
        ))}
      </div>

      <div className="md:hidden border-y border-amber border-opacity-30 my-4 py-2">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-between w-full px-4 py-2 font-terminal"
        >
          <span>[{routes.find(r => r.path === location.pathname)?.label || 'MENU'}]</span>
          <span>{isMenuOpen ? '[-]' : '[+]'}</span>
        </button>
        
        {isMenuOpen && (
          <div className="flex flex-col font-terminal border-t border-amber border-opacity-30 mt-2 pt-2">
            {routes.map((route) => (
              <Link 
                key={route.path}
                to={route.path}
                className={cn(
                  "px-4 py-2 transition-colors duration-200",
                  location.pathname === route.path 
                    ? "text-amber bg-background" 
                    : "text-amber text-opacity-60 hover:text-amber-light"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {'>'}  {route.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default TerminalNavbar;
