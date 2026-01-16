"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AnimatedLogoBackground() {
    return (
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
            {/* Rotating Logo Layer */}
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 120, // Slow rotation
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="opacity-5 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] relative blur-sm"
            >
                <Image
                    src="/logo_svg.svg"
                    alt="Background Logo"
                    fill
                    className="object-contain"
                />
            </motion.div>

            {/* Floating / Breathing Effect Layer (Optional for more depth) */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.03, 0.05, 0.03]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
            >
                {/* Second layer for depth if needed, currently just one rotating element is clean and "luxury" */}
            </motion.div>
        </div>
    );
}
