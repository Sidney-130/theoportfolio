"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { EXPERIENCES } from "./Constants";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-16 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center pb-9 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              data-aos="fade-right"
              data-aos-delay={index * 150}
              className="bg-white rounded-2xl border border-zinc-200 p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">
                    {exp.company}
                  </h3>
                  <p className="text-green-700 font-medium mt-1">{exp.role}</p>
                </div>
                <span className="text-sm text-zinc-500 font-medium">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                    <p className="leading-relaxed text-sm md:text-base">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-100"
        >
          <h3 className="text-xl font-bold mb-6 text-center md:text-left">
            Key Highlights
          </h3>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <p className="text-sm md:text-base">
                  Managed and scaled social channels to 10k+ followers
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <p className="text-sm md:text-base">
                  Achieved 150%+ growth in engagement through tailored content
                  strategies
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <p className="text-sm md:text-base">
                  Created technical content on Solana, validators, MEV, and
                  protocol infrastructure
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <p className="text-sm md:text-base">
                  Drove 40% increase in community participation through
                  campaigns and AMAs
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <p className="text-sm md:text-base">
                  Expert at translating complex Web3 concepts into clear,
                  engaging content
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <p className="text-sm md:text-base">
                  Operated social channels independently in async, fast-moving
                  environments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
