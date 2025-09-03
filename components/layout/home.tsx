import { Button } from "../ui/button";
import AnimatedText from "../animate/animate";
import { BsDiscord, BsTelegram, BsTwitterX } from "react-icons/bs";

export default function HomePage() {
  return (
    <div className="mt-5 flex flex-col gap-5">
      <div className="flex flex-col justify-between gap-5">
        <div className="flex justify-start items-center gap-3">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <BsTwitterX size={24} />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <BsDiscord size={24} />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <BsTelegram size={24} />
          </a>
        </div>
        <div>
          <h2 className="text-green-600 text-lg"> Hello, I&apos;m Theo</h2>
        </div>
        <div>
          {" "}
          <AnimatedText />
        </div>
        <div className="justify-center items-center text-center">
          <p>
            <span className="text-green-800">
              Social Media/Content Manager & Technical writer
            </span>{" "}
            with 2+ years in crypto communications. Experienced in translating
            complex topics like Solana, validators, MEV, and protocol
            infrastructure into clear, engaging content. Grew social channels to
            10k+ followers and drove 150%+ engagement growth through strategic
            content and community-focused campaigns. Skilled in editing across
            voices, running social independently, and thriving in fast-moving,
            async startup environments.
          </p>
        </div>
        <div>
          {" "}
          <Button className="w-full mt-7">View my Resume</Button>
        </div>
        <div className="pt-2 flex justify-between md:justify-center text-center items-center text-xl md:gap-7">
          <div className="space-y-2">
            <p className="font-bold">10k+</p>{" "}
            <p className="text-sm">
              {" "}
              increase in followers for social channels.{" "}
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-bold">150%+</p>
            <p className="text-sm">
              engagement growth through contents and campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
