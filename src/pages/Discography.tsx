
import React from 'react';
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
  tracklist: string[];
  listen?: string;
}

const Release: React.FC<ReleaseProps> = ({ title, type, year, label, cat, tracklist, listen }) => {
  return (
    <TerminalCard className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <div className="border border-amber border-opacity-50 p-2 h-full">
            <div className="bg-terminal-darkgray aspect-square flex items-center justify-center text-amber font-terminal p-4">
              <div className="text-center">
                <p className="text-xs mb-2">[{type}]</p>
                <p className="text-lg mb-1">{title}</p>
                <p className="text-xs mb-4">{year}</p>
                <pre className="text-xs">
{`  ___________
 /     ___   \\
/     /   \\   \\
|    |     |   |
|    |     |   |
\\     \\___/   /
 \\___________ /`}
                </pre>
                <p className="text-xs mt-4">{label}</p>
                <p className="text-xs opacity-70">{cat}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h3 className="text-xl font-terminal text-amber mb-3">&gt; {title}</h3>
          
          <div className="font-mono">
            <p className="mb-3 text-amber-light text-sm">
              <span className="text-amber-light opacity-70">DATE: </span>{year} | 
              <span className="text-amber-light opacity-70"> LABEL: </span>{label} | 
              <span className="text-amber-light opacity-70"> CATALOG: </span>{cat}
            </p>
            
            <div className="mb-4">
              <h4 className="text-amber-light text-sm mb-2">// TRACKLIST:</h4>
              <ol className="list-decimal pl-5 text-amber text-opacity-90">
                {tracklist.map((track, index) => (
                  <li key={index} className="mb-1">{track}</li>
                ))}
              </ol>
            </div>
            
            {listen && (
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
        <p>// Displaying in reverse chronological order.</p>
      </div>
      
      <Release 
        title="NEURAL DECAY"
        type="EP"
        year="2023"
        label="TERMINAL TECHNO RECORDS"
        cat="TTR-023"
        tracklist={[
          "Neural Decay",
          "Synaptic Overload",
          "Memory Fragments",
          "Data Corruption",
          "Neural Decay (Machine Remix)"
        ]}
        listen="https://soundcloud.com"
      />
      
      <Release 
        title="WAREHOUSE BLUEPRINTS"
        type="ALBUM"
        year="2022"
        label="SYSTEM FAILURE AUDIO"
        cat="SFA-112"
        tracklist={[
          "Abandoned Corridor",
          "Steel Structure",
          "Concrete Floor",
          "Emergency Lights",
          "Control Room",
          "Hidden Entrance",
          "Industrial Machinery",
          "System Failure",
          "Emergency Exit",
          "Warehouse Floor"
        ]}
        listen="https://bandcamp.com"
      />
      
      <Release 
        title="TWILIGHT FREQUENCIES"
        type="EP"
        year="2021"
        label="DARK MATTER RECORDINGS"
        cat="DMR-045"
        tracklist={[
          "Midnight Signal",
          "Frequency Modulation",
          "Twilight Zone",
          "Atmospheric Pressure"
        ]}
        listen="https://spotify.com"
      />
      
      <Release 
        title="ELECTRONIC RITUALS"
        type="EP"
        year="2020"
        label="UNDERGROUND COLLECTIVE"
        cat="UC-017"
        tracklist={[
          "Initiation Sequence",
          "Ancient Code",
          "Digital Ritual",
          "Ceremony Completion"
        ]}
        listen="https://bandcamp.com"
      />
      
      <Release 
        title="BINARY STRUCTURES"
        type="ALBUM"
        year="2019"
        label="ALGORITHM RECORDINGS"
        cat="AR-029"
        tracklist={[
          "Binary Code",
          "Algorithmic",
          "Data Fragments",
          "Recursive Function",
          "Infinite Loop",
          "Command Line",
          "Error Message",
          "Digital Dissolution"
        ]}
        listen="https://spotify.com"
      />
    </TerminalContainer>
  );
};

export default Discography;
