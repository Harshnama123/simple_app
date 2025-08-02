'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Star, Calendar, Home, Plane, Baby, GraduationCap, Crown, Sparkles, Quote, Sun, Moon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

interface FutureDreamsProps {
  onBack: () => void;
}

const dreams = [
  {
    title: "Our Beautiful Wedding",
    description: "The day I'll call you mine forever, surrounded by love and blessings",
    detailedVision: "Walking down the aisle in white, your radiant smile lighting up the world. That moment when we promise each other forever, with tears of joy and hearts full of love.",
    icon: Heart,
    color: "from-pink-400 to-rose-500",
    timeline: "When Our Hearts Are Ready",
    blessing: "May our union be blessed with eternal love"
  },
  {
    title: "Our Dream Home",
    description: "A cozy nest where our love story will unfold every single day",
    detailedVision: "A beautiful home filled with laughter, warmth, and love. Every corner decorated with our memories, every room echoing with our happiness and dreams.",
    icon: Home,
    color: "from-blue-400 to-indigo-500",
    timeline: "Building Our Foundation",
    blessing: "May our home be filled with peace and joy"
  },
  {
    title: "Adventures Around the World",
    description: "Exploring God's beautiful creation hand in hand, making memories everywhere",
    detailedVision: "From romantic sunsets in Paris to serene beaches in Maldives, from mountain peaks to ancient temples - every destination more beautiful with you by my side.",
    icon: Plane,
    color: "from-purple-400 to-violet-500",
    timeline: "Every Year of Our Lives",
    blessing: "May every journey strengthen our bond"
  },
  {
    title: "Growing Together",
    description: "Supporting each other's dreams, celebrating every achievement together",
    detailedVision: "Watching you excel in your medical career, supporting your goals, and building our individual dreams while growing stronger as a couple every day.",
    icon: GraduationCap,
    color: "from-green-400 to-emerald-500",
    timeline: "Every Step Forward",
    blessing: "May we always lift each other higher"
  },
  {
    title: "Our Little Family",
    description: "Welcoming beautiful souls who will call us Mom and Dad",
    detailedVision: "Little feet running around our home, tiny hands holding ours, innocent laughter filling our days. Teaching them love, kindness, and watching them grow into amazing people.",
    icon: Baby,
    color: "from-yellow-400 to-amber-500",
    timeline: "When God Blesses Us",
    blessing: "May our children be our greatest joy"
  },
  {
    title: "Growing Old Together",
    description: "Silver hair, wrinkled hands, but hearts still young and deeply in love",
    detailedVision: "Sitting together on our porch, sharing stories of our beautiful journey, grandchildren at our feet, still holding hands like we did on our first date.",
    icon: Heart,
    color: "from-red-400 to-rose-500",
    timeline: "Until Our Last Breath",
    blessing: "May our love only grow stronger with time"
  }
];

const FutureDreamsPage: React.FC<FutureDreamsProps> = ({ onBack }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getScreenWidth = () => {
    return typeof window !== 'undefined' ? window.innerWidth : 1200;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      {/* Floating Dreams Animation - Only render after component mounts */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                opacity: 0.1 + Math.random() * 0.3,
                scale: Math.random() * 0.4 + 0.3,
                x: Math.random() * getScreenWidth(),
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
              }}
              animate={{
                y: -100,
                x: Math.random() * getScreenWidth(),
                rotate: 360
              }}
              transition={{
                duration: Math.random() * 25 + 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {i % 5 === 0 ? (
                <Heart className="w-5 h-5 text-pink-300 fill-current" />
              ) : i % 5 === 1 ? (
                <Star className="w-5 h-5 text-purple-300 fill-current" />
              ) : i % 5 === 2 ? (
                <Crown className="w-5 h-5 text-yellow-300 fill-current" />
              ) : i % 5 === 3 ? (
                <Sparkles className="w-5 h-5 text-rose-300 fill-current" />
              ) : (
                <Heart className="w-5 h-5 text-indigo-300 fill-current" />
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.button
          onClick={onBack}
          className="flex items-center space-x-2 bg-white/90 hover:bg-white text-purple-600 font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </motion.button>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mb-8"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Calendar className="w-20 h-20 text-purple-500 mx-auto drop-shadow-lg" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Our Future Dreams
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold text-purple-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            A Beautiful Tomorrow with Dr. Sneha ✨
          </motion.h2>
          
          <motion.div 
            className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-purple-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <Quote className="w-10 h-10 text-purple-500 mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
              "The future is bright because you're in it. Every dream, every plan, every tomorrow 
              becomes beautiful when I imagine sharing it with you, my dearest Dr. Sneha."
            </p>
          </motion.div>
        </motion.div>

        {/* Dreams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {dreams.map((dream, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1 + index * 0.15, 
                duration: 0.8,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 relative"
                whileHover={{ 
                  scale: 1.02,
                  y: -10
                }}
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${dream.color} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(8)].map((_, i) => (
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
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 4 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      >
                        <Heart className="w-4 h-4 fill-current text-white" />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <dream.icon className="w-12 h-12 text-white mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">{dream.title}</h3>
                    <p className="text-white/90 italic">"{dream.timeline}"</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 font-medium text-lg mb-4 leading-relaxed">
                    {dream.description}
                  </p>
                  
                  <motion.button
                    onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                    className="text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-300 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {expandedCard === index ? 'Show Less' : 'Read Our Vision →'}
                  </motion.button>
                  
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: expandedCard === index ? 'auto' : 0,
                      opacity: expandedCard === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4">
                      <p className="text-gray-600 italic leading-relaxed">
                        {dream.detailedVision}
                      </p>
                    </div>
                  </motion.div>
                  
                  <div className="flex items-center space-x-2 text-purple-600">
                    <Sparkles className="w-4 h-4" />
                    <p className="text-sm font-medium italic">{dream.blessing}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final Love Letter */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${50 + 40 * Math.cos((i * 2 * Math.PI) / 12)}%`,
                      top: `${50 + 40 * Math.sin((i * 2 * Math.PI) / 12)}%`,
                    }}
                  >
                    <Heart className="w-8 h-8 fill-current" />
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center space-x-4 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Crown className="w-14 h-14 fill-current text-yellow-200" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <Heart className="w-14 h-14 fill-current" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, -360, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  <Heart className="w-14 h-14 fill-current text-pink-200" />
                </motion.div>
              </div>
              
              <h4 className="text-4xl font-bold mb-8">A Promise to My Beloved Dr. Sneha</h4>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  These dreams aren't just wishes floating in the air - they are promises I make to you today. 
                  Every vision of our future fills my heart with such joy and excitement.
                </p>
                
                <p className="text-xl font-semibold italic">
                  "With you, Dr. Sneha, I don't just dream of tomorrow - I know that every tomorrow 
                  will be more beautiful than today because you'll be there beside me."
                </p>
                
                <p>
                  From the doctor who heals others to the woman who healed my heart, from my girlfriend 
                  to my future wife, from my partner to the mother of our children - you are my everything, 
                  my forever, my greatest blessing.
                </p>
              </div>
              
              <div className="mt-8 text-pink-100 font-medium text-2xl">
                Here's to our beautiful future, my queen! 👑💕✨
              </div>
              
              <div className="flex justify-center space-x-6 mt-6">
                <Sun className="w-8 h-8 text-yellow-200" />
                <Heart className="w-8 h-8 fill-current text-pink-200" />
                <Moon className="w-8 h-8 text-blue-200" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FutureDreamsPage;