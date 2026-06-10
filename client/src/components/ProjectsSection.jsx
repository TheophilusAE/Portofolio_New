import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaFigma, FaArrowRight, FaStar } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import ProjectModal from './ProjectModal';
import MagneticElement from './MagneticElement';

const QuickLinks = ({ project, visible }) => (
  <motion.div
    animate={{
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 20
    }}
    transition={{ duration: 0.3 }}
    className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-black/60"
  >
    {project.type === "dual-github" && (
      <>
        <a
          href={project.github.frontend}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group/btn"
          title="Frontend Repository"
        >
          <FaGithub size={20} />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
            Frontend
          </span>
        </a>
        <a
          href={project.github.backend}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors group/btn"
          title="Backend Repository"
        >
          <FaGithub size={20} />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-black/80 px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
            Backend
          </span>
        </a>
      </>
    )}

    {project.type === "single-github" && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <FaGithub size={20} />
      </a>
    )}

    {project.type === "figma" && (
      <a
        href={project.figma}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <FaFigma size={20} />
      </a>
    )}

    {project.live && project.live !== "#" && (
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <FaExternalLinkAlt size={20} />
      </a>
    )}
  </motion.div>
);

const TechBadges = ({ technologies, className = '' }) => (
  <div className={`flex flex-wrap gap-2 ${className}`}>
    {technologies.map((tech) => (
      <span
        key={tech}
        className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ProjectsSection = () => {
  const [hoveredKey, setHoveredKey] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const shouldReduceMotion = useReducedMotion();
  const featuredRef = useRef(null);
  const { scrollYProgress: featuredScroll } = useScroll({
    target: featuredRef,
    offset: ['start end', 'end start'],
  });
  const featuredImageY = useTransform(featuredScroll, [0, 1], shouldReduceMotion ? [0, 0] : [-30, 30]);

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
      live: "https://www.figma.com/proto/zaCEkiX6cYABGcosLO5LHL/BeFit?node-id=0-1&t=TdFWiuwRWBQ73Zud-1",
      color: "from-pink-400 to-red-500",
      type: "figma"
    },
    {
      title: "SIDONDAR - Redesign Website for Indonesian Red Cross (PMI)",
      description: "This Figma design project is a collaboration with PMI malang presents a complete overhaul of the Palang Merah Indonesia (PMI) website, aiming to modernize its aesthetic from a boring UI to a sleek, contemporary interface, while significantly enhancing its functionality. The redesign introduces a more engaging and user-friendly experience for two distinct roles: Users and Administrators. Users, whether blood donors or recipients, gain intuitive access to crucial features such as locating the nearest blood banks, checking real-time blood bag availability based on blood type, and easily enrolling in upcoming blood donation events. For Administrators, the revamped platform provides powerful tools to effortlessly update critical data, including inventory information and details for new blood donation drives. This project transforms the PMI website into a dynamic and efficient digital hub, fostering greater community engagement and streamlining essential blood donation and management processes.",
      image: "/SIDONDAR.png",
      technologies: ["Figma", "UI/UX Design", "Website Redesign", "User Research"],
      figma: "https://www.figma.com/design/hGiK0r5UinEhGue3W6Eyjc/SIdonDAr?node-id=0-1&t=pt1PRJTI1z1wxOIA-1",
      live: "https://www.figma.com/proto/hGiK0r5UinEhGue3W6Eyjc/SIdonDAr?node-id=0-1&t=YvdihmaLjV3n59p5-1",
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

  const [featured, ...otherProjects] = projects;

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Portfolio"
            title="Featured"
            highlight="Projects"
            subtitle="Innovative solutions combining education and technology"
          />

          {/* Featured project */}
          <motion.div
            ref={featuredRef}
            variants={cardVariants}
            onHoverStart={() => setHoveredKey(featured.title)}
            onHoverEnd={() => setHoveredKey(null)}
            className="group relative grid lg:grid-cols-2 rounded-2xl bg-gray-900/80 border border-gray-800/70 hover:border-gray-700/80 overflow-hidden transition-colors duration-300 mb-8"
          >
            <div className="relative h-72 lg:h-full overflow-hidden">
              <motion.img
                src={featured.image}
                alt={featured.title}
                style={{ y: featuredImageY }}
                className="absolute inset-0 w-full h-[130%] -top-[15%] object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${featured.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />

              <span className="absolute top-4 left-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 text-gray-950 text-xs font-bold uppercase tracking-wide shadow-lg shadow-amber-500/30">
                <FaStar size={12} />
                Featured
              </span>

              <QuickLinks project={featured} visible={hoveredKey === featured.title} />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-4 lg:line-clamp-5">
                {featured.description}
              </p>
              <TechBadges technologies={featured.technologies} className="mb-6" />
              <MagneticElement strength={0.3} className="self-start">
                <button
                  onClick={() => setSelectedProject(featured)}
                  className="btn-primary text-sm px-6 py-3"
                >
                  View Details
                  <FaArrowRight size={12} />
                </button>
              </MagneticElement>
            </div>
          </motion.div>

          {/* Remaining projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                onHoverStart={() => setHoveredKey(project.title)}
                onHoverEnd={() => setHoveredKey(null)}
                className="relative group flex flex-col h-full rounded-xl bg-gray-900/80 border border-gray-800/70 hover:border-gray-700/80 overflow-hidden transition-colors duration-300"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />

                  <QuickLinks project={project} visible={hoveredKey === project.title} />
                </div>

                {/* Project Info */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>
                  <TechBadges technologies={project.technologies} className="mb-6" />
                  <MagneticElement strength={0.25} className="mt-auto self-start">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Details
                      <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </MagneticElement>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectsSection;
