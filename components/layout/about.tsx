"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SKILL_SETS } from "./Constants";
import { SkillCard } from "./SkillCard";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div id="about" className="py-16">
      <div className="flex flex-col justify-center items-center text-center pb-12 px-4">
        <div className="max-w-3xl">
          <h1 className="pb-6 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="leading-relaxed text-sm md:text-base">
            I&apos;m a Social Media/Content Manager & Technical Writer with 2+
            years of experience in crypto communications. I specialize in
            translating complex topics like Solana, validators, MEV, and
            protocol infrastructure into clear, engaging content that resonates
            with diverse audiences, from developers to retail users.
          </p>
          <p className="leading-relaxed mt-4 text-sm md:text-base">
            My expertise lies in growing social channels, crafting technical
            documentation, and building vibrant communities. I&apos;ve
            successfully grown accounts to 10k+ followers and achieved 150%+
            engagement growth through strategic content and authentic community
            engagement. I thrive in fast-moving, async startup environments
            where judgment, speed, and clarity matter most.
          </p>
        </div>
      </div>

      <div>
        <section className="bg-zinc-50 py-12 mx-auto max-w-6xl">
          <div className="px-4">
            <h2 className="text-center pb-9 text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
          </div>
          <div className="px-4 grid gap-5 grid-cols-1 md:grid-cols-3">
            {SKILL_SETS.map((set) => (
              <SkillCard key={set.id} set={set} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
