import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AboutPage from "./components/AboutPage";
import GallerySection from "./components/GallerySection";
import EventsSection from "./components/EventsSection";
import EventsPage from "./components/EventsPage";
import TeamSection from "./components/TeamSection";
import JoinUsSection from "./components/JoinUsSection";
import Footer from "./components/Footer";
import EventsView from "./components/EventsView";

function App() {
  return (
    <Router>
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutSection />
                <EventsSection />
                <TeamSection />
                <JoinUsSection />
              </>
            }
          />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/eventspage" element={<EventsPage />} />
          <Route path="/eventsview" element={<EventsView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
