import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { title: 'Home', to: 'home', icon: '🏠' },
    { title: 'About', to: 'about', icon: '👨‍💻' },
    { title: 'Education', to: 'education', icon: '🎓' },
    { title: 'Experience', to: 'experience', icon: '💼' },
    { title: 'Projects', to: 'projects', icon: '🚀' },
    { title: 'Contact', to: 'contact', icon: '📧' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gray-950/70 backdrop-blur-md border-b border-gray-800/70 shadow-2xl shadow-blue-500/10' 
            : 'bg-gray-950/50 backdrop-blur-sm'
        }`}
        style={{ top: '0px' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
              >
                <FaCode className="text-white text-lg" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Theophilus A.E
                </span>
                <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  Developer & Student
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={closeMobileMenu}
                    className="group relative"
                  >
                    <motion.div
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-all duration-300 flex items-center space-x-2 ${
                        activeSection === link.to.replace('home', 'hero')
                          ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <span className="text-sm">{link.icon}</span>
                      <span>{link.title}</span>
                    </motion.div>
                    
                    {/* Active indicator */}
                    {activeSection === link.to.replace('home', 'hero') && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                        layoutId="activeIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-gray-950 border-t border-gray-800/70"
            >
              <div className="container mx-auto px-4 py-6">
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.1,
                      }
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={closeMobileMenu}
                        className="group"
                      >
                        <motion.div
                          whileHover={{ x: 10 }}
                          whileTap={{ scale: 0.98 }}
                          className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                            activeSection === link.to.replace('home', 'hero')
                              ? 'text-white bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/50'
                              : 'text-gray-300 hover:text-white hover:bg-gray-900/70'
                          }`}
                        >
                          <span className="text-2xl">{link.icon}</span>
                          <span className="font-medium text-lg">{link.title}</span>
                          
                          {/* Arrow indicator */}
                          <motion.div
                            animate={{ x: activeSection === link.to.replace('home', 'hero') ? 5 : 0 }}
                            className="ml-auto text-gray-500 group-hover:text-blue-400 transition-colors"
                          >
                            →
                          </motion.div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
