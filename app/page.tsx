import About from "@/components/layout/about";
import HomePage from "@/components/layout/home";

export default function Home() {
  return (
    <div className="mt-20 flex flex-col justify-between gap-15 md:gap-30 px-4 md:px-20">
      <HomePage />
      <About />
    </div>
  );
}
