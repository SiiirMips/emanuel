"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function WaveBackground() {
    const { scrollY } = useScroll();

    // Parallax effects based on scroll
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
    const y3 = useTransform(scrollY, [0, 1000], [0, 300]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        >
            {/* Wave 1: Slow, fluid, barely visible base */}
            <motion.div
                style={{ y: y1 }}
                className="absolute bottom-[-10%] left-0 w-[400%] md:w-[200%] h-[50vh] md:h-[60vh] opacity-[0.03]"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 1440 320" className="w-full h-full text-white fill-current transform scale-y-150">
                    <path d="M0,192L80,186.7C160,181,320,171,480,181.3C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </motion.div>

            {/* Wave 2: Line art style - "Techno Wireframe" vibe */}
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-[10%] left-[-100%] w-[400%] md:w-[200%] h-[40vh] opacity-20"
                animate={{ x: ["0%", "50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 1440 320" className="w-full h-full fill-none stroke-white stroke-[2px]">
                    <path d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,112C840,96,960,96,1080,112C1200,128,1320,160,1380,176L1440,192"></path>
                </svg>
            </motion.div>

            {/* Wave 3: The "Energy" line - Sharp and fast */}
            <motion.div
                style={{ y: y3 }}
                className="absolute bottom-[20%] left-0 w-[400%] md:w-[200%] h-[50vh] opacity-40 mix-blend-overlay"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
                <svg viewBox="0 0 1440 320" className="w-full h-full fill-none stroke-white stroke-[1px]">
                    <path d="M0,256L48,245.3C96,235,192,213,288,181.3C384,149,480,107,576,90.7C672,75,768,85,864,112C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192"></path>
                </svg>
            </motion.div>
        </motion.div>
    );
}
