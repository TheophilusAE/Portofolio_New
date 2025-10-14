import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';

const EducationSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Bina Nusantara University",
      period: "2023-2027",
      focus: "Specialized Full Stack Development and also Exploring Artificial Intelligence Development and Machine Learning",
    },
    {
      degree: "High School Diploma (Science Major)",
      school: "SMA Kristen Kanaan Banjarmasin",
      period: "2020-2023",
      focus: "Science Major Focusing on Math and Science Subjects and also Learning Programming Basics",
    },
  ];

  const certifications = [
    {
      name: "Fundamental of Deep Learning",
      issuer: "Nvidia Deep Learning Institute",
      year: "2024",
      icon: <FaCertificate className="text-green-400" size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-transparent text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Education Timeline</h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-8 border-l-2 border-gray-700"
                  >
                    <div className="absolute -left-2.5 top-0">
                      <div className="bg-blue-500 rounded-full w-5 h-5"></div>
                    </div>
                    <div className="bg-gray-900/80 p-6 rounded-xl hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                      <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                      <p className="text-gray-300 mb-1">{edu.school}</p>
                      <p className="text-blue-400 text-sm mb-3">{edu.period}</p>
                      <p className="text-gray-300">{edu.focus}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-8">Professional Certifications</h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-900/80 p-6 rounded-xl hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-black/60 rounded-lg">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">{cert.name}</h4>
                        <p className="text-gray-300 text-sm">{cert.issuer}</p>
                        <p className="text-blue-400 text-sm">{cert.year}</p>
                      </div>
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

export default EducationSection;