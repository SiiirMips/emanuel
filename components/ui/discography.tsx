"use client";

import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { useState } from "react";
import { RELEASES } from "@/lib/config";
import type { Variants } from "framer-motion";

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

import { usePlayer } from "@/context/player-context";

export function Discography() {
    const { play } = usePlayer();

    const handlePlay = (release: any) => {
        play(release);
    };

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
                        RELEASES
                    </h2>
                    <span className="text-neutral-500 mb-2 font-mono text-sm tracking-widest uppercase">Diskografie</span>
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
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {/* Background Image */}
                        <img
                            src={RELEASES.latest.image}
                            alt={`${RELEASES.latest.title} - Album Cover`}
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-105"
                        />

                        {/* Noise Texture Overlay */}
                        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                            }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                        {/* Subtle Glow on Hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute inset-0 bg-white/5 blur-3xl" />
                        </div>

                        {/* Content Container */}
                        <div className="absolute bottom-8 left-8 right-8 space-y-3 z-10">
                            {/* Label Badge */}
                            <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-lg">
                                {RELEASES.latest.label}
                            </span>

                            {/* Title */}
                            <h3 className="text-4xl md:text-7xl font-black font-heading uppercase tracking-tighter leading-none drop-shadow-2xl text-white">
                                {RELEASES.latest.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-neutral-400 text-sm font-mono tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                Jetzt Anhören →
                            </p>
                        </div>

                        {/* Play Button */}
                        <button
                            onClick={() => handlePlay(RELEASES.latest)}
                            aria-label={`Play ${RELEASES.latest.title}`}
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 cursor-pointer"
                        >
                            <motion.div
                                className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Play className="w-9 h-9 text-black fill-current ml-1" />
                            </motion.div>
                        </button>
                    </motion.article>

                    {/* Smaller Cards for Upcoming/Other Releases */}
                    {RELEASES.upcoming.map((release, index) => (
                        <motion.article
                            key={index}
                            variants={item}
                            className="relative group overflow-hidden rounded-3xl bg-neutral-900 shadow-xl cursor-pointer"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={() => {
                                if (release.published) {
                                    handlePlay(release);
                                }
                            }}
                        >
                            {/* Background Image for smaller cards */}
                            {release.published && (
                                <img
                                    src={release.image}
                                    alt={`${release.title} - Cover`}
                                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-500"
                                />
                            )}

                            {/* Noise Texture */}
                            <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                                }}
                            />

                            {/* Gradient Background */}
                            {release.published && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            )}

                            {!release.published && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <motion.div
                                        className="w-16 h-16 rounded-full border-4 border-white/10 border-t-white/60"
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                    />
                                </div>
                            )}

                            {/* Play Overlay (for published tracks) */}
                            {release.published && (
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                                        <Play className="w-6 h-6 text-white fill-current ml-1" />
                                    </div>
                                </div>
                            )}

                            {/* Title */}
                            <div className="absolute bottom-6 left-6 right-6 z-10">
                                <span className="inline-block mb-2 text-xs font-mono text-neutral-400 uppercase tracking-widest">
                                    {release.label}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black font-heading uppercase tracking-tight leading-none drop-shadow-2xl text-white">
                                    {release.title}
                                </h3>
                            </div>


                        </motion.article>
                    ))}
                </motion.div >
            </div >
        </section >
    );
}
