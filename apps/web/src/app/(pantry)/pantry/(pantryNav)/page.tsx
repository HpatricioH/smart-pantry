import { Hero } from "apps/web/src/sections/Hero";
import { CurrentStock } from "apps/web/src/sections/CurrentStock";
import { LowMissingItems } from "apps/web/src/sections/LowMissingItems";
import StatsCards from "apps/web/src/sections/StatsCards";
import ShoppingList from "apps/web/src/sections/ShoppingList";

export default function Home() {
  return (
    <main className="relative z-20 mx-auto w-full max-w-6xl min-h-screen px-4 pb-32">
      <div className="flex flex-col gap-4">
        <Hero />
        <StatsCards />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4 items-start">
          <section aria-labelledby="pantry-main" className="min-w-0 space-y-4">
            <h2 id="pantry-main" className="sr-only">Pantry overview</h2>

            <CurrentStock />

            <div className="rounded-2xl border bg-white p-4">
              <ShoppingList />
            </div>
          </section>

          <aside aria-labelledby="pantry-sidebar" className="space-y-4">
            <h2 id="pantry-sidebar" className="sr-only">Pantry sidebar</h2>

            <section className="rounded-2xl border bg-white p-4" aria-labelledby="restock-title">
              <h3 id="restock-title" className="text-base font-semibold">Restock Suggestions</h3>
            </section>

            <section className="rounded-2xl border bg-[#F5F7FA] p-4" aria-labelledby="expiring-title">
              <h3 id="expiring-title" className="text-base font-semibold">Expiring Soon</h3>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}