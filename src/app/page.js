"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Image from "next/image";

const messages = Array.from({ length: 100 }, (_, i) => `I love you because... #${i + 1}`);
const birthdayStart = new Date("2025-04-21T00:00:00+05:30");
const birthdayEnd = new Date(birthdayStart.getTime() + 5 * 60 * 1000); // 5 minutes

function handleClick () {
  alert("Baby this site is still under construction so :p heheh hope you understand :)")
}

export default function LoveGrid() {
  const [revealed, setRevealed] = useState(Array(100).fill(false));
  const [now, setNow] = useState(new Date());
  const [showMain, setShowMain] = useState(true);
  const [showBirthday, setShowBirthday] = useState(false);


  const audioRef = useRef(null);

  function HandleShowBirthday() {
    if (!showBirthday) {
      setShowBirthday(true);
      const audio = new Audio("/happy-birthday.mp3");
      audio.loop = true;
      audio.volume = 0.4;
      audio.play().catch(() => {});
      audioRef.current = audio;
    } else {
      setShowBirthday(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }

  const toggleReveal = (index) => {
    setRevealed((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  // Countdown screen
  // if (process.env.NODE_ENV === "production" && now < birthdayStart) {
  //   const timeLeft = birthdayStart - now;
  //   const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  //   const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  //   const seconds = Math.floor((timeLeft / 1000) % 60);

  //   return (
  //     <div className="min-h-screen flex items-center justify-between px-10 bg-gradient-to-br from-pink-100 to-pink-300">
  //       <Image src={"/IMG_1038.png"} alt="cutu" width={400} height={100} className="rounded-full" unoptimized />
  //     <div className="flex flex-col items-center justify-center">
  //       <motion.h1
  //         className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-700 mb-6 text-center"
  //         initial={{ opacity: 0, y: -20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ duration: 0.6 }}
  //       >
  //         Countdown to Cutu&apos;s Birthday 🎉
  //       </motion.h1>
  //       <motion.div
  //         className="text-4xl sm:text-5xl md:text-6xl font-semibold text-pink-600 bg-white p-6 rounded-2xl shadow-lg"
  //         initial={{ opacity: 0 }}
  //         animate={{ opacity: 1 }}
  //         transition={{ duration: 1 }}
  //       >
  //         {`${days}d ${hours}h ${minutes}m ${seconds}s`}
  //       </motion.div>
  //     </div>
  //     <Image src={"/hottie.JPG"} alt="sabse sundar ladki" width={300} height={100} className="rounded-full" unoptimized />
  //     </div>
  //   );
  // }

  // Birthday surprise screen
  if (showBirthday) {
    return (
      <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center relative overflow-hidden">
        <button onClick={HandleShowBirthday} className="border border-b-slate-800 text-black cursor-pointer rounded-full w-20 h-20 absolute bottom-10 right-10">Homepage</button>
        <Confetti numberOfPieces={400} recycle={true} />
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-600 text-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          🎂 Happy Birthday My Love! 🎉
        </motion.h1>
      </div>
    );
  }

  // Main homepage with two cards
  if (showMain && !showBirthday) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 flex flex-col items-center justify-center p-10">
        <button onClick={HandleShowBirthday} className="border border-b-slate-800 text-black cursor-pointer rounded-full w-20 h-20 absolute bottom-10 right-10">See greeting</button>
        <motion.h1
          className="text-4xl font-bold text-pink-700 mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome 💖
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
          <motion.a
            onClick={handleClick}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center text-xl font-semibold text-pink-600"
            whileHover={{ scale: 1.05 }}
          >
            Digital Timeline
          </motion.a>
          <motion.a
            onClick={handleClick}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center text-xl font-semibold text-pink-600"
            whileHover={{ scale: 1.05 }}
          >
            100 Things I Love About YOU
          </motion.a>
        </div>
      </div>
    );
  }

  return null;
}
