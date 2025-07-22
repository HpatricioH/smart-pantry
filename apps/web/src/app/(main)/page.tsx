import { CurrentStock } from "../../sections/CurrentStock";
import { Hero } from "../../sections/Hero";
import { LowMissingItems } from "../../sections/LowMissingItems";


export default function Home() {
  return (
    <main className="min-h-screen p-4 pb-32 gap-16 sm:p-20 sm:pb-32">
      <div className="flex flex-col gap-[16px] mt-12">
        <Hero />
        <CurrentStock />
        <LowMissingItems />
      </div>
    </main>
  );
}