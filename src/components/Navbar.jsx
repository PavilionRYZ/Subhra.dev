import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

// Animation variants
const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const mobileMenuVariants = {
  closed: { opacity: 0, x: "100%" },
  open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 w-full z-20 ${darkMode
        ? "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"
        : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
        } p-4 shadow-lg`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Subhra.dev
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              custom={index}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
            >
              <a
                href={link.href}
                className={`relative text-lg font-mono  ${darkMode ? "text-gray-300" : "text-gray-700"
                  } hover:text-blue-400 transition-colors duration-300 group`}
              >
                {link.label}
                {/* Underline effect */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
          <motion.li
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            custom={navLinks.length}
          >
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-400"
                } transition-colors flex items-center justify-center group`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
              )}
            </button>
          </motion.li>
        </ul>

        {/* Hamburger Button (Mobile) */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="md:hidden p-2 rounded-full focus:outline-none text-black-800 hover:text-blue-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${darkMode ? "text-gray-300" : "text-gray-800"}`} />}
        </motion.button>
      </div>

      {/* Mobile Menu with Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-10 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className={`fixed top-0 right-0 h-screen w-3/4 ${darkMode ? "bg-gray-900" : "bg-gray-200"
                } p-6 shadow-2xl z-20 md:hidden`}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-700 transition-colors text-gray-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="flex flex-col space-y-6 mt-8 text-center">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className={`text-lg font-mono ${darkMode ? "text-gray-300" : "text-gray-800"}  hover:text-blue-400 transition-colors`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setDarkMode(!darkMode);
                      setIsOpen(false);
                    }}
                    className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-400"
                      } transition-colors flex items-center justify-center gap-2 mx-auto`}
                  >
                    {darkMode ? (
                      <Sun className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <Moon className="w-5 h-5 text-blue-400" />
                    )}
                    <span className={`${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                      {darkMode ? "Light Mode" : "Dark Mode"}
                    </span>
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;