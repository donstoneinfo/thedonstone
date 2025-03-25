
import React from 'react';
import TerminalContainer from '@/components/TerminalContainer';
import TerminalTitle from '@/components/TerminalTitle';
import TerminalCard from '@/components/TerminalCard';
import TerminalButton from '@/components/TerminalButton';

interface EventProps {
  title: string;
  date: string;
  venue: string;
  city: string;
  status: 'upcoming' | 'past';
  details: string;
  ticketLink?: string;
}

const Event: React.FC<EventProps> = ({ title, date, venue, city, status, details, ticketLink }) => {
  return (
    <TerminalCard className="mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 font-terminal">
          <div className={`border ${status === 'upcoming' ? 'border-amber' : 'border-amber border-opacity-40'} p-2`}>
            <div className={`${status === 'upcoming' ? 'bg-amber text-terminal-black' : 'bg-terminal-darkgray text-amber text-opacity-70'} p-3 text-center`}>
              <div className="text-sm mb-1">{date.split(' ')[0]}</div>
              <div className="text-2xl mb-1">{date.split(' ')[1]}</div>
              <div className="text-sm">{date.split(' ')[2]}</div>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-terminal text-amber mb-1">&gt; {title}</h3>
              <div className="text-amber-light text-sm font-mono mb-3">
                <span>{venue}</span> | <span>{city}</span>
              </div>
            </div>
            
            <div className="ml-4">
              <span className={`px-2 py-1 text-xs font-terminal ${status === 'upcoming' ? 'bg-amber text-terminal-black' : 'bg-muted text-muted-foreground'}`}>
                {status === 'upcoming' ? 'UPCOMING' : 'PAST EVENT'}
              </span>
            </div>
          </div>
          
          <p className="text-amber text-opacity-90 font-mono text-sm mb-4">{details}</p>
          
          {status === 'upcoming' && ticketLink && (
            <a href={ticketLink} target="_blank" rel="noopener noreferrer">
              <TerminalButton size="sm">
                GET TICKETS
              </TerminalButton>
            </a>
          )}
        </div>
      </div>
    </TerminalCard>
  );
};

const Events = () => {
  return (
    <TerminalContainer>
      <TerminalTitle animation="typing">EVENTS</TerminalTitle>
      
      <div className="mb-6 font-mono text-amber text-opacity-80">
        <p>// Upcoming and past performances by The Don Stone.</p>
        <p>// Click "GET TICKETS" for available upcoming events.</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-terminal text-amber border-b border-amber border-opacity-30 pb-2 mb-4">// UPCOMING EVENTS</h3>
        
        <Event 
          title="WAREHOUSE PROJECT: TERMINAL ACCESS"
          date="DEC 15 2023"
          venue="The Warehouse"
          city="London, UK"
          status="upcoming"
          details="Headlining the Terminal Access night at the Warehouse Project. A showcase of cutting-edge techno and industrial electronics featuring a special extended 3-hour set."
          ticketLink="https://example.com/tickets"
        />
        
        <Event 
          title="DIGITAL DYSTOPIA: SYSTEM FAILURE"
          date="JAN 20 2024"
          venue="Underground Bunker"
          city="Berlin, Germany"
          status="upcoming"
          details="A special B2B set with Analog Interface at Berlin's most secretive underground venue. Expect hard-hitting techno and experimental electronics in a raw industrial setting."
          ticketLink="https://example.com/tickets"
        />
        
        <Event 
          title="ALGORITHM: CODE RED"
          date="FEB 12 2024"
          venue="Circuit Lounge"
          city="Amsterdam, Netherlands"
          status="upcoming"
          details="Algorithm returns to Amsterdam with its flagship Code Red event. The Don Stone performs a live hardware set alongside other electronic pioneers."
          ticketLink="https://example.com/tickets"
        />
      </div>
      
      <div>
        <h3 className="text-lg font-terminal text-amber border-b border-amber border-opacity-30 pb-2 mb-4">// PAST EVENTS</h3>
        
        <Event 
          title="TERMINAL VELOCITY"
          date="OCT 28 2023"
          venue="The Factory"
          city="Manchester, UK"
          status="past"
          details="Halloween special at Manchester's iconic Factory venue. A night of dark, driving techno and atmospheric electronics."
        />
        
        <Event 
          title="ELECTRIC FIELDS FESTIVAL"
          date="AUG 12 2023"
          venue="Drumlanrig Castle"
          city="Scotland, UK"
          status="past"
          details="Performing on the Underground stage at Electric Fields Festival, delivering a dynamic set ranging from ambient openings to peak-time techno."
        />
        
        <Event 
          title="BINARY SYSTEMS LAUNCH PARTY"
          date="JUN 18 2023"
          venue="Corsica Studios"
          city="London, UK"
          status="past"
          details="Album launch party for 'Binary Systems' featuring a special live/DJ hybrid set showcasing tracks from the new album alongside exclusive remixes."
        />
        
        <Event 
          title="CONCRETE RESONANCE"
          date="APR 09 2023"
          venue="Tresor"
          city="Berlin, Germany"
          status="past"
          details="A special appearance at Berlin's legendary Tresor club, performing a 4-hour set in the vault room focusing on deep, hypnotic techno."
        />
      </div>
    </TerminalContainer>
  );
};

export default Events;
