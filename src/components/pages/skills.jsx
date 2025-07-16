import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPython,
  FaTerminal,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
} from 'react-icons/si';
import { motion } from 'framer-motion';


const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 className="text-[#ff5733]" /> },
  { name: 'CSS3', icon: <FaCss3Alt className="text-[#2965f1]" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#f7e92e]" /> },
  { name: 'React', icon: <FaReact className="text-[#61dafb]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-[#3c873a]" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#4db33d]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38bdf8]" /> },
  { name: 'GitHub', icon: <FaGithub className="text-[#ffffffcc]" /> },
  { name: 'Python', icon: <FaPython className="text-[#ffde57]" /> },
  { name: 'C', icon: <FaTerminal className="text-blue-600" /> },
  { name: 'C++', icon: <SiCplusplus className="text-blue-500" /> },
  { name: 'Termux', icon: <FaTerminal className="text-green-400" /> },
];


const Skills = () => (
  <section id="skills" className="py-20 px-6 bg-[#fff8e7] dark:bg-[#0a0a0a]">
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-[#ff00cc] mb-2 drop-shadow-[0_0_10px_#ff00cc]">Skills</h2>
      <p className="text-gray-700 dark:text-gray-300">Technologies I work with:</p>
    </motion.div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {skillsData.map((skill, index) => (
        <motion.div
          key={index}
          className="bg-[#fffaf0] dark:bg-[#1a1a1a] p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:scale-105 transition-transform"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-3">{skill.icon}</div>
          <p className="text-gray-800 dark:text-gray-200 font-semibold">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
