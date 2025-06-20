import { CurrentStock } from "../sections/CurrentStock";
import { Hero } from "../sections/Hero";


export default function Home() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[16px] mt-12">
        <Hero />
        <CurrentStock />
      </div>
    </main>
  );
}