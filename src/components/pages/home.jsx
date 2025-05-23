import React from "react";
import { motion } from "framer-motion";

const Home = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-100 to-white dark:from-[#0a0a0a] dark:via-[#111] dark:to-[#0a0a0a] px-6"
  >
    <motion.div
      className="text-center max-w-4xl"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-5 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 drop-shadow-xl">
        Hi, I'm Dinesh
      </h1>

      <motion.p
        className="text-md sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-800 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A fresher full-stack developer passionate about building clean, creative,
        and responsive web experiences using React, Tailwind, and Node.js.
      </motion.p>

      <motion.a
        href="#projects"
        className="inline-block px-8 py-3 rounded-full font-bold shadow-xl transition bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white hover:scale-105 hover:from-pink-500 hover:to-yellow-400 focus:outline-none focus:ring-4 focus:ring-pink-300"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Projects
      </motion.a>
    </motion.div>
  </section>
);

export default Home;
