import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCode, FaLightbulb, FaUsers, FaTasks, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Lecturer Personal Assistant",
      company: "Bina Nusantara University",
      location: "Malang, Indonesia",
      period: "2025 - Present",
      description: "Supporting academic excellence through comprehensive research assistance and educational material development. I orchestrate end-to-end data workflows for complex research projects, transforming raw datasets into actionable insights through rigorous analysis and professional presentation. My expertise extends to creating innovative teaching materials and interactive presentations that significantly elevate classroom engagement and learning outcomes across diverse academic disciplines.",
      achievements: [
        "Streamlined research data workflows, reducing analysis time by 40% while improving accuracy",
        "Developed 20+ high-impact presentation materials enhancing student comprehension rates",
        "Collaborated on 5+ research projects, contributing to published academic documentation"
      ],
      skills: ["Data Analysis", "Research", "PowerPoint", "Academic Writing", "Excel"],
      icon: <FaTasks className="text-cyan-400" size={24} />
    },
    {
      title: "Duta Binusian (Student Ambassador)",
      company: "Bina Nusantara University",
      location: "Malang, Indonesia",
      period: "2024 - 2025",
      description: "Served as the official representative of Student Advisory Services (SAS), pioneering transformative academic support programs for Computer Science students. I designed and implemented comprehensive mentorship frameworks addressing both academic challenges and emotional resilience, creating a supportive ecosystem that fostered student success. My innovative approach to translating complex technical concepts into digestible learning modules revolutionized exam preparation methodologies, resulting in measurable improvements in student performance and confidence levels.",
      achievements: [
        "Mentored 50+ Computer Science students, achieving 95% academic improvement rate",
        "Boosted overall student performance by 30% through innovative exam preparation strategies",
        "Pioneered accessible learning methodologies for advanced programming and theoretical concepts"
      ],
      skills: ["Student Mentoring", "Academic Support", "Problem Solving", "Communication", "Leadership"],
      icon: <FaCode className="text-blue-400" size={24} />
    },
    {
      title: "Teaching Assistant",
      company: "Bina Nusantara University",
      location: "Malang, Indonesia",
      period: "2023 - Present",
      description: "Partner with distinguished faculty members to deliver exceptional computer science education through innovative teaching methodologies and hands-on learning experiences. I facilitate comprehensive laboratory sessions, provide personalized academic support, and contribute to curriculum enhancement initiatives. My role encompasses both technical instruction and student development, ensuring each learner receives tailored guidance to maximize their academic potential and practical skill development.",
      achievements: [
        "Mentored 100+ students across 8+ computer science courses with 98% satisfaction rate",
        "Enhanced laboratory learning experiences, improving practical skill acquisition by 35%",
        "Implemented personalized tutoring programs that increased course completion rates by 20%"
      ],
      skills: ["Teaching", "Laboratory Management", "Student Support", "Programming", "Curriculum Development"],
      icon: <FaLightbulb className="text-purple-400" size={24} />
    },
    {
      title: "President of Himpunan Mahasiswa Teknik Informatika (HIMTI)",
      company: "Bina Nusantara University",
      location: "Malang, Indonesia",
      period: "2025 - Present",
      description: "Lead the premier Computer Science student organization, orchestrating strategic initiatives that transform student experiences and foster professional development. I direct a dynamic team of 42 dedicated members in executing high-impact programs while maintaining rigorous financial stewardship and operational excellence. My leadership extends beyond organizational management to serve as the authoritative voice for SOCS students, building bridges between student aspirations and institutional goals through innovative community engagement and strategic partnerships.",
      achievements: [
        "Orchestrated 15+ professional development workshops, reaching 300+ Computer Science students",
        "Elevated student engagement by 40%, establishing HIMTI as the most active student organization",
        "Increased membership by 200% through targeted recruitment and retention strategies",
        "Secured strategic partnerships with leading tech companies, creating internship opportunities"
      ],
      skills: ["Leadership", "Event Management", "Public Speaking", "Team Building", "Strategic Planning"],
      icon: <FaUsers className="text-green-400" size={24} />
    },
    {
      title: "Freshmen Leader & Freshmen Partner FYP Binusian 28",
      company: "Bina Nusantara University",
      location: "Malang, Indonesia",
      period: "2023 - 2024",
      description: "Championed the successful integration of new students into university life through comprehensive mentorship and strategic orientation programs. I developed and executed innovative transition support systems that addressed academic, social, and administrative challenges faced by incoming students. My holistic approach combined personalized guidance with structured programs, creating a nurturing environment that empowered freshmen to excel from their very first semester while building lasting connections within the academic community.",
      achievements: [
        "Guided 30+ freshmen to academic success with 100% first-semester completion rate",
        "Enhanced freshmen retention rate by 25% through comprehensive support initiatives",
        "Designed and executed orientation programs that increased student satisfaction by 100%"
      ],
      skills: ["Mentoring", "Orientation Planning", "Peer Support", "Communication", "Event Coordination"],
      icon: <FaBriefcase className="text-yellow-400" size={24} />
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
              <p className="text-gray-400 text-lg">
                My journey through academic leadership and educational excellence
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-16"
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-0 p-3 bg-gray-800 rounded-full border-4 border-gray-900">
                    {exp.icon}
                  </div>

                  {/* Content Card */}
                  <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-400 mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm bg-gray-800/80 px-3 py-1 rounded-full border border-gray-700/50">
                        {exp.period}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {expandedCard === index ? exp.description : `${exp.description.substring(0, 150)}...`}
                      </p>
                      {exp.description.length > 150 && (
                        <button
                          onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                          className="mt-2 text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 text-sm"
                        >
                          {expandedCard === index ? 'Show Less' : 'Read More'}
                          {expandedCard === index ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                        </button>
                      )}
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-white">
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-blue-400 mt-1.5">•</span>
                            <span className="text-gray-300 leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-900 text-gray-300 rounded-full text-sm
                            hover:bg-gray-700 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
