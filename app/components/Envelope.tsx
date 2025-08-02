'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const Envelope = ({ onOpen }: { onOpen: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [randomPositions, setRandomPositions] = useState<Position[]>([]);

  const floatingHearts = Array(6).fill('❤️');
  const sparkles = Array(4).fill('✨');

  useEffect(() => {
    const generatePositions = () => {
      setRandomPositions(
        Array(6).fill(0).map(() => ({
          x: Math.random() * window.innerWidth * 0.8,
          y: Math.random() * window.innerHeight * 0.8,
        }))
      );
    };

    generatePositions();
    window.addEventListener('resize', generatePositions);
    return () => window.removeEventListener('resize', generatePositions);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center p-4">
      {/* Floating Hearts */}
      {floatingHearts.map((heart, index) => (
        <motion.div
          key={`heart-${index}`}
          className="absolute text-2xl select-none"
          initial={{
            x: randomPositions[index]?.x ?? 0,
            y: randomPositions[index]?.y ?? 0,
            opacity: 0.2,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + index,
            delay: index * 0.3,
          }}
        >
          {heart}
        </motion.div>
      ))}

      {/* Envelope Card */}
      <motion.div
        className="relative cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* Sparkles */}
        {sparkles.map((sparkle, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-xl text-yellow-400"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? [0, 1, 0] : 0,
              scale: isHovered ? [0.5, 1.5, 0.5] : 1,
              x: [-10 + i * 20, 0, -10 + i * 20],
              y: [-10 + i * 20, -20, -10 + i * 20],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              top: `${(i * 20) + 5}%`,
              left: `${(i * 20) + 5}%`,
            }}
          >
            {sparkle}
          </motion.div>
        ))}

        <div className="w-[24rem] sm:w-[30rem] h-80 bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl shadow-2xl border-4 border-pink-300 overflow-hidden">
          {/* Flap */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-300 to-pink-400 origin-top"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isHovered ? -30 : 0 }}
            style={{ transformStyle: 'preserve-3d' }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <motion.div animate={{ opacity: isHovered ? 1 : 0.8 }}>
                <div className="text-white text-2xl font-[cursive] mb-2">
                  Touch it with your beautiful hand
                </div>
                <div className="text-white text-md">Dr. Sneha 💝</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Body */}
          <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-br from-pink-200 to-pink-300 flex flex-col items-center justify-center p-6">
            <motion.div
              className="text-4xl text-center font-[cursive] text-pink-600 mb-3"
              animate={{ scale: isHovered ? 1.1 : 1 }}
            >
              Surprise for you, my love
            </motion.div>
            <motion.div
              className="text-lg text-pink-500"
              animate={{ opacity: isHovered ? 1 : 0.7 }}
            >
              A letter sealed with love 💌
            </motion.div>
          </div>

          {/* Roses */}
          <motion.div
            className="absolute bottom-6 left-6 text-2xl"
            animate={{
              rotate: isHovered ? [0, 10, -10, 0] : 0,
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌹
          </motion.div>
          <motion.div
            className="absolute bottom-6 right-6 text-2xl"
            animate={{
              rotate: isHovered ? [0, -10, 10, 0] : 0,
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌹
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Envelope;
