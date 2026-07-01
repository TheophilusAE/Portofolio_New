import React from 'react';
import { motion } from 'framer-motion';

const PARTICLE_COUNT = 12;
const SHAPE_COUNT = 3;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 20,
  duration: Math.random() * 15 + 10,
  x: Math.random() * 200 - 100,
  y: Math.random() * 200 - 100,
  color: i % 3 === 0
    ? 'rgba(59, 130, 246, 0.7)'
    : i % 3 === 1
    ? 'rgba(6, 182, 212, 0.7)'
    : 'rgba(99, 102, 241, 0.7)',
}));

const shapes = Array.from({ length: SHAPE_COUNT }, (_, i) => ({
  id: i,
  size: Math.random() * 20 + 10,
  left: Math.random() * 100,
  top: Math.random() * 100,
  duration: Math.random() * 20 + 15,
  x: Math.random() * 100 - 50,
  y: Math.random() * 100 - 50,
}));

const shapeClass = (i) => {
  if (i % 4 === 0) return 'border-blue-400 rounded-full';
  if (i % 4 === 1) return 'border-cyan-400 rounded-lg rotate-45';
  if (i % 4 === 2) return 'border-blue-300 rounded-sm';
  return 'border-cyan-300 rounded-full';
};

const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-stone-950">
      {/* Slowly rotating color mesh, fixed to the viewport */}
      <div className="mesh-gradient" />

      {/* Crossfading ambient glow layers */}
      <div className="bg-glow-a" />
      <div className="bg-glow-b" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
            }}
            animate={{
              y: [0, particle.y, 0],
              x: [0, particle.x, 0],
              opacity: [0, 1, 0.5, 1, 0],
              scale: [0, 1, 1.2, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <motion.div
        className="absolute w-40 h-40 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, transparent 70%)',
          left: '10%',
          top: '20%',
        }}
        animate={{
          x: [0, 150, -50, 100, 0],
          y: [0, -80, 100, -30, 0],
          scale: [1, 1.3, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-32 h-32 rounded-full blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, transparent 70%)',
          right: '15%',
          top: '60%',
        }}
        animate={{
          x: [0, -120, 80, -60, 0],
          y: [0, 70, -90, 40, 0],
          scale: [1, 0.7, 1.4, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {shapes.map((shape, i) => (
          <motion.div
            key={shape.id}
            className={`absolute border opacity-20 ${shapeClass(i)}`}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              left: `${shape.left}%`,
              top: `${shape.top}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 0.5, 1.2, 1],
              opacity: [0.1, 0.6, 0.2, 0.5, 0.1],
              x: [0, shape.x],
              y: [0, shape.y],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
