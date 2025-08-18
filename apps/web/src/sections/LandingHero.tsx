import Image from "next/image";
import { HeroBackground } from "../app/components/HeroBackground/HeroBackground";
import { Button } from "../app/lib/utils/button";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Blobs */}
      <HeroBackground />

      {/* Content */}
      <div className="flex flex-col gap-2 p-4 sm:p-20 sm:flex-row">
        <div className="w-36 h-24 relative self-center sm:flex-11/12">
          <Image
            src="https://res.cloudinary.com/dase1w9ff/image/upload/v1755314923/SmartPantry/logo_hero_paocmr.webp"
            alt="Hero Logo for Smart Pantry"
            fill
            className="object-contain"
          />
        </div>
        <div className="text-center sm:text-start">
          <h1 className="font-bold text-4xl tracking-wide text-text-primary">
            Smarter Way to Manage Your Kitchen
          </h1>
          <p className="text-md text-text-secondary leading-6 pt-4">
            Track your groceries, avoid waste, and discover recipes based on what’s already in your pantry.
          </p>
          {/* CTA */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <Button>
              Get Started
            </Button>
            <Button
              variant="outline"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}