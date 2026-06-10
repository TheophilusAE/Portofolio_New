import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ eyebrow, title, highlight, subtitle, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`text-center mb-16 ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-blue-400/80 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        {title && <>{title}{' '}</>}
        {highlight && (
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mt-6 rounded-full" />
    </motion.div>
  );
};

export default SectionHeader;
