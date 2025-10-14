import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaPuzzlePiece, FaRocket, FaBrain, FaUsers } from 'react-icons/fa';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skills = [
    {
      icon: <FaCode className="text-blue-500" size={24} />,
      title: "Academic Leadership",
      description: "Experienced in mentoring students, leading academic initiatives, and developing educational content that enhances learning outcomes.",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <FaLaptopCode className="text-purple-500" size={24} />,
      title: "Data Analysis & Research",
      description: "Skilled in processing research data, creating analytical presentations, and supporting academic research projects with technical expertise.",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <FaPuzzlePiece className="text-green-500" size={24} />,
      title: "Student Mentorship",
      description: "Proven ability to guide students through complex academic challenges, translating difficult concepts into accessible learning strategies.",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: <FaRocket className="text-red-500" size={24} />,
      title: "Educational Innovation",
      description: "Passionate about developing innovative teaching methods and leveraging technology to improve educational experiences and outcomes.",
      color: "from-red-500/20 to-red-600/20"
    },
    {
      icon: <FaBrain className="text-cyan-500" size={24} />,
      title: "AI & Technology",
      description: "Deep interest in artificial intelligence and emerging technologies, constantly exploring their applications in education and development.",
      color: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      icon: <FaUsers className="text-pink-500" size={24} />,
      title: "Team Collaboration",
      description: "Strong interpersonal skills with experience in cross-functional teams, fostering collaborative environments for optimal results.",
      color: "from-pink-500/20 to-pink-600/20"
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
    <section id="about" className="py-20 relative overflow-hidden bg-transparent">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="dot-pattern absolute inset-0 opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                About{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
                  Me
                </span>
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Academic leader, mentor, and technology enthusiast
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mt-6 rounded-full"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Profile Image with enhanced effects */}
            <motion.div
              variants={itemVariants}
              className="relative order-2 lg:order-1"
            >
              <div className="relative group">
                {/* Glowing background */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"
                />
                
                {/* Image container */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 z-10"></div>
                  <motion.img
                    src="/Theophilus Alexander Elvan 6 (1).jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ filter: "brightness(1.1) saturate(1.1)" }}
                  />
                  
                  {/* Floating badges */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-6 right-6 bg-blue-500/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-semibold"
                  >
                    💻 Developer
                  </motion.div>
                  
                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute bottom-6 left-6 bg-purple-500/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-semibold"
                  >
                    🎓 Student
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-8 order-1 lg:order-2"
            >
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
                    Who I Am
                  </span>
                </h3>
              </motion.div>
              
              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed"
              >
                I am an ambitious undergraduate in{" "}
                <span className="text-blue-400 font-semibold">Digital Creative Technology (Computer Science)</span>, 
                dedicated to the full-stack realization of innovative projects. 
                My core interest lies in{" "}
                <span className="text-purple-400 font-semibold">Artificial Intelligence (AI)</span>, 
                where I am actively deepening my expertise to build and deploy cutting-edge solutions.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="text-gray-300 text-lg leading-relaxed"
              >
                Fuelled by a passion for collaborative problem-solving, I aim to leverage technology as a force for 
                positive societal impact, driving advancement within my community and country. My journey in technology 
                started with my fascination for computers at a young age, and since then, I've been constantly learning 
                and evolving with the ever-changing tech landscape.
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="mt-20"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-12 text-white"
            >
              Core{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Competencies
              </span>
            </motion.h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    rotateY: 5,
                  }}
                  className="group relative p-6 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800/70 hover:border-gray-700/80 transition-all duration-300 overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 bg-black/60 rounded-xl flex items-center justify-center mb-4 group-hover:bg-black/80 transition-colors duration-300"
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300">
                      {skill.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 w-4 h-4 border border-blue-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
