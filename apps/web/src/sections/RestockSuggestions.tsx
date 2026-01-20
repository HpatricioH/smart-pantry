import React from "react";
import CompactItemCard from "../app/components/CompactItemCard/CompactItemCard";
import { api } from "apps/web/src/trpc/server"
import Link from "next/link";
import { ChevronRight } from 'lucide-react';


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
      <Link
        href="/pantry/low-items"
        className="flex justify-center items-center mt-4 text-primary text-sm font-medium gap-1 hover:underline"
      >
        View List <ChevronRight className="w-4 h-4" />
      </Link>
    </section>
  )
}
