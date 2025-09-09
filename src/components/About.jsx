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
            A highly motivated <span className="text-blue-400">MERN stack developer</span> with a solid foundation in web development, proficient in front-end technologies such as <span className="text-purple-400">HTML, CSS, JavaScript, ReactJS</span> and back-end technologies including <span className="text-green-400">Node.js, Express.js, MongoDB</span>.
            Skilled in building responsive UI designs using modern frameworks like <span className="text-teal-400">Tailwind CSS</span> and experienced with essential tools such as <span className="text-cyan-400">Git, GitHub, Postman, and Visual Studio Code</span>. Successfully developed comprehensive web applications—like e-commerce and restaurant management platforms—demonstrating expertise in <span className="text-yellow-400">full-stack development</span> and project management.
            Passionate about <span className="text-pink-400">UI/UX design</span> with hands-on experience in <span className="text-fuchsia-400">Figma</span> and <span className="text-orange-400">Adobe XD</span>.
            I have also leveraged AI-enabled IDEs such as <span className="text-cyan-400">Visual Studio Code with Copilot, Cursor AI IDE, and Trae AI IDE</span>, along with large language models including <span className="text-indigo-400">ChatGPT, Perplexity, Claude, and Grok</span> to accelerate code production and enhance development efficiency.
            I am always eager to learn and implement new technologies. Enthusiastic about photography, traveling, and gaming. Fluent in Bengali, English, and Hindi.
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
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default About;