import { useState } from "react";
import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import DeityCarousel from "./components/DeityCarousel";
import QuickLinks from "./components/QuickLinks";
import About from "./components/About";
import Sevas from "./components/Sevas";
import Accommodation from "./components/Accommodation";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ChantPlayer from "./components/ChantPlayer";
import TempleInfoPage from "./components/TempleInfoPage";
import himalayasBg from "./assets/himalayas_bg.png";

export default function App() {
  const [activeAboutSection, setActiveAboutSection] = useState(null);

  return (
    <div 
      className="min-h-screen font-body relative"
      style={{
        backgroundImage: `linear-gradient(rgba(243, 244, 246, 0.92), rgba(243, 244, 246, 0.92)), url(${himalayasBg})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar onSelectAboutSection={setActiveAboutSection} />
      
      {activeAboutSection === null ? (
        <>
          <Ticker />
          <DeityCarousel />
          <QuickLinks />
          <About />
          <Sevas />
          <Accommodation />
          <Gallery />
        </>
      ) : (
        <TempleInfoPage
          sectionId={activeAboutSection}
          onClose={() => setActiveAboutSection(null)}
        />
      )}

      <Footer />
      <ChantPlayer />
    </div>
  );
}
