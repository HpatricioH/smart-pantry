'use client'

import React, { Suspense } from 'react'
import { PantryCards } from '../PantryCards/PantryCards'
import { usePantryData } from '../../lib/hooks/usePantryData'
import { SkeletonPantry } from '../SkeletonCards/SkeletonPantry'

export function PantryCardsContainer({ slug }: { slug: string }) {
  const { data: pantry } = usePantryData()
  const categorizedItems = pantry?.filter((item) => item.category.toLowerCase() === slug)

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
