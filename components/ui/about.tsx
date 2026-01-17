"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="relative min-h-screen py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full md:w-1/2 relative aspect-[3/4] md:aspect-square"
                >
                    <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 z-0" />
                    <div className="absolute inset-0 bg-neutral-800 z-10 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Placeholder for DJ Photo */}
                        <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-white/20 font-heading text-4xl">
                            DJ IMAGE
                        </div>
                    </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full md:w-1/2 space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">
                        Beyond <span className="text-neutral-500">The Mix</span>
                    </h2>

                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                        Manual Duckbass isn't just playing tracks; he's orchestrating energy.
                        From underground raves to digital soundscapes, his style blends
                        raw techno geometry with melodic fluidity.
                    </p>

                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                        "I want the audience to feel the rotation of the earth when the bass drops."
                    </p>

                    <div className="pt-4">
                        <button className="px-8 py-3 border border-white text-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
                            Read Full Bio
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
