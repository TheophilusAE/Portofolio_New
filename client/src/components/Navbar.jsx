import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll progress hairline */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500 z-50 origin-left"
        style={{ width: `${Math.min(Math.max(scrollProgress, 0), 100)}%` }}
      />

      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled ? 'bg-stone-950/80 backdrop-blur-xl border-b border-stone-800/60' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Minimal logo */}
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              onClick={closeMobileMenu}
              className="cursor-pointer"
            >
              <motion.span
                whileHover={{ letterSpacing: '0.15em' }}
                transition={{ duration: 0.3 }}
                className="font-serif text-xl text-white tracking-wide"
              >
                T<span className="text-amber-400">.</span>A<span className="text-amber-400">.</span>E
              </motion.span>
            </Link>

            {/* Desktop dot navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.to.replace('home', 'hero');
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={closeMobileMenu}
                    className="group relative cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 py-2">
                      <motion.span
                        animate={{
                          width: isActive ? 24 : 6,
                          backgroundColor: isActive ? '#fbbf24' : '#57534e',
                        }}
                        className="block h-1.5 rounded-full group-hover:bg-stone-400 transition-colors"
                      />
                      <span
                        className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                          isActive ? 'text-amber-300 opacity-100' : 'text-stone-400 opacity-60 group-hover:opacity-100'
                        }`}
                      >
                        {link.title}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
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
                    <FaTimes size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Fullscreen editorial mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-30 bg-stone-950 flex flex-col justify-center px-8"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
              }}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.to.replace('home', 'hero');
                return (
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
                      className="group block"
                    >
                      <div className="flex items-baseline gap-5 py-4 border-b border-stone-800">
                        <span className="font-serif text-sm text-amber-400">
                          0{index + 1}
                        </span>
                        <span
                          className={`font-serif text-4xl sm:text-5xl transition-colors duration-300 ${
                            isActive ? 'text-amber-300 italic' : 'text-white group-hover:text-amber-300'
                          }`}
                        >
                          {link.title}
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
