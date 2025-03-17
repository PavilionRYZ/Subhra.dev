/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaHtml5,        // HTML5
  FaCss3Alt,      // CSS3
  FaJsSquare,     // JavaScript
  FaReact,        // ReactJS
  FaNodeJs,       // Node.js
  FaGitAlt,       // Git
  FaGithub,       // GitHub
  FaFigma,        // Figma
  FaTools,        // Postman
  FaLanguage,     // Languages
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiAdobexd } from "react-icons/si"; // Specific icons from Simple Icons
import { DiVisualstudio } from "react-icons/di";
// Skill categories with specific tech icons
const skills = {
  "Web Technologies": [
    { name: "HTML", icon: <FaHtml5 className="w-6 h-6 text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="w-6 h-6 text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="w-6 h-6 text-yellow-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
    { name: "REST API", icon: <FaTools className="w-6 h-6 text-purple-500" /> }, // No specific REST API icon, using FaTools
  ],
  "Web Frameworks": [
    { name: "ReactJS", icon: <FaReact className="w-6 h-6 text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-gray-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-blue-400" /> },
  ],
  "UI/UX Design": [
    { name: "Figma", icon: <FaFigma className="w-6 h-6 text-pink-500" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="w-6 h-6 text-purple-600" /> },
  ],
  "Web Tools": [
    { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-gray-300" /> },
    { name: "VS Code", icon: <DiVisualstudio className="w-6 h-6 text-blue-600" /> },
    { name: "Postman", icon: <FaTools className="w-6 h-6 text-orange-500" /> }, // No specific Postman icon, using FaTools
  ],
  "Languages": [
    { name: "Bengali", icon: <FaLanguage className="w-6 h-6 text-yellow-500" /> },
    { name: "English", icon: <FaLanguage className="w-6 h-6 text-blue-300" /> },
    { name: "Hindi", icon: <FaLanguage className="w-6 h-6 text-red-500" /> },
  ],
};

// Floating animation for icons
const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Skills = ({ darkMode, setDarkMode }) => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Subtle Background SVG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="gray" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-center font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
      >
        Tech Stack
      </motion.h2>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 255, 0.2)" }}
            className={`p-6 rounded-lg shadow-lg border hover:border-blue-500 transition-all ${
              darkMode ? "bg-gray-700 border-gray-500" : "bg-gray-100 border-gray-300"
            }`}
            
            
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 font-mono">{category}</h3>
            <ul className="space-y-4">
              {items.map((skill, idx) => (
                <motion.li
                  key={skill.name}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + index * 0.2 }}
                >
                  <motion.div
                    variants={floatVariants}
                    animate="animate"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <span className={`${darkMode ? "text-white" : "text-black"} font-mono`}>{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;