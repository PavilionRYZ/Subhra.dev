// Taskbar.jsx
import React, { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { 
    User, 
    Code2, 
    FolderGit2, 
    BookOpen, 
    Mail,
    GraduationCap,
    Search,
    Wifi,
    Volume2,
    Battery
} from 'lucide-react';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';
import Education from './Education';

const Taskbar = ({ openWindow, windows, minimizedWindows, restoreWindow }) => {
    const [startMenuOpen, setStartMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    const sections = [
        { title: 'About', component: <About />, icon: User, color: 'from-blue-500 to-cyan-500' },
        { title: 'Skills', component: <Skills />, icon: Code2, color: 'from-purple-500 to-pink-500' },
        { title: 'Projects', component: <Projects />, icon: FolderGit2, color: 'from-green-500 to-emerald-500' },
        { title: 'Education', component: <Education />, icon: GraduationCap, color: 'from-orange-500 to-red-500' },
        { title: 'Blog', component: <Blog />, icon: BookOpen, color: 'from-yellow-500 to-orange-500' },
        { title: 'Contact', component: <Contact />, icon: Mail, color: 'from-indigo-500 to-purple-500' },
    ];

    const currentTime = new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });

    return (
        <>
            <motion.div 
                className="fixed bottom-0 left-0 right-0 h-14 md:h-12 bg-gray-900/40 backdrop-blur-2xl border-t border-white/10 flex justify-center items-center px-2 md:px-4 z-50 shadow-2xl"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Start Button */}
                <motion.button
                    onClick={() => setStartMenuOpen(!startMenuOpen)}
                    className="mr-1 md:mr-2 p-2 md:p-2.5 rounded-lg hover:bg-white/10 transition-all relative group"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.95 }}
                >
                    <WindowsLogo className="w-5 h-5 md:w-6 md:h-6" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800/95 backdrop-blur-sm text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        Start
                    </div>
                </motion.button>

                {/* Search Button - Hidden on mobile */}
                <motion.button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="hidden md:flex mr-2 p-2.5 rounded-lg hover:bg-white/10 transition-all relative group items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Search className="w-4 h-4 text-gray-300" />
                    <span className="text-xs text-gray-400">Search</span>
                </motion.button>

                {/* Divider */}
                <div className="hidden md:block w-px h-6 bg-white/10 mx-2" />

                {/* App Icons */}
                <div className="flex items-center gap-0.5 md:gap-1 flex-1 justify-center overflow-x-auto max-w-2xl scrollbar-hide">
                    {sections.map((sec) => {
                        const Icon = sec.icon;
                        const isOpen = windows.some(w => w.title === sec.title);
                        const isMinimized = windows.find(w => w.title === sec.title && minimizedWindows.includes(w.id));
                        
                        return (
                            <motion.button
                                key={sec.title}
                                onClick={() => {
                                    if (isMinimized) {
                                        restoreWindow(windows.find(w => w.title === sec.title).id);
                                    } else {
                                        openWindow(sec.title, sec.component);
                                    }
                                }}
                                className={`relative p-2 md:p-2.5 rounded-lg transition-all group ${
                                    isOpen ? 'bg-white/15' : 'hover:bg-white/10'
                                }`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className={`w-6 h-6 md:w-7 md:h-7 rounded-lg bg-gradient-to-br ${sec.color} p-1.5 flex items-center justify-center shadow-lg`}>
                                    <Icon className="w-full h-full text-white" strokeWidth={2.5} />
                                </div>
                                
                                {/* Active indicator */}
                                {isOpen && (
                                    <motion.div
                                        layoutId={`indicator-${sec.title}`}
                                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                    />
                                )}

                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800/95 backdrop-blur-sm text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                                    {sec.title}
                                </div>
                            </motion.button>
                        );
                    })}
                </div>

                {/* System Tray - Hidden on small mobile */}
                <div className="hidden sm:flex items-center gap-2 ml-auto">
                    <motion.button 
                        className="p-2 rounded hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Wifi className="w-4 h-4 text-gray-300" />
                    </motion.button>
                    <motion.button 
                        className="p-2 rounded hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Volume2 className="w-4 h-4 text-gray-300" />
                    </motion.button>
                    <motion.button 
                        className="p-2 rounded hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Battery className="w-4 h-4 text-gray-300" />
                    </motion.button>
                    
                    {/* Date/Time */}
                    <div className="hidden md:flex flex-col items-end text-white text-xs px-2 py-1 rounded hover:bg-white/10 cursor-pointer transition-all">
                        <span className="font-medium">{currentTime}</span>
                        <span className="text-gray-400 text-[10px]">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                </div>
            </motion.div>

            {/* Start Menu */}
            <AnimatePresence>
                {startMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-16 left-1/2 md:left-4 -translate-x-1/2 md:translate-x-0 w-[95vw] max-w-md md:max-w-xl h-[70vh] md:h-[600px] bg-gray-900/95 backdrop-blur-3xl rounded-xl border border-white/10 shadow-2xl overflow-hidden z-40 p-6"
                    >
                        <div className="flex flex-col h-full">
                            <h3 className="text-white font-semibold text-lg mb-4">Pinned Apps</h3>
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-4 overflow-y-auto flex-1">
                                {sections.map((sec) => {
                                    const Icon = sec.icon;
                                    return (
                                        <motion.button
                                            key={sec.title}
                                            onClick={() => {
                                                openWindow(sec.title, sec.component);
                                                setStartMenuOpen(false);
                                            }}
                                            className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 transition-all group"
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sec.color} p-2.5 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                                                <Icon className="w-full h-full text-white" strokeWidth={2} />
                                            </div>
                                            <span className="text-white text-xs text-center">{sec.title}</span>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

// Windows Logo Component
const WindowsLogo = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" fill="white"/>
    </svg>
);

export default Taskbar;
