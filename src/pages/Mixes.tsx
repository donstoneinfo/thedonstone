
import React, { useState } from 'react';
import TerminalContainer from '@/components/TerminalContainer';
import TerminalTitle from '@/components/TerminalTitle';
import TerminalCard from '@/components/TerminalCard';
import TerminalButton from '@/components/TerminalButton';

interface MixProps {
  title: string;
  date: string;
  duration: string;
  genres: string[];
  description: string;
  link: string;
}

const Mix: React.FC<MixProps> = ({ title, date, duration, genres, description, link }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  
  return (
    <TerminalCard className="mb-6">
      <div className="mb-1">
        <h3 className="text-xl font-terminal text-amber">&gt; {title}</h3>
        <div className="text-amber-light opacity-70 text-sm font-mono">
          <span>{date}</span> | <span>{duration}</span>
        </div>
      </div>
      
      <div className="my-3">
        <div className="flex flex-wrap gap-2 mb-3">
          {genres.map((genre, index) => (
            <span key={index} className="bg-background border border-amber text-amber text-opacity-90 text-xs px-2 py-1 font-terminal">
              {genre}
            </span>
          ))}
        </div>
        
        <p className="text-amber text-opacity-90 font-mono text-sm mb-4">{description}</p>
        
        <div className="flex space-x-3">
          <TerminalButton 
            size="sm" 
            onClick={() => setShowPlayer(!showPlayer)}
          >
            {showPlayer ? 'HIDE PLAYER' : 'SHOW PLAYER'}
          </TerminalButton>
          
          <a href={link} target="_blank" rel="noopener noreferrer">
            <TerminalButton size="sm" variant="outline">
              OPEN LINK
            </TerminalButton>
          </a>
        </div>
      </div>
      
      {showPlayer && (
        <div className="mt-4 border border-amber border-opacity-30 p-4 bg-terminal-darkgray">
          <div className="flex items-center justify-between mb-2">
            <div className="text-amber font-terminal">{title}</div>
            <div className="flex space-x-2">
              <button className="text-amber hover:text-amber-light">
                [⏮]
              </button>
              <button className="text-amber hover:text-amber-light">
                [▶]
              </button>
              <button className="text-amber hover:text-amber-light">
                [⏭]
              </button>
            </div>
          </div>
          
          <div className="w-full h-2 bg-background mt-2">
            <div className="h-full w-1/3 bg-amber"></div>
          </div>
          
          <div className="flex justify-between text-xs text-amber-light mt-1 font-mono">
            <span>33:20</span>
            <span>1:40:00</span>
          </div>
          
          <div className="mt-2 text-xs text-amber-light font-mono">
            // Embedded player simulation. Visit the link for the actual mix.
          </div>
        </div>
      )}
    </TerminalCard>
  );
};

const Mixes = () => {
  return (
    <TerminalContainer>
      <TerminalTitle animation="typing">MIXES</TerminalTitle>
      
      <div className="mb-6 font-mono text-amber text-opacity-80">
        <p>// DJ mixes by The Don Stone.</p>
        <p>// Click "SHOW PLAYER" to preview or "OPEN LINK" to listen on the platform.</p>
      </div>
      
      <Mix 
        title="Late Night Warehouse Sessions Vol. 3"
        date="2023-08-15"
        duration="1:40:00"
        genres={['Techno', 'Industrial', 'Warehouse']}
        description="The third installment in the Late Night Warehouse Sessions series. Heavy, hypnotic techno designed for peak-time warehouse settings. Features unreleased tracks and edits."
        link="https://soundcloud.com"
      />
      
      <Mix 
        title="Ambient Explorations: Void Space"
        date="2023-05-22"
        duration="58:30"
        genres={['Ambient', 'Experimental', 'Drone']}
        description="A journey through atmospheric soundscapes and minimal compositions. Perfect for deep listening and meditation."
        link="https://mixcloud.com"
      />
      
      <Mix 
        title="Terminal Access: Hard Code"
        date="2023-02-10"
        duration="1:22:00"
        genres={['Hard Techno', 'Industrial', 'EBM']}
        description="Hard-hitting industrial techno and EBM focused mix. Raw, energetic and uncompromising selections that push the boundaries of dance music."
        link="https://soundcloud.com"
      />
      
      <Mix 
        title="Digital Dystopia Podcast 042"
        date="2022-11-05"
        duration="1:15:00"
        genres={['Techno', 'Breaks', 'Electro']}
        description="Guest mix for the Digital Dystopia podcast series. A blend of techno, broken beats and electro influences featuring both classics and cutting edge tracks."
        link="https://mixcloud.com"
      />
      
      <Mix 
        title="Live at System Failure (London)"
        date="2022-09-17"
        duration="1:30:00"
        genres={['Techno', 'Live Performance', 'Hardware Set']}
        description="Live recording from System Failure club night in London. A hybrid DJ/hardware set featuring original material and live remixes."
        link="https://soundcloud.com"
      />
      
      <Mix 
        title="Morning Sequences"
        date="2022-07-08"
        duration="1:05:00"
        genres={['Dub Techno', 'Deep', 'Atmospheric']}
        description="Deeper, more atmospheric selections suitable for early morning sets. Focusing on dub techno, spacious rhythms and hypnotic patterns."
        link="https://mixcloud.com"
      />
    </TerminalContainer>
  );
};

export default Mixes;
