// components/Skills.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiAdobexd,
  SiAntdesign,
  SiMaterialdesign,
  SiClaude,
  SiRender,
  SiNetlify,
  SiPostman,
  SiVercel,
  SiRedux,
  SiPrisma,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiSocketdotio,
  SiOpenai,
  SiGooglegemini,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandVscode } from "react-icons/tb";
import { GoCopilot } from "react-icons/go";
import { Code2, Palette, Wrench, Languages, Zap, Filter } from "lucide-react";

// Categorized skills data
const skillsData = {
  frontend: [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500", level: 95 },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500", level: 90 },
    { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-500", level: 90 },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400", level: 80 },
    { name: "React.js", icon: <FaReact />, color: "text-cyan-500", level: 95 },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white", level: 85 },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-500", level: 85 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400", level: 95 },
    { name: "Framer Motion", icon: <TbBrandFramerMotion />, color: "text-pink-500", level: 85 },
    { name: "Ant Design", icon: <SiAntdesign />, color: "text-blue-500", level: 80 },
    { name: "Material UI", icon: <SiMaterialdesign />, color: "text-blue-500", level: 80 },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", level: 90 },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300", level: 90 },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", level: 88 },
    { name: "Prisma", icon: <SiPrisma />, color: "text-teal-300", level: 75 },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500", level: 80 },
    { name: "Socket.io", icon: <SiSocketdotio />, color: "text-white", level: 75 },
    { name: "REST API", icon: <Code2 />, color: "text-purple-500", level: 90 },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500", level: 90 },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-300", level: 90 },
    { name: "VS Code", icon: <TbBrandVscode />, color: "text-blue-600", level: 95 },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-500", level: 85 },
    { name: "Docker", icon: <FaDocker />, color: "text-blue-400", level: 70 },
    { name: "Vercel", icon: <SiVercel />, color: "text-white", level: 85 },
    { name: "Netlify", icon: <SiNetlify />, color: "text-teal-500", level: 85 },
    { name: "Render", icon: <SiRender />, color: "text-blue-500", level: 80 },
  ],
  design: [
    { name: "Figma", icon: <FaFigma />, color: "text-pink-500", level: 85 },
    { name: "Adobe XD", icon: <SiAdobexd />, color: "text-purple-600", level: 75 },
  ],
  ai: [
    { name: "GitHub Copilot", icon: <GoCopilot />, color: "text-gray-300", level: 90 },
    { name: "ChatGPT", icon: <SiOpenai />, color: "text-gray-300", level: 95 },
    { name: "Claude", icon: <SiClaude />, color: "text-orange-400", level: 90 },
    { name: "Gemini", icon: <SiGooglegemini />, color: "text-blue-300", level: 85 },
  ],
  languages: [
    { name: "Bengali", icon: <Languages />, color: "text-green-500", level: 100 },
    { name: "English", icon: <Languages />, color: "text-blue-400", level: 95 },
    { name: "Hindi", icon: <Languages />, color: "text-orange-500", level: 90 },
  ],
};

// Category configuration
const categories = [
  { key: "all", label: "All Skills", icon: Zap, color: "from-purple-500 to-pink-500" },
  { key: "frontend", label: "Frontend", icon: Code2, color: "from-cyan-500 to-blue-500" },
  { key: "backend", label: "Backend", icon: Code2, color: "from-green-500 to-emerald-500" },
  { key: "tools", label: "Tools", icon: Wrench, color: "from-orange-500 to-red-500" },
  { key: "design", label: "Design", icon: Palette, color: "from-pink-500 to-purple-500" },
  { key: "ai", label: "AI Tools", icon: Zap, color: "from-yellow-500 to-orange-500" },
];

// Container animation for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get filtered skills based on selected category
  const getFilteredSkills = () => {
    if (selectedCategory === "all") {
      return Object.values(skillsData).flat();
    }
    return skillsData[selectedCategory] || [];
  };

  const filteredSkills = getFilteredSkills();

  // Split skills for two rows (for infinite scroll)
  const allSkills = Object.values(skillsData).flat();
  const row1Skills = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const row2Skills = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <div className="relative overflow-hidden h-full w-full overflow-y-auto custom-scrollbar">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
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

      <div className="relative z-10 px-4 py-6 md:px-8 md:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Tech Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-6"
          >
            Technologies and tools that power my development journey
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all ${
                    selectedCategory === category.key
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Infinite Scrolling Carousels - Show when "All" is selected */}
        {selectedCategory === "all" && (
          <div className="mb-12 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <InfiniteScrollRow skills={row1Skills} direction="left" duration={40} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InfiniteScrollRow skills={row2Skills} direction="right" duration={35} />
            </motion.div>
          </div>
        )}

        {/* Filtered Skills Grid - Show when specific category is selected */}
        <AnimatePresence mode="wait">
          {selectedCategory !== "all" && (
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto"
            >
              {filteredSkills.map((skill, index) => (
                <SkillCard key={`${skill.name}-${index}`} skill={skill} variants={itemVariants} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* All Skills Grid - Alternative layout when "All" selected */}
        {selectedCategory === "all" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Explore by Category</h3>
            <div className="space-y-8">
              {Object.entries(skillsData).map(([category, skills]) => (
                <motion.div key={category} variants={itemVariants}>
                  <h4 className="text-lg font-semibold text-gray-300 mb-4 capitalize flex items-center gap-2">
                    {getCategoryIcon(category)}
                    {category}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                    {skills.map((skill, index) => (
                      <SkillCard key={`${skill.name}-${index}`} skill={skill} compact />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.3, 1],
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
      </div>
    </div>
  );
};

// Skill Card Component [web:36][web:39]
const SkillCard = ({ skill, variants, compact = false }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ 
        scale: 1.08, 
        y: -5,
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" 
      }}
      whileTap={{ scale: 0.95 }}
      className={`relative group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl ${
        compact ? "p-3" : "p-4 md:p-5"
      } hover:border-blue-500/50 transition-all cursor-pointer overflow-hidden`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="relative z-10 flex flex-col items-center gap-2 md:gap-3">
        {/* Icon */}
        <motion.div
          className={`${compact ? "p-2" : "p-2.5 md:p-3"} rounded-lg bg-gray-700/50 group-hover:bg-gray-600/50 transition-colors`}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`${skill.color} ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
            {skill.icon}
          </div>
        </motion.div>

        {/* Name */}
        <div className="text-center flex-1">
          <p className={`text-white font-semibold ${compact ? "text-xs" : "text-sm md:text-base"} mb-1`}>
            {skill.name}
          </p>

          {/* Proficiency level - only show if not compact */}
          {!compact && skill.level && (
            <div className="w-full">
              <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${
                    skill.level >= 90
                      ? "from-green-500 to-emerald-500"
                      : skill.level >= 80
                      ? "from-blue-500 to-cyan-500"
                      : "from-yellow-500 to-orange-500"
                  }`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{skill.level}%</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Infinite Scroll Row Component [web:31][web:32][web:33]
const InfiniteScrollRow = ({ skills, direction = "left", duration = 30 }) => {
  // Triple the skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="overflow-hidden relative">
      <motion.div
        className="flex gap-4 md:gap-6"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {duplicatedSkills.map((skill, index) => (
          <motion.div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 w-40 md:w-48"
            whileHover={{ scale: 1.1, zIndex: 10 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-5 hover:border-blue-500/50 transition-all h-full">
              <div className="flex flex-col items-center gap-3">
                <div className="p-2.5 rounded-lg bg-gray-700/50">
                  <div className={`${skill.color} text-3xl md:text-4xl`}>
                    {skill.icon}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-white font-semibold text-sm">{skill.name}</p>
                  {skill.level && (
                    <p className="text-xs text-blue-400 mt-1">{skill.level}%</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Helper function to get category icons
const getCategoryIcon = (category) => {
  const icons = {
    frontend: <Code2 className="w-5 h-5 text-cyan-400" />,
    backend: <Code2 className="w-5 h-5 text-green-400" />,
    tools: <Wrench className="w-5 h-5 text-orange-400" />,
    design: <Palette className="w-5 h-5 text-pink-400" />,
    ai: <Zap className="w-5 h-5 text-yellow-400" />,
    languages: <Languages className="w-5 h-5 text-blue-400" />,
  };
  return icons[category] || null;
};

export default Skills;
