/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react"; // Education-related icons

const education = [
  {
    institute: "Tarai Tarapada Adarsha Vidyalaya",
    level: "Secondary (10th)",
    grade: "75%",
    duration: "01/2017 - 04/2018",
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
  },
  {
    institute: "Tarai Tarapada Adarsha Vidyalaya",
    level: "Higher Secondary (Science with PCM and Computer Science)",
    grade: "85%",
    duration: "06/2018 - 04/2020",
    icon: <Award className="w-6 h-6 text-purple-400" />,
  },
  {
    institute: "Maulana Abul Kalam Azad University of Technology",
    level: "B.Tech (Computer Science & Engineering)",
    grade: "8.88 CGPA",
    duration: "08/2020 - 07/2024",
    icon: <GraduationCap className="w-6 h-6 text-green-400" />,
  },
];

// Animation variants for timeline items
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3, ease: "easeOut" },
  }),
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="gray" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-center font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
      >
        Education
      </motion.h2>

      <div className="container mx-auto px-4 relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-purple-400 h-full hidden md:block" />

        <div className="space-y-12 md:space-y-0">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none w-4 h-4 bg-blue-500 rounded-full z-10 md:flex-shrink-0 hidden md:block" />

              {/* Education Card */}
              <div
                className={`bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                } hover:border-blue-500 transition-all`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {edu.icon}
                  <h3 className="text-xl font-semibold text-blue-400 font-mono">{edu.institute}</h3>
                </div>
                <p className="text-gray-300 font-mono">{edu.level}</p>
                <p className="text-gray-400 mt-2">Grade: {edu.grade}</p>
                <p className="text-gray-500">{edu.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;