import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaInstagram, FaCommentDots } from 'react-icons/fa';
import DownloadCVButton from './DownloadCVButton';
import MagneticElement from './MagneticElement';

const HeroSection = () => {
  const heroRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return undefined;
    const el = heroRef.current;
    if (!el) return undefined;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
      el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
    };

    el.addEventListener('mousemove', handleMouseMove);
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 100]);

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      url: "https://github.com/TheophilusAE",
      color: "hover:text-stone-200"
    },
    {
      icon: <FaLinkedinIn size={18} />,
      url: "https://www.linkedin.com/in/theophilus-alexander-elvan-94a6a8291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:text-cyan-400"
    },
    {
      icon: <FaInstagram size={18} />,
      url: "https://www.instagram.com/thoouuuuuu?igsh=ajlnNml4M3c0MjAx",
      color: "hover:text-blue-300"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-stone-950 group/hero"
    >
      {/* Mouse-follow spotlight */}
      <div className="cursor-glow absolute inset-0 opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 relative z-10 pt-24 pb-16 lg:py-0">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 relative z-20"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-stone-400 text-xs sm:text-sm uppercase tracking-[0.35em] mb-6"
            >
              Welcome to my world
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="font-serif text-6xl sm:text-7xl md:text-8xl font-medium text-white leading-[0.95] mb-2"
            >
              Hi, I'm
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 1 }}
              className="font-serif italic text-6xl sm:text-7xl md:text-8xl font-medium leading-[0.95] mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 text-transparent bg-clip-text"
            >
              Theophilus
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-stone-300 mb-6 font-light h-10"
            >
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Problem Solver',
                  2000,
                  'AI Enthusiast',
                  2000,
                  'Leader',
                  2000,
                  'Quick Learner',
                  2000,
                  'Software Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-cyan-400 font-medium"
                style={{ display: 'inline-block' }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8 }}
              className="text-stone-400 mb-10 text-base lg:text-lg leading-relaxed max-w-lg"
            >
              Empowering minds through technology and education to create lasting academic impact.
            </motion.p>

            {/* Social links, minimal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center gap-6 mb-10"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`text-stone-500 ${social.color} transition-colors duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
              <span className="w-10 h-px bg-stone-700" />
              <span className="text-xs uppercase tracking-[0.2em] text-stone-500">
                Available for Opportunities
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <DownloadCVButton
                creative={{
                  label: 'Creative CV',
                  path: '/CV%20Theophilus%20Alexander%20Elvan%20(1).pdf',
                  filename: 'CV Theophilus Alexander Elvan (1).pdf',
                }}
                ats={{
                  label: 'ATS CV',
                  path: '/Theophilus%20Alexander%20Elvan-resume.pdf',
                  filename: 'Theophilus Alexander Elvan-resume.pdf',
                }}
              />

              <MagneticElement strength={0.3}>
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Contact Me
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaCommentDots />
                  </motion.span>
                </motion.button>
              </MagneticElement>
            </motion.div>
          </motion.div>

          {/* Image column — bleeds to the viewport edge */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 relative h-[55vh] sm:h-[65vh] lg:h-[80vh] lg:-mr-10 xl:-mr-16"
          >
            <motion.div style={{ y: imageY }} className="relative w-full h-full">
              <div className="relative w-full h-full lg:rounded-l-[3rem] overflow-hidden shadow-2xl">
                <motion.img
                  src="/Theophilus Alexander Elvan 4 (2).jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-stone-950/60" />

                {/* Editorial caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cyan-300/90 mb-1">
                    Software &amp; AI Developer
                  </p>
                  <p className="text-stone-300 text-xs sm:text-sm">Malang, Indonesia</p>
                </div>
              </div>

              {/* Accent divider line */}
              <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-400/60 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden sm:flex absolute bottom-10 left-6 md:left-10 items-center gap-3 text-stone-500 hover:text-stone-300 transition-colors duration-300 z-20"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ scaleY: [1, 1.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="block w-px h-10 bg-current origin-top"
        />
      </motion.button>
    </section>
  );
};

export default HeroSection;
