'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Star, Heart, Sparkles, Crown, Quote, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

interface SpecialMomentsProps {
  onBack: () => void;
}

const { width, height } = useWindowDimensions();

const specialMoments = [
  {
    title: "That Unexpected Hug",
    quote: "The warmth of your hug stayed with me long after you let go.",
    description: "In that embrace, I found my safe haven. Your arms around me felt like coming home to the most beautiful place on earth.",
    image: "/g2.jpeg",
    icon: Heart,
    color: "from-pink-500 to-rose-500"
  },
  {
    title: "Laughter Over Chai",
    quote: "Your laughter turns ordinary evenings into unforgettable memories.",
    description: "The melody of your laughter is sweeter than any symphony. Every giggle, every smile - pure magic that lights up my world.",
    image: "/g1.mp4",
    icon: Sun,
    color: "from-amber-500 to-orange-500"
  },
  {
    title: "Silent Eye Talks",
    quote: "In your eyes, I hear everything your heart whispers.",
    description: "Your eyes are windows to paradise. In them, I see galaxies of love, oceans of dreams, and the most beautiful soul I've ever known.",
    image: "/g3.jpeg",
    icon: Star,
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Our Midnight Calls",
    quote: "Those late-night talks felt like home — even when we were miles apart.",
    description: "Your voice in the quiet of night was my lullaby, my comfort, my everything. Distance meant nothing when your words wrapped around my heart.",
    image: "/g6.jpeg",
    icon: Moon,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "The First 'I Love You'",
    quote: "The way you said it — soft, shy, sincere — I'll cherish that forever.",
    description: "Those three words from your lips were like poetry written by angels. That moment became the most precious treasure of my heart.",
    image: "/g4.jpeg",
    icon: Crown,
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Holding Hands in Public",
    quote: "That small gesture made me feel like the luckiest person alive.",
    description: "Your hand in mine was like holding starlight. That simple touch announced to the world that I belong to the most amazing woman.",
    image: "/g5.jpeg",
    icon: Sparkles,
    color: "from-emerald-500 to-teal-500"
  },
];

const SpecialMomentsPage: React.FC<SpecialMomentsProps> = ({ onBack }) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Floating Romance Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * width, 
              y: height + 50,
              scale: Math.random() * 0.4 + 0.2,
              opacity: 0.1 + Math.random() * 0.3
            }}
            animate={{ 
              y: -100,
              x: Math.random() * width,
              rotate: 360
            }}
            transition={{ 
              duration: Math.random() * 25 + 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {i % 4 === 0 ? (
              <Heart className="w-4 h-4 fill-current text-pink-300" />
            ) : i % 4 === 1 ? (
              <Star className="w-4 h-4 fill-current text-amber-300" />
            ) : i % 4 === 2 ? (
              <Sparkles className="w-4 h-4 fill-current text-orange-300" />
            ) : (
              <Crown className="w-4 h-4 fill-current text-yellow-300" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Back Button */}
      <div className="fixed top-4 left-4 z-50">
        <motion.button
          onClick={onBack}
          className="flex items-center space-x-2 bg-white/90 hover:bg-white text-amber-600 font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 relative z-10">
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
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Star className="w-20 h-20 text-amber-500 mx-auto fill-current drop-shadow-lg" />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Precious Moments
          </motion.h1>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-amber-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            With My Dearest Dr. Sneha ✨
          </motion.h2>
          
          <motion.div 
            className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-amber-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <Quote className="w-10 h-10 text-amber-500 mx-auto mb-4" />
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-4">
              "              &quot;It&apos;s not the grand gestures, it&apos;s the tiny sparks that light up our forever.&quot;"
            </p>
            <p className="text-lg text-amber-700 font-medium">
              Every moment with you, Dr. Sneha, becomes a treasure that my heart keeps forever. 
              These memories are proof that true magic exists - and it lives in you.
            </p>
          </motion.div>
        </motion.div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {specialMoments.map((moment, index) => (
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
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div 
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.03,
                  y: -15,
                  boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${moment.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Floating Elements on Hover */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{ 
                          x: Math.random() * 200 + 50,
                          y: Math.random() * 200 + 50,
                          scale: 0,
                          opacity: 0
                        }}
                        animate={{ 
                          y: -30,
                          scale: [0, 1, 0],
                          opacity: [0, 0.7, 0]
                        }}
                        transition={{ 
                          duration: 2.5,
                          delay: i * 0.2,
                          repeat: Infinity
                        }}
                      >
                        <moment.icon className="w-5 h-5 fill-current text-amber-400" />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Header with Icon */}
                <div className="flex items-center justify-center mb-6">
                  <motion.div 
                    className={`p-4 rounded-full bg-gradient-to-r ${moment.color} shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <moment.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Media Content */}
                <div className="aspect-square relative mb-6 rounded-2xl overflow-hidden shadow-lg">
                  {moment.image.endsWith('.mp4') ? (
                    <video
                      src={moment.image}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  ) : (
                    <Image
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      width={800}
                      height={600}
                      quality={75}
                    />
                  )}
                  
                  {/* Sparkle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.h3 
                    className="text-2xl font-bold text-gray-800 mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {moment.title}
                  </motion.h3>
                  
                  <motion.div 
                    className={`bg-gradient-to-r ${moment.color} bg-opacity-10 p-4 rounded-xl mb-4 border-l-4 border-gradient-to-b ${moment.color}`}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <p className="text-gray-700 italic font-medium text-lg leading-relaxed">
                      "{moment.quote}"
                    </p>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-600 leading-relaxed text-sm"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {moment.description}
                  </motion.p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                  <Heart className="w-6 h-6 text-pink-400 fill-current" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Final Love Message */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={ { opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
            {/* Animated Background Hearts */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.2, 0.8, 0.2],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                >
                  <Heart className="w-8 h-8 fill-current" />
                </motion.div>
              ))}
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center space-x-4 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, 360, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Crown className="w-12 h-12 fill-current text-yellow-200" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <Heart className="w-12 h-12 fill-current" />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.3, 1], rotate: [0, -360, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Sparkles className="w-12 h-12 fill-current text-orange-200" />
                </motion.div>
              </div>
              
              <h4 className="text-4xl font-bold mb-6">My Dearest Dr. Sneha</h4>
              <p className="text-xl leading-relaxed mb-6">
                These tiny moments with you are my most priceless treasures. Each memory is a love letter 
                written by time itself, telling the story of how you became my everything. Your presence 
                transforms ordinary seconds into extraordinary eternities.
              </p>
              <p className="text-lg italic mb-4">
                "Every second shared with you becomes my favorite memory, every moment with you is a gift from heaven."
              </p>
              <div className="text-orange-100 font-medium text-2xl">
                You are my miracle, my queen, my forever! 👑💕✨
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialMomentsPage;