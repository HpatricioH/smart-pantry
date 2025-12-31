import { Hero } from "apps/web/src/sections/Hero";
import { CurrentStock } from "apps/web/src/sections/CurrentStock";
import { LowMissingItems } from "apps/web/src/sections/LowMissingItems";
import StatsCards from "apps/web/src/sections/StatsCards";

export default function Home() {
  return (
    <main className="relative z-20 mx-auto w-full max-w-6xl min-h-screen px-4 pb-32 gap-16 sm:px-20 sm:pb-32">
      <div className="flex flex-col gap-[16px]">
        <Hero />
        <StatsCards />
        <CurrentStock />
        <LowMissingItems />
      </div>
    </main>
  );
}