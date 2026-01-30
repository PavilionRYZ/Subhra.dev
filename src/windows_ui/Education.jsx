// components/Education.jsx
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const education = [
  {
    institute: "Maulana Abul Kalam Azad University of Technology",
    location: "West Bengal, India",
    level: "B.Tech in Computer Science & Engineering",
    grade: "8.88 CGPA",
    duration: "Aug 2020 - Jul 2024",
    icon: "🎓",
    color: "from-blue-500 to-cyan-500",
    achievements: [
      "Specialized in Full-Stack Web Development",
      "Completed MERN Stack Certification from Fynd Academy",
      "Built multiple production-grade projects"
    ]
  },
  {
    institute: "Tarai Tarapada Adarsha Vidyalaya",
    location: "West Bengal, India",
    level: "Higher Secondary (Class 12th) - Science with PCM & Computer Science",
    grade: "85%",
    duration: "Jun 2018 - Apr 2020",
    icon: "📚",
    color: "from-purple-500 to-pink-500",
    achievements: [
      "Science stream with Computer Science",
      "Strong foundation in Mathematics and Programming"
    ]
  },
  {
    institute: "Tarai Tarapada Adarsha Vidyalaya",
    location: "West Bengal, India",
    level: "Secondary (Class 10th)",
    grade: "75%",
    duration: "Jan 2017 - Apr 2018",
    icon: "📖",
    color: "from-green-500 to-emerald-500",
    achievements: [
      "Completed secondary education with good academic performance"
    ]
  },
];

const Education = () => {
  return (
    <div className="relative h-full w-full overflow-y-auto custom-scrollbar">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 px-4 py-6 md:px-8 md:py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            Educational Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto"
          >
            My academic path from school to becoming a Computer Science graduate
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

          {/* Education Cards */}
          <div className="space-y-8 md:space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center gap-4 md:gap-8`}
              >
                {/* Timeline Dot - Desktop Only */}
                <motion.div
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${edu.color} p-0.5 shadow-lg`}>
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-2xl">
                      {edu.icon}
                    </div>
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 md:p-6 shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all">
                    {/* Icon Badge - Mobile Only */}
                    <div className="md:hidden flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-xl shadow-lg`}>
                        {edu.icon}
                      </div>
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${edu.color} text-white text-xs font-semibold`}>
                        {edu.duration.split(' - ')[1]}
                      </div>
                    </div>

                    {/* Duration Badge - Desktop */}
                    <motion.div
                      className={`hidden md:inline-block mb-3 px-4 py-1.5 rounded-full bg-gradient-to-r ${edu.color} text-white text-sm font-semibold shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="inline w-4 h-4 mr-1" />
                      {edu.duration}
                    </motion.div>

                    {/* Institute Name */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-start md:items-center gap-2 flex-col md:flex-row">
                      <GraduationCap className={`w-5 h-5 text-blue-400 flex-shrink-0 ${index % 2 === 0 ? 'md:order-2' : ''}`} />
                      <span className="leading-tight">{edu.institute}</span>
                    </h3>

                    {/* Location */}
                    <p className="text-gray-400 text-sm mb-2 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </p>

                    {/* Level */}
                    <p className="text-purple-300 font-medium text-sm md:text-base mb-2">
                      {edu.level}
                    </p>

                    {/* Grade */}
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-300 font-semibold text-lg">
                        {edu.grade}
                      </span>
                    </div>

                    {/* Achievements */}
                    {edu.achievements && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        className="mt-4 pt-4 border-t border-gray-700/50"
                      >
                        <ul className="space-y-2 text-sm text-gray-300">
                          {edu.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
                              className="flex items-start gap-2"
                            >
                              <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {/* Duration - Mobile Only */}
                    <div className="md:hidden mt-4 flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {edu.duration}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-2rem)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
