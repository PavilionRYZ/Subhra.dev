import React from "react";
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
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";

// All skills flattened for the carousel
const allSkills = [
  { name: "HTML", icon: <FaHtml5 className="w-8 h-8 text-orange-500" />, category: "Web Technologies" },
  { name: "CSS", icon: <FaCss3Alt className="w-8 h-8 text-blue-500" />, category: "Web Technologies" },
  { name: "JavaScript", icon: <FaJsSquare className="w-8 h-8 text-yellow-500" />, category: "Web Technologies" },
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-500" />, category: "Web Technologies" },
  { name: "REST API", icon: <FaTools className="w-8 h-8 text-purple-500" />, category: "Web Technologies" },
  { name: "ReactJS", icon: <FaReact className="w-8 h-8 text-cyan-500" />, category: "Web Frameworks" },
  { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-600" />, category: "Web Frameworks" },
  { name: "Express.js", icon: <SiExpress className="w-8 h-8 text-gray-400" />, category: "Web Frameworks" },
  { name: "Figma", icon: <FaFigma className="w-8 h-8 text-pink-500" />, category: "UI/UX Design" },
  { name: "Adobe XD", icon: <SiAdobexd className="w-8 h-8 text-purple-600" />, category: "UI/UX Design" },
  { name: "Git", icon: <FaGitAlt className="w-8 h-8 text-red-500" />, category: "Web Tools" },
  { name: "GitHub", icon: <FaGithub className="w-8 h-8 text-gray-300" />, category: "Web Tools" },
  { name: "VS Code", icon: <DiVisualstudio className="w-8 h-8 text-blue-600" />, category: "Web Tools" },
  { name: "Postman", icon: <FaTools className="w-8 h-8 text-orange-500" />, category: "Web Tools" },
  { name: "Redux", icon: <TbBrandRedux className="w-8 h-8 text-purple-500" />, category: "Libraries" },
  { name: "Framer Motion", icon: <TbBrandFramerMotion className="w-8 h-8 text-pink-500" />, category: "Libraries" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-blue-400" />, category: "Libraries" },
  { name: "Ant Design", icon: <SiAntdesign className="w-8 h-8 text-blue-500" />, category: "Libraries" },
  { name: "Firebase", icon: <IoLogoFirebase className="w-8 h-8 text-yellow-500" />, category: "Libraries" },
  { name: "Material UI", icon: <SiMaterialdesign className="w-8 h-8 text-blue-500" />, category: "Libraries" },
  { name: "Bengali", icon: <FaLanguage className="w-8 h-8 text-yellow-500" />, category: "Languages" },
  { name: "English", icon: <FaLanguage className="w-8 h-8 text-blue-300" />, category: "Languages" },
  { name: "Hindi", icon: <FaLanguage className="w-8 h-8 text-red-500" />, category: "Languages" },
  { name: "OpenAI", icon: <AiFillOpenAI className="w-8 h-8 text-gray-300" />, category: "AI Tools" },
  { name: "Claude", icon: <SiClaude className="w-8 h-8 text-orange-500" />, category: "AI Tools" },
  { name: "Copilot", icon: <GoCopilot className="w-8 h-8 text-gray-300" />, category: "AI Tools" },
  { name: "Netlify", icon: <SiNetlify className="w-8 h-8 text-green-500" />, category: "Hosting" },
  { name: "Render", icon: <SiRender className="w-8 h-8 text-blue-500" />, category: "Hosting" },
  { name: "Vercel", icon: <IoLogoVercel className="w-8 h-8 text-white" />, category: "Hosting" },
];

// Split skills into two rows for different directions
const row1Skills = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const row2Skills = allSkills.slice(Math.ceil(allSkills.length / 2));

const SkillItem = ({ skill, index }) => (
  <motion.div
    className="flex-shrink-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 mx-4 min-w-[160px] hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-700/50"
    whileHover={{
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
    }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="flex flex-col items-center space-y-3">
      <motion.div
        className="p-2 rounded-lg bg-gray-700/50"
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        {skill.icon}
      </motion.div>
      <div className="text-center">
        <p className="text-white font-semibold text-sm">{skill.name}</p>
        <p className="text-blue-400 text-xs opacity-70">{skill.category}</p>
      </div>
    </div>
  </motion.div>
);

const ScrollingRow = ({ skills, direction = "left", duration = 30 }) => {
  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex"
        animate={{
          x: direction === "left" ? [0, -100 * skills.length] : [-100 * skills.length, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
        style={{ width: `${duplicatedSkills.length * 200}px` }}
      >
        {duplicatedSkills.map((skill, index) => (
          <SkillItem key={`${skill.name}-${index}`} skill={skill} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

const Skills = ({ darkMode = true, setDarkMode }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-blue-400" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Tech Stack
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Technologies and tools that power my development journey
          </motion.p>
        </motion.div>

        {/* Scrolling rows */}
        <div className="space-y-10">
          {/* First row - Left to Right */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ScrollingRow skills={row1Skills} direction="left" duration={40} />
          </motion.div>

          {/* Second row - Right to Left */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ScrollingRow skills={row2Skills} direction="right" duration={35} />
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div> */}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>

    </section>
  );
};

export default Skills;