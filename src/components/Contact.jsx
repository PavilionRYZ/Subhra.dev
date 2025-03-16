/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FiLinkedin ,FiGithub} from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-gray-800 to-gray-900">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-center font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center"
      >
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <motion.div whileHover={{ scale: 1.1 }} className="flex items-center space-x-2">
            <Phone className="w-6 h-6 text-blue-400" />
            <p>+91 8597366993</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="flex items-center space-x-2">
            <Mail className="w-6 h-6 text-blue-400" />
            <p>subhrasundarsinha21@gmail.com</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="flex items-center space-x-2">
            <FiGithub  className="w-6 h-6 text-blue-400" />
            <a href="https://github.com/PavilionRYZ" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">PavilionRYZ</a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="flex items-center space-x-2">
            <FiLinkedin className="w-6 h-6 text-blue-400" />
            <a href="https://www.linkedin.com/in/subhra-sundar-sinha-779538181/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Subhra Sundar Sinha</a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;