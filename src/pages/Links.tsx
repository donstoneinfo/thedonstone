
import React from 'react';
import TerminalContainer from '@/components/TerminalContainer';
import TerminalTitle from '@/components/TerminalTitle';
import TerminalCard from '@/components/TerminalCard';

interface LinkProps {
  title: string;
  url: string;
  description: string;
  type: 'social' | 'music' | 'store' | 'other';
}

const LinkItem: React.FC<LinkProps> = ({ title, url, description, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'social':
        return `[Social]`;
      case 'music':
        return `[Music]`;
      case 'store':
        return `[Store]`;
      default:
        return `[Link]`;
    }
  };

  return (
    <div className="mb-4 border border-amber border-opacity-30 hover:border-opacity-100 transition-colors duration-200">
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block p-4 text-amber hover:bg-amber hover:bg-opacity-5 transition-colors duration-200"
      >
        <div className="flex items-start">
          <div className="mr-3 font-terminal text-sm">{getIcon()}</div>
          <div>
            <h3 className="font-terminal text-lg mb-1">&gt; {title}</h3>
            <p className="text-amber-light text-sm font-mono mb-2">{url}</p>
            <p className="text-amber text-opacity-80 text-sm font-mono">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Links = () => {
  return (
    <TerminalContainer>
      <TerminalTitle animation="typing">LINKS</TerminalTitle>
      
      <div className="mb-6 font-mono text-amber text-opacity-80">
        <p>// Collection of all official links related to The Don Stone.</p>
        <p>// Click any link to open in a new window.</p>
      </div>
      
      <TerminalCard>
        <h3 className="text-lg font-terminal text-amber border-b border-amber border-opacity-30 pb-2 mb-4">// MUSIC PLATFORMS</h3>
        
        <LinkItem 
          title="Soundcloud"
          url="https://soundcloud.com/the-don-stone"
          description="Stream DJ mixes, live recordings, and selected original productions."
          type="music"
        />
        
        <LinkItem 
          title="Bandcamp"
          url="https://interlinkedai.bandcamp.com/"
          description="Purchase music directly, including exclusive content and limited editions."
          type="music"
        />
        
        <LinkItem 
          title="Spotify"
          url="https://open.spotify.com/playlist/5RdjzDZl8I6aPaI4ZnWOaN?si=2ca42f045f204449"
          description="Stream official releases and curated playlists."
          type="music"
        />
        
        <LinkItem 
          title="Resident Advisor"
          url="https://ra.co/dj/thedonstone"
          description="Event listings, reviews, and artist profile."
          type="music"
        />
      </TerminalCard>
      
      <TerminalCard>
        <h3 className="text-lg font-terminal text-amber border-b border-amber border-opacity-30 pb-2 mb-4">// SOCIAL MEDIA</h3>
        
        <LinkItem 
          title="Instagram"
          url="https://instagram.com/thedonstone"
          description="Visual updates, event photos, and studio insights."
          type="social"
        />
        
        <LinkItem 
          title="Bluesky"
          url="https://bsky.app/profile/thedonstone.bsky.social"
          description="Real-time updates, music announcements, and scene commentary."
          type="social"
        />
        
        <LinkItem 
          title="Facebook"
          url="https://www.facebook.com/the.don.stone"
          description="Event details, releases, and community interaction."
          type="social"
        />
        
        <LinkItem 
          title="YouTube"
          url="https://youtube.com/thedonstone"
          description="Live performances, music videos, and studio sessions."
          type="social"
        />
      </TerminalCard>
      
      <TerminalCard>
        <h3 className="text-lg font-terminal text-amber border-b border-amber border-opacity-30 pb-2 mb-4">// THE N1GHTW1RE COLLECTIVE</h3>
        
        <LinkItem 
          title="N1ghtw1re"
          url="https://n1ghtw1re.neocities.org"
          description="If you’re reading this, the world may already be too far gone. Maybe the systems are already too entrenched, the algorithms too powerful, and the surveillance too pervasive"
          type="store"
        />
        
        <LinkItem 
          title="N1ghtw1re Studios"
          url="https://n1ghtw1re-studios.lovable.app/"
          description="Building a better internet, one app at a time."
          type="store"
        />
      </TerminalCard>
      
      <TerminalCard>
        <h3 className="text-lg font-terminal text-amber border-b border-amber border-opacity-30 pb-2 mb-4">// CONTACT & BOOKING</h3>
        
        <LinkItem 
          title="Booking Inquiries"
          url="mailto:donstoneinfo@gmail.com"
          description="For event bookings and performance inquiries."
          type="other"
        />
        
        <LinkItem 
          title="Press Kit"
          url="mailto:donstoneinfo@gmail.com"
          description="Email to receive high-resolution photos and official bio."
          type="other"
        />
        
      </TerminalCard>
    </TerminalContainer>
  );
};

export default Links;
