import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "../app/lib/utils/button";

export function LandingFooter() {
  return (
    <section className="relative z-20 mx-auto p-6">
      <h2 className="font-bold text-3xl tracking-tight text-text-primary text-center">
        Ready to make your pantry smarter?
      </h2>
      <div className="mt-4 text-center">
        <SignedOut>
          <SignInButton>
            <Button>
              Sign In Now
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </section>
  )
}