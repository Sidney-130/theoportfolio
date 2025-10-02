"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SkillSet } from "./Constants";

export function SkillCard({ set }: { set: SkillSet }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={set.id * 100}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${set.gradientFrom} ${set.gradientTo}`}
        style={{
          animation: "shimmer 3s ease-in-out infinite",
        }}
      />

      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{set.title}</h3>
      </div>

      <ul className="space-y-2">
        {set.bullets.map((b, i) => (
          <li
            key={`${set.id}-${i}`}
            className="flex items-center gap-2 text-sm leading-6"
          >
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-zinc-300 ring-2 ring-white" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes shimmer {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
