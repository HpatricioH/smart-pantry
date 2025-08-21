import { HowItWorks } from "../../sections/HowItWorks";
import { LandingCards } from "../../sections/LandingCards";
import { LandingFooter } from "../../sections/LandingFooter";
import { LandingHero } from "../../sections/LandingHero";
import { LandingReviews } from "../../sections/LandingReviews";
import { SvgDesign } from "../components/SvgDesign/SvgDesign";


export default function Home() {
  return (
    <main className="min-h-screen gap-16">
      <div className="flex flex-col gap-[16px]">
        <LandingHero />
        <div className="relative">
          <SvgDesign />
        </div>
        <LandingCards />
        <HowItWorks />
        <LandingReviews />
        <LandingFooter />
      </div>
    </main>
  );
}