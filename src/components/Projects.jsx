import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaStripe
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiAdobexd, SiAntdesign, SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandRedux } from "react-icons/tb";
import { IoGlobeOutline, IoLogoFirebase } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

// Project data with tech tags, icons, and links
const projects = [
  {
    title: "Gemini AI Chatbot",
    description: "A modern, intelligent chatbot powered by Google's Gemini AI created by using reactjs,tailwindcss,shadcn-ui,Lucide,powered by Gemini 2.5 Flash",
    liveLink: "https://horizonchatbot.netlify.app/",
    githubLink: "https://github.com/PavilionRYZ/Horizon_chat_bot.github.io.git",
    date: "August-6 2025",
    tags: ["ReactJs", "Frontend", "Trae Ai IDE", "Gemini Api", "Tailwindcss"],
    icons: [<FaReact className="w-6 h-6 text-cyan-500" />,
    <SiTailwindcss className="w-6 h-6 text-blue-400" />,
    <BsStars className="w-6 h-6 text-blue-500" />],
  },
  {
    title: "AI-Powered Nutrition Checker",
    description: "A modern web application to analyze recipes and provide a smart, visual nutritional breakdown powered by Gemini 2.5 Flash.",
    liveLink: "https://nutrimind-ai.netlify.app/",
    githubLink: "https://github.com/PavilionRYZ/NutriMind-Ai.github.io.git",
    date: "May 2025",
    tags: ["ReactJs", "GenAi", "Framer Motion","Gemini Api","Cursor Ai IDE"],

    icons: [
      <FaReact className="w-6 h-6 text-cyan-500" />,
      <SiTailwindcss className="w-6 h-6 text-blue-400" />,
      <TbBrandFramerMotion className="w-6 h-6 text-blue-500" />,
      <BsStars className="w-6 h-6 text-blue-500" />
    ]
  },
  {
    title: "AI Twitter Post Generator",
    description: "A modern web application that leverages AI to generate viral tweets instantly.",
    liveLink: "https://tweetgen.netlify.app/",
    githubLink: "https://github.com/PavilionRYZ/Gen_Ai_twitter_post_generator.github.io",
    date: "May 2025",
    tags: ["ReactJs", "GenAi", "Framer Motion"],
    icons: [
      <FaReact className="w-6 h-6 text-cyan-500" />,
      <SiTailwindcss className="w-6 h-6 text-blue-400" />,
      <TbBrandFramerMotion className="w-6 h-6 text-blue-500" />,
      <BsStars className="w-6 h-6 text-blue-500" />
    ]
  },
  {
    title: "RestoMaster",
    description: "Restaurant Management System",
    liveLink: "https://restomasterfrontend.vercel.app/",
    githubLink: "https://github.com/PavilionRYZ/RMS-IN",
    date: "February-28/25 March-9/25",
    tags: ["MERN", "Fullstack", "Grok Ai", "Cursor Ai IDE"],

    icons: [
      <SiMongodb className="w-6 h-6 text-green-500" />,
      <SiExpress className="w-6 h-6 text-gray-400" />,
      <FaReact className="w-6 h-6 text-cyan-500" />,
      <FaNodeJs className="w-6 h-6 text-green-600" />,
      <SiTailwindcss className="w-6 h-6 text-blue-400" />,
      <TbBrandFramerMotion className="w-6 h-6 text-blue-500" />,
      <TbBrandRedux className="w-6 h-6 text-purple-500" />,
      <SiAntdesign className="w-6 h-6 text-blue-400" />,
    ],
  },
  {
    title: "NovaMart",
    description: "E-commerce Platform",
    liveLink: "https://novamart-zeta.vercel.app/",
    githubLink: "https://github.com/PavilionRYZ/NovaMart.github.io",
    date: "june-10/25-june-15/25",


    tags: ["MERN", "Fullstack", "Grok Ai", "Trae Ai IDE"],
    icons: [
      <SiMongodb className="w-6 h-6 text-green-500" />,
      <SiExpress className="w-6 h-6 text-gray-400" />,
      <FaReact className="w-6 h-6 text-cyan-500" />,
      <FaNodeJs className="w-6 h-6 text-green-600" />,
      <SiTailwindcss className="w-6 h-6 text-blue-400" />,
      <TbBrandFramerMotion className="w-6 h-6 text-blue-500" />,
      <TbBrandRedux className="w-6 h-6 text-purple-500" />,
      <SiAntdesign className="w-6 h-6 text-blue-400" />,
      <SiShadcnui className="w-6 h-6 text-gray-400" />,
      <FaStripe className="w-6 h-6 text-purple-500" />,
      <IoLogoFirebase className="w-6 h-6 text-yellow-500" />,
    ],
  },
  {
    title: "Ariyas - Discover Local Artisans",
    description: "MERN stack e-commerce platform",
    // liveLink: "https://ariyas-ecommerce.netlify.app/",
    githubLink: "https://github.com/shubhasarkar53/Ariyas-The-Ecommerce-Project",
    date: "January-May 2024",
    tags: ["MERN", "Fullstack"],
    icons: [
      <SiMongodb className="w-6 h-6 text-green-500" />,
      <SiExpress className="w-6 h-6 text-gray-400" />,
      <FaReact className="w-6 h-6 text-cyan-500" />,
      <FaNodeJs className="w-6 h-6 text-green-600" />,
      <TbBrandRedux className="w-6 h-6 text-purple-500" />,
    ],
  },
  {
    title: "GitHub Readme Generator",
    description: "Generate GitHub READMEs with ease",
    liveLink: "https://readmegeneratorgor-github.netlify.app",
    githubLink: "https://github.com/PavilionRYZ/githubreadmegenerator.io.git",
    date: "April 2025",
    tags: ["ReactJs"],
    icons: [
      <FaReact className="w-6 h-6 text-cyan-500" />,
      <SiTailwindcss className="w-6 h-6 text-blue-400" />,
      <TbBrandFramerMotion className="w-6 h-6 text-blue-500" />,
    ]
  },
  {
    title: "ReactJS Todo List App",
    description: "Create, edit, and organize todos",
    liveLink: "https://reactwebnotejs.netlify.app/",
    date: "",
    tags: ["ReactJS", "Frontend"],
    icons: [<FaReact className="w-6 h-6 text-cyan-500" />],
    githubLink: "https://github.com/PavilionRYZ/webnote.github.io",
  },
  {
    title: "Library Management System UI",
    description: "Designed in Adobe XD",
    liveLink: "https://xd.adobe.com/view/d76fe86e-1644-44f8-aae0-ef21beada59c-823c/?fullscreen",
    date: "December 2023",
    tags: ["UI/UX", "Adobe XD"],
    icons: [<SiAdobexd className="w-6 h-6 text-purple-600" />],
    githubLink: null,
  },
  {
    title: "Fullstack E-Commerce UI Design",
    description: "Designed in Figma",
    liveLink: "https://www.figma.com/design/0L75DYbtPJbkseHmrnjifr/E-commerce?node-id=0-1&t=ODzxEupHm681rFMU-1",
    date: "December 2023",
    tags: ["UI/UX", "Figma"],
    icons: [<FaFigma className="w-6 h-6 text-pink-500" />],
    githubLink: null,
  },
  // Gemini AI Chatbot A modern, intelligent chatbot powered by Google's Gemini AI creatred by using reactjs,taileindcss,chadcn ui,Lucide,powered by Gemini 2.5 Flash


];

