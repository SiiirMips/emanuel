"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Loader({ onLoadingComplete }: { onLoadingComplete: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onLoadingComplete, 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust speed here

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="relative flex flex-col items-center">
                {/* Logo Animation */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, rotate: 360 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="relative w-32 h-32 md:w-48 md:h-48 mb-8"
                >
                    <Image
                        src="/logo.png"
                        alt="Manual Duckbass Logo"
                        fill
                        className="object-contain invert" // Invert if logo is black on transparent, to make it white
                        priority
                    />
                </motion.div>

                {/* Progress Counter */}
                <motion.div
                    className="text-white font-heading text-4xl md:text-6xl font-bold tabular-nums"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    {progress}%
                </motion.div>
            </div>
        </motion.div>
    );
}
