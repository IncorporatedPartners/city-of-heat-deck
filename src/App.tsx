import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { CoverSlide } from './pages/CoverSlide';
import { SynopsisSlide } from './pages/SynopsisSlide';
import { VibeNeonSlide } from './pages/VibeNeonSlide';
import { RosterSlide } from './pages/RosterSlide';
import { EnsembleSlide } from './pages/EnsembleSlide';
import { VibeStreetSlide } from './pages/VibeStreetSlide';
import { StoryArcSlide } from './pages/StoryArcSlide';
import { VibeCitySlide } from './pages/VibeCitySlide';
import { StillsHustleSlide } from './pages/StillsHustleSlide';
import { StillsCostSlide } from './pages/StillsCostSlide';
import { DossierSlide } from './pages/DossierSlide';
import { CapitalSlide } from './pages/CapitalSlide';
import { AncillarySlide } from './pages/AncillarySlide';

import { ContactSlide } from './pages/ContactSlide';
import { FranchiseSlide } from './pages/FranchiseSlide';
import { TrailerSlide } from './pages/TrailerSlide';
import { MiamiDossierSlide } from './pages/MiamiDossierSlide';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<CoverSlide />} />
          <Route path="/trailer" element={<TrailerSlide />} />
          <Route path="/synopsis" element={<SynopsisSlide />} />
          <Route path="/dossier-miami" element={<MiamiDossierSlide />} />
          <Route path="/vibe-neon" element={<VibeNeonSlide />} />
          <Route path="/roster" element={<RosterSlide />} />
          <Route path="/ensemble" element={<EnsembleSlide />} />
          <Route path="/vibe-street" element={<VibeStreetSlide />} />
          <Route path="/arc" element={<StoryArcSlide />} />
          <Route path="/franchise" element={<FranchiseSlide />} />
          <Route path="/vibe-city" element={<VibeCitySlide />} />
          <Route path="/stills-hustle" element={<StillsHustleSlide />} />
          <Route path="/stills-cost" element={<StillsCostSlide />} />
          <Route path="/dossier" element={<DossierSlide />} />
          <Route path="/capital" element={<CapitalSlide />} />
          <Route path="/ancillary" element={<AncillarySlide />} />

          <Route path="/contact" element={<ContactSlide />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
