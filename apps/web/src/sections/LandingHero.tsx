import Image from "next/image";
import { HeroBackground } from "../app/components/HeroBackground/HeroBackground";
import { Button } from "../app/lib/utils/button";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";

export async function LandingHero({ userId }: { userId?: string }) {

  return (
    <section className="relative overflow-hidden">
      {/* Background Blobs */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 mt-4">
        <div className="flex flex-col gap-4 p-4 sm:p-20 sm:flex-row">
          <div className="relative xl:w-1/3 self-center">
            <Image
              src="https://res.cloudinary.com/dase1w9ff/image/upload/v1755314923/SmartPantry/logo_hero_paocmr.webp"
              alt="Hero Logo for Smart Pantry"
              width={150}
              height={150}
              className="h-auto max-w-screen-md object-cover"
            />
          </div>
          <div className="text-center sm:text-start w-">
            <h1 className="font-bold text-4xl tracking-wide text-text-primary">
              Smarter Way to Manage Your Kitchen
            </h1>
            <p className="text-md text-text-secondary leading-6 pt-4">
              Track your groceries, avoid waste, and discover recipes based on what’s already in your pantry.
            </p>
            {/* CTA */}
            <div className="flex justify-center items-center gap-4 mt-4">
              <SignedOut>
                <SignInButton>
                  <Button>
                    Get Started
                  </Button>
                </SignInButton>
              </SignedOut>
              {
                userId
                &&
                <Link
                  href="/pantry"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none bg-chart-2 text-primary-foreground shadow-xs hover:bg-chart-3/90 h-9 px-4 py-2"
                >
                  Pantry Dashboard
                </Link>
              }
              <Button
                variant="outline"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}