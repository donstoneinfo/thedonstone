
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSoundEffect } from "@/hooks/use-sound-effect";
import Index from "./pages/Index";
import About from "./pages/About";
import Discography from "./pages/Discography";
import Mixes from "./pages/Mixes";
import Playlists from "./pages/Playlists";
import Events from "./pages/Events";
import Links from "./pages/Links";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  // Initialize sound effect for interactive elements
  useSoundEffect();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/mixes" element={<Mixes />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/events" element={<Events />} />
            <Route path="/links" element={<Links />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
