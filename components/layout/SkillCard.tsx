import { ChevronDown } from "lucide-react";
import { AnimatedCard } from "../animate/animate";
import { SkillSet } from "./Constants";

export function SkillCard({ set }: { set: SkillSet }) {
  return (
    <AnimatedCard>
      <article className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${set.gradientFrom} ${set.gradientTo}`}
        />

        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900">{set.title}</h3>
        </div>

        <ul className="space-y-2">
          {set.bullets.map((b, i) => (
            <li
              key={`${set.id}-${i}`}
              className="flex items-start gap-2 text-sm leading-6 text-zinc-700"
            >
              <span className="mt-1 inline-block size-1.5 shrink-0 rounded-full bg-zinc-300 ring-2 ring-white" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </AnimatedCard>
  );
}
