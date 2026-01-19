"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const DJ_IMAGES = ["/dj_1.png", "/dj_2.jpg", "/dj_3.jpg", "/dj_4.jpg"];

export function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % DJ_IMAGES.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

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
                        {DJ_IMAGES.map((src, index) => (
                            <motion.div
                                key={src}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={src}
                                    alt={`DJ Manual Duckbass ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </motion.div>
                        ))}
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
                        Ich bin Manual Duckbass. Seit 4 Jahren bringe ich mit House, Tech House und Techno energiegeladene Vibes an die Decks, gespickt mit kreativen Mashups und immer abgestimmt auf die Energie der Tanzfläche. Buchbar für Events, Clubs und Veranstaltungen.
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
