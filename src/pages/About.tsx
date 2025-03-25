
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
                The Don Stone is a London-based electronic music producer and DJ known for underground warehouse techno, experimental bass, and dark ambient soundscapes.
              </p>
              <p className="text-amber text-opacity-90">
                With over a decade in the electronic music scene, The Don Stone has established a reputation for blending raw, hypnotic beats with intricate sound design and immersive atmospheres.
              </p>
            </div>
            
            <div className="mb-4 border-t border-amber border-opacity-30 pt-4">
              <h3 className="text-xl text-amber font-terminal mb-2">&gt; SKILLS:</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="text-amber text-opacity-90">- Techno Production</li>
                <li className="text-amber text-opacity-90">- Sound Design</li>
                <li className="text-amber text-opacity-90">- DJ Performance</li>
                <li className="text-amber text-opacity-90">- Ambient Composition</li>
                <li className="text-amber text-opacity-90">- Hardware Synths</li>
                <li className="text-amber text-opacity-90">- Modular Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </TerminalCard>
      
      <TerminalCard>
        <h3 className="text-xl text-amber font-terminal mb-4">&gt; PERFORMANCE HISTORY:</h3>
        <div className="font-mono">
          <div className="mb-4 pb-3 border-b border-amber border-opacity-20">
            <p className="text-amber-light">$ 2018 - PRESENT</p>
            <p className="text-amber font-terminal">WAREHOUSE PROJECT RESIDENT [LONDON, UK]</p>
            <p className="text-amber text-opacity-70 text-sm">Regular performances at underground warehouse venues across London.</p>
          </div>
          
          <div className="mb-4 pb-3 border-b border-amber border-opacity-20">
            <p className="text-amber-light">$ 2016 - 2018</p>
            <p className="text-amber font-terminal">EUROPEAN CLUB CIRCUIT</p>
            <p className="text-amber text-opacity-70 text-sm">Tours across Berlin, Amsterdam, Barcelona, and Paris.</p>
          </div>
          
          <div className="mb-4">
            <p className="text-amber-light">$ 2012 - 2016</p>
            <p className="text-amber font-terminal">UNDERGROUND COLLECTIVE FOUNDER</p>
            <p className="text-amber text-opacity-70 text-sm">Established "Digital Dystopia" underground event series.</p>
          </div>
        </div>
      </TerminalCard>
      
      <TerminalCard>
        <h3 className="text-xl text-amber font-terminal mb-4">&gt; FEATURED EQUIPMENT:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
          <div>
            <h4 className="text-amber-light mb-2">// HARDWARE:</h4>
            <ul className="text-amber text-opacity-90">
              <li>- Elektron Octatrack MK2</li>
              <li>- Roland TR-8S</li>
              <li>- Moog Subsequent 37</li>
              <li>- Make Noise Shared System</li>
              <li>- Analog Rytm MK2</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-amber-light mb-2">// SOFTWARE:</h4>
            <ul className="text-amber text-opacity-90">
              <li>- Ableton Live 11</li>
              <li>- Native Instruments Komplete</li>
              <li>- u-he Diva & Repro</li>
              <li>- Soundtoys Effects Suite</li>
              <li>- Fabfilter Pro Bundle</li>
            </ul>
          </div>
        </div>
      </TerminalCard>
    </TerminalContainer>
  );
};

export default About;
