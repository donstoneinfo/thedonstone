
import React from 'react';
import TerminalContainer from '@/components/TerminalContainer';
import TerminalTitle from '@/components/TerminalTitle';
import TerminalCard from '@/components/TerminalCard';
import TerminalButton from '@/components/TerminalButton';

interface PlaylistProps {
  title: string;
  platform: string;
  tracks: number;
  updated: string;
  description: string;
  link: string;
}

const Playlist: React.FC<PlaylistProps> = ({ title, platform, tracks, updated, description, link }) => {
  return (
    <TerminalCard className="mb-6">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="md:w-1/4">
          <div className="border border-amber border-opacity-50 p-2">
            <div className="bg-terminal-darkgray aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-amber font-terminal mb-2">{platform}</div>
                <pre className="text-xs text-amber">
{`┌───────────┐
│ ▶  ─── ↺  │
├───────────┤
│ > Track 1 │
│ > Track 2 │
│ > Track 3 │
│ > Track 4 │
│ > Track 5 │
├───────────┤
│   ${tracks} TRACKS   │
└───────────┘`}
                </pre>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/4">
          <h3 className="text-xl font-terminal text-amber mb-1">&gt; {title}</h3>
          <div className="text-amber-light opacity-70 text-sm font-mono mb-3">
            <span>{platform}</span> | <span>{tracks} Tracks</span> | <span>Updated: {updated}</span>
          </div>
          
          <p className="text-amber text-opacity-90 font-mono text-sm mb-4">{description}</p>
          
          <a href={link} target="_blank" rel="noopener noreferrer">
            <TerminalButton size="sm">
              OPEN PLAYLIST
            </TerminalButton>
          </a>
        </div>
      </div>
    </TerminalCard>
  );
};

const Playlists = () => {
  return (
    <TerminalContainer>
      <TerminalTitle animation="typing">PLAYLISTS</TerminalTitle>
      
      <div className="mb-6 font-mono text-amber text-opacity-80">
        <p>// Curated playlists by The Don Stone.</p>
        <p>// Click "OPEN PLAYLIST" to listen on the respective platform.</p>
      </div>
      
      <Playlist 
        title="WAREHOUSE TECHNO ESSENTIALS"
        platform="Spotify"
        tracks={42}
        updated="2023-09-12"
        description="A carefully selected collection of underground techno tracks perfect for warehouse settings. From pounding kicks to atmospheric breakdowns, this playlist represents the essence of modern techno."
        link="https://spotify.com"
      />
      
      <Playlist 
        title="AMBIENT ENVIRONMENTS"
        platform="Bandcamp"
        tracks={23}
        updated="2023-08-05"
        description="Immersive ambient and experimental electronics. This playlist features mostly independent artists pushing the boundaries of atmospheric sound design and texture."
        link="https://bandcamp.com"
      />
      
      <Playlist 
        title="INDUSTRIAL ELECTRONICS"
        platform="SoundCloud"
        tracks={37}
        updated="2023-07-18"
        description="Hard-hitting industrial and EBM tracks that blend mechanical rhythms with electronic textures. Perfect for those who enjoy the darker, more aggressive side of electronic music."
        link="https://soundcloud.com"
      />
      
      <Playlist 
        title="CLASSIC TECHNO INFLUENCES"
        platform="Spotify"
        tracks={50}
        updated="2023-06-10"
        description="A journey through the classic techno tracks that have influenced The Don Stone's sound. From Detroit pioneers to European minimal techno, these tracks form the foundation of modern electronic music."
        link="https://spotify.com"
      />
      
      <Playlist 
        title="MODULAR EXPERIMENTS"
        platform="Bandcamp"
        tracks={18}
        updated="2023-04-22"
        description="A collection of tracks created primarily with modular synthesizers. Exploring the boundaries between structure and chaos, these tracks showcase the unique capabilities of modular systems."
        link="https://bandcamp.com"
      />
      
      <Playlist 
        title="AFTER HOURS SELECTIONS"
        platform="SoundCloud"
        tracks={31}
        updated="2023-03-15"
        description="Deep, hypnotic tracks perfect for after-hours sessions. When the main party ends, these selections keep the journey going with subtle, intricate rhythms and textures."
        link="https://soundcloud.com"
      />
    </TerminalContainer>
  );
};

export default Playlists;
