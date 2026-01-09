import React from "react";
import CompactItemCard from "../app/components/CompactItemCard/CompactItemCard";
import { api } from "apps/web/src/trpc/server"


export default async function RestockSuggestions() {
  const pantry = await api.pantry.getAllPantryItems()

  const lowItems = pantry?.filter((item) => item.unit != null && item.unit <= 1)
  const lowStockItemsToShow = lowItems
    ?.slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 2)

  return (
    <section className="rounded-2xl border bg-white p-4" aria-labelledby="restock-title">
      <h3 id="restock-title" className="text-base font-semibold">Restock Suggestions</h3>

      {
        lowStockItemsToShow.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <CompactItemCard
                title={item.name}
                category={item.category ?? ""}
                image={item.image ?? ""}
                expire={String(item.expiresInDays ?? 0)}
                actionLabel="restock"
              />
            </React.Fragment>
          )
        })
      }
    </section>
  )
}
