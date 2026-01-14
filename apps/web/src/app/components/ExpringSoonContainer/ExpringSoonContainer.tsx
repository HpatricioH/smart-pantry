import { Suspense } from "react";
import { PantryCards } from "../PantryCards/PantryCards";
import { SkeletonPantry } from "../SkeletonCards/SkeletonPantry";
import { api } from "apps/web/src/trpc/server"

export async function ExpiringSoonContainer({ query }: { query: string }) {
  const pantry = await api.pantry.getAllPantryItems()

  // Filter expiring items 
  const expiringItems = pantry?.filter(i => i.expiresInDays !== null && i.expiresInDays <= 2)

  // Filter for search bar 
  const filteredExpiringItems = expiringItems?.filter((item) => {
    return item.name.toLowerCase().includes((query ?? "").toLocaleLowerCase())
  })

  return (
    <>
      <Suspense fallback={
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <SkeletonPantry />
          <SkeletonPantry />
        </div>
      }>
        <PantryCards pantryItems={filteredExpiringItems ?? []} />
      </Suspense>
    </>
  )
}