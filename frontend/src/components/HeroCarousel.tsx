import React, { useState, useEffect } from 'react';

interface Slide {
  image: string;
  title?: string;
  subtitle?: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ slides, autoPlayInterval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* All images stacked - only opacity changes, no removal */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: index === currentIndex ? 1 : 0,
            zIndex: index === currentIndex ? 2 : 1,
          }}
        >
          {/* Zoom animation on active image only */}
          {index === currentIndex && (
            <div 
              className="absolute inset-0"
              style={{
                animation: 'slowZoom 12s ease-in-out infinite',
              }}
            />
          )}
        </div>
      ))}
      
      {/* White transparent overlay - always present */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] z-10" />
      
      {/* Text Content - Always visible, just changes values */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {slides[currentIndex].title}
          </h2>
          <p className="text-xl md:text-2xl drop-shadow-lg">
            {slides[currentIndex].subtitle}
          </p>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentIndex ? 'w-8 bg-accent' : 'w-4 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;