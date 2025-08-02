'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Star, Coffee, Sun, Moon, Music, Book, Phone, MessageCircle, Gift } from 'lucide-react';
import React from 'react';

interface DailyLoveProps {
  onBack: () => void;
}

const dailyLoveMoments = [
  {
    time: "Morning",
    icon: Sun,
    title: "Good Morning Beautiful",
    message: "Waking up to thoughts of you brightens my entire day.",
    color: "from-amber-400 to-yellow-500"
  },
  {
    time: "Breakfast",
    icon: Coffee,
    title: "Missing Our Coffee Dates",
    message: "Every sip reminds me of our beautiful conversations.",
    color: "from-orange-400 to-red-500"
  },
  {
    time: "Throughout Day",
    icon: MessageCircle,
    title: "Sweet Messages",
    message: "Your texts make me smile no matter how busy the day gets.",
    color: "from-pink-400 to-rose-500"
  },
  {
    time: "Work Hours",
    icon: Star,
    title: "Proud of My Doctor",
    message: "Knowing you're out there saving lives fills my heart with pride.",
    color: "from-purple-400 to-indigo-500"
  },
  {
    time: "Evening",
    icon: Phone,
    title: "Hearing Your Voice",
    message: "Your voice is my favorite sound in the whole world.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    time: "Night",
    icon: Moon,
    title: "Sweet Dreams",
    message: "Ending my day thinking of your beautiful smile.",
    color: "from-violet-400 to-purple-500"
  }
];

const loveSongs = [
  "Perfect - Ed Sheeran",
  "Can't Help Falling in Love - Elvis Presley",
  "All of Me - John Legend",
  "At Last - Etta James",
  "Make You Feel My Love - Adele"
];

const DailyLovePage: React.FC<DailyLoveProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-rose-50 relative overflow-hidden">
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

      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              top: "100%",
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              top: "-10%",
              left: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          >
            <Heart className="w-4 h-4 text-pink-200 fill-current" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6 fill-current animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            My Daily Love for You
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every moment of every day is filled with thoughts of you, Dr. Sneha
          </p>
        </motion.div>

        {/* Daily Love Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {dailyLoveMoments.map((moment, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={`bg-gradient-to-br ${moment.color} rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                <moment.icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{moment.time}</h3>
                <h4 className="text-lg font-medium mb-2">{moment.title}</h4>
                <p className="text-white/90 italic">{moment.message}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Love Songs Section */}
        <motion.div
          className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Music className="w-8 h-8 text-pink-500 mr-3" />
            <h2 className="text-2xl font-bold text-gray-800">Songs That Remind Me of You</h2>
          </div>
          <div className="space-y-3">
            {loveSongs.map((song, index) => (
              <motion.div
                key={index}
                className="p-3 bg-white rounded-lg shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
              >
                <p className="text-gray-700 font-medium">{song}</p>
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
          <div className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-8 text-white shadow-2xl">
            <Gift className="w-12 h-12 mx-auto mb-4" />
            <p className="text-2xl font-semibold mb-2">
              Every day with you is a gift
            </p>
            <p className="text-lg opacity-90">
              Thank you for making my life more beautiful just by being in it, Dr. Sneha 💝
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DailyLovePage;
