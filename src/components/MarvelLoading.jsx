// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import * as THREE from "three";

// // Marvel-style loading animation with Three.js
// const MarvelLoading = ({ onLoadingComplete }) => {
//   const [progress, setProgress] = useState(0);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // Simulate loading progress
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => {
//             onLoadingComplete(); // Callback to signal loading is complete
//           }, 500); // Delay for final fade-out
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 40); // Adjust speed of progress (40ms per tick)

//     return () => clearInterval(interval);
//   }, [onLoadingComplete]);

//   useEffect(() => {
//     // Three.js Setup
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);

//     // Background Gradient (Fallback)
//     scene.background = new THREE.Color(0x1a1a1a); // Dark gray background

//     // Create Comic Book Panels (3D Planes)
//     const panels = [];
//     const panelCount = 20;
//     const geometry = new THREE.PlaneGeometry(5, 3); // Panel size
//     const textureLoader = new THREE.TextureLoader();
//     const texture = textureLoader.load("https://www.transparenttextures.com/patterns/comic.png"); // Comic book texture
//     const material = new THREE.MeshBasicMaterial({
//       map: texture,
//       side: THREE.DoubleSide,
//       transparent: true,
//       opacity: 0.8,
//     });

//     for (let i = 0; i < panelCount; i++) {
//       const panel = new THREE.Mesh(geometry, material);
//       const angle = (i / panelCount) * Math.PI * 2; // Circular distribution
//       const radius = 10; // Tunnel radius
//       panel.position.set(
//         Math.cos(angle) * radius,
//         Math.sin(angle) * radius,
//         -i * 5 // Spread panels along Z-axis
//       );
//       panel.rotation.set(0, angle, 0); // Rotate panels to face the center
//       scene.add(panel);
//       panels.push(panel);
//     }

//     camera.position.z = 10;

//     // Animation Loop
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Move camera through the tunnel
//       camera.position.z -= 0.1;
//       if (camera.position.z < -panelCount * 5) camera.position.z = 0; // Loop camera position

//       // Rotate panels for dynamic effect
//       panels.forEach((panel, i) => {
//         panel.rotation.z += 0.01;
//         panel.rotation.x = Math.sin(Date.now() * 0.001 + i) * 0.2; // Subtle tilt
//       });

//       renderer.render(scene, camera);
//     };
//     animate();

//     // Resize Handler
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//       scene.clear();
//     };
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       animate={{ opacity: progress === 100 ? 0 : 1 }}
//       transition={{ duration: 0.5 }}
//       className="fixed inset-0 flex flex-col items-center justify-center z-50"
//     >
//       {/* Three.js Canvas */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 z-0"
//       />

//       {/* Glowing Marvel-Style Text */}
//       <motion.div
//         className="relative text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-400 z-10"
//         style={{ fontFamily: "'Bangers', cursive" }} // Marvel-style font
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//       >
//         subhra.dev
//         {/* Glowing Effect */}
//         <motion.div
//           className="absolute inset-0 text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-400"
//           style={{ fontFamily: "'Bangers', cursive", filter: "blur(10px)" }}
//           animate={{
//             opacity: [0.5, 1, 0.5],
//             scale: [1, 1.05, 1],
//           }}
//           transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
//         >
//           subhra.dev
//         </motion.div>
//       </motion.div>

//       {/* Percentage Counter */}
//       <motion.div
//         className="mt-4 text-2xl font-bold text-blue-400 font-mono z-10"
//         animate={{
//           opacity: [0.5, 1, 0.5],
//           textShadow: [
//             "0 0 5px rgba(234, 179, 8, 0.5)",
//             "0 0 10px rgba(234, 179, 8, 0.8)",
//             "0 0 5px rgba(234, 179, 8, 0.5)",
//           ],
//         }}
//         transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
//       >
//         {progress}%
//       </motion.div>
//     </motion.div>
//   );
// };

// export default MarvelLoading;


import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

// Floating tech icons for the animation
const techIcons = [
  { icon: FaReact, color: "#00f7ff" },
  { icon: FaNodeJs, color: "#68a063" },
  { icon: SiMongodb, color: "#47a248" },
  { icon: FaHtml5, color: "#e34f26" },
  { icon: FaCss3Alt, color: "#1572b6" },
  { icon: FaJsSquare, color: "#f7df1e" },
  { icon: SiTailwindcss, color: "#38bdf8" },
];

const MarvelLoading = ({ onLoadingComplete }) => {
  const canvasRef = useRef(null);
  const[progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 30); // 100 steps over 3 seconds (3000ms / 100 = 30ms per step)
  
  
    // Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Central Sphere
    const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x1e90ff,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Orbiting Icons (simulated as small cubes with colors)
    const iconObjects = [];
    techIcons.forEach((icon, index) => {
      const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const cubeMaterial = new THREE.MeshBasicMaterial({
        color: icon.color,
        wireframe: true,
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      const angle = (index / techIcons.length) * Math.PI * 2;
      cube.position.set(
        Math.cos(angle) * 5,
        Math.sin(angle) * 5,
        0
      );
      scene.add(cube);
      iconObjects.push(cube);
    });

    camera.position.z = 10;

    // Animation Loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.02;

      // Rotate sphere
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      // Orbit and bob icons
      iconObjects.forEach((cube, index) => {
        const angle = (index / techIcons.length) * Math.PI * 2 + time;
        cube.position.x = Math.cos(angle) * 5;
        cube.position.y = Math.sin(angle) * 5;
        cube.position.z = Math.sin(time + index) * 2;
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Simulate loading completion
    const timeout = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
    >
        <motion.div className="relative z-10 flex flex-col items-center justify-center gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-violet-300 font-bold text-2xl font-mono"
          style={{
            textShadow: `
              0 0 5px rgba(167, 139, 250, 1),
              0 0 10px rgba(167, 139, 250, 0.8),
              0 0 20px rgba(167, 139, 250, 0.6)
            `,
          }}
        >
          Subhra.dev
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-violet-300 font-bold text-2xl font-mono"
          style={{
            textShadow: `
              0 0 5px rgba(167, 139, 250, 1),
              0 0 10px rgba(167, 139, 250, 0.8),
              0 0 20px rgba(167, 139, 250, 0.6)
            `,
          }}
        >
          Loading Portfolio...
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-violet-300 font-bold text-xl font-mono"
          style={{
            textShadow: `
              0 0 5px rgba(167, 139, 250, 1),
              0 0 10px rgba(167, 139, 250, 0.8),
              0 0 20px rgba(167, 139, 250, 0.6)
            `,
          }}
        >
          {progress}%
        </motion.p>
      </motion.div>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </motion.div>
  );
};

export default MarvelLoading;