import { SignedOut, SignInButton } from "@clerk/nextjs";
import { Button } from "../app/lib/utils/button";
import Link from "next/link";

export function LandingFooter({ userId }: { userId?: string }) {
  return (
    <section className="relative z-20 mx-auto p-6">
      <h2 className="font-bold text-3xl tracking-tight text-text-primary text-center">
        Ready to make your pantry smarter?
      </h2>
      <div className="mt-4 text-center">
        <SignedOut>
          <SignInButton>
            <Button>Sign In Now</Button>
          </SignInButton>
        </SignedOut>
        {userId && (
          <Link
            href="/pantry"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all shrink-0 outline-none bg-chart-2 text-primary-foreground shadow-xs hover:bg-chart-3/90 h-9 px-4 py-2"
          >
            Pantry Dashboard
          </Link>
        )}
      </div>
    </section>
  );
}
