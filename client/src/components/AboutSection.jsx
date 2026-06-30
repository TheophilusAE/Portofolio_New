import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaPuzzlePiece, FaRocket, FaBrain, FaUsers } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-40, 40]);

  const skills = [
    {
      icon: <FaCode className="text-amber-500" size={20} />,
      title: "Academic Leadership",
      description: "Mentoring students, leading academic initiatives, and developing educational content that enhances learning outcomes."
    },
    {
      icon: <FaLaptopCode className="text-orange-500" size={20} />,
      title: "Data Analysis & Research",
      description: "Processing research data, creating analytical presentations, and supporting academic research projects with technical expertise."
    },
    {
      icon: <FaPuzzlePiece className="text-rose-500" size={20} />,
      title: "Student Mentorship",
      description: "Guiding students through complex academic challenges, translating difficult concepts into accessible learning strategies."
    },
    {
      icon: <FaRocket className="text-red-500" size={20} />,
      title: "Educational Innovation",
      description: "Developing innovative teaching methods and leveraging technology to improve educational experiences and outcomes."
    },
    {
      icon: <FaBrain className="text-yellow-500" size={20} />,
      title: "AI & Technology",
      description: "Deep interest in artificial intelligence and emerging technologies, exploring their applications in education and development."
    },
    {
      icon: <FaUsers className="text-amber-600" size={20} />,
      title: "Team Collaboration",
      description: "Strong interpersonal skills with experience in cross-functional teams, fostering collaborative environments."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden bg-stone-950">
      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <SectionHeader
            number="01"
            eyebrow="Get To Know Me"
            title="About"
            highlight="Me"
            subtitle="Academic leader, mentor, and technology enthusiast"
          />

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* About Content — leads on the left */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-7 space-y-6 order-2 lg:order-1"
            >
              <h3 className="font-serif italic text-2xl lg:text-3xl text-white mb-2">
                Who I Am
              </h3>

              <motion.p
                variants={itemVariants}
                className="text-stone-300 text-lg leading-relaxed"
              >
                I am an ambitious undergraduate in{" "}
                <span className="text-amber-400 font-semibold">Digital Creative Technology (Computer Science)</span>,
                dedicated to the full-stack realization of innovative projects.
                My core interest lies in{" "}
                <span className="text-orange-400 font-semibold">Artificial Intelligence (AI)</span>,
                where I am actively deepening my expertise to build and deploy cutting-edge solutions.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-stone-300 text-lg leading-relaxed"
              >
                Fuelled by a passion for collaborative problem-solving, I aim to leverage technology as a force for
                positive societal impact, driving advancement within my community and country. My journey in technology
                started with my fascination for computers at a young age, and since then, I've been constantly learning
                and evolving with the ever-changing tech landscape.
              </motion.p>

              {/* Core competencies — editorial list, no cards */}
              <div className="pt-8">
                <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-2 block">
                  Core Competencies
                </span>
                <div className="divide-y divide-stone-800 border-t border-stone-800">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 8 }}
                      className="group flex items-start gap-5 py-5"
                    >
                      <span className="font-serif italic text-sm text-stone-600 w-6 pt-1 flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-shrink-0 pt-0.5">{skill.icon}</span>
                      <div>
                        <h4 className="text-white font-semibold mb-1 group-hover:text-amber-300 transition-colors duration-300">
                          {skill.title}
                        </h4>
                        <p className="text-stone-400 text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Profile Image — offset, no rounded card */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 relative order-1 lg:order-2"
            >
              <motion.div style={{ y: imageY }} className="relative lg:sticky lg:top-32">
                <div className="relative w-full h-[420px] lg:h-[560px] overflow-hidden">
                  <motion.img
                    src="/Theophilus Alexander Elvan 6 (1).jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 hidden sm:block bg-stone-950 border border-stone-800 px-5 py-4">
                  <p className="font-serif italic text-2xl text-amber-400">2027</p>
                  <p className="text-stone-400 text-xs uppercase tracking-widest">Expected Graduation</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
