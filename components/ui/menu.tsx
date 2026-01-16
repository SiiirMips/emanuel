"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { MENU_ITEMS, SOCIAL_LINKS } from "@/lib/config";

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}


export function FullScreenMenu({ isOpen, onClose }: MenuProps) {
    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                    >
                        <X size={40} />
                    </button>

                    <nav className="flex flex-col items-center space-y-8" aria-label="Main navigation">
                        {MENU_ITEMS.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="text-5xl md:text-7xl font-heading font-black text-white hover:text-neutral-500 transition-colors uppercase tracking-tighter"
                                >
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute bottom-12 flex space-x-6 text-neutral-500 uppercase tracking-widest text-sm"
                    >
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">SoundCloud</a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
