import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import GallerySection from './components/GallerySection'
import TeamSection from './components/TeamSection'
import JoinUsSection from './components/JoinUsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TeamSection />
      <JoinUsSection />
      <Footer />
    </div>
  )
}

export default App
