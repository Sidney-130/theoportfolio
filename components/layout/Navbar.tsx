"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          Theo
        </div>
        <div className="hidden md:block"></div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/5"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50">
            <ul className="flex flex-col space-y-4 px-6 py-6 text-lg">
              <li>
                <a href="#home" onClick={() => setMenuOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact Me
                </a>
              </li>
              <li>
                <button
                  className="w-full bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