// Floating icon animation
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

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

const Projects = ({ darkMode, setDarkMode }) => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
      data-scroll-section
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 0 30 H 20 V 10 H 40 V 50 H 60"
                fill="none"
                stroke="gray"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
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
        Projects
      </motion.h2>

      <div
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        data-scroll
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0, 0, 255, 0.3)" }}
            className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all relative overflow-hidden`}
          >
            {/* Floating Icons */}
            <div className="absolute top-2 right-2 flex gap-2">
              {project.icons.map((icon, idx) => (
                <motion.div
                  key={idx}
                  variants={floatVariants}
                  animate="animate"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>

            {/* Project Content */}
            <h3 className="text-xl font-semibold text-blue-400 font-mono mb-2">{project.title}</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} font-mono mb-4`}>{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-blue-600 text-xs rounded-full font-mono text-white"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col gap-2">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-mono underline"
                >
                  Live Site <IoGlobeOutline className="ml-2 w-4 h-4" />
                </a>
              )}
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-mono underline"
                >
                  GitHub Repo <FaGithub className="ml-2 w-4 h-4" />
                </a>
              ) : (
                project.liveLink && (
                  <p className="text-gray-500 text-sm font-mono">No GitHub repository available</p>
                )
              )}
            </div>

            {project.date && (
              <p className="mt-2 text-gray-500 text-sm font-mono">{project.date}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;