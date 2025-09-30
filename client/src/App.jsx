import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <div className="bg-[#121212]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-6 bg-[#121212] text-center text-gray-400 text-sm border-t border-gray-800">
        <p>© {new Date().getFullYear()} Theophilus Alexander Elvan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
