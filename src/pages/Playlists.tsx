
import React, { useState } from 'react';
import TerminalContainer from '@/components/TerminalContainer';
import TerminalTitle from '@/components/TerminalTitle';
import TerminalCard from '@/components/TerminalCard';
import TerminalButton from '@/components/TerminalButton';
import { Music } from 'lucide-react';

interface PlaylistProps {
  title: string;
  platform: string;
  tracks: number;
  updated: string;
  description: string;
  spotifyId: string;
}

const Playlist: React.FC<PlaylistProps> = ({ title, platform, tracks, updated, description, spotifyId }) => {
  const [showPlayer, setShowPlayer] = useState(false);
  
  return (
    <TerminalCard className="mb-6">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="md:w-3/4">
          <h3 className="text-xl font-terminal text-amber mb-1">&gt; {title}</h3>
          <div className="text-amber-light opacity-70 text-sm font-mono mb-3">
            <span>{platform}</span> | <span>{tracks} Tracks</span> | <span>Updated: {updated}</span>
          </div>
          
          <p className="text-amber text-opacity-90 font-mono text-sm mb-4">{description}</p>
          
          <TerminalButton 
            size="sm" 
            onClick={() => setShowPlayer(!showPlayer)}
          >
            {showPlayer ? 'HIDE PLAYLIST' : 'OPEN PLAYLIST'} <Music size={16} />
          </TerminalButton>
        </div>
      </div>
      
      {showPlayer && (
        <div className="mt-6 w-full">
          <iframe 
            style={{ borderRadius: '12px' }}
            src={`https://open.spotify.com/embed/playlist/${spotifyId}?utm_source=generator&theme=0`}
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="border border-amber border-opacity-30"
          ></iframe>
        </div>
      )}
    </TerminalCard>
  );
};

const Playlists = () => {
  return (
    <TerminalContainer>
      <TerminalTitle animation="typing">PLAYLISTS</TerminalTitle>
      
      <div className="mb-6 font-mono text-amber text-opacity-80">
        <p>// Curated playlists by The Don Stone.</p>
        <p>// Click "OPEN PLAYLIST" to listen directly on this page.</p>
      </div>
      
      <Playlist 
        title="WAREHOUSE TECHNO ESSENTIALS"
        platform="Spotify"
        tracks={42}
        updated="2023-09-12"
        description="A carefully selected collection of underground techno tracks perfect for warehouse settings. From pounding kicks to atmospheric breakdowns, this playlist represents the essence of modern techno."
        spotifyId="3XpDcVIkMBwZZWD9ufJP1C"
      />
      
      <Playlist 
        title="AMBIENT ENVIRONMENTS"
        platform="Spotify"
        tracks={23}
        updated="2023-08-05"
        description="Immersive ambient and experimental electronics. This playlist features mostly independent artists pushing the boundaries of atmospheric sound design and texture."
        spotifyId="37i9dQZF1DX3Ogo9pFvBkY"
      />
      
      <Playlist 
        title="INDUSTRIAL ELECTRONICS"
        platform="Spotify"
        tracks={37}
        updated="2023-07-18"
        description="Hard-hitting industrial and EBM tracks that blend mechanical rhythms with electronic textures. Perfect for those who enjoy the darker, more aggressive side of electronic music."
        spotifyId="37i9dQZF1DX6J5NfMJS675"
      />
      
      <Playlist 
        title="CLASSIC TECHNO INFLUENCES"
        platform="Spotify"
        tracks={50}
        updated="2023-06-10"
        description="A journey through the classic techno tracks that have influenced The Don Stone's sound. From Detroit pioneers to European minimal techno, these tracks form the foundation of modern electronic music."
        spotifyId="37i9dQZF1DX0r3x8OtiwEM"
      />
      
      <Playlist 
        title="MODULAR EXPERIMENTS"
        platform="Spotify"
        tracks={18}
        updated="2023-04-22"
        description="A collection of tracks created primarily with modular synthesizers. Exploring the boundaries between structure and chaos, these tracks showcase the unique capabilities of modular systems."
        spotifyId="37i9dQZF1DXa71eg5j9dKZ"
      />
      
      <Playlist 
        title="AFTER HOURS SELECTIONS"
        platform="Spotify"
        tracks={31}
        updated="2023-03-15"
        description="Deep, hypnotic tracks perfect for after-hours sessions. When the main party ends, these selections keep the journey going with subtle, intricate rhythms and textures."
        spotifyId="37i9dQZF1DX4jP4eebSWR9"
      />
    </TerminalContainer>
  );
};

export default Playlists;
