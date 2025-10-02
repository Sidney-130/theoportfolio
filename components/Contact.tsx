"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsTwitterX, BsTelegram, BsEnvelope, BsLinkedin } from "react-icons/bs";
import { SOCIAL_LINKS } from "./layout/Constants";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section id="contact" className="py-16 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base">
            Looking for a content manager, technical writer, or community
            strategist? Let&apos;s discuss how I can help grow your Web3
            project.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <div data-aos="fade-left" className="space-y-6">
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-md">
              <h3 className="text-xl font-bold text-zinc-900 mb-6 text-start">
                Get In Touch
              </h3>

              <div className="space-y-5 grid grid-cols-1 md:grid-cols-2 items-center">
                {/* LinkedIn */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <BsLinkedin className="text-green-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">LinkedIn</p>
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-900 hover:text-green-600 transition-colors text-sm"
                    >
                      Web3Theo
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <BsEnvelope className="text-green-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Email</p>
                    <a
                      href={`mailto:${SOCIAL_LINKS.email}`}
                      className="text-zinc-900 hover:text-green-600 transition-colors text-sm"
                    >
                      {SOCIAL_LINKS.email}
                    </a>
                  </div>
                </div>

                {/* Twitter */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <BsTwitterX className="text-green-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Twitter (X)</p>
                    <a
                      href={SOCIAL_LINKS.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-900 hover:text-green-600 transition-colors text-sm"
                    >
                      @web3_theo
                    </a>
                  </div>
                </div>

                {/* Telegram */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <BsTelegram className="text-green-600" size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Telegram</p>
                    <a
                      href={SOCIAL_LINKS.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition-colors text-sm"
                    >
                      @web3theo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-6 md:p-8 text-white shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
              <p className="text-green-50 text-sm leading-relaxed mb-5">
                Currently available for freelance projects, full-time roles, and
                consulting work in Web3 content strategy, technical writing, and
                community management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                  Remote
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                  Freelance
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                  Full-time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
