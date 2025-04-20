"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const messages = Array.from({ length: 10 }, (_, i) => `I love you because... #${i + 1}`);

export default function LovePage() {
  const [revealed, setRevealed] = useState(Array(messages.length).fill(false));
  const toggleReveal = (index) => {
    setRevealed((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 flex flex-col items-center justify-center py-10 px-4">
      <motion.h1
        className="text-4xl font-bold text-pink-700 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        10 Things I Love About YOU 💖
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {messages.map((msg, i) => (
          <div
            key={i}
            className="perspective"
            onClick={() => toggleReveal(i)}
          >
            <div
              className={`relative w-64 h-40 rounded-2xl transition-transform duration-700 transform-style preserve-3d ${
                revealed[i] ? "rotate-y-180" : "rotate-y-0"
              }`}
            >
              <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-md flex items-center justify-center p-4">
                <p className="text-3xl">❤️</p>
              </div>
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl shadow-md flex items-center justify-center p-4">
                <p className="text-pink-600 font-medium text-center">{msg}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
      `}</style>
    </div>
  );
}