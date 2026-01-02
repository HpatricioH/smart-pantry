import { Hero } from "apps/web/src/sections/Hero";
import { CurrentStock } from "apps/web/src/sections/CurrentStock";
import { LowMissingItems } from "apps/web/src/sections/LowMissingItems";
import StatsCards from "apps/web/src/sections/StatsCards";

export default function Home() {
  return (
    <main className="relative z-20 mx-auto w-full max-w-6xl min-h-screen px-4 pb-32 gap-16  sm:pb-32">
      <div className="flex flex-col gap-[16px]">
        <Hero />
        <StatsCards />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4 items-start">
          {/* LEFT Main section */}
          <section className="min-w-0 space-y-4">
            <div className="rounded-2xl border-white">
              <CurrentStock />
            </div>
            <div className="rounded-2xl border bg-white p-4">
              {/* <LowMissingItems /> */}
              Shopping List
            </div>
          </section>

          {/* Right sidebar */}
          <aside className="space-y-4">
            <div className="rounded-2xl border bg-white p-4">
              Restock Suggestions
            </div>

            <div className="rounded-2xl border bg-[#F5F7FA] p-4">
              expiring soon
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}