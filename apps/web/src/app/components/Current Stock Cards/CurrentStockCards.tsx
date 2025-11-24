import { Suspense } from "react";
import { PantryCards } from "../PantryCards/PantryCards";
import { SkeletonPantry } from "../SkeletonCards/SkeletonPantry";
import { api } from "apps/web/src/trpc/server";

export async function CurrentStockCards() {
  const pantry = await api.pantry.getAllPantryItems()

  const filterLowItemsOut = pantry?.filter((item) => item.unit != null && item.unit > 1)

  const currentStockItems = filterLowItemsOut
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
          </div>
        }>
          <PantryCards pantryItems={currentStockItems ?? []} />
        </Suspense>
      }
    </>
  )
}