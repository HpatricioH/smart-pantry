import { LandingCards } from "../../sections/LandingCards";
import { LandingHero } from "../../sections/LandingHero";


export default function Home() {
  return (
    <main className="min-h-screen gap-16">
      <div className="flex flex-col gap-[16px]">
        <LandingHero />
        <LandingCards />
      </div>
    </main>
  );
}