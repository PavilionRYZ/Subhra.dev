/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaTools,
  FaLanguage,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiAdobexd, SiAxios, SiAntdesign, SiMaterialdesign, SiClaude, SiRender, SiNetlify } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { TbBrandFramerMotion, TbBrandRedux } from "react-icons/tb";
import { AiFillOpenAI } from "react-icons/ai";
import { GoCopilot } from "react-icons/go";
import { BsCursorFill } from "react-icons/bs"
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import Trae from "../assets/trae-color.svg";
import Grok from "../assets/grok.svg";
// Skill categories with specific tech icons
const skills = {
  "Web Technologies": [
    { name: "HTML", icon: <FaHtml5 className="w-6 h-6 text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="w-6 h-6 text-blue-500" /> },
    { name: "JavaScript", icon: <FaJsSquare className="w-6 h-6 text-yellow-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-500" /> },
    { name: "REST API", icon: <FaTools className="w-6 h-6 text-purple-500" /> },
  ],
  "Web Frameworks": [
    { name: "ReactJS", icon: <FaReact className="w-6 h-6 text-cyan-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-gray-400" /> },
  ],
  "UI/UX Design": [
    { name: "Figma", icon: <FaFigma className="w-6 h-6 text-pink-500" /> },
    { name: "Adobe XD", icon: <SiAdobexd className="w-6 h-6 text-purple-600" /> },
  ],
  "Web Tools": [
    { name: "Git", icon: <FaGitAlt className="w-6 h-6 text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="w-6 h-6 text-gray-300" /> },
    { name: "VS Code", icon: <DiVisualstudio className="w-6 h-6 text-blue-600" /> },
    { name: "Cursor Ai IDE", icon: <BsCursorFill className="w-6 h-6 text-gray-300" /> },
    { name: "Trae Ai IDE", icon: <img src={Trae} alt="Trae" className="w-6 h-6" /> },
    { name: "Postman", icon: <FaTools className="w-6 h-6 text-orange-500" /> },
  ],
  "Libraries": [
    { name: "Redux", icon: <TbBrandRedux className="w-6 h-6 text-purple-500" /> },
    { name: "Framer Motion", icon: <TbBrandFramerMotion className="w-6 h-6 text-pink-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-blue-400" /> },
    { name: "Ant Design", icon: <SiAntdesign className="w-6 h-6 text-blue-500" /> },
    { name: "Firebase", icon: <IoLogoFirebase className="w-6 h-6 text-yellow-500" /> },
    { name: "Material UI", icon: <SiMaterialdesign className="w-6 h-6 text-blue-500" /> },
  ],
  "Languages": [
    { name: "Bengali", icon: <FaLanguage className="w-6 h-6 text-yellow-500" /> },
    { name: "English", icon: <FaLanguage className="w-6 h-6 text-blue-300" /> },
    { name: "Hindi", icon: <FaLanguage className="w-6 h-6 text-red-500" /> },
  ],
  "Ai Tools": [
    { name: "OpenAI", icon: <AiFillOpenAI className="w-6 h-6 text-gray-300" /> },
    { name: "Claude", icon: <SiClaude className="w-6 h-6 text-orange-500" /> },
    { name: "Grok Ai", icon: <img src={Grok} alt="Grok" className="w-6 h-6" /> },

    { name: "Copilot", icon: <GoCopilot className="w-6 h-6 text-gray-300" /> },
  ],
  "Hosting": [
    { name: "Netlify", icon: <SiNetlify className="w-6 h-6 text-green-500" /> },
    { name: "Render", icon: <SiRender className="w-6 h-6 text-blue-500" /> },
    { name: "Vercel", icon: <IoLogoVercel className="w-6 h-6 text-white" /> },
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
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
      data-scroll-section
    >
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
        data-scroll
      >
        Tech Stack
      </motion.h2>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10" data-scroll>
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 255, 0.2)" }}
            className={`p-6 rounded-lg shadow-lg border hover:border-blue-500 transition-all ${darkMode ? "bg-gray-700 border-gray-500" : "bg-gray-100 border-gray-300"
              }`}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4 font-mono">{category}</h3>
            <ul
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              style={{
                gridTemplateRows: "repeat(4, auto)", // Limit to 4 rows per column
                maxWidth: "100%", // Prevent overflow
              }}
            >
              {items.map((skill, idx) => {
                const columnIndex = Math.floor(idx / 4); // Column index for animation delay
                return (
                  <motion.li
                    key={skill.name}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + columnIndex * 0.2 }}
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
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;