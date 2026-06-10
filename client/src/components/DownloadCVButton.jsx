import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFileAlt, FaChevronDown, FaDownload } from 'react-icons/fa';

/**
 * DownloadCVButton
 * - Renders a primary CTA button with a dropdown to choose between two CV files: Creative and ATS.
 * - Files must be placed under `client/public/docs/` so they are available at `/docs/...` at runtime.
 *
 * Contract
 * - Inputs: optional custom file paths/labels via props; falls back to sensible defaults.
 * - Outputs: triggers file download by navigating to the public URL with the `download` attribute.
 */
const DownloadCVButton = ({
  creative = {
    label: 'Creative CV',
    path: '/docs/Theophilus-Alexander-Elvan-CV-Creative.pdf',
    filename: 'Theophilus-Alexander-Elvan-CV-Creative.pdf',
  },
  ats = {
    label: 'ATS CV',
    path: '/docs/Theophilus-Alexander-Elvan-CV-ATS.pdf',
    filename: 'Theophilus-Alexander-Elvan-CV-ATS.pdf',
  },
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: -8, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -8, scale: 0.98 },
  };

  const Item = ({ label, path, filename }) => (
    <a
      href={path}
      download={filename}
      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800/70 text-gray-200 transition-colors"
      onClick={() => setOpen(false)}
    >
      <span className="w-8 h-8 rounded-md bg-gray-900 flex items-center justify-center text-blue-300">
        <FaFileAlt size={16} />
      </span>
      <div className="flex flex-col">
        <span className="font-medium">{label}</span>
        <span className="text-xs text-gray-400">PDF • optimized for {label.includes('ATS') ? 'parsing' : 'visual impact'}</span>
      </div>
    </a>
  );

  return (
    <div className="relative" ref={menuRef}>
      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn-primary"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        Download CV
        <motion.span animate={{ y: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FaDownload size={14} />
        </motion.span>
        <FaChevronDown className="opacity-90" size={14} />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 mt-2 w-64 rounded-xl border border-gray-800/70 bg-gray-900/95 backdrop-blur-md shadow-2xl overflow-hidden z-20"
            role="menu"
          >
            <div className="px-4 py-3 border-b border-gray-800/70">
              <p className="text-sm text-gray-400">Choose your preferred format</p>
            </div>
            <div className="py-1">
              <Item label={creative.label} path={creative.path} filename={creative.filename} />
              <Item label={ats.label} path={ats.path} filename={ats.filename} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DownloadCVButton;
