import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaFigma } from 'react-icons/fa';

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "FinApp",
      description: "FinApp is an AI-powered financial management web application for UMKM owners, built with Laravel frontend and Go backend microservices. The project demonstrates my full-stack development skills through features like secure authentication, real-time updates, and automated financial tracking. Using modern technologies like Tailwind CSS and implementing clean architecture, I created a scalable solution that helps business owners manage their finances efficiently while maintaining security best practices. The application leverages artificial intelligence to provide smart financial insights, automated categorization of transactions, and predictive analytics to help users make better financial decisions adn also this web can change between dark and light theme.",
      image: "/FinApp.png",
      technologies: ["Laravel", "Go", "MySQL", "Tailwind CSS", "AI"],
      github: {
        frontend: "https://github.com/TheophilusAE/Web_Project_Laravel",
        backend: "https://github.com/TheophilusAE/Web_Project_Go"
      },
      live: "#",
      color: "from-blue-400 to-purple-500",
      type: "dual-github"
    },
    {
      title: "FinApp Mobile App",
      description: "Finapp Mobile is a robust and intuitive financial management application designed to empower users in achieving and maintaining healthy cash flow, offering comprehensive tools for tracking income and expenses for a clear financial overview. Powered by a high-performance Go backend, a dynamic React frontend, and a reliable MySQL database, Finapp integrates an advanced AI analysis system that meticulously assesses the health of your cash flow, providing valuable insights, references, and personalized tips to optimize spending habits and foster robust financial well-being.",
      image: "/FinApp Mobile.png",
      technologies: ["React Native", "Redux", "Firebase"],
      github: "https://github.com/TheophilusAE/Finapp_mobile",
      live: "#",
      color: "from-emerald-400 to-cyan-500",
      type: "single-github"
    },
    {
      title: "BeFit - AI-Powered Fitness & Social App (Prototype)",
      description: "This is an innovative mobile application Prototype, meticulously designed in Figma, that revolutionizes how you approach your fitness journey. Beyond being a comprehensive workout planner, BeFit integrates cutting-edge AI technology that allows you to simply take a picture of your body, and the AI will intelligently generate a personalized workout plan tailored to your physique and goals. This ensures you're always engaging in the most effective exercises for your unique needs. But BeFit isn't just about individual progress; it also doubles as a vibrant social media platform. Users can effortlessly share their daily workouts, fitness achievements, healthy recipes, or any aspect of their wellness journey with a supportive community, fostering motivation and connection. With BeFit, achieving your fitness aspirations becomes smarter, more personalized, and more engaging than ever before.",
      image: "/Befit.png",
      technologies: ["Figma", "UI/UX Design", "Prototype", "Mobile Design"],
      figma: "https://www.figma.com/design/zaCEkiX6cYABGcosLO5LHL/BeFit?node-id=0-1&t=3TpS66WfEnXMLdk7-1",
      color: "from-pink-400 to-red-500",
      type: "figma"
    },
    {
      title: "SIDONDAR - Redesign Website for Indonesian Red Cross (PMI)",
      description: "This Figma design project is a collaboration with PMI malang presents a complete overhaul of the Palang Merah Indonesia (PMI) website, aiming to modernize its aesthetic from a boring UI to a sleek, contemporary interface, while significantly enhancing its functionality. The redesign introduces a more engaging and user-friendly experience for two distinct roles: Users and Administrators. Users, whether blood donors or recipients, gain intuitive access to crucial features such as locating the nearest blood banks, checking real-time blood bag availability based on blood type, and easily enrolling in upcoming blood donation events. For Administrators, the revamped platform provides powerful tools to effortlessly update critical data, including inventory information and details for new blood donation drives. This project transforms the PMI website into a dynamic and efficient digital hub, fostering greater community engagement and streamlining essential blood donation and management processes.",
      image: "/SIDONDAR.png",
      technologies: ["Figma", "UI/UX Design", "Website Redesign", "User Research"],
      figma: "https://www.figma.com/design/hGiK0r5UinEhGue3W6Eyjc/SIdonDAr?node-id=0-1&t=pt1PRJTI1z1wxOIA-1",
      color: "from-red-400 to-pink-500",
      type: "figma"
    },
    {
      title: "GPDI Persadamas Banjarmasin Website",
      description: "This project involves the full-stack development of the official profile website for Gereja Pantekosta di Indonesia (GPdI) Jemaat Persadamas Banjarmasin. My team is currently designing and building a responsive, user-friendly platform that will serve as the primary digital face for the congregation. The website's core function is to provide key information about the church's vision, mission, history, schedule of services, contact details, and various ministries. The goal is to enhance digital outreach, improve communication with current members, and provide a welcoming resource for the wider community.",
      image: "/GPDI.png",
      technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      github: "https://github.com/TheophilusAE/Web-GPDI-Persadamas-Banjarmasin",
      live: "https://gpdi-persadamas-banjarmasin.vercel.app/",
      color: "from-purple-400 to-blue-500",
      type: "single-github"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 bg-transparent text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg">
              Innovative solutions combining education and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group rounded-xl bg-gray-900/80 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Project Links */}
                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.type === "dual-github" && (
                      <>
                        <motion.a
                          href={project.github.frontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors duration-200"
                          title="Frontend Repository"
                        >
                          <FaGithub size={16} />
                          <span>Frontend</span>
                        </motion.a>
                        <motion.a
                          href={project.github.backend}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors duration-200"
                          title="Backend Repository"
                        >
                          <FaGithub size={16} />
                          <span>Backend</span>
                        </motion.a>
                      </>
                    )}
                    
                    {project.type === "single-github" && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm rounded-lg transition-colors duration-200"
                      >
                        <FaGithub size={16} />
                        <span>GitHub</span>
                      </motion.a>
                    )}
                    
                    {project.type === "figma" && (
                      <motion.a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg transition-colors duration-200"
                      >
                        <FaFigma size={16} />
                        <span>Design</span>
                      </motion.a>
                    )}
                    
                    {project.live && project.live !== "#" && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
                      >
                        <FaExternalLinkAlt size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
