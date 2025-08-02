'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Sparkles, Crown, Quote } from 'lucide-react';
import React, { useState } from 'react';

type PageProps = {
  onBack: () => void;
};

function FirstDatePage({ onBack }: PageProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const memories = [
    {
      id: 1,
      title: "First Glance",
      image: "/sp2.jpeg",
      quote: "The moment our eyes met, the world around us faded away.",
      description: "In that perfect instant, time stood still. Your eyes held galaxies of dreams, and I knew I was looking at my forever."
    },
    {
      id: 2,
      title: "First Smile",
      video: "/sp1.mp4",
      quote: "Your smile lit up the entire room, and my heart knew it was home.",
      description: "That radiant smile of yours could heal the world. It was like sunshine breaking through clouds on the most beautiful morning."
    },
    {
      id: 3,
      title: "First Laugh",
      image: "/sp3.jpeg",
      quote: "When you laughed, I knew I wanted to spend my life making you happy.",
      description: "Your laughter is music to my soul, a melody so pure and beautiful that angels must have taught you how to sing with joy."
    },
    {
      id: 4,
      title: "First Goodbye",
      image: "/sp4.jpeg",
      quote: "Saying goodbye that night felt impossible, knowing my heart would count the moments until I saw you again.",
      description: "Even in goodbye, there was magic. Because I knew this wasn't an ending, but the beautiful beginning of our story."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 relative overflow-hidden">
      {/* Floating Romance Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 50,
              scale: Math.random() * 0.4 + 0.3,
              opacity: 0.1 + Math.random() * 0.2
            }}
            animate={{ 
              y: -100,
              x: Math.random() * window.innerWidth,
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 20 + 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i % 3 === 0 ? (
              <Heart className="w-6 h-6 fill-current text-pink-300" />
            ) : i % 3 === 1 ? (
              <Sparkles className="w-6 h-6 fill-current text-rose-300" />
            ) : (
              <Crown className="w-6 h-6 fill-current text-purple-300" />
            )}
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
        className="text-center py-16 px-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="mb-6"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Crown className="w-20 h-20 text-yellow-400 mx-auto fill-current drop-shadow-lg" />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Magical Moments
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-4xl font-semibold text-pink-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          With My Beautiful Dr. Sneha 💕
        </motion.h2>
        
        <motion.div 
          className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-pink-100"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <Quote className="w-8 h-8 text-pink-400 mx-auto mb-4" />
          <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
            "Every moment with you feels like poetry written by the stars. These memories are treasures of my heart, 
            each one a precious glimpse into the magic that is you, Dr. Sneha."
          </p>
        </motion.div>
      </motion.div>

      {/* Memories Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {memories.map((memory, index) => (
            <motion.div 
              key={memory.id}
              className="relative group"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.9 + index * 0.2, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
              onHoverStart={() => setHoveredCard(memory.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div 
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Hearts on Hover */}
                {hoveredCard === memory.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{ 
                          x: Math.random() * 100 + 50,
                          y: Math.random() * 100 + 50,
                          scale: 0,
                          opacity: 0
                        }}
                        animate={{ 
                          y: -20,
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity
                        }}
                      >
                        <Heart className="w-4 h-4 fill-current text-pink-400" />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Media Content */}
                <div className="aspect-square relative mb-6 rounded-2xl overflow-hidden shadow-lg">
                  {memory.video ? (
                    <video
                      src={memory.video}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  ) : (
                    <img
                      src={memory.image}
                      alt={`${memory.title} Memory`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  
                  {/* Sparkle Effect on Hover */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/90 rounded-full p-2"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="w-5 h-5 text-pink-600" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Heart className="w-6 h-6 text-pink-500 fill-current" />
                    {memory.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-xl mb-4 border-l-4 border-pink-400"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <p className="text-gray-700 italic font-medium text-lg leading-relaxed">
                      "{memory.quote}"
                    </p>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {memory.description}
                  </motion.p>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Heart className="w-8 h-8 text-pink-400 fill-current" />
                </div>
                <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  <Sparkles className="w-8 h-8 text-rose-400 fill-current" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Message */}
      <motion.div 
        className="text-center pb-16 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <Heart className="w-6 h-6 fill-current" />
              </motion.div>
            ))}
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-center space-x-3 mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Crown className="w-10 h-10 fill-current text-yellow-300" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                <Heart className="w-10 h-10 fill-current" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                <Sparkles className="w-10 h-10 fill-current text-pink-200" />
              </motion.div>
            </div>
            
            <h4 className="text-3xl font-bold mb-6">Forever in My Heart</h4>
            <p className="text-lg leading-relaxed mb-4">
              Dr. Sneha, these moments are just the beginning of our beautiful story. Each memory with you is a 
              precious gift that I treasure beyond words. You are my dream come true, my heart's greatest joy.
            </p>
            <div className="text-pink-100 font-medium text-xl">
              You are my everything! 👑💕✨
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FirstDatePage;