import { SKILL_SETS } from "./Constants";
import { SkillCard } from "./SkillCard";

export default function About() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <div>
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            About Me
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quos praesentium iste, facilis velit excepturi fuga in? Expedita,
            architecto. Corrupti ut est dolore nisi expedita explicabo quos ex
            natus sapiente? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Nostrum aliquam possimus ut a esse optio explicabo earum
            facere. Exercitationem repudiandae totam sapiente magni quo magnam
            facere quisquam placeat rem iusto.
          </p>
        </div>
      </div>
      <div>
        <section className="mx-auto max-w-6xl px-4 py-15">
          <h1 className="pb-9 text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
            {SKILL_SETS.map((set) => (
              <SkillCard key={set.id} set={set} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
