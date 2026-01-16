"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu as MenuIcon } from "lucide-react";
import { FullScreenMenu } from "@/components/ui/menu";
import Link from "next/link";

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.nav
                variants={{
                    visible: { opacity: 1 },
                    hidden: { opacity: 0, pointerEvents: 'none' },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 inset-x-0 h-24 z-40 flex items-center justify-between px-8 md:px-12 text-white pointer-events-none bg-black"
            >
                {/* Logo */}
                <Link href="/" className="relative w-12 h-12 md:w-16 md:h-16 z-50 pointer-events-auto">
                    <img
                        src="/logo_svg.svg"
                        alt="Manuel Duckbass"
                        className="w-full h-full object-contain"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                </Link>
                {/* Hamburger Trigger */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="pointer-events-auto flex items-center gap-2 group"
                >
                    <span className="hidden md:block uppercase text-xs tracking-[0.3em] font-heading font-black group-hover:text-neutral-300 transition-colors">Menu</span>
                    <MenuIcon className="w-8 h-8 group-hover:text-neutral-300 transition-colors" />
                </button>
            </motion.nav>

            <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}
