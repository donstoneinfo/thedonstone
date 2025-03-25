
import React, { useEffect, useState } from 'react';
import TerminalContainer from '@/components/TerminalContainer';
import TerminalTitle from '@/components/TerminalTitle';
import TerminalButton from '@/components/TerminalButton';
import { Link } from 'react-router-dom';

const AsciiLogo = () => (
  <pre className="ascii-art text-amber font-mono mb-8 text-center overflow-x-auto">
{`  
  ████████╗██╗  ██╗███████╗    ██████╗  ██████╗ ███╗   ██╗    ███████╗████████╗ ██████╗ ███╗   ██╗███████╗
  ╚══██╔══╝██║  ██║██╔════╝    ██╔══██╗██╔═══██╗████╗  ██║    ██╔════╝╚══██╔══╝██╔═══██╗████╗  ██║██╔════╝
     ██║   ███████║█████╗      ██║  ██║██║   ██║██╔██╗ ██║    ███████╗   ██║   ██║   ██║██╔██╗ ██║█████╗  
     ██║   ██╔══██║██╔══╝      ██║  ██║██║   ██║██║╚██╗██║    ╚════██║   ██║   ██║   ██║██║╚██╗██║██╔══╝  
     ██║   ██║  ██║███████╗    ██████╔╝╚██████╔╝██║ ╚████║    ███████║   ██║   ╚██████╔╝██║ ╚████║███████╗
     ╚═╝   ╚═╝  ╚═╝╚══════╝    ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝
                                                                                                                                                                          
`}
  </pre>
);

const Index = () => {
  const [loadingText, setLoadingText] = useState('');
  const fullText = 'INITIALIZING SYSTEM...';
  
  useEffect(() => {
    let currentIndex = 0;
    const textInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setLoadingText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 100);
    
    return () => clearInterval(textInterval);
  }, []);

  return (
    <TerminalContainer>
      <div className="text-center mb-8">
        <div className="mb-6 text-amber-light font-terminal text-xl">
          {loadingText}
          {loadingText === fullText ? (
            <span className="ml-2 opacity-0 animate-blink">_</span>
          ) : (
            <span className="ml-2 opacity-100 animate-blink">_</span>
          )}
        </div>
        
        <AsciiLogo />
        
        <div className="mb-8 text-amber font-terminal text-xl">
          <p>Welcome to The Don Stone Terminal Interface v1.0.1</p>
          <p>ELECTRONIC MUSIC PRODUCER | DJ | SOUND DESIGNER</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          <Link to="/about">
            <TerminalButton variant="outline" className="w-full">
              > ABOUT
            </TerminalButton>
          </Link>
          <Link to="/discography">
            <TerminalButton variant="outline" className="w-full">
              > DISCOGRAPHY
            </TerminalButton>
          </Link>
          <Link to="/mixes">
            <TerminalButton variant="outline" className="w-full">
              > MIXES
            </TerminalButton>
          </Link>
          <Link to="/playlists">
            <TerminalButton variant="outline" className="w-full">
              > PLAYLISTS
            </TerminalButton>
          </Link>
          <Link to="/events">
            <TerminalButton variant="outline" className="w-full">
              > EVENTS
            </TerminalButton>
          </Link>
          <Link to="/links">
            <TerminalButton variant="outline" className="w-full">
              > LINKS
            </TerminalButton>
          </Link>
        </div>
        
        <div className="font-mono text-amber-light text-sm max-w-xl mx-auto">
          <p className="mb-2">// Latest System Message:</p>
          <p className="mb-4">New Mix Available: "Late Night Warehouse Sessions Vol. 3"</p>
          <div>
            <Link to="/mixes">
              <TerminalButton size="sm">
                LISTEN NOW
              </TerminalButton>
            </Link>
          </div>
        </div>
      </div>
    </TerminalContainer>
  );
};

export default Index;
