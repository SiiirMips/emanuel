"use client";

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState } from "react";
import { RELEASES } from "@/lib/config";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50 }
    }
};

export function Discography() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="music" className="py-24 px-4 bg-black text-white relative z-10">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end border-b border-neutral-800 pb-8"
                >
                    <h2 className="text-5xl md:text-8xl font-black font-heading uppercase tracking-tighter">
                        Ausgewählte<br />Werke
                    </h2>
                    <span className="text-neutral-500 mb-2 font-mono text-sm tracking-widest uppercase">Diskografie 2024-2025</span>
                </motion.div>

                {/* Bento Grid Layout */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]"
                >
                    {/* Main Featured Release (Large Card) */}
                    <motion.article
                        variants={item}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/10"
                        whileHover={{ scale: 1.02, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
                        transition={{ duration: 0.3 }}
                    >
                        {!isPlaying ? (
                            <>
                                <img
                                    src={RELEASES.latest.image}
                                    alt={`${RELEASES.latest.title} - Album Cover`}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                <div className="absolute bottom-8 left-8 space-y-2">
                                    <span className="px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full">
                                        {RELEASES.latest.label}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl font-black font-heading uppercase">{RELEASES.latest.title}</h3>
                                </div>

                                <button
                                    onClick={() => setIsPlaying(true)}
                                    aria-label={`Play ${RELEASES.latest.title}`}
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100"
                                >
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-black fill-current ml-1" />
                                    </div>
                                </button>
                            </>
                        ) : (
                            <div className="absolute inset-0 bg-black flex flex-col rounded-xl overflow-hidden">
                                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        scrolling="no"
                                        frameBorder="no"
                                        allow="autoplay"
                                        title={`${RELEASES.latest.title} on SoundCloud`}
                                        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(RELEASES.latest.soundcloudUrl)}&color=%2300d9ff&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                                        className="rounded-xl"
                                    ></iframe>
                                </div>
                                <button
                                    onClick={() => setIsPlaying(false)}
                                    aria-label="Pause music"
                                    className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black rounded-full text-white backdrop-blur-md transition-colors"
                                >
                                    <Pause className="w-6 h-6" />
                                </button>
                            </div>
                        )}
                    </motion.article>

                    {/* Smaller Cards for Upcoming/Other Releases */}
                    {RELEASES.upcoming.map((release, index) => (
                        <motion.article
                            key={index}
                            variants={item}
                            className="relative group overflow-hidden rounded-3xl bg-neutral-900 border border-white/10"
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 1 : -1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                            <img
                                src={release.image}
                                alt={`${release.title} - Coming Soon`}
                                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                            {/* "Coming Soon" Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="px-4 py-2 border border-white/30 rounded-full text-sm font-bold uppercase tracking-widest backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all">
                                    {release.label}
                                </span>
                            </div>

                            <div className="absolute bottom-6 left-6">
                                <h3 className="text-2xl font-bold font-heading uppercase">{release.title}</h3>
                            </div>
                        </motion.article>
                    ))}
                </motion.div >
            </div >
        </section >
    );
}
