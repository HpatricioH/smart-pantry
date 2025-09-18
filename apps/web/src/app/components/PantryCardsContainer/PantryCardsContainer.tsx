import React, { Suspense } from 'react'
import { PantryCards } from '../PantryCards/PantryCards'
import { SkeletonPantry } from '../SkeletonCards/SkeletonPantry'
import { api } from "apps/web/src/trpc/server"


export async function PantryCardsContainer({ slug }: { slug: string }) {
  const categorizedItems = await api.pantry.getPantryItemByCategory({ category: slug })

  return (
    <>
      <Suspense fallback={
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <SkeletonPantry />
          <SkeletonPantry />
        </div>
      }>
        <PantryCards pantryItems={categorizedItems ?? []} />
      </Suspense>
    </>
  )
}
