import { Suspense } from "react";
import { PantryCards } from "../PantryCards/PantryCards";
import { SkeletonPantry } from "../SkeletonCards/SkeletonPantry";
import { api } from "apps/web/src/trpc/server";

export async function CurrentStockCards({ query }: { query: string }) {
  const pantry = await api.pantry.getAllPantryItems()

  const filterLowItemsOut = pantry?.filter((item) => item.unit != null && item.unit > 1)

  const filteredCurrentStockItems = filterLowItemsOut?.filter((item) => {
    return item.name.toLowerCase().includes((query ?? "").toLocaleLowerCase())
  })

  const currentStockItems = filteredCurrentStockItems
    ?.slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)

  return (
    <>
      {
        <Suspense fallback={
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <SkeletonPantry />
            <SkeletonPantry />
            <SkeletonPantry />
          </div>
        }>
          <PantryCards pantryItems={currentStockItems ?? []} />
        </Suspense>
      }
    </>
  )
}