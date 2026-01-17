"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const TRACKS = [
    { title: "Midnight Protocol", duration: "3:42", label: "DuckRecords" },
    { title: "System Override", duration: "4:01", label: "Tech House Logic" },
    { title: "Bass Resonance", duration: "3:20", label: "DeepCut" },
    { title: "Neon Horizon", duration: "5:12", label: "Self Release" },
];

export function Music() {
    return (
        <section id="music" className="relative py-24 bg-black text-white">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex items-end justify-between border-b border-white/10 pb-6"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter">
                        Latest Releases
                    </h2>
                    <span className="hidden md:block text-neutral-500 uppercase tracking-widest text-sm">
                        Listen on Spotify / Soundcloud
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 gap-4">
                    {TRACKS.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative flex items-center justify-between p-6 md:p-8 bg-neutral-900/50 border border-white/5 hover:border-white/20 hover:bg-neutral-900 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

                            <div className="flex items-center gap-6 relative z-10">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 group-hover:bg-white group-hover:border-white transition-colors duration-300">
                                    <Play className="w-4 h-4 fill-white text-white group-hover:fill-black group-hover:text-black ml-1 transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide group-hover:text-white transition-colors">
                                        {track.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500 uppercase tracking-wider">
                                        {track.label}
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10 font-mono text-neutral-500 group-hover:text-white transition-colors">
                                {track.duration}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <a href="#" className="inline-block relative group overflow-hidden px-8 py-3 text-sm uppercase tracking-widest font-bold">
                        <span className="relative z-10">View All Tracks</span>
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-transform duration-300 group-hover:scale-x-100 scale-x-50 origin-left" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
