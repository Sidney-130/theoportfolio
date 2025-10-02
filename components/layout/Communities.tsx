"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { COMMUNITIES, CERTIFICATIONS } from "./Constants";

export default function Communities() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
          {/* Communities */}
          <div data-aos="fade-right">
            <h2 className="pb-6 text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Community Involvement
            </h2>
            <p className="mb-6 text-sm md:text-base">
              Active member and contributor across leading Web3 and Solana
              ecosystem communities.
            </p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {COMMUNITIES.map((community, index) => (
                <div
                  key={community.id}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-green-300 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-green-500 shrink-0"></span>
                    <p className="font-medium text-sm">{community.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div data-aos="fade-left">
            <h2 className="pb-6 text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="mb-6 text-sm md:text-base">
              Professional credentials and continued learning in community
              management and Web3.
            </p>
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={cert.id}
                data-aos="flip-up"
                data-aos-delay={index * 100}
                className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 flex-col sm:flex-row">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                    <p className="text-green-700 font-medium text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="inline-block px-4 py-2 bg-white border border-green-200 rounded-lg text-green-700 font-semibold text-sm">
                    {cert.year}
                  </span>
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 bg-white border border-zinc-200 rounded-xl p-6 shadow-sm"
            >
              <h4 className="font-semibold mb-3">Continuous Learning</h4>
              <p className="text-sm leading-relaxed">
                Committed to staying at the forefront of Web3 communications,
                technical writing, and community management through ongoing
                education and hands-on experience in the rapidly evolving
                blockchain ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
