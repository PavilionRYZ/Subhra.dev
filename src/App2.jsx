// App.jsx
import React, { useState } from 'react';
import { AnimatePresence,motion } from 'framer-motion';
import Taskbar from './windows_ui/Taskbar.jsx';
import Window from './windows_ui/Window.jsx';
const App = () => {
    const [windows, setWindows] = useState([]);
    const [zIndexMax, setZIndexMax] = useState(10);
    const [minimizedWindows, setMinimizedWindows] = useState([]);

    const openWindow = (title, content) => {
        const existingWindow = windows.find(w => w.title === title);
        if (existingWindow) {
            bringToFront(existingWindow.id);
            return;
        }

        const newWindow = {
            id: Date.now(),
            title,
            content,
            zIndex: zIndexMax + 1,
            position: { x: 50 + windows.length * 30, y: 50 + windows.length * 30 },
            isMinimized: false,
        };
        setWindows([...windows, newWindow]);
        setZIndexMax(newWindow.zIndex);
    };

    const closeWindow = (id) => {
        setWindows(windows.filter((w) => w.id !== id));
        setMinimizedWindows(minimizedWindows.filter(wId => wId !== id));
    };

    const minimizeWindow = (id) => {
        setMinimizedWindows([...minimizedWindows, id]);
    };

    const restoreWindow = (id) => {
        setMinimizedWindows(minimizedWindows.filter(wId => wId !== id));
        bringToFront(id);
    };

    const bringToFront = (id) => {
        const newZ = zIndexMax + 1;
        setZIndexMax(newZ);
        setWindows(windows.map((w) => (w.id === id ? { ...w, zIndex: newZ } : w)));
    };

    return (
        <div
            className="h-screen w-screen overflow-hidden bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2574')",
            }}
        >
            {/* Acrylic overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

            {/* Desktop icons - now hidden on mobile */}
            <div className="absolute top-4 left-4 hidden md:flex flex-col gap-3 z-0">
                <DesktopIcon 
                    icon={<FolderIcon />}
                    label="This PC"
                    onClick={() => {}}
                />
                <DesktopIcon 
                    icon={<DocumentIcon />}
                    label="Documents"
                    onClick={() => {}}
                />
                <DesktopIcon 
                    icon={<ImageIcon />}
                    label="Pictures"
                    onClick={() => {}}
                />
            </div>

            <Taskbar 
                openWindow={openWindow} 
                windows={windows}
                minimizedWindows={minimizedWindows}
                restoreWindow={restoreWindow}
            />

            <AnimatePresence mode="sync">
                {windows.map((win) => (
                    !minimizedWindows.includes(win.id) && (
                        <Window
                            key={win.id}
                            id={win.id}
                            title={win.title}
                            zIndex={win.zIndex}
                            initialPosition={win.position}
                            onClose={closeWindow}
                            onMinimize={minimizeWindow}
                            onClick={() => bringToFront(win.id)}
                        >
                            {win.content}
                        </Window>
                    )
                ))}
            </AnimatePresence>
        </div>
    );
};

// Desktop Icon Component
const DesktopIcon = ({ icon, label, onClick }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all cursor-pointer group w-20"
    >
        <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <span className="text-xs text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] text-center leading-tight">
            {label}
        </span>
    </motion.div>
);

// Icon Components
const FolderIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M3 7C3 5.89543 3.89543 5 5 5H9L11 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" fill="url(#folderGradient)" />
        <defs>
            <linearGradient id="folderGradient" x1="3" y1="5" x2="21" y2="19">
                <stop stopColor="#FDB813" />
                <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
        </defs>
    </svg>
);

const DocumentIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <path d="M7 3C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V9L13 3H7Z" fill="url(#docGradient)" />
        <path d="M13 3V9H19" stroke="#fff" strokeWidth="1" fill="none"/>
        <defs>
            <linearGradient id="docGradient" x1="5" y1="3" x2="19" y2="21">
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#1D4ED8" />
            </linearGradient>
        </defs>
    </svg>
);

const ImageIcon = () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="url(#imageGradient)"/>
        <circle cx="8.5" cy="8.5" r="2" fill="#fff" opacity="0.8"/>
        <path d="M3 15L8 10L12 14L16 10L21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15Z" fill="#fff" opacity="0.6"/>
        <defs>
            <linearGradient id="imageGradient" x1="3" y1="3" x2="21" y2="21">
                <stop stopColor="#EC4899" />
                <stop offset="1" stopColor="#BE185D" />
            </linearGradient>
        </defs>
    </svg>
);

export default App;
