
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Collections from "./pages/Collections";
import BookConsultation from "./pages/BookConsultation";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Journal from "./pages/Journal";
import WatchVault from "./components/WatchVault";
import AIConcierge from "./components/AIConcierge";
import Rolex from "./pages/brands/Rolex";
import PatekPhilippe from "./pages/brands/PatekPhilippe";
import AudemarsPiguet from "./pages/brands/AudemarsPiguet";
import RichardMille from "./pages/brands/RichardMille";
import VacheronConstantin from "./pages/brands/VacheronConstantin";
import Omega from "./pages/brands/Omega";
import Cartier from "./pages/brands/Cartier";
import JaegerLeCoultre from "./pages/brands/JaegerLeCoultre";
import Hublot from "./pages/brands/Hublot";
import TagHeuer from "./pages/brands/TagHeuer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/vault" element={<div className="pt-24 pb-16 container px-4"><WatchVault /></div>} />
              <Route path="/collections/rolex" element={<Rolex />} />
              <Route path="/collections/patek-philippe" element={<PatekPhilippe />} />
              <Route path="/collections/audemars-piguet" element={<AudemarsPiguet />} />
              <Route path="/collections/richard-mille" element={<RichardMille />} />
              <Route path="/collections/vacheron-constantin" element={<VacheronConstantin />} />
              <Route path="/collections/omega" element={<Omega />} />
              <Route path="/collections/cartier" element={<Cartier />} />
              <Route path="/collections/jaeger-lecoultre" element={<JaegerLeCoultre />} />
              <Route path="/collections/hublot" element={<Hublot />} />
              <Route path="/collections/tag-heuer" element={<TagHeuer />} />
            </Routes>
            <AIConcierge />
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
