import React from "react";
import { motion } from "framer-motion";
import { Globe, Shirt, Brain } from "lucide-react";

const cardVariants = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  whileHover: {
    scale: 1.05,
  },
  transition: { duration: 0.4, ease: "easeOut" },
};

const Projects = () => (
  <section id="projects" className="py-20 px-6 bg-[#fff8e7] dark:bg-[#0a0a0a]">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-[#ff00cc] mb-2 drop-shadow-[0_0_10px_#ff00cc]">
        My Projects
      </h2>
      <p className="text-gray-700 dark:text-gray-300">Recent work I&apos;ve done:</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Teert Yatra Project */}
      <motion.div
        className="bg-[#fffaf0] dark:bg-[#1a1a1a] p-6 rounded-xl shadow-lg flex flex-col cursor-pointer"
        initial="initial"
        whileInView="whileInView"
        whileHover="whileHover"
        transition={{ ...cardVariants.transition, delay: 0 }}
        variants={cardVariants}
      >
        <div className="flex items-center space-x-4 mb-4">
          <Globe className="text-[#ff00cc]" size={32} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Teert Yatra
          </h3>
        </div>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          A spiritual trip planner web app for Teerth pilgrimage spots. Users
          can explore destinations, book transport, and customize travel plans.
          Built with MERN stack.
        </p>
      </motion.div>

      {/* T-Shirt Customizer AI Project */}
      <motion.div
        className="bg-[#fffaf0] dark:bg-[#1a1a1a] p-6 rounded-xl shadow-lg flex flex-col cursor-pointer"
        initial="initial"
        whileInView="whileInView"
        whileHover="whileHover"
        transition={{ ...cardVariants.transition, delay: 0.2 }}
        variants={cardVariants}
      >
        <div className="flex items-center space-x-4 mb-4">
          <Shirt className="text-[#ff00cc]" size={32} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            AI T-Shirt Customizer
          </h3>
        </div>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          An interactive web app to design stylish T-shirts using AI. Users
          can generate custom patterns, preview in 3D, and place orders.
          Built with React, Three.js & AI APIs.
        </p>
      </motion.div>

      {/* Own AI (Gemini Clone) Project */}
      <motion.div
        className="bg-[#fffaf0] dark:bg-[#1a1a1a] p-6 rounded-xl shadow-lg flex flex-col cursor-pointer"
        initial="initial"
        whileInView="whileInView"
        whileHover="whileHover"
        transition={{ ...cardVariants.transition, delay: 0.4 }}
        variants={cardVariants}
      >
        <div className="flex items-center space-x-4 mb-4">
          <Brain className="text-[#ff00cc]" size={32} />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Own AI (Gemini Clone)
          </h3>
        </div>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-sm md:text-base">
          A personal AI assistant built with modern LLM technology. Like
          Gemini, it can answer questions, generate content, and interact
          naturally. Built using Node.js, OpenAI API, and React.
        </p>
      </motion.div>
    </div>
  </section>
);

export default Projects;
