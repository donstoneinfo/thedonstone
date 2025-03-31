
import React, { useState } from 'react';
import TerminalContainer from '@/components/TerminalContainer';
import TerminalTitle from '@/components/TerminalTitle';
import TerminalCard from '@/components/TerminalCard';
import TerminalButton from '@/components/TerminalButton';
import { Youtube } from 'lucide-react';

interface MixProps {
  title: string;
  date: string;
  duration: string;
  genres: string[];
  description: string;
  youtubeId: string;
}

const Mix: React.FC<MixProps> = ({ title, date, duration, genres, description, youtubeId }) => {
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
            {showPlayer ? 'HIDE PLAYER' : 'SHOW PLAYER'} <Youtube size={16} />
          </TerminalButton>
          
          <a href={`https://www.youtube.com/watch?v=${youtubeId}`} target="_blank" rel="noopener noreferrer">
            <TerminalButton size="sm" variant="outline">
              OPEN YOUTUBE
            </TerminalButton>
          </a>
        </div>
      </div>
      
      {showPlayer && (
        <div className="mt-4 w-full aspect-video">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="border border-amber border-opacity-30"
          ></iframe>
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
        <p>// Click "SHOW PLAYER" to preview or "OPEN YOUTUBE" to watch on YouTube.</p>
      </div>
      
      <Mix 
        title="SONA003 - Dark Disco, Acid Mix"
        date="2023-09-24"
        duration="1:02:00"
        genres={['Dark Disco', 'Acid Techno', 'Hypnotic Techno']}
        description="Welcome to the third chapter of the SONA mix series, where TheDonStone takes the sonic experience to unprecedented heights. This installment plunges listeners into a relentless fusion of dark disco, underground electro, minimal techno, and goth-inspired EBM. Breaking free from the ordinary, this week's mix demands attention with pulsating beats and electrifying energy, setting the stage for an immersive auditory adventure."
        youtubeId="AY3U5PwS2-c"
      />
      
      <Mix 
        title="SONA002 - Hard Peak Time Techno"
        date="2024-03-23"
        duration="1:00:05"
        genres={['Peak-Time Techno', 'Driving Techno', 'Raw Techno']}
        description="Breaking free from conventional constraints, this week's mix commands attention with its heart-pounding beats, clocking in at over 140 BPM."
        youtubeId="iKUTZUrcF8E"
      />
      
      <Mix 
        title="SONA001 - Dark Disco"
        date="2024-02-02"
        duration="1:00:48"
        genres={['Dark Disco', 'Electro', 'Goth Techno']}
        description="This installment plunges listeners into a relentless fusion of dark disco, underground electro, minimal techno, and goth-inspired EBM. Breaking free from the ordinary, this week's mix demands attention with pulsating beats and electrifying energy, setting the stage for an immersive auditory adventure."
        youtubeId="L-E95UOLK3Y"
      />
    </TerminalContainer>
  );
};

export default Mixes;
