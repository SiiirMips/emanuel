import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Beams from "@/components/Beams";
import { useRef } from "react";
import type { Variants } from "framer-motion";

// Magnetic Button Component for internal use
function MagneticButton({ children, className, ...props }: { children: React.ReactNode; className?: string;[key: string]: any }) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.15);
        y.set((e.clientY - centerY) * 0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            {...props}
        >
            {children}
        </motion.button>
    );
}

const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const charVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { type: "spring", damping: 12, stiffness: 200 }
    }
};

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Wave Background */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <Beams />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <span className="px-4 py-2 border border-white/20 rounded-full text-xs md:text-sm uppercase tracking-[0.4em] backdrop-blur-md text-white/90 hover:bg-white/10 transition-colors cursor-default">
                        Offizielle Website
                    </span>
                </motion.div>

                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                    className="text-6xl md:text-9xl font-black font-heading text-white uppercase tracking-tighter leading-[0.85] perspective-1000"
                >
                    <div className="flex justify-center overflow-hidden">
                        {"MANUEL".split("").map((char, i) => (
                            <motion.span key={i} variants={charVariants} className="inline-block origin-bottom">
                                {char}
                            </motion.span>
                        ))}
                    </div>
                    <div className="flex justify-center overflow-hidden">
                        {"DUCKBASS".split("").map((char, i) => (
                            <motion.span key={i} variants={charVariants} className="text-neutral-500 inline-block origin-bottom">
                                {char}
                            </motion.span>
                        ))}
                    </div>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, delay: 1.5 }}
                    className="text-lg md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
                >
                    TECHNO NEU DEFINIERT.<br />
                    <span className="text-white/60">TREIBE DEN BEAT. FÜHLE DIE NACHT.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2, type: "spring" }}
                    className="flex flex-col md:flex-row gap-6 pt-8 items-center"
                >
                    <MagneticButton className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-lg font-black font-heading uppercase tracking-widest bg-white text-black hover:bg-neutral-200 px-10 h-16 hover:scale-110 transition-transform">
                        Neuer Release
                    </MagneticButton>
                </motion.div>
            </div>

            {/* Footer ticker or scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-12 left-0 w-full flex justify-center z-20 bg-transparent"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 opacity-50 bg-transparent"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-white">Scrollen zum Entdecken</span>
                    <ChevronDown className="w-4 h-4 text-white" />
                </motion.div>
            </motion.div>
        </section>
    );
}
