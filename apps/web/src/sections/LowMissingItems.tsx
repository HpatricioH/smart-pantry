import { ChevronRight } from "lucide-react";
import { LowMissingItemCards } from "../app/components/Low Missing Item Cards/LowMissingItemCards";

export function LowMissingItems() {
  return (
    <section>
      <div className="flex justify-between items-baseline py-4">
        <h2 className='text-xl font-semibold tracking-tight'>Low / Missing Items</h2>
        <ChevronRight className='self-center text-text-secondary' />
      </div>
      <LowMissingItemCards />
    </section>
  )
}