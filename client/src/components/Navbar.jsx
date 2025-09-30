import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Determine active section
      const sections = ['hero', 'about', 'education', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section === 'hero' ? 'home' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Education', to: 'education' },
    { title: 'Experience', to: 'experience' },
    { title: 'Projects', to: 'projects' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#121212]/95 backdrop-blur-md border-b border-gray-700/70 shadow-lg' : 'bg-transparent'
        }`}
        style={{ top: '4px' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-bold"
            >
              <span className="text-white">
                Theophilus A.E
              </span>
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`cursor-pointer font-medium transition duration-300 relative ${
                      activeSection === link.to.replace('home', 'hero')
                        ? 'text-purple-400'
                        : 'text-gray-300 hover:text-purple-400'
                    }`}
                  >
                    {link.title}
                    {activeSection === link.to.replace('home', 'hero') && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400"
                        layoutId="activeTab"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
