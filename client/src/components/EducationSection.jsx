import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const EducationSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "Bina Nusantara University",
      period: "2023—2027",
      focus: "Specialized Full Stack Development and also Exploring Artificial Intelligence Development and Machine Learning",
    },
    {
      degree: "High School Diploma (Science Major)",
      school: "SMA Kristen Kanaan Banjarmasin",
      period: "2020—2023",
      focus: "Science Major Focusing on Math and Science Subjects and also Learning Programming Basics",
    },
  ];

  const certifications = [
    {
      name: "Fundamental of Deep Learning",
      issuer: "Nvidia Deep Learning Institute",
      year: "2024",
      icon: <FaCertificate className="text-blue-400" size={20} />
    }
  ];

  return (
    <section id="education" className="py-24 md:py-32 bg-stone-950 text-white">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <SectionHeader
            number="02"
            eyebrow="My Background"
            title="Education &"
            highlight="Certifications"
          />

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Education Ledger */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-2 block">
                Education Timeline
              </span>
              <div className="divide-y divide-stone-800 border-t border-stone-800">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="group py-7"
                  >
                    <p className="font-serif italic text-blue-400 text-sm mb-3">{edu.period}</p>
                    <h4 className="font-serif text-xl sm:text-2xl text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <p className="text-stone-300 mb-3">{edu.school}</p>
                    <p className="text-stone-400 text-sm leading-relaxed">{edu.focus}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications Ledger */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs uppercase tracking-[0.3em] text-stone-500 mb-2 block">
                Professional Certifications
              </span>
              <div className="divide-y divide-stone-800 border-t border-stone-800">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group flex items-start gap-4 py-7"
                  >
                    <span className="pt-1">{cert.icon}</span>
                    <div>
                      <h4 className="font-serif text-xl text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-stone-400 text-sm">{cert.issuer}</p>
                      <p className="text-blue-400 text-sm font-serif italic">{cert.year}</p>
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
