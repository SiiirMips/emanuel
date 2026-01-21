"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface Release {
    title: string;
    label: string;
    image: string;
    soundcloudUrl: string;
    published?: boolean;
}

interface PlayerContextType {
    activeRelease: Release | null;
    isMinimized: boolean;
    isOpen: boolean;
    play: (release: Release) => void;
    minimize: () => void;
    maximize: () => void;
    close: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
    const [activeRelease, setActiveRelease] = useState<Release | null>(null);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const play = (release: Release) => {
        if (activeRelease?.title === release.title) {
            setIsOpen(true);
            setIsMinimized(false);
            return;
        }
        setActiveRelease(release);
        setIsOpen(true);
        setIsMinimized(false);
    };

    const minimize = () => {
        setIsMinimized(true);
    };

    const maximize = () => {
        setIsMinimized(false);
    };

    const close = () => {
        setIsOpen(false);
        setActiveRelease(null);
        setIsMinimized(false);
    };

    return (
        <PlayerContext.Provider
            value={{
                activeRelease,
                isMinimized,
                isOpen,
                play,
                minimize,
                maximize,
                close,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    const context = useContext(PlayerContext);
    if (context === undefined) {
        throw new Error("usePlayer must be used within a PlayerProvider");
    }
    return context;
}
