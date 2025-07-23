import { ChevronRight } from "lucide-react";
import { LowMissingItemCards } from "../app/components/Low Missing Item Cards/LowMissingItemCards";
import Link from "next/link";

export function LowMissingItems() {
  return (
    <section>
      <div className="flex justify-between items-baseline py-4">
        <h2 className='text-xl font-semibold tracking-tight'>Low / Missing Items</h2>
        <Link
          href={"pantry/low-items"}
        >
          <ChevronRight className='self-center text-text-secondary hover:stroke-chart-2' />
        </Link>
      </div>
      <LowMissingItemCards />
    </section>
  )
}