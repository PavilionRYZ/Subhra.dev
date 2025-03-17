/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
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

// Typewriter effect hook
const useTypewriter = (texts, speed = 100, pause = 2000) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentIndex];
    let timeout;

    if (charIndex < currentText.length) {
      // Typing phase
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else {
      // Pause and move to next text
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
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const Hero = () => {
  const nameText = useTypewriter(["Subhra Sundar Sinha"], 80, 6000);
  const skillsText = useTypewriter(
    ["MERN Stack Developer", "UI/UX Enthusiast", "Web Developer"],
    100,
    2000
  );
  const canvasRef = useRef(null);

  useEffect(() => {
    // Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Geometry: Rotating Cubes
    const cubes = [];
    const cubeCount = 20;
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    for (let i = 0; i < cubeCount; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      cube.rotation.set(Math.random(), Math.random(), Math.random());
      scene.add(cube);
      cubes.push(cube);
    }

    camera.position.z = 15;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener("mousemove", (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      cubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.z += Math.sin(Date.now() * 0.001 + cube.position.x) * 0.02;
        if (cube.position.z > 15) cube.position.z = -15; // Loop cubes back
      });

      // Camera tilt based on mouse
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Three.js Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "radial-gradient(circle, #1e3a8a, #1e1e2e)" }}
      />

      {/* Content Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative text-center px-4 z-10 max-w-full"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold font-mono mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 break-words whitespace-pre-wrap min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem]">
          {nameText.length === "Subhra Sundar Sinha".length ? "Subhra Sundar Sinha" : nameText || "Subhra Sundar Sinha"}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-300 font-mono min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]"
        >
          {skillsText || "MERN Stack Developer"}
        </motion.p>
        {/* <p className="mt-4 text-xs sm:text-sm md:text-base lg:text-lg font-mono text-gray-300 break-words">
          Siliguri | +91 8597366993 | subhrasundarsinha21@gmail.com
        </p> */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            See My Work
          </motion.a>
          <motion.a
            href="/Subra_Sundar_Sinha_Resume.pdf"
            download="Subra_Sundar_Sinha_Resume.pdf"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-purple-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            <FileText className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute hidden md:block"
          style={{ top: item.top, left: item.left, right: item.right, zIndex: 20 }}
          variants={floatVariants}
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
        >
          {item.icon}
        </motion.div>
      ))}
    </section>
  );
};

export default Hero;