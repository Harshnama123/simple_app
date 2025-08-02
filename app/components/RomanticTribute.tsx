'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles, Camera, MapPin, Clock, Gift, ArrowLeft, Calendar, Music, Sunset, Home, Plane, Coffee } from 'lucide-react';



interface Memory {
  title: string;
  date: string;
  icon: any;
  color: string;
  id: string;
}

interface PhotoCardProps {
  index: number;
  isLoved: boolean;
  onToggleLove: (index: number) => void;
  src?: string;
}

interface MemoryCardProps {
  memory: Memory;
  onClick: () => void;
}

interface FloatingHeartProps {
  delay?: number;
}

const romanticQuotes = [
  "You're not just my love, you're my peace, my home, my everything.",
  "Every sunrise is more beautiful because I get to share it with you.",
  "In a world full of chaos, you are my calm, my sanctuary.",
  "Your smile is my favorite notification, your laugh my favorite song.",
  "You're the poetry my heart never knew how to write.",
  "With you, I've learned that forever isn't long enough.",
  "You're my favorite hello and my hardest goodbye.",
  "In your eyes, I found my forever home.",
  "You make ordinary moments feel like magic.",
  "My heart speaks your name in every beat.",
  "You're the reason I believe in love stories.",
  "Every day with you is a page in our beautiful love story."
];

const memories: Memory[] = [
  { title: "First Date", date: "That magical evening", icon: Heart, color: "from-pink-400 to-rose-500", id: "date" },
  { title: "My Love", date: "Dr.Sneha", icon: Plane, color: "from-purple-400 to-indigo-500", id: "trip" },
  { title: "Special Moments", date: "Every little thing", icon: Star, color: "from-amber-400 to-orange-500", id: "special" },
  { title: "Surprises", date: "Sweet gestures", icon: Gift, color: "from-emerald-400 to-teal-500", id: "surprises" },
  { title: "Daily Love", date: "Every single day", icon: Sparkles, color: "from-violet-400 to-purple-500", id: "daily" },
  { title: "Future Dreams", date: "Forever with you", icon: Clock, color: "from-cyan-400 to-blue-500", id: "future-dreams" }
];

// Real photos of Dr. Sneha
const realPhotos = [
  "/api/placeholder/400/400", // Traditional dress with flowers
  "/api/placeholder/400/400", // Evening event dress
  "/api/placeholder/400/400", // Cafe moment
  "/api/placeholder/400/400", // Another cafe photo
  "/api/placeholder/400/400", // Night event
  "/api/placeholder/400/400", // Casual pink top
  "/api/placeholder/400/400", // Another evening look
  "/api/placeholder/400/400"  // Birthday celebration
];

const FloatingHeart = ({ delay = 0 }: FloatingHeartProps) => (
  <div 
    className="absolute animate-bounce opacity-20"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }}
  >
    <Heart className="w-4 h-4 text-pink-400 fill-current" />
  </div>
);

const PhotoCard = ({ index, isLoved, onToggleLove, src }: PhotoCardProps) => (
  <div className="group relative aspect-square bg-gradient-to-br from-pink-100 via-white to-purple-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 p-0.5 rounded-2xl">
      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center relative overflow-hidden">
        {src ? (
          <img 
            src={src} 
            alt={`Memory ${index + 1}`}
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4"><Heart className="w-6 h-6 text-pink-300" /></div>
              <div className="absolute top-8 right-6"><Star className="w-4 h-4 text-purple-300" /></div>
              <div className="absolute bottom-6 left-8"><Sparkles className="w-5 h-5 text-rose-300" /></div>
            </div>
            
            <div className="text-center z-10">
              <Camera className="w-12 h-12 text-pink-400 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Our Memory {index + 1}</p>
              <p className="text-sm text-gray-400 mt-1">Beautiful moment</p>
            </div>
          </>
        )}

        <button
          onClick={() => onToggleLove(index)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-lg"
        >
          <Heart 
            className={`w-5 h-5 transition-all duration-300 ${
              isLoved ? 'text-red-500 fill-current scale-110' : 'text-gray-400 hover:text-red-400'
            }`} 
          />
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  </div>
);

const MemoryCard = ({ memory, onClick }: MemoryCardProps) => {
  const Icon = memory.icon;
  return (
    <div 
      onClick={onClick}
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${memory.color} text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl group cursor-pointer`}
    >
      <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm" />
      <div className="relative z-10">
        <Icon className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="font-bold text-lg mb-2">{memory.title}</h3>
        <p className="text-white/90 text-sm">{memory.date}</p>
        <div className="mt-4 text-sm opacity-75">Click to explore →</div>
      </div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

interface PageProps {
  onBack: () => void;
}

// Individual Memory Pages



export const SpecialMomentsPage: React.FC<PageProps> = ({ onBack }) => (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden">
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 bg-white/90 hover:bg-white text-amber-600 font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-300"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>
    </div>

    <div className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <Star className="w-16 h-16 text-amber-500 mx-auto mb-6 fill-current" />
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
          Special Moments
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The little things that make our love extraordinary - captured in time, cherished forever.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
        {realPhotos.slice(0, 4).map((photo: string, index: number) => (
          <div key={index} className="bg-white/80 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <img 
              src={photo} 
              alt={`Special moment ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">Memory {index + 1}</h3>
              <p className="text-sm text-gray-600">A moment to treasure</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-amber-600 mb-6">Everyday Magic</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              "It's not just the big moments that take my breath away - it's the way you make ordinary Tuesday mornings feel like adventures."
            </p>
            <p className="text-gray-700">
              "Your sleepy smile when you first wake up, the way you dance while cooking, 
              how you get excited about small surprises - these are the moments I treasure most."
            </p>
            <p className="text-gray-700">
              "Every shared laugh, every comfortable silence, every time you reach for my hand - 
              these special moments are the foundation of our beautiful love story."
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6">
            <Music className="w-8 h-8 text-pink-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Song Moments</h3>
            <p className="text-gray-600">Dancing in the kitchen, singing in the car, creating our own soundtrack to love.</p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-2xl p-6">
            <Home className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Cozy Evenings</h3>
            <p className="text-gray-600">Movie nights, deep conversations, and the comfort of being completely ourselves together.</p>
          </div>

          <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl p-6">
            <Sparkles className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Spontaneous Joy</h3>
            <p className="text-gray-600">Unexpected adventures, silly jokes, and the magic you bring to every single day.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MainTribute = ({ onBack, onNavigate }: { onBack: () => void; onNavigate: (page: string) => void }) => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [lovedPhotos, setLovedPhotos] = useState(new Set<number>());
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % romanticQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setShowHearts(true);
  }, []);

  const toggleLove = (index: number) => {
    setLovedPhotos(prev => {
      const newSet = new Set(prev);
      newSet.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 relative overflow-hidden">
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 bg-white/90 hover:bg-white text-pink-600 font-semibold px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
      </div>

      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(20)].map((_, i: number) => (
            <FloatingHeart key={i} delay={i * 0.5} />
          ))}
        </div>
      )}

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 text-center z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-rose-500/10" />
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i: number) => (
                  <Heart 
                    key={i} 
                    className="w-6 h-6 text-pink-500 fill-current animate-pulse" 
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-rose-600 bg-clip-text text-transparent mb-8 leading-tight">
              Happy Girlfriend's Day
            </h1>

            <div className="text-2xl md:text-3xl text-pink-600 font-semibold mb-8">Dr. Sneha 💖</div>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              You are the heartbeat of my life, my strongest support, and the love that lights up my every day.
            </p>

            <div className="h-16 flex items-center justify-center">
              <p className="text-lg md:text-xl text-gray-600 italic transition-all duration-1000 opacity-100">
                "{romanticQuotes[currentQuote]}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Lane */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Love Story
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every moment with you is a treasure, every memory a gem in our beautiful journey together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {memories.map((memory: Memory, index: number) => (
              <MemoryCard 
                key={index} 
                memory={memory} 
                onClick={() => onNavigate(memory.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Our Beautiful Moments
            </h2>
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span className="text-lg text-gray-600">Click the hearts to mark your favorites</span>
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {realPhotos.map((photo: string, index: number) => (
              <PhotoCard 
                key={index} 
                index={index} 
                isLoved={lovedPhotos.has(index)}
                onToggleLove={toggleLove}
                src={photo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1">
                {[...Array(7)].map((_, i: number) => (
                  <Star 
                    key={i} 
                    className="w-6 h-6 text-yellow-300 fill-current animate-pulse" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8">You Are My Everything</h2>

            <p className="text-xl md:text-2xl leading-relaxed mb-8 opacity-90">
              Thank you for being my partner, my best friend, my inspiration, and my greatest love. 
              Here's to all the beautiful moments we've shared and all the amazing adventures yet to come.
            </p>

            <div className="text-2xl md:text-3xl font-bold">Forever and Always Yours,</div>
            <div className="text-3xl md:text-4xl font-bold mt-2 text-yellow-300">Harsh ❤️</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function RomanticTribute({ onBack }: { onBack: () => void }) {
  const router = useRouter();
  
  const handleNavigate = (page: string) => {
    router.push(`/${page}`);
  };

  return <MainTribute onBack={onBack} onNavigate={handleNavigate} />;
}
