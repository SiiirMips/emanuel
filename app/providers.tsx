"use strict";
"use client";

import { SmoothScroll } from "@/components/smooth-scroll";
import { PlayerProvider } from "@/context/player-context";
import { PersistentPlayer } from "@/components/ui/persistent-player";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PlayerProvider>
            <SmoothScroll>
                {children}
            </SmoothScroll>
            <PersistentPlayer />
        </PlayerProvider>
    );
}
