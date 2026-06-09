import React from 'react';

interface KenBurnsHeroProps {
  image: string;
}

const KenBurnsHero: React.FC<KenBurnsHeroProps> = ({ image }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          animation: 'kenBurns 25s ease-in-out infinite alternate'
        }}
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      
      <style>{`
        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }
      `}</style>
    </div>
  );
};

export default KenBurnsHero;