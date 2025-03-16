/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Camera, Gamepad, Code, Palette, Globe, Laptop } from "lucide-react"; // Icons for interests and skills

// Floating icon animation variants
const floatVariants = {
  animate: {
    y: [0, -35, 0], // Moves up and down
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Icons representing skills and interests
const floatingIcons = [
  { icon: <Code className="w-8 h-8 text-blue-400" />, label: "Coding" },
  { icon: <Palette className="w-8 h-8 text-purple-400" />, label: "UI/UX" },
  { icon: <Globe className="w-8 h-8 text-green-400" />, label: "Web Dev" },
  { icon: <Laptop className="w-8 h-8 text-yellow-400" />, label: "Tech" },
  { icon: <Camera className="w-8 h-8 text-pink-400" />, label: "Photography" },
  { icon: <Gamepad className="w-8 h-8 text-red-400" />, label: "Gaming" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: `${20 + index * 15}%`, // Spread vertically
            left: index % 2 === 0 ? "5%" : "85%", // Alternate left/right
          }}
          variants={floatVariants}
          animate="animate"
          whileHover={{ scale: 1.2, rotate: 360 }}
          title={item.label} // Tooltip on hover
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
        >
          <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center overflow-hidden border-4 border-blue-400 shadow-lg">
            {/* Placeholder - Replace with actual image */}
            <img
              src="/profile-placeholder.jpg" // Add your image to public folder
              alt="Subra Sundar Sinha"
              className="w-full h-full object-cover"
              onError={(e) => (e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png")} // Fallback
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold font-mono mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:text-lg text-sm text-gray-300 max-w-2xl font-mono leading-relaxed"
          >
            A highly motivated <span className="text-blue-400">MERN stack developer</span> with a strong foundation in web development, proficient in front-end technologies like <span className="text-purple-400">HTML, CSS, JavaScript, ReactJS</span>, and back-end technologies like <span className="text-green-400">Node.js, Express.js, MongoDB</span>. Adept at creating responsive UI designs using frameworks like Tailwind and Bootstrap. Experienced in building e-commerce platforms and project management, as demonstrated in the final year group project <span className="text-yellow-400">"Ariyas"</span>. Skilled in problem-solving with C, C++, and passionate about <span className="text-pink-400">UI/UX design</span> using Figma and Adobe XD. Enthusiastic about photography, traveling, and gaming. Fluent in Bengali, English, and Hindi.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors"
            >
              Explore My Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;