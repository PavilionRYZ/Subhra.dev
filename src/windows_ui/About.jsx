// components/About.jsx
import { motion, useMotionValue, useTransform } from "framer-motion";
import { 
  Camera, 
  Gamepad2, 
  Code2, 
  Palette, 
  Globe, 
  Laptop, 
  Mountain,
  BookOpen,
  Coffee,
  Zap,
  Download,
  MapPin,
  Languages,
  Briefcase
} from "lucide-react";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiFigma
} from "react-icons/si";

// Floating icon animation variants
const floatVariants = {
  animate: (custom) => ({
    y: [0, -30, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 3 + custom * 0.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

// Container animation for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Floating icons with skills
const floatingIcons = [
  { icon: <SiReact className="w-8 h-8" />, label: "React", color: "text-cyan-400" },
  { icon: <SiNodedotjs className="w-8 h-8" />, label: "Node.js", color: "text-green-500" },
  { icon: <SiMongodb className="w-8 h-8" />, label: "MongoDB", color: "text-green-600" },
  { icon: <SiTailwindcss className="w-8 h-8" />, label: "Tailwind", color: "text-teal-400" },
  { icon: <SiJavascript className="w-8 h-8" />, label: "JavaScript", color: "text-yellow-500" },
  { icon: <SiFigma className="w-8 h-8" />, label: "Figma", color: "text-pink-500" },
];

// Stats data
const stats = [
  { label: "Projects Completed", value: "15+", icon: Briefcase },
  { label: "Tech Stack", value: "MERN", icon: Code2 },
  { label: "CGPA", value: "8.88", icon: BookOpen },
  { label: "Experience", value: "2+ Years", icon: Zap },
];

// Interests/Hobbies
const interests = [
  { icon: Camera, label: "Photography", color: "from-pink-500 to-rose-500" },
  { icon: Mountain, label: "Traveling", color: "from-blue-500 to-cyan-500" },
  { icon: Gamepad2, label: "Gaming", color: "from-purple-500 to-indigo-500" },
  { icon: BookOpen, label: "Reading", color: "from-green-500 to-emerald-500" },
];

const About = () => {
  return (
    <div className="relative overflow-hidden h-full w-full overflow-y-auto custom-scrollbar">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Icons */}
      <div className="hidden lg:block">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute z-0"
            style={{
              top: `${10 + index * 15}%`,
              left: index % 2 === 0 ? "5%" : "90%",
            }}
            custom={index}
            variants={floatVariants}
            animate="animate"
            whileHover={{ scale: 1.3, rotate: 360 }}
            title={item.label}
          >
            <div className={`${item.color} opacity-30 hover:opacity-100 transition-opacity cursor-pointer`}>
              {item.icon}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 px-4 py-6 md:px-8 md:py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
          >
            Full-Stack Developer | MERN Enthusiast | UI/UX Designer
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 mb-12">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-spin-slow blur-lg opacity-75"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                <img
                  src="/profile-placeholder.jpg"
                  alt="Subhra Sundar Sinha"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=Subhra+Sinha&size=256&background=3b82f6&color=fff&bold=true";
                  }}
                />
              </div>
              {/* Status Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute bottom-4 right-4 px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Open to Work
              </motion.div>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Subhra Sundar Sinha
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-4">
                <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  Bengaluru, India
                </span>
                <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <Briefcase className="w-4 h-4" />
                  MERN Stack Developer
                </span>
                <span className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <Languages className="w-4 h-4" />
                  Bengali, English, Hindi
                </span>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                A highly motivated <span className="text-blue-400 font-semibold">MERN stack developer</span> with 
                a solid foundation in web development. Proficient in front-end technologies like{" "}
                <span className="text-cyan-400">React.js</span>, <span className="text-purple-400">HTML/CSS/JavaScript</span>,
                and back-end technologies including <span className="text-green-400">Node.js</span>,{" "}
                <span className="text-green-500">Express.js</span>, and <span className="text-green-600">MongoDB</span>.
              </p>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Experienced with modern frameworks like <span className="text-teal-400">Tailwind CSS</span> and 
                tools such as <span className="text-orange-500">Git</span>, <span className="text-gray-400">Postman</span>,
                and <span className="text-blue-500">VS Code with Copilot</span>. Passionate about{" "}
                <span className="text-pink-400">UI/UX design</span> with hands-on experience in{" "}
                <span className="text-pink-500">Figma</span> and <span className="text-purple-600">Adobe XD</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="/Subhra_Sundar_Sinha_Resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gray-800 border-2 border-gray-700 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 md:p-6 text-center hover:border-blue-500/50 transition-all"
                >
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-blue-400 mx-auto mb-3" />
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</h4>
                  <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Interests Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">
              Beyond Coding
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 flex flex-col items-center gap-3 hover:border-purple-500/50 transition-all cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${interest.color} p-2.5 flex items-center justify-center shadow-lg`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <span className="text-sm text-gray-300 font-medium">{interest.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* AI Tools Section */}
          <motion.div variants={itemVariants} className="mt-12 p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl">
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              AI-Powered Development
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Leveraging cutting-edge AI tools including <span className="text-cyan-400">VS Code Copilot</span>,{" "}
              <span className="text-purple-400">Cursor AI</span>, and LLMs like{" "}
              <span className="text-green-400">ChatGPT</span>, <span className="text-orange-400">Claude</span>,
              and <span className="text-blue-300">Perplexity</span> to accelerate development and enhance code quality.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Add this to your global CSS for the slow spin animation
// @keyframes spin-slow {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// .animate-spin-slow { animation: spin-slow 10s linear infinite; }

export default About;
