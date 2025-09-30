import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaPuzzlePiece, FaRocket } from 'react-icons/fa';

const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const skills = [
    {
      icon: <FaCode className="text-blue-500" size={24} />,
      title: "Academic Leadership",
      description: "Experienced in mentoring students, leading academic initiatives, and developing educational content that enhances learning outcomes."
    },
    {
      icon: <FaLaptopCode className="text-purple-500" size={24} />,
      title: "Data Analysis & Research",
      description: "Skilled in processing research data, creating analytical presentations, and supporting academic research projects with technical expertise."
    },
    {
      icon: <FaPuzzlePiece className="text-green-500" size={24} />,
      title: "Student Mentorship",
      description: "Proven ability to guide students through complex academic challenges, translating difficult concepts into accessible learning strategies."
    },
    {
      icon: <FaRocket className="text-red-500" size={24} />,
      title: "Educational Innovation",
      description: "Passionate about developing innovative teaching methods and leveraging technology to improve educational experiences and outcomes."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-gray-400 text-lg">
              Academic leader, mentor, and technology enthusiast
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"></div>
                <img
                  src="/Theophilus Alexander Elvan 6 (1).jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  Who I Am
                </span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I am an ambitious undergraduate in Digital Creative Technology (Computer Science), dedicated to the full-stack realization of innovative projects. 
                My core interest lies in Artificial Intelligence (AI), where I am actively deepening my expertise to build and deploy cutting-edge solutions. 
                Fuelled by a passion for collaborative problem-solving, I aim to leverage technology as a force for positive societal impact, driving advancement within my community and country.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in technology started with my fascination for computers at a young ages, and since then, 
                I've been constantly learning and evolving with the ever-changing tech landscape.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-[180px] p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="p-3 bg-gray-900 rounded-lg flex-shrink-0">
                          {skill.icon}
                        </div>
                        <h4 className="text-lg font-semibold text-white">{skill.title}</h4>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-4 overflow-hidden">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
