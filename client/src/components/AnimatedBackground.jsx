import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ children, variant = 'particles' }) => {
  const [time, setTime] = useState(0);
  const particleCount = 80;
  const particles = Array.from({ length: particleCount }, (_, i) => i);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  if (variant === 'particles') {
    return (
      <div className="relative overflow-hidden bg-gray-950">
        {/* Dynamic animated gradient background */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(245, 101, 101, 0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 100% 0%, rgba(139, 92, 246, 0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.25) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.25) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Moving mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            background: `conic-gradient(from ${time * 60}deg at 50% 50%, 
              rgba(59, 130, 246, 0.15) 0deg,
              rgba(139, 92, 246, 0.15) 120deg,
              rgba(16, 185, 129, 0.15) 240deg,
              rgba(59, 130, 246, 0.15) 360deg
            )`
          }}
        />
        
        {/* Enhanced floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => {
            const delay = Math.random() * 20;
            const duration = Math.random() * 15 + 10;
            const xMovement = Math.random() * 200 - 100;
            const yMovement = Math.random() * 200 - 100;
            
            return (
              <motion.div
                key={particle}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  background: particle % 3 === 0 
                    ? 'rgba(59, 130, 246, 0.7)' 
                    : particle % 3 === 1 
                    ? 'rgba(139, 92, 246, 0.7)' 
                    : 'rgba(16, 185, 129, 0.7)'
                }}
                animate={{
                  y: [0, yMovement, 0],
                  x: [0, xMovement, 0],
                  opacity: [0, 1, 0.5, 1, 0],
                  scale: [0, 1, 1.2, 1, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Dynamic floating orbs */}
        <motion.div
          className="absolute w-40 h-40 rounded-full blur-2xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            left: '10%',
            top: '20%'
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
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            right: '15%',
            top: '60%'
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

        <motion.div
          className="absolute w-28 h-28 rounded-full blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)',
            left: '60%',
            bottom: '20%'
          }}
          animate={{
            x: [0, -80, 120, -40, 0],
            y: [0, -60, 20, -100, 0],
            scale: [1, 1.2, 0.6, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute border opacity-40 ${
                i % 4 === 0 ? 'border-blue-400 rounded-full' :
                i % 4 === 1 ? 'border-purple-400 rounded-lg rotate-45' :
                i % 4 === 2 ? 'border-green-400 rounded-sm' :
                'border-pink-400 rounded-full'
              }`}
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.5, 0.5, 1.2, 1],
                opacity: [0.1, 0.6, 0.2, 0.5, 0.1],
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 2,
              }}
            />
          ))}
        </div>

        {/* Animated wave patterns */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              `linear-gradient(45deg, transparent 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)`,
              `linear-gradient(135deg, transparent 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)`,
              `linear-gradient(225deg, transparent 0%, rgba(16, 185, 129, 0.2) 50%, transparent 100%)`,
              `linear-gradient(315deg, transparent 0%, rgba(245, 101, 101, 0.2) 50%, transparent 100%)`,
              `linear-gradient(45deg, transparent 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)`
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }

  if (variant === 'waves') {
    return (
      <div className="relative overflow-hidden bg-gray-950">
        {/* Multiple animated wave layers */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(0deg, 
              rgba(59, 130, 246, 0.2) 0%, 
              transparent 40%
            )`
          }}
          animate={{
            transform: [`translateY(0px) scaleY(1)`, `translateY(-20px) scaleY(1.1)`, `translateY(0px) scaleY(1)`]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(120deg, 
              transparent 0%, 
              rgba(139, 92, 246, 0.15) 40%, 
              transparent 80%
            )`
          }}
          animate={{
            transform: [`translateX(0px) rotate(0deg)`, `translateX(50px) rotate(2deg)`, `translateX(0px) rotate(0deg)`]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(240deg, 
              transparent 0%, 
              rgba(16, 185, 129, 0.12) 50%, 
              transparent 100%
            )`
          }}
          animate={{
            transform: [`translateX(0px) translateY(0px)`, `translateX(-30px) translateY(20px)`, `translateX(0px) translateY(0px)`]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Flowing wave patterns */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-1 opacity-20"
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.6)' : 
                    i % 3 === 1 ? 'rgba(139, 92, 246, 0.6)' : 
                    'rgba(16, 185, 129, 0.6)'} 50%, 
                  transparent 100%
                )`,
                top: `${20 + i * 15}%`,
                transformOrigin: 'center'
              }}
              animate={{
                x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 1200],
                scaleX: [0, 1, 1, 0],
                opacity: [0, 0.6, 0.6, 0]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Ripple effects */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-blue-400/40"
              style={{
                left: `${25 + i * 20}%`,
                top: `${30 + i * 15}%`,
                width: '50px',
                height: '50px'
              }}
              animate={{
                scale: [0, 3, 0],
                opacity: [0.8, 0.2, 0],
                borderWidth: ['2px', '1px', '0px']
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeOut"
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
  }

  if (variant === 'geometric') {
    return (
      <div className="relative overflow-hidden bg-gray-950">
        {/* Rotating geometric background */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from ${time * 30}deg at 30% 70%, 
              rgba(59, 130, 246, 0.15) 0deg,
              transparent 90deg,
              rgba(139, 92, 246, 0.15) 180deg,
              transparent 270deg
            )`
          }}
        />

        {/* Dynamic grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            const shapes = ['triangle', 'square', 'hexagon', 'circle'];
            const shape = shapes[i % shapes.length];
            const size = Math.random() * 30 + 20;
            
            return (
              <motion.div
                key={i}
                className={`absolute ${
                  shape === 'circle' ? 'rounded-full' :
                  shape === 'square' ? 'rounded-lg' :
                  shape === 'triangle' ? 'rounded-sm' :
                  'rounded-md'
                } border-2 ${
                  i % 4 === 0 ? 'border-blue-400/50' :
                  i % 4 === 1 ? 'border-purple-400/50' :
                  i % 4 === 2 ? 'border-green-400/50' :
                  'border-pink-400/50'
                }`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  clipPath: shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' :
                           shape === 'hexagon' ? 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)' :
                           'none'
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [0.5, 1.2, 0.8, 1],
                  opacity: [0.3, 0.9, 0.4, 0.7, 0.3],
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100],
                }}
                transition={{
                  duration: Math.random() * 25 + 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5,
                }}
              />
            );
          })}
        </div>

        {/* Morphing shapes */}
        <motion.div
          className="absolute w-40 h-40"
          style={{
            left: '20%',
            top: '30%',
            background: 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
            clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)'
          }}
          animate={{
            clipPath: [
              'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)',
              'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%, 50% 0%)',
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)'
            ],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 0.8, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-32 h-32"
          style={{
            right: '25%',
            bottom: '25%',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(245, 101, 101, 0.2))',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}
          animate={{
            clipPath: [
              'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
              'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
            ],
            rotate: [0, -120, -240, -360],
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="relative overflow-hidden animated-gradient bg-gray-950">
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;