/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FileText } from "lucide-react";

// Animation variants
const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const iconVariants = {
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
};

const Contact = () => {
 const whatsappLink = "https://wa.me/918597366993?text=Hello%20Subhra";
 const emailLink = "mailto:subhrasundarsinha21@gmail.com?subject=Hello%20Subra&body=I%20saw%20your%20portfolio!";
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 0 25 Q 25 0 50 25" fill="none" stroke="gray" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      </div>

      <motion.div
        variants={contactVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center z-10"
      >
        <h2 className="text-4xl font-bold font-mono mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Get in Touch
        </h2>
        <p className="text-lg font-mono text-gray-300 mb-8 max-w-2xl mx-auto">
          I’m always open to new opportunities, collaborations, or just a chat about tech! Reach out via email, WhatsApp, or check out my work on GitHub.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 mb-8">
          <motion.a
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-300"
          >
            <FaEnvelope className="w-8 h-8 hover:text-white transition-colors" />
          </motion.a>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-300"
          >
            <FaWhatsapp className="w-8 h-8 hover:text-green-400 transition-colors" />
          </motion.a>
          <motion.a
            href="https://github.com/PavilionRYZ"
            target="_blank"
            rel="noopener noreferrer"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-300"
          >
            <FaGithub className="w-8 h-8 hover:text-black transition-colors" />
          </motion.a>
          <motion.a
           href="https://www.linkedin.com/in/subhra-sundar-sinha-779538181/"
          target="_blank" 
          rel="noopener noreferrer" 
          variants={iconVariants}
          whileHover="hover"
          className="text-gray-300"
          >
            <SlSocialLinkedin className="w-8 h-8  hover:text-blue-600 transition-colors" />
          </motion.a>
        </div>

        {/* Resume Download */}
        <motion.a
          href="/Subra_Sundar_Sinha_Resume.pdf"
          download="Subra_Sundar_Sinha_Resume.pdf"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-semibold font-mono hover:bg-blue-600 transition-colors"
        >
          <FileText className="w-5 h-5 text-white" />
          <p className="text-white">Download Resume</p>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;