/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";
import { FileText } from "lucide-react";

// Typewriter effect hook with slower typing for mobile visibility
const useTypewriter = (texts, speed = 1, pause = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (charIndex < texts[currentIndex].length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + texts[currentIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, pause);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, texts, speed, pause]);

  return displayText;
};

// Floating icons
const floatingIcons = [
  { icon: <FaReact className="w-15 h-15 text-cyan-500" />, top: "20%", left: "10%" },
  { icon: <FaNodeJs className="w-15 h-15 text-green-600" />, top: "70%", left: "15%" },
  { icon: <SiMongodb className="w-15 h-15 text-green-500" />, top: "30%", right: "10%" },
  { icon: <FaHtml5 className="w-15 h-15 text-orange-500" />, top: "60%", right: "15%" },
  { icon: <FaCss3Alt className="w-15 h-15 text-blue-500" />, top: "40%", left: "20%" },
  { icon: <FaJsSquare className="w-15 h-15 text-yellow-500" />, top: "80%", right: "20%" },
  { icon: <SiTailwindcss className="w-15 h-15 text-blue-400" />, top: "50%", left: "25%" },
  { icon: <FaFigma className="w-15 h-15 text-pink-500" />, top: "25%", right: "25%" },
];

// Floating animation
const floatVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const nameText = useTypewriter(["Subhra Sundar Sinha"], 80, 5000); // Slower typing speed (80ms)
  const skillsText = useTypewriter(
    ["MERN Stack Developer", "UI/UX Enthusiast", "Web Developer"],
    100,
    2000
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Subtle Particle Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="particles" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#particles)" />
        </svg>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{ top: item.top, left: item.left, right: item.right }}
          variants={floatVariants}
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          {item.icon}
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center px-4 z-10 max-w-full"
      >
        {/* Name with Typewriter Effect */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold font-mono mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 break-words whitespace-pre-wrap min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem]">
          {nameText || "Subhra Sundar Sinha"}
        </h1>

        {/* Skills with Typewriter Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-300 font-mono min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]"
        >
          {skillsText || "MERN Stack Developer"}
        </motion.p>

        {/* Contact Info */}
        <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg font-mono text-gray-300 break-words">
          Siliguri | +91 8597366993 | subhrasundarsinha21@gmail.com
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            See My Work
          </motion.a>
          <motion.a
            href="/Subra_Sundar_Sinha_Resume.pdf"
            download="Subra_Sundar_Sinha_Resume.pdf"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;