'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Camera, Quote, Sparkles, Crown, Stethoscope } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FirstTripProps {
  onBack: () => void;
}

const FirstTripPage: React.FC<FirstTripProps> = ({ onBack }) => {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  // Initialize window size on mount
  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  const photos = [
    { 
      id: 1, 
      type: 'video',
      media: '/s1.mp4',
      caption: "Your radiant smile that lights up every room" 
    },
    { 
      id: 2, 
      type: 'image',
      media: '/s4.jpeg',
      caption: "The grace and elegance you carry so naturally" 
    },
    { 
      id: 3, 
      type: 'image',
      media: '/s5.jpeg',
      caption: "Your beautiful eyes that reflect your kind soul" 
    },
    { 
      id: 4, 
      type: 'image',
      media: '/s6.jpeg',
      caption: "The confident way you embrace your dreams" 
    },
    { 
      id: 5, 
      type: 'image',
      media: '/s3.jpeg',
      caption: "Your gentle hands that heal and comfort others" 
    },
    { 
      id: 6, 
      type: 'image',
      media: '/s9.jpeg',
      caption: "The stunning woman who inspires everyone around her" 
    }
  ];

  const quotes = [
    "Dr. Sneha, your intelligence shines as bright as your beautiful smile",
    "You are a rare combination of beauty, brains, and compassion",
    "Your dedication to healing others shows the angel that you are",
    "Every moment spent knowing you is a privilege and a blessing",
    "You are not just beautiful on the outside, but your heart is pure gold",
    "Dr. Sneha, you are everything wonderful in this world wrapped in one amazing person"
  ];

  const qualities = [
    { icon: Stethoscope, text: "Brilliant Doctor", color: "text-blue-500" },
    { icon: Heart, text: "Kind Heart", color: "text-pink-500" },
    { icon: Sparkles, text: "Beautiful Soul", color: "text-purple-500" },
    { icon: Crown, text: "True Queen", color: "text-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 relative overflow-hidden">
      {/* Floating Hearts and Sparkles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300/20"
            initial={{ 
              x: Math.random() * windowSize.width, 
              y: windowSize.height + 50,
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ 
              y: -100,
              x: Math.random() * windowSize.width,
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 15 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i % 2 === 0 ? 
              <Heart className="w-6 h-6 fill-current" /> : 
              <Sparkles className="w-6 h-6 fill-current" />
            }
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.button
          onClick={onBack}
          className="flex items-center space-x-2 bg-white/90 hover:bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </motion.button>
      </div>

      {/* Header Section */}
      <motion.div 
        className="text-center py-20 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Crown className="w-20 h-20 text-yellow-400 mx-auto mb-6 fill-current" />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Dr. Sneha
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-4xl font-semibold text-pink-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          A Celebration of You ✨
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          "This page is dedicated to celebrating the incredible woman you are - your beauty, your brilliance, your kindness, and the light you bring to this world."
        </motion.p>
      </motion.div>

      {/* Qualities Section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.h3 
          className="text-3xl font-bold text-center text-pink-600 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          What Makes You Special
        </motion.h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg border border-pink-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <quality.icon className={`w-12 h-12 ${quality.color} mx-auto mb-3`} />
              <p className="font-semibold text-gray-700">{quality.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.h3 
          className="text-3xl font-bold text-center text-pink-600 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Your Beautiful Moments
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredPhoto(photo.id)}
              onHoverEnd={() => setHoveredPhoto(null)}
            >
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="aspect-square relative">
                  {photo.type === 'video' ? (
                    <video
                      src={photo.media}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  ) : (
                    <img
                      src={photo.media}
                      alt={photo.caption}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                    <Sparkles className="w-4 h-4 text-pink-600" />
                  </div>
                </div>
                
                <motion.div 
                  className="p-4 bg-white"
                  animate={{ 
                    backgroundColor: hoveredPhoto === photo.id ? '#fdf2f8' : '#ffffff'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 font-medium text-center italic">
                    "{photo.caption}"
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quotes Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.h3 
          className="text-3xl font-bold text-center text-pink-600 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Beautiful Words for a Beautiful Soul
        </motion.h3>
        
        <div className="space-y-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-pink-100"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.2 + index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-start space-x-4">
                <Quote className="w-8 h-8 text-pink-400 flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-700 italic font-medium leading-relaxed">
                  {quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Message */}
      <motion.div 
        className="text-center py-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-3xl p-8 text-white shadow-2xl">
          <div className="flex justify-center space-x-2 mb-4">
            <Crown className="w-8 h-8 fill-current animate-pulse" />
            <Heart className="w-8 h-8 fill-current animate-pulse" />
            <Sparkles className="w-8 h-8 fill-current animate-pulse" />
          </div>
          <h4 className="text-2xl font-bold mb-4">You Are Extraordinary</h4>
          <p className="text-lg leading-relaxed">
            Dr. Sneha, you are a masterpiece of grace, intelligence, and beauty. Your presence makes the world brighter, 
            your compassion heals hearts, and your smile brings joy to everyone fortunate enough to know you. 
            You are truly one in a million! ✨
          </p>
          <div className="mt-6 text-pink-100 font-medium text-xl">
            You are simply amazing! 👑💕
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FirstTripPage;