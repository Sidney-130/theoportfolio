"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PROJECTS } from "./Constants";

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center pb-9 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
          Selected Projects
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          All projects built on Solana ecosystem, showcasing technical writing,
          content creation, and community engagement.
        </p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 to-emerald-600" />

              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              </div>

              <p className="text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
                <span>{project.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
