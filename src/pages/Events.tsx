
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
                {status === 'upcoming' ? 'UPCOMING' : 'WEEKLY'}
              </span>
            </div>
          </div>
          
          <p className="text-amber text-opacity-90 font-mono text-sm mb-4">{details}</p>
          
          {ticketLink && (
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

interface ResidencyProps {
  title: string;
  day: string;
  time: string;
  venue: string;
  city: string;
  details: string;
  ticketLink?: string;
}

const Residency: React.FC<ResidencyProps> = ({ title, day, time, venue, city, details, ticketLink }) => {
  return (
    <TerminalCard className="mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 font-terminal">
          <div className="border border-amber border-opacity-40 p-2">
            <div className="bg-terminal-darkgray text-amber p-3 text-center">
              <div className="text-2xl mb-1">{day}</div>
              <div className="text-sm">{time}</div>
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
              <span className="px-2 py-1 text-xs font-terminal bg-terminal-darkgray text-amber border border-amber border-opacity-30">
                WEEKLY
              </span>
            </div>
          </div>
          
          <p className="text-amber text-opacity-90 font-mono text-sm mb-4">{details}</p>
          
          {ticketLink && (
            <a href={ticketLink} target="_blank" rel="noopener noreferrer">
              <TerminalButton size="sm">
                RSVP
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
        <p>// Upcoming events and weekly residencies by The Don Stone.</p>
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
        <h3 className="text-lg font-terminal text-amber border-b border-amber border-opacity-30 pb-2 mb-4">// WEEKLY RESIDENCIES</h3>
        
        <Residency 
          title="BINARY SUNDAYS"
          day="SUNDAY"
          time="22:00 - 04:00"
          venue="Digital Loft"
          city="London, UK"
          details="End your weekend with a journey through ambient, IDM, and deep techno. The Don Stone curates a weekly session focused on introspective electronic music with occasional special guests. Perfect for those seeking a more cerebral club experience."
          ticketLink="https://example.com/rsvp"
        />
        
        <Residency 
          title="TERMINAL TUESDAYS"
          day="TUESDAY"
          time="21:00 - 02:00"
          venue="The Underground"
          city="Manchester, UK"
          details="A midweek techno session featuring The Don Stone and rotating local talent. This intimate club night has become a staple for techno enthusiasts, showcasing raw, uncompromising sounds in a basement setting with minimal lighting and maximum sound."
          ticketLink="https://example.com/rsvp"
        />
        
        <Residency 
          title="SYSTEM SATURDAYS"
          day="SATURDAY"
          time="23:00 - 06:00"
          venue="Factory Floor"
          city="Berlin, Germany"
          details="The flagship weekend residency where The Don Stone explores the full spectrum of techno, from hypnotic minimal to industrial hardcore. A proper warehouse experience with state-of-the-art sound and lighting, consistently drawing crowds from across Europe."
          ticketLink="https://example.com/rsvp"
        />
      </div>
    </TerminalContainer>
  );
};

export default Events;
