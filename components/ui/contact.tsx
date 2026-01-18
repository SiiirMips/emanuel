"use client";

import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/lib/config";

export function Contact() {
    return (
        <section id="contact" className="relative py-24 bg-black text-white flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-heading font-bold uppercase mb-8"
                >
                    Booking
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto space-y-8"
                >
                    <p className="text-xl text-neutral-400">
                        Available for bookings & collaborations.
                    </p>

                    <a
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="inline-block text-3xl md:text-5xl font-bold hover:text-neutral-300 transition-colors underline decoration-1 underline-offset-8"
                    >
                        {CONTACT_INFO.email}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
