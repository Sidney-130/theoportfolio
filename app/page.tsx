"use client";

import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/layout/Projects";
import Experience from "@/components/layout/Experience";
import Communities from "@/components/layout/Communities";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/Contact";
import Home from "@/components/layout/home";
import About from "@/components/layout/about";
import Image from "next/image";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Image */}
      <section id="home" className="pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[calc(100vh-6rem)]">
            {/* Left Column - Content */}
            <div>
              <Home />
            </div>

            {/* Right Column - Image */}
            <div className="">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                  {/* Placeholder for your image */}

                  {/* Uncomment and use this when you add your image */}
                  <Image
                    src="/theoimage.jpg"
                    alt="Web3Theo"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Communities & Certifications */}
      <Communities />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
