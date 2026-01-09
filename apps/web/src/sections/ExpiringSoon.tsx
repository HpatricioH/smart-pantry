import React from "react"
import { api } from "../trpc/server"
import CompactItemCard from "../app/components/CompactItemCard/CompactItemCard"

export default async function ExpiringSoon() {
  const pantry = await api.pantry.getAllPantryItems()

  const expireItems = pantry?.filter((item) => item.expiresInDays != null && item.expiresInDays <= 3)

  const expireItemsToShow = expireItems
    ?.slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 2)

  return (
    <section className="rounded-2xl border bg-[#F5F7FA] p-4" aria-labelledby="expiring-title">
      <h3 id="expiring-title" className="text-base font-semibold">Expiring Soon</h3>

      {
        expireItemsToShow.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <CompactItemCard
                title={item.name}
                category={item.category ?? ""}
                image={item.image ?? ""}
                expire={String(item.expiresInDays ?? 0)}
                actionLabel="expire"
              />
            </React.Fragment>
          )
        })
      }
    </section>
  )
}
