// components/Projects.jsx
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaStripe,
  FaPython,
  FaAws,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiAdobexd,
  SiAntdesign,
  SiShadcnui,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiClaude,
  SiOpenai,
  SiGooglegemini,
  SiPrisma,
  SiRedux,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandRedux } from "react-icons/tb";
import { IoGlobeOutline, IoLogoFirebase } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { LuBot, LuBrain, LuExternalLink } from "react-icons/lu";
import { Calendar, Star } from "lucide-react";

// Tech icon mapping
const techIconMap = {
  react: <FaReact className="w-5 h-5 text-cyan-400" />,
  next: <SiNextdotjs className="w-5 h-5 text-white" />,
  node: <FaNodeJs className="w-5 h-5 text-green-500" />,
  express: <SiExpress className="w-5 h-5 text-gray-300" />,
  mongodb: <SiMongodb className="w-5 h-5 text-green-600" />,
  tailwind: <SiTailwindcss className="w-5 h-5 text-teal-400" />,
  framer: <TbBrandFramerMotion className="w-5 h-5 text-pink-500" />,
  redux: <TbBrandRedux className="w-5 h-5 text-purple-500" />,
  figma: <FaFigma className="w-5 h-5 text-pink-400" />,
  adobexd: <SiAdobexd className="w-5 h-5 text-purple-600" />,
  antdesign: <SiAntdesign className="w-5 h-5 text-blue-500" />,
  shadcn: <SiShadcnui className="w-5 h-5 text-white" />,
  gemini: <SiGooglegemini className="w-5 h-5 text-blue-300" />,
  openai: <SiOpenai className="w-5 h-5 text-gray-300" />,
  claude: <SiClaude className="w-5 h-5 text-orange-400" />,
  firebase: <IoLogoFirebase className="w-5 h-5 text-yellow-500" />,
  vercel: <SiVercel className="w-5 h-5 text-white" />,
  netlify: <SiNetlify className="w-5 h-5 text-teal-500" />,
  stripe: <FaStripe className="w-5 h-5 text-purple-500" />,
  typescript: <SiTypescript className="w-5 h-5 text-blue-400" />,
  python: <FaPython className="w-5 h-5 text-yellow-400" />,
  aws: <FaAws className="w-5 h-5 text-orange-500" />,
  prisma: <SiPrisma className="w-5 h-5 text-teal-300" />,
  ai: <LuBrain className="w-5 h-5 text-purple-400" />,
  chatbot: <LuBot className="w-5 h-5 text-cyan-300" />,
  default: <BsStars className="w-5 h-5 text-yellow-400" />,
};

const getTechIcon = (tag) => {
  const lowerTag = tag.toLowerCase();
  for (const [key, icon] of Object.entries(techIconMap)) {
    if (lowerTag.includes(key)) return icon;
  }
  return techIconMap.default;
};

// Full projects array with your actual projects
const projects = [
  {
    title: "Gemini AI Chatbot",
    description:
      "Modern intelligent chatbot powered by Google's Gemini AI with clean UI, markdown support, code highlighting, and conversation history. Built with React, Tailwind CSS, shadcn/ui components, and Lucide icons for a seamless chat experience.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/finerestate-c1c19.appspot.com/o/myJourney%2FScreenshot%202025-09-02%20183852.png?alt=media&token=a53de125-fba7-44cc-97cd-3a034fb9a1ef",
    liveLink: "https://horizonchatbot.netlify.app/",
    githubLink: "https://github.com/PavilionRYZ/Horizon_chat_bot.github.io.git",
    date: "Aug 2024",
    tags: ["ReactJs", "Tailwind CSS", "Gemini API", "shadcn-ui", "AI", "Frontend"],
    featured: true,
  },
  {
    title: "RestoMaster - Restaurant Management System",
    description:
      "Full-stack MERN restaurant ordering and management platform with role-based authentication, real-time order tracking, admin dashboard for menu management, and payment integration. Features responsive UI with Ant Design components.",
    image: "https://via.placeholder.com/600x400/1e293b/94a3b8?text=RestoMaster",
    liveLink: "#",
    githubLink: "https://github.com/PavilionRYZ/RestoMaster",
    date: "Feb-Apr 2024",
    tags: ["React", "Node.js", "Express", "MongoDB", "Ant Design", "JWT", "Fullstack"],
    featured: true,
  },
  {
    title: "AI-Powered Nutrition Checker",
    description:
      "Smart recipe nutrition analyzer using Spoonacular API. Users can search recipes, view detailed nutritional information, and save favorites. Clean interface built with React and Tailwind CSS with real-time API integration.",
    image: "https://via.placeholder.com/600x400/1e293b/94a3b8?text=Nutrition+Checker",
    liveLink: "#",
    githubLink: "https://github.com/PavilionRYZ/nutrition-checker",
    date: "May 2024",
    tags: ["React", "Tailwind CSS", "Spoonacular API", "Frontend"],
    featured: false,
  },
  {
    title: "Healthcare Clinic Management System",
    description:
      "Comprehensive MERN stack clinic management solution with patient records, appointment scheduling, doctor availability management, prescription tracking, and billing system. Features secure authentication and role-based access control.",
    image: "https://via.placeholder.com/600x400/1e293b/94a3b8?text=Healthcare+System",
    liveLink: "#",
    githubLink: "https://github.com/PavilionRYZ/healthcare-clinic",
    date: "Jan 2024",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "Fullstack"],
    featured: true,
  },
  {
    title: "Movie Ticket Booking System",
    description:
      "MERN stack movie ticket booking platform with seat selection, show timings, theater management, payment gateway integration, and booking history. Responsive design with real-time seat availability updates.",
    image: "https://via.placeholder.com/600x400/1e293b/94a3b8?text=Movie+Booking",
    liveLink: "#",
    githubLink: "https://github.com/PavilionRYZ/movie-booking",
    date: "Dec 2023",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Fullstack"],
    featured: false,
  },
  {
    title: "ScrollIQ - Voice-to-Text Desktop App",
    description:
      "Cross-platform desktop application built with Tauri and React for real-time voice transcription. Features include voice recognition, text editing, export functionality, and minimal resource usage for efficient performance.",
    image: "https://via.placeholder.com/600x400/1e293b/94a3b8?text=ScrollIQ",
    liveLink: "#",
    githubLink: "https://github.com/PavilionRYZ/ScrollIQ",
    date: "Sep 2024",
    tags: ["React", "Tauri", "Typescript", "Desktop App", "Voice API"],
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured MERN e-commerce application with product catalog, shopping cart, user authentication, order management, payment integration, and admin panel for inventory management. Built with modern UI/UX practices.",
    image: "https://via.placeholder.com/600x400/1e293b/94a3b8?text=E-Commerce",
    liveLink: "#",
    githubLink: "https://github.com/PavilionRYZ/ecommerce",
    date: "Nov 2023",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Stripe", "Material UI", "Fullstack"],
    featured: true,
  },
  {
    title: "Chrome Time Tracking Extension",
    description:
      "Productivity Chrome extension for tracking time spent on websites with detailed analytics, daily reports, goal setting, and website blocking features. Built with vanilla JavaScript and Chrome Extension APIs.",
    image: "https://via.placeholder.com/600x400/1e293b/94a3b8?text=Time+Tracker",
    liveLink: "#",
    githubLink: "https://github.com/PavilionRYZ/time-tracker-extension",
    date: "Oct 2024",
    tags: ["JavaScript", "Chrome Extension", "Frontend"],
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <div className="h-full w-full overflow-y-auto custom-scrollbar relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-4 md:p-6 lg:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
          >
            A showcase of my full-stack development work, from AI-powered applications to production-ready web platforms
          </motion.p>
        </motion.div>

        {/* Featured Projects Section */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-2"
            >
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              Highlighted Work
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Section */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-bold text-white mb-6"
            >
              More Projects
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:border-blue-500/40 transition-all duration-300"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" />
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden aspect-video bg-gray-800">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/600x400/1e293b/94a3b8?text=Project";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-800/70 rounded-full text-xs font-medium text-gray-200 border border-gray-700/50 hover:border-blue-500/50 transition-colors"
            >
              {getTechIcon(tag)}
              <span>{tag}</span>
            </motion.div>
          ))}
          {project.tags.length > 4 && (
            <div className="flex items-center px-2.5 py-1 bg-gray-800/70 rounded-full text-xs font-medium text-gray-400 border border-gray-700/50">
              +{project.tags.length - 4} more
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <div className="flex items-center gap-3">
            {project.liveLink && project.liveLink !== "#" && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IoGlobeOutline className="w-4 h-4" />
                <span className="hidden sm:inline">Live</span>
              </motion.a>
            )}

            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-4 h-4" />
                <span className="hidden sm:inline">Code</span>
              </motion.a>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>{project.date}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
