"use client";

import { Menu as MenuIcon } from "lucide-react";
import { FullScreenMenu } from "@/components/ui/menu";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav
                className="fixed top-0 inset-x-0 h-24 z-40 flex items-center justify-between px-8 md:px-12 text-white"
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
            </nav>

            <FullScreenMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}
