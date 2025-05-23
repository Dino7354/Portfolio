import React from "react";
import { motion } from "framer-motion";

const About = () => (
  <section
    id="about"
    className="py-20 bg-white dark:bg-[#0a0a0a] text-[#0a0a0a] dark:text-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 drop-shadow-md"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg sm:text-xl text-center max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I’m a passionate and aspiring full-stack developer with a strong
        foundation in <span className="font-semibold text-pink-500">React</span>,{" "}
        <span className="font-semibold text-yellow-500">Tailwind CSS</span>, and{" "}
        <span className="font-semibold text-red-500">Node.js</span>. As a recent BCA graduate,
        I love crafting clean, responsive designs and learning new technologies to
        build exciting web experiences.
      </motion.p>
    </div>
  </section>
);

export default About;
