import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaPalette, FaFileAlt } from 'react-icons/fa';

const CVModal = ({ isOpen, onClose }) => {
  const downloadCV = (type) => {
    const cvFiles = {
      creative: '/CV Theophilus Alexander Elvan (1).pdf',
      ats: '/Theophilus Alexander Elvan-resume.pdf'
    };

    const link = document.createElement('a');
    link.href = cvFiles[type];
    link.download = type === 'creative' 
      ? 'Theophilus-Alexander-Elvan-Creative-CV.pdf' 
      : 'Theophilus-Alexander-Elvan-ATS-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close modal after download
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const cvOptions = [
    {
      type: 'creative',
      title: 'Creative CV',
      description: 'A visually appealing CV with modern design elements, perfect for creative roles and portfolio presentations.',
      icon: <FaPalette size={24} />,
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600'
    },
    {
      type: 'ats',
      title: 'ATS CV', 
      description: 'A clean, structured CV optimized for Applicant Tracking Systems and traditional corporate applications.',
      icon: <FaFileAlt size={24} />,
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-600'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-2xl bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50">
              {/* Header */}
              <div className="relative p-6 border-b border-gray-700/50">
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <FaTimes size={16} />
                </motion.button>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                >
                  Choose Your CV Type
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-400"
                >
                  Select the CV format that best suits your needs
                </motion.p>
              </div>

              {/* CV Options */}
              <div className="p-6 grid gap-4 md:grid-cols-2">
                {cvOptions.map((option, index) => (
                  <motion.div
                    key={option.type}
                    initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative overflow-hidden rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative p-6">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                      >
                        {option.icon}
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {option.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        {option.description}
                      </p>

                      {/* Download button */}
                      <motion.button
                        onClick={() => downloadCV(option.type)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 px-4 rounded-lg bg-gradient-to-r ${option.color} ${option.hoverColor} text-white font-medium flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl`}
                      >
                        <FaDownload size={16} />
                        <span>Download {option.title}</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-700/50 bg-gray-800/30">
                <p className="text-center text-sm text-gray-500">
                  Both CVs contain the same information, just formatted differently for specific use cases.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CVModal;