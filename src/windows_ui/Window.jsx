// Window.jsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Maximize2, Minimize2 } from 'lucide-react';

const Window = ({ id, title, children, initialPosition, onClose, onMinimize, onClick, zIndex }) => {
    const [position, setPosition] = useState(initialPosition);
    const [isMaximized, setIsMaximized] = useState(false);
    const [prevPosition, setPrevPosition] = useState(initialPosition);
    const dragControls = useDragControls();
    const constraintsRef = useRef(null);

    // Responsive dimensions
    const getWindowSize = () => {
        if (typeof window === 'undefined') return { width: 800, height: 600 };
        
        if (window.innerWidth < 768) {
            return { 
                width: window.innerWidth - 20, 
                height: window.innerHeight - 80 
            };
        }
        return { 
            width: Math.min(900, window.innerWidth - 100), 
            height: Math.min(650, window.innerHeight - 100) 
        };
    };

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getWindowSize());
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMaximize = () => {
        if (!isMaximized) {
            setPrevPosition(position);
            setPosition({ x: 0, y: 0 });
        } else {
            setPosition(prevPosition);
        }
        setIsMaximized(!isMaximized);
    };

    const windowStyle = isMaximized
        ? { width: '100vw', height: 'calc(100vh - 48px)', top: 0, left: 0 }
        : { width: windowSize.width, height: windowSize.height, top: position.y, left: position.x };

    return (
        <motion.div
            ref={constraintsRef}
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex }}
        >
            <motion.div
                className="absolute bg-gray-900/95 backdrop-blur-2xl rounded-xl shadow-2xl overflow-hidden flex flex-col border border-white/10 pointer-events-auto"
                style={windowStyle}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                drag={!isMaximized}
                dragControls={dragControls}
                dragMomentum={false}
                dragListener={false}
                dragConstraints={constraintsRef}
                dragElastic={0}
                onDragEnd={(e, { point }) => !isMaximized && setPosition({ x: point.x, y: point.y })}
                onClick={onClick}
                whileHover={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
            >
                {/* Title Bar */}
                <motion.div 
                    className="h-10 md:h-12 bg-gray-800/80 backdrop-blur-sm border-b border-white/5 flex justify-between items-center px-4 cursor-move select-none"
                    onPointerDown={(e) => dragControls.start(e)}
                    onDoubleClick={toggleMaximize}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                        <span className="font-medium text-white text-sm md:text-base">{title}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                        {/* Minimize */}
                        <motion.button 
                            onClick={(e) => {
                                e.stopPropagation();
                                onMinimize(id);
                            }}
                            className="p-2 rounded-md hover:bg-white/10 transition-colors group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Minus className="w-4 h-4 text-gray-300 group-hover:text-white" />
                        </motion.button>
                        
                        {/* Maximize/Restore */}
                        <motion.button 
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleMaximize();
                            }}
                            className="hidden md:block p-2 rounded-md hover:bg-white/10 transition-colors group"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isMaximized ? (
                                <Minimize2 className="w-4 h-4 text-gray-300 group-hover:text-white" />
                            ) : (
                                <Maximize2 className="w-4 h-4 text-gray-300 group-hover:text-white" />
                            )}
                        </motion.button>
                        
                        {/* Close */}
                        <motion.button 
                            onClick={(e) => {
                                e.stopPropagation();
                                onClose(id);
                            }}
                            className="p-2 rounded-md hover:bg-red-500/20 transition-colors group"
                            whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 0.3)' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X className="w-4 h-4 text-gray-300 group-hover:text-red-400" />
                        </motion.button>
                    </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 overflow-auto p-4 md:p-6 text-white custom-scrollbar">
                    {children}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Window;
