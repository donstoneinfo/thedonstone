
import React from 'react';
import TerminalContainer from '@/components/TerminalContainer';
import TerminalTitle from '@/components/TerminalTitle';
import TerminalCard from '@/components/TerminalCard';

const About = () => {
  return (
    <TerminalContainer>
      <TerminalTitle animation="typing">ABOUT</TerminalTitle>
      
      <TerminalCard>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="border border-amber border-opacity-50 p-2">
              <div className="bg-terminal-darkgray aspect-square flex items-center justify-center">
                <pre className="ascii-art text-amber text-xs">
{`       ____
      /    \\
     | ^  ^ |
     |  >>  |
     |_____/
    /|     |\\
   / |     | \\
  /__|_____|__\\
     |_|_|
     |_|_|      
      |||       
      |||       
      |||       
      / \\       
     /   \\      
    /     \\     
`}
                </pre>
              </div>
              <div className="mt-2 text-amber-light text-center font-terminal">
                <p>THE_DON_STONE.exe</p>
                <p className="text-xs">// Electronic Music Producer & DJ</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 font-mono">
            <div className="mb-4">
              <h3 className="text-xl text-amber font-terminal mb-2">&gt; BIO:</h3>
              <p className="text-amber text-opacity-90 mb-3">
                The Don Stone is a Siem Reap-based electronic music producer and DJ known for underground warehouse techno, experimental bass, and dark ambient soundscapes.
              </p>
              <p className="text-amber text-opacity-90">
                With over twenty-five years in the electronic music scene, The Don Stone has established a reputation for blending raw, hypnotic beats with intricate sound design and immersive atmospheres.
              </p>
            </div>
            
            <div className="mb-4 border-t border-amber border-opacity-30 pt-4">
              <h3 className="text-xl text-amber font-terminal mb-2">&gt; SKILLS:</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="text-amber text-opacity-90">- Open-Format DJ Performances</li>
                <li className="text-amber text-opacity-90">- Event Organization & Promotion</li>
                <li className="text-amber text-opacity-90">- Private DJ Events</li>
                <li className="text-amber text-opacity-90">- Music Production Services</li>
                <li className="text-amber text-opacity-90">- Local and Regional Bookings Available</li>
              </ul>
            </div>
          </div>
        </div>
      </TerminalCard>
    </TerminalContainer>
  );
};

export default About;
