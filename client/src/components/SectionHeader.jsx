import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ number, eyebrow, title, highlight, subtitle, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`mb-16 md:mb-20 ${className}`}
    >
      <div className="flex items-baseline gap-4 mb-4">
        {number && (
          <span className="font-serif italic text-base text-amber-400/80">{number}</span>
        )}
        {eyebrow && (
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-400">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-white leading-tight">
        {title && <>{title}{' '}</>}
        {highlight && (
          <span className="italic bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 text-transparent bg-clip-text">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-stone-400 text-lg md:text-xl max-w-xl mt-6">
          {subtitle}
        </p>
      )}
      <div className="w-full h-px bg-stone-800 mt-10" />
    </motion.div>
  );
};

export default SectionHeader;
