import { CONTACT_INFO, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/config";

export function Footer() {
    return (
        <footer className="py-8 bg-black text-neutral-500 text-center text-sm border-t border-white/5">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col md:items-start gap-2">
                    <span className="uppercase tracking-widest text-xs">&copy; {new Date().getFullYear()} {SITE_CONFIG.name}</span>
                    <span className="text-neutral-400">
                        Programmed with ❤️ by <a href={`mailto:${CONTACT_INFO.developer.email}`} className="hover:text-white transition-colors font-medium text-white">{CONTACT_INFO.developer.name}</a>
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="/impressum" className="hover:text-white transition-colors text-xs uppercase tracking-widest mr-4">
                        Impressum
                    </a>

                    {/* Instagram Icon with Official Gradient */}
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:scale-110 transform duration-200">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#FD5949" />
                                    <stop offset="50%" stopColor="#D6249F" />
                                    <stop offset="100%" stopColor="#285AEB" />
                                </linearGradient>
                            </defs>
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="url(#instagram-gradient)" />
                        </svg>
                    </a>

                    {/* SoundCloud Icon - Simple Monochrome */}
                    <a href={SOCIAL_LINKS.soundcloud} target="_blank" rel="noopener noreferrer" aria-label="Soundcloud" className="hover:scale-110 transform duration-200">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.56 8.87V17h8.76c1.85 0 3.35-1.5 3.35-3.35s-1.5-3.35-3.35-3.35c-.17 0-.34.01-.51.04-.48-2.11-2.37-3.69-4.65-3.69-1.77 0-3.29.97-4.1 2.4v-.18zm-1.4 8.13V9.33c-.03-.05-.05-.09-.08-.14-.18-.29-.38-.56-.6-.81v8.62h.68zm-1.4 0V7.23c-.24-.11-.49-.21-.75-.29v10.06h.75zm-1.4 0V6.7c-.25-.04-.51-.07-.77-.08v10.38h.77zm-1.4 0V6.62c-.26.01-.52.04-.77.08v10.3h.77zm-1.4 0V7.23c-.26.08-.51.18-.75.29V17h.75zm-1.4 0V9.19c-.22.25-.42.52-.6.81-.03.05-.05.09-.08.14V17h.68z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
