import React from 'react';
import { motion } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <AnimatedBackground variant="particles">
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </motion.div>
        
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="py-8 text-center text-gray-400 text-sm border-t border-gray-800/70 backdrop-blur-sm bg-gray-950/40"
        >
          <div className="container mx-auto px-4">
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="mb-2"
            >
              © {new Date().getFullYear()} Theophilus Alexander Elvan. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-xs text-gray-500"
            >
              Built with React, Framer Motion & Tailwind CSS
            </motion.p>
          </div>
        </motion.footer>
      </div>
    </AnimatedBackground>
  );
};

export default App;
