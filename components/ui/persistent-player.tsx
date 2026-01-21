"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Minimize2, Maximize2 } from "lucide-react";
import { usePlayer } from "@/context/player-context";
import { useEffect } from "react";

export function PersistentPlayer() {
    const { activeRelease, isMinimized, isOpen, close, minimize, maximize } = usePlayer();

    // Lock scroll when modal is open and maximized
    useEffect(() => {
        if (isOpen && !isMinimized) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen, isMinimized]);

    if (!activeRelease || !isOpen) return null;

    return (
        <AnimatePresence mode="wait">
            {/* Backdrop - Only visible when maximized */}
            {!isMinimized && (
                <motion.div
                    key="backdrop"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={minimize} // Clicking backdrop minimizes instead of closing to keep music playing
                    className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-pointer"
                />
            )}

            {/* Player Container */}
            <motion.div
                key="player"
                initial={{
                    opacity: 0,
                    scale: 0.95,
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    borderRadius: "1.5rem"
                }}
                animate={
                    isMinimized
                        ? {
                            width: "320px",
                            height: "auto",
                            bottom: "2rem",
                            right: "auto",
                            top: "auto",
                            left: "50%",
                            x: "-50%",
                            y: "0%",
                            scale: 1,
                            borderRadius: "1rem", // Reduced from 2rem
                            position: "fixed",
                            backgroundColor: "rgba(23, 23, 23, 0.6)",
                            backdropFilter: "blur(12px)",
                            opacity: 1
                        } // Minimized styles
                        : {
                            width: "100%",
                            maxWidth: "48rem",
                            height: "auto",
                            top: "50%",
                            left: "50%",
                            x: "-50%",
                            y: "-50%",
                            bottom: "auto",
                            right: "auto",
                            scale: 1,
                            borderRadius: "1.5rem",
                            position: "fixed",
                            backgroundColor: "rgba(23, 23, 23, 1)",
                            backdropFilter: "blur(0px)",
                            opacity: 1
                        } // Maximized styles
                }
                transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                className={`z-[101] border border-white/10 shadow-2xl overflow-hidden`}
            >
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                    }}
                />

                {/* Content Wrapper */}
                <div className="relative flex flex-col h-full">

                    {/* Header */}
                    <div className={`flex items-center justify-between border-b border-white/5 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 ${isMinimized ? 'p-1.5 px-3' : 'p-6 md:p-8'}`}>
                        <div className="flex items-center gap-3 overflow-hidden">
                            {/* Tiny Cover for Minimized */}
                            {isMinimized && (
                                <img src={activeRelease.image} alt="Cover" className="w-8 h-8 rounded-md object-cover flex-shrink-0" />
                            )}

                            <div className="min-w-0">
                                <span className={`text-xs font-mono text-neutral-400 uppercase tracking-widest flex items-center gap-2 ${isMinimized ? 'mb-0' : 'mb-2'}`}>
                                    {!isMinimized && <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />}
                                    {isMinimized ? '' : 'Now Playing'}
                                </span>
                                <h3 className={`font-black font-heading uppercase tracking-tight text-white truncate ${isMinimized ? 'text-sm' : 'text-xl md:text-2xl'}`}>
                                    {activeRelease.title}
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-1">
                            {/* Minimize/Maximize Button */}
                            <button
                                onClick={isMinimized ? maximize : minimize}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors group"
                                title={isMinimized ? "Expand" : "Minimize"}
                            >
                                {isMinimized ? (
                                    <Maximize2 className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                                ) : (
                                    <Minimize2 className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                                )}
                            </button>

                            {/* Close Button */}
                            <button
                                onClick={close}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors group"
                                title="Close Player"
                            >
                                <X className={`text-neutral-400 group-hover:text-white ${isMinimized ? 'w-4 h-4' : 'w-6 h-6'}`} />
                            </button>
                        </div>
                    </div>

                    {/* Iframe Container - Hidden or styled differently based on state if needed, but we keep it mounted to persist audio */}
                    <div className={`relative bg-black/50 transition-all duration-300 ${isMinimized ? 'h-0 opacity-0 overflow-hidden' : 'p-6 md:p-8'}`}>
                        <div className="rounded-xl overflow-hidden shadow-lg border border-white/5 bg-black">
                            <iframe
                                width="100%"
                                height="300"
                                scrolling="no"
                                frameBorder="no"
                                allow="autoplay"
                                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(activeRelease.soundcloudUrl)}&color=%2300d9ff&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                            ></iframe>
                        </div>
                    </div>

                    {/* Simple Audio Controls placeholder for minimized view could go here if we were using a custom player, 
                 but for SoundCloud iframe we effectively just hide the visual part and let it play. 
                 Since user cant control Play/Pause in minimized mode with just a hidden iframe, 
                 we might want to keep a tiny slice of the iframe or just accept it's "background audio".
                 
                 Better UX: When minimized, we don't show custom controls since we can't control the iframe easily without API. 
                 We just let it play. User maximizes to Pause.
             */}

                    {/* Footer - Maximized Only */}
                    {!isMinimized && (
                        <div className="relative p-4 md:p-6 bg-neutral-900 border-t border-white/5 flex justify-center">
                            <a
                                href={activeRelease.soundcloudUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors uppercase tracking-widest font-bold group"
                            >
                                Auf SoundCloud anhören
                                <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    )}

                    {/* Progress Bar (Visual Flair for Minimized) */}
                    {isMinimized && (
                        <div className="h-1 w-full bg-neutral-800">
                            <div className="h-full bg-green-500 animate-[progress_120s_linear_infinite]" style={{ width: '100%' }} />
                        </div>
                    )}
                </div>

            </motion.div>
        </AnimatePresence>
    );
}
