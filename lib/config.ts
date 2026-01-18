/**
 * Site Configuration
 * Central configuration file for all site constants
 */

export const SITE_CONFIG = {
    name: "Manual Duckbass",
    title: "Manual Duckbass | Tech House DJ",
    description: "Offizieller Webauftritt von DJ Manual Duckbass. Tech House neu definiert. Treibe den Beat. Fühle die Nacht.",
    url: "https://manuelduckbass.com",
    locale: "de_DE",
    keywords: [
        "Manual Duckbass",
        "DJ",
        "Tech House",
        "Producer",
        "Electronic Music",
        "Tech House",
        "DJ Germany",
        "Tech House Producer"
    ],
} as const;

export const CONTACT_INFO = {
    email: "ManualDuckbass@hotmail.com",
    developer: {
        name: "Marvin",
        email: "bloemarv@outlook.com"
    }
} as const;

export const SOCIAL_LINKS = {
    instagram: "https://www.instagram.com/emanuelduckbass?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    soundcloud: "https://soundcloud.com/manualduckbass-267698168/tracks",
} as const;

export const RELEASES = {
    latest: {
        title: "Tech House Set 1",
        label: "Jetzt Verfügbar",
        image: "/tech-house-set-1-cover.svg",
        soundcloudUrl: "https://soundcloud.com/manualduckbass-267698168/manual-duckbass-tech-house-set-1",
    },
    upcoming: [
        {
            title: "Coming Soon",
            label: "Demnächst",
            image: "https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&w=1000",
        },
        {
            title: "Coming Soon",
            label: "Demnächst",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000",
        }
    ]
} as const;

export const MENU_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Music", href: "#music" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
] as const;
