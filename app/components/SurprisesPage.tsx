'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Gift, Heart, Sparkles, Star, Cake, Flower2, Coffee, Crown, Music } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

interface SurprisesProps {
  onBack: () => void;
}

  const { width, height } = useWindowDimensions();

  const surprises = [
  {
    title: "Sweet Video Moments",
    description: "Capturing our precious moments together in motion",
    icon: Star,
    color: "from-purple-400 to-indigo-500",
    image: "/u1.mp4"
  },
  {
    title: "Picture Perfect",
    description: "Every photo with you tells a beautiful story",
    icon: Heart,
    color: "from-pink-400 to-rose-500",
    image: "/u2.jpeg"
  },
  {
    title: "Our Sweet Memories",
    description: "Special moments that make life beautiful",
    icon: Coffee,
    color: "from-amber-400 to-orange-500",
    image: "/uss.jpeg"
  },
  {
    title: "Candid Beauty",
    description: "When you're just being your amazing self",
    icon: Crown,
    color: "from-yellow-400 to-amber-500",
    image: "/u4.jpeg"
  },
  {
    title: "Fun Times Together",
    description: "Because you make every moment special",
    icon: Cake,
    color: "from-green-400 to-emerald-500",
    image: "/u3.jpeg"
  },
  {
    title: "Our Happy Moments",
    description: "The joy in your eyes makes my world complete",
    icon: Music,
    color: "from-blue-400 to-cyan-500",
    image: "/u6.mp4"
  }
];

const futureSurprises = [
  "A romantic candlelight dinner under the stars",
  "A surprise weekend getaway to your dream destination",
  "A collection of 365 reasons why you're amazing",
  "A customized photo album of our precious moments",
  "A private dance night with all your favorite songs",
  "A treasure hunt leading to something special"
];

const SurprisesPage: React.FC<SurprisesProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              opacity: Math.random(),
              scale: Math.random() * 0.5 + 0.5,
              x: Math.random() * width,
              y: Math.random() * height,
            }}
            animate={{
              opacity: [Math.random(), 0.4, Math.random()],
              scale: [1, 1.2, 1],
              x: Math.random() * width,
              y: Math.random() * height,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Sparkles className="w-4 h-4 text-purple-200" />
          </motion.div>
        ))}
      </div>

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
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Gift className="w-16 h-16 text-purple-500 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Sweet Surprises
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Because you deserve all the happiness in the world, Dr. Sneha
          </p>
        </motion.div>

        {/* Past Surprises Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {surprises.map((surprise, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square relative">
                  {surprise.image.endsWith('.mp4') ? (
                    <video
                      src={surprise.image}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                    />
                  ) : (
                    <Image
                      src={surprise.image}
                      alt={surprise.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      width={800}
                      height={600}
                      quality={75}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className={`bg-gradient-to-r ${surprise.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 -mt-10 relative z-10 shadow-lg`}>
                    <surprise.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{surprise.title}</h3>
                  <p className="text-gray-600">{surprise.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Surprises Section */}
        <motion.div
          className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <Flower2 className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">More Surprises Coming Soon</h2>
            <p className="text-gray-600">Because you deserve endless happiness</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {futureSurprises.map((surprise, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
              >
                <div className="flex items-start space-x-3">
                  <Gift className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{surprise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl">
            <Heart className="w-12 h-12 mx-auto mb-4 fill-current" />
            <p className="text-2xl font-semibold mb-2">
              Every surprise is a way to say...
            </p>
            <p className="text-lg opacity-90">
              I love you more and more each day, Dr. Sneha 💝
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SurprisesPage;
