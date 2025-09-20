import { Suspense } from "react";
import { PantryCards } from "../PantryCards/PantryCards";
import { SkeletonPantry } from "../SkeletonCards/SkeletonPantry";
import { api } from "apps/web/src/trpc/server"

export async function LowItemsCardContainer({ query }: { query: string }) {
  const pantry = await api.pantry.getAllPantryItems()

  const lowItems = pantry?.filter((item) => item.quantity != null && item.quantity <= 1)

  return (
    <>
      <Suspense fallback={
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <SkeletonPantry />
          <SkeletonPantry />
        </div>
      }>
        <PantryCards pantryItems={lowItems ?? []} />
      </Suspense>
    </>
  )
}
