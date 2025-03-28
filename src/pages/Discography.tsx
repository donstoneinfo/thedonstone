
import React, { useState } from 'react';
import TerminalContainer from '@/components/TerminalContainer';
import TerminalTitle from '@/components/TerminalTitle';
import TerminalCard from '@/components/TerminalCard';
import TerminalButton from '@/components/TerminalButton';

interface ReleaseProps {
  title: string;
  type: string;
  year: string;
  label: string;
  cat: string;
  description: string;
  listen?: string;
  bandcampId?: string; // Added bandcampId property
}

const Release: React.FC<ReleaseProps> = ({ title, type, year, label, cat, description, listen, bandcampId }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const togglePlayer = () => {
    setShowPlayer(!showPlayer);
  };

  return (
    <TerminalCard className="mb-6">
      <div className="p-4">
        <h3 className="text-xl font-terminal text-amber mb-3">&gt; {title}</h3>
        
        <div className="font-mono">
          <p className="mb-3 text-amber-light text-sm">
            <span className="text-amber-light opacity-70">[{type}] </span>{year} | 
            <span className="text-amber-light opacity-70"> LABEL: </span>{label} | 
            <span className="text-amber-light opacity-70"> CATALOG: </span>{cat}
          </p>
          
          <div className="mb-4 text-amber text-opacity-90">
            <p className="mb-4">{description}</p>
          </div>
          
          {listen && bandcampId && (
            <div className="mt-4">
              <TerminalButton 
                size="sm" 
                onClick={togglePlayer}
                className={showPlayer ? "mb-4" : ""}
              >
                {showPlayer ? "HIDE PLAYER" : "LISTEN NOW"}
              </TerminalButton>
              
              {showPlayer && (
                <div className="mt-4 w-full">
                  <iframe 
                    style={{ border: 0, width: '100%', height: '120px' }} 
                    src={`https://bandcamp.com/EmbeddedPlayer/album=${bandcampId}/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/`} 
                    seamless
                    title={`${title} on Bandcamp`}
                  >
                    <a href={listen} target="_blank" rel="noopener noreferrer">
                      {title}
                    </a>
                  </iframe>
                </div>
              )}
            </div>
          )}
          
          {listen && !bandcampId && (
            <div className="mt-4">
              <a href={listen} target="_blank" rel="noopener noreferrer">
                <TerminalButton size="sm">
                  LISTEN NOW
                </TerminalButton>
              </a>
            </div>
          )}
        </div>
      </div>
    </TerminalCard>
  );
};

const Discography = () => {
  return (
    <TerminalContainer>
      <TerminalTitle animation="typing">DISCOGRAPHY</TerminalTitle>
      
      <div className="mb-6 font-mono text-amber text-opacity-80">
        <p>// A comprehensive archive of releases by The Don Stone.</p>
        <p>// Support the music by purcashing on Bandcamp or Beatport.</p>
      </div>
      
      <Release 
        title="Zero Theorem"
        type="EP"
        year="2024"
        label="Interlinked Records"
        cat="INT-015"
        description="Abyssal grooves and hypnotic precision collide in Zero Theorem, where TheDonStone crafts a deep, dark minimal techno odyssey. JustFin strips it down further with a stark, minimalist remix that pulses like a machine on the edge of consciousness."
        listen="https://interlinkedai.bandcamp.com/album/zero-theorem"
        bandcampId="1628666844"
      />
      
      <Release 
        title="Back To Mine"
        type="ALBUM"
        year="2024"
        label="Interlinked Records"
        cat="INT-014"
        description="Back To Mine drifts through the hazy echoes of an all-night rave's aftermath, where deep dub, distorted lofi, and submerged rhythms paint a world between exhaustion and euphoria. TheDonStone crafts a sonic comedown ritual—warm, warped, and lost in the glow of city lights at dawn."
        listen="https://interlinkedai.bandcamp.com/album/back-to-mine"
        bandcampId="2917307920"
      />
      
      <Release 
        title="The 13th Floor"
        type="Single"
        year="2024"
        label="Interlinked Records"
        cat="INT-013"
        description="The 13th Floor is descent into dark melodic grooves from TheDonStone"
        listen="https://interlinkedai.bandcamp.com/album/zero-theorem"
        bandcampId="1919827054"
      />
      
      <Release 
        title="Total Recall"
        type="EP"
        year="2024"
        label="Interlinked Records"
        cat="INT-012"
        description="Total Recall is a hard pulse-pumping peak time techno EP."
        listen="https://interlinkedai.bandcamp.com/album/total-recall"
        bandcampId="711447107"
      />
      
      <Release 
        title="Ms Ministry"
        type="Single"
        year="2014"
        label="Interlinked Records"
        cat="INT-011"
        description="Ms. Minsitry fuses hard dark brooding IDM with Indide Dance vibes."
        listen="https://interlinkedai.bandcamp.com/track/ms-ministry"
        bandcampId="1120552345"
      />
    </TerminalContainer>
  );
};

export default Discography;
