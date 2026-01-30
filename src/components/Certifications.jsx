import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Award } from 'lucide-react';

const Certifications = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      id: 1,
      title: 'MERN Stack Developer',
      organization: 'Fynd Academy',
      date: 'December 2024',
      category: 'technical',
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript'],
      credentialUrl: '#',
      badge: '🏅',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      organization: 'Fynd Academy',
      date: 'November 2024',
      category: 'technical',
      skills: ['ES6+', 'Async/Await', 'DOM APIs', 'Closures'],
      credentialUrl: '#',
      badge: '⚡',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 3,
      title: 'React Advanced Patterns',
      organization: 'Fynd Academy',
      date: 'December 2024',
      category: 'technical',
      skills: ['Hooks', 'Context API', 'Redux', 'Performance Optimization'],
      credentialUrl: '#',
      badge: '⚛️',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 4,
      title: 'Web Development Fundamentals',
      organization: 'Fynd Academy',
      date: 'October 2024',
      category: 'technical',
      skills: ['HTML', 'CSS', 'Responsive Design', 'Web Standards'],
      credentialUrl: '#',
      badge: '🎨',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'technical', label: 'Technical' },
    { id: 'professional', label: 'Professional' },
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Certifications
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional credentials and specialized training in full-stack development and modern web technologies.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {filteredCertifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(cert.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              {/* Animated Background Glow */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-gradient-to-r ${cert.color}`}
                style={{ zIndex: -1 }}
              />

              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 h-full">
                {/* Top Section with Badge and Title */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-4xl mb-2">{cert.badge}</div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm mt-1">
                      {cert.organization}
                    </p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{cert.date}</span>
                </div>

                {/* Skills Tags */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-3 py-1 bg-slate-700/80 text-gray-300 text-xs rounded-full border border-slate-600 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* View Credential Button */}
                <motion.a
                  href={cert.credentialUrl}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors duration-300"
                >
                  View Credential
                  <ExternalLink className="w-4 h-4" />
                </motion.a>

                {/* Animated Border on Hover */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={hoveredId === cert.id ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-b-2xl origin-left"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { label: 'Total Certifications', value: certifications.length },
            { label: 'Technologies', value: '12+' },
            { label: 'Skills Earned', value: '40+' },
            { label: 'Active Learning', value: '2024' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 text-center hover:border-cyan-500/50 transition-colors duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                {stat.value}
              </div>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Continuously learning and expanding expertise in emerging technologies.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            View on LinkedIn
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;