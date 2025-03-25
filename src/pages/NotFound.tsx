
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Terminal from '@/components/Terminal';
import TerminalButton from '@/components/TerminalButton';

const NotFound = () => {
  const [text, setText] = useState('');
  const errorMessage = 'ERROR 404: FILE NOT FOUND';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < errorMessage.length) {
        setText(prev => prev + errorMessage.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Terminal>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto text-center">
          <div className="font-terminal text-amber mb-6">
            <div className="text-4xl mb-4 glitch">{text}</div>
            
            <pre className="ascii-art text-amber mb-6">
{`     .-.
    (o.o)
     |=|
    __|__
  //.=|=.\\\\
 // .=|=. \\\\
 \\\\ .=|=. //
  \\\\(_=_)//
     (:)
`}
            </pre>
            
            <div className="mb-6 font-mono">
              <p className="mb-2">// The requested file could not be located.</p>
              <p className="mb-2">// System suggests returning to a valid access point.</p>
              <p>// Press any key to continue or return to HOME...</p>
            </div>
            
            <div className="flex justify-center mt-8">
              <Link to="/">
                <TerminalButton>
                  RETURN TO HOME
                </TerminalButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Terminal>
  );
};

export default NotFound;
