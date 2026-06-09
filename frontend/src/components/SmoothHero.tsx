import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  image: string;
  title?: string;
  subtitle?: string;
}

interface SmoothHeroProps {
  slides: Slide[];
  interval?: number;
}

const SmoothHero: React.FC<SmoothHeroProps> = ({ slides, interval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentIndex].image})`,
              animation: 'gentleZoom 20s ease-in-out infinite'
            }}
          />
          {/* White transparent overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 z-20">
        <motion.div
          className="h-full bg-accent"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: interval / 1000, ease: "linear" }}
          key={currentIndex}
        />
      </div>

      <style>{`
        @keyframes gentleZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default SmoothHero;