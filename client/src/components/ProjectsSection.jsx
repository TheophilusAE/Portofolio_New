import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaArrowLeft, FaStar } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollRef = useRef(null);

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
      color: "from-blue-400 to-cyan-500",
      type: "dual-github"
    },
    {
      title: "FinApp Mobile App",
      description: "Finapp Mobile is a robust and intuitive financial management application designed to empower users in achieving and maintaining healthy cash flow, offering comprehensive tools for tracking income and expenses for a clear financial overview. Powered by a high-performance Go backend, a dynamic React frontend, and a reliable MySQL database, Finapp integrates an advanced AI analysis system that meticulously assesses the health of your cash flow, providing valuable insights, references, and personalized tips to optimize spending habits and foster robust financial well-being.",
      image: "/FinApp Mobile.png",
      technologies: ["React Native", "Redux", "Firebase"],
      github: "https://github.com/TheophilusAE/Finapp_mobile",
      live: "#",
      color: "from-cyan-400 to-blue-500",
      type: "single-github"
    },
    {
      title: "BeFit - AI-Powered Fitness & Social App (Prototype)",
      description: "This is an innovative mobile application Prototype, meticulously designed in Figma, that revolutionizes how you approach your fitness journey. Beyond being a comprehensive workout planner, BeFit integrates cutting-edge AI technology that allows you to simply take a picture of your body, and the AI will intelligently generate a personalized workout plan tailored to your physique and goals. This ensures you're always engaging in the most effective exercises for your unique needs. But BeFit isn't just about individual progress; it also doubles as a vibrant social media platform. Users can effortlessly share their daily workouts, fitness achievements, healthy recipes, or any aspect of their wellness journey with a supportive community, fostering motivation and connection. With BeFit, achieving your fitness aspirations becomes smarter, more personalized, and more engaging than ever before.",
      image: "/Befit.png",
      technologies: ["Figma", "UI/UX Design", "Prototype", "Mobile Design"],
      figma: "https://www.figma.com/design/zaCEkiX6cYABGcosLO5LHL/BeFit?node-id=0-1&t=3TpS66WfEnXMLdk7-1",
      live: "https://www.figma.com/proto/zaCEkiX6cYABGcosLO5LHL/BeFit?node-id=0-1&t=TdFWiuwRWBQ73Zud-1",
      color: "from-blue-300 to-indigo-500",
      type: "figma"
    },
    {
      title: "SIDONDAR - Redesign Website for Indonesian Red Cross (PMI)",
      description: "This Figma design project is a collaboration with PMI malang presents a complete overhaul of the Palang Merah Indonesia (PMI) website, aiming to modernize its aesthetic from a boring UI to a sleek, contemporary interface, while significantly enhancing its functionality. The redesign introduces a more engaging and user-friendly experience for two distinct roles: Users and Administrators. Users, whether blood donors or recipients, gain intuitive access to crucial features such as locating the nearest blood banks, checking real-time blood bag availability based on blood type, and easily enrolling in upcoming blood donation events. For Administrators, the revamped platform provides powerful tools to effortlessly update critical data, including inventory information and details for new blood donation drives. This project transforms the PMI website into a dynamic and efficient digital hub, fostering greater community engagement and streamlining essential blood donation and management processes.",
      image: "/SIDONDAR.png",
      technologies: ["Figma", "UI/UX Design", "Website Redesign", "User Research"],
      figma: "https://www.figma.com/design/hGiK0r5UinEhGue3W6Eyjc/SIdonDAr?node-id=0-1&t=pt1PRJTI1z1wxOIA-1",
      live: "https://www.figma.com/proto/hGiK0r5UinEhGue3W6Eyjc/SIdonDAr?node-id=0-1&t=YvdihmaLjV3n59p5-1",
      color: "from-indigo-400 to-blue-500",
      type: "figma"
    },
    {
      title: "GPDI Persadamas Banjarmasin Website",
      description: "This project involves the full-stack development of the official profile website for Gereja Pantekosta di Indonesia (GPdI) Jemaat Persadamas Banjarmasin. My team is currently designing and building a responsive, user-friendly platform that will serve as the primary digital face for the congregation. The website's core function is to provide key information about the church's vision, mission, history, schedule of services, contact details, and various ministries. The goal is to enhance digital outreach, improve communication with current members, and provide a welcoming resource for the wider community.",
      image: "/GPDI.png",
      technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      github: "https://github.com/TheophilusAE/Web-GPDI-Persadamas-Banjarmasin",
      live: "https://gpdi-persadamas-banjarmasin.vercel.app/",
      color: "from-cyan-300 to-blue-400",
      type: "single-github"
    },
  ];

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setScrollProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
  };

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-stone-950 text-white overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-6xl mx-auto flex flex-wrap items-end justify-between gap-6">
            <SectionHeader
              number="04"
              eyebrow="Portfolio"
              title="Featured"
              highlight="Projects"
              subtitle="Innovative solutions combining education and technology"
              className="!mb-0 flex-1 min-w-[280px]"
            />

            {/* Scroll controls */}
            <div className="hidden sm:flex items-center gap-3 mb-16 md:mb-20">
              <button
                onClick={() => scrollByAmount(-1)}
                aria-label="Previous project"
                className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-blue-400/60 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaArrowLeft size={14} />
              </button>
              <button
                onClick={() => scrollByAmount(1)}
                aria-label="Next project"
                className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-blue-400/60 hover:text-cyan-400 transition-colors duration-300"
              >
                <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal scroll-snap showcase */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-thin-amber pb-10 px-6 md:px-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative flex-shrink-0 w-[88vw] sm:w-[68vw] lg:w-[46vw] snap-center cursor-pointer"
            >
              <div className="relative h-[58vh] sm:h-[62vh] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-25 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

                {index === 0 && (
                  <span className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-400 text-stone-950 text-xs font-bold uppercase tracking-wide">
                    <FaStar size={11} />
                    Featured
                  </span>
                )}

                <span className="absolute top-6 right-6 font-serif italic text-5xl text-white/15 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed line-clamp-2 max-w-md mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5 text-xs text-stone-400 uppercase tracking-wider">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={tech}>
                        {tech}{i < Math.min(project.technologies.length, 4) - 1 && <span className="text-stone-600 ml-3">/</span>}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                    View Details
                    <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Trailing spacer so the last card can reach center */}
          <div className="flex-shrink-0 w-px" aria-hidden="true" />
        </div>

        {/* Progress hairline */}
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-6xl mx-auto h-px bg-stone-800 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-px bg-gradient-to-r from-blue-400 to-cyan-500"
              style={{ width: `${Math.max(scrollProgress, 4)}%` }}
            />
          </div>
        </div>
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectsSection;
