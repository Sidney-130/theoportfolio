"use client";

import { BsTwitterX, BsTelegram, BsDiscord, BsEnvelope } from "react-icons/bs";
import { SOCIAL_LINKS } from "./Constants";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-3">
              Web3Theo
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Content Manager & Technical Writer{" "}
              <br className="hidden md:block" />
              specializing in Web3 communications{" "}
              <br className="hidden md:block" /> and community growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-zinc-400 hover:text-green-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-zinc-400 hover:text-green-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-zinc-400 hover:text-green-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-zinc-400 hover:text-green-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <BsTwitterX size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <BsTelegram size={18} />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <BsEnvelope size={18} />
              </a>
            </div>
            <p className="text-zinc-400 text-sm">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="hover:text-green-400 transition-colors"
              >
                {SOCIAL_LINKS.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Web3Theo.
          </p>
        </div>
      </div>
    </footer>
  );
}
