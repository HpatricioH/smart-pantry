import { Hero } from "apps/web/src/sections/Hero";
import { TestTRPC } from "../../components/TestTRPC";
import { CurrentStock } from "apps/web/src/sections/CurrentStock";
import { LowMissingItems } from "apps/web/src/sections/LowMissingItems";

export default function Home() {
  return (
    <main className="min-h-screen px-4 pb-32 gap-16 sm:p-20 sm:pb-32">
      <div className="flex flex-col gap-[16px]">
        <Hero />
        <CurrentStock />
        <LowMissingItems />
      </div>
    </main>
  );
}