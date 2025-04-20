"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const timelineData = [
  {
    date: "2023-04-21",
    title: "First Call",
    description: "We talked for hours 💬",
    image: "/timeline/first-call.jpg",
  },
  {
    date: "2023-05-10",
    title: "First Gift",
    description: "You gave me that keychain 🎁",
    image: "/timeline/first-gift.jpg",
  },
  {
    date: "2023-06-25",
    title: "Walk in the Park",
    description: "It was so peaceful 🌳",
    image: "/timeline/park-walk.jpg",
  },
  // Add more events as needed
];

export default function Timeline() {
  return (
    <div className="!h-full bg-pink-50 pt-10 px-4 flex flex-col items-center">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-pink-600 mb-20 relative after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-[2000px] after:bg-pink-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Digital Timeline 💖
      </motion.h1>

      <div className="relative w-full max-w-3xl">
        {timelineData.map((event, index) => (
          <motion.div
            key={index}
            className={`relative mb-24 flex flex-col sm:flex-row ${index % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="sm:w-1/2 flex justify-center items-center">
              <div className="bg-white border border-gray-300 shadow-md p-2 rounded-md transform rotate-[-2deg]">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={250}
                  height={250}
                  className="object-cover rounded-md"
                />
              </div>
            </div>
            <div className="sm:w-1/2 px-4 mt-4 sm:mt-0 flex flex-col justify-center">
              <h3 className="text-lg font-semibold text-pink-600 font-handwritten">{event.title}</h3>
              <p className="text-gray-700 mt-1 font-handwritten">{event.date}</p>
              <p className="text-gray-800 mt-2 font-handwritten">{event.description}</p>
            </div>
            <div className="absolute top-1 left-1/2 w-4 h-4 bg-white border-2 border-pink-400 rounded-full -translate-x-1/2"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
