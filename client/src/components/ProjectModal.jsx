import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFigma, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-stone-900 border border-stone-800/70 shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <FaTimes size={18} />
            </button>

            <div className="relative h-64 sm:h-80">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-stone-300 leading-relaxed mb-6 whitespace-pre-line">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-stone-800 text-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.type === 'dual-github' && (
                  <>
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-5 py-2.5 text-sm"
                    >
                      <FaGithub /> Frontend Repo
                    </a>
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-5 py-2.5 text-sm"
                    >
                      <FaGithub /> Backend Repo
                    </a>
                  </>
                )}

                {project.type === 'single-github' && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-5 py-2.5 text-sm"
                  >
                    <FaGithub /> Repository
                  </a>
                )}

                {project.type === 'figma' && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-5 py-2.5 text-sm"
                  >
                    <FaFigma /> Figma Design
                  </a>
                )}

                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-5 py-2.5 text-sm"
                  >
                    <FaExternalLinkAlt /> {project.type === 'figma' ? 'Live Prototype' : 'Live Site'}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
