"use client";

import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { Discography } from "@/components/ui/discography";
import { About } from "@/components/ui/about";
import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black overflow-hidden">
      <Navbar />
      <Hero />
      <Discography />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
