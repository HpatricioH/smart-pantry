import { auth } from "@clerk/nextjs/server";
import { HowItWorks } from "../../sections/HowItWorks";
import { LandingCards } from "../../sections/LandingCards";
import { LandingFooter } from "../../sections/LandingFooter";
import { LandingHero } from "../../sections/LandingHero";
import { LandingReviews } from "../../sections/LandingReviews";
import { SvgDesign } from "../components/SvgDesign/SvgDesign";


export default async function Home() {
  const { userId } = await auth()

  return (
    <main className="min-h-screen gap-16">
      <div className="flex flex-col gap-[16px]">
        <LandingHero userId={userId || ""} />
        <div className="relative">
          <SvgDesign />
        </div>
        <LandingCards />
        <HowItWorks />
        <LandingReviews />
        <LandingFooter userId={userId || ""} />
      </div>
    </main>
  );
}