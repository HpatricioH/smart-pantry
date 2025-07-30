'use client'

import React, { Suspense } from 'react'
import { PantryCards } from '../PantryCards/PantryCards'
import { usePantryData } from '../../lib/hooks/usePantryData'
import { SkeletonPantry } from '../SkeletonCards/SkeletonPantry'

export function PantryCardsContainer() {
  const { data: pantry } = usePantryData()


  return (
    <>
      <Suspense fallback={
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <SkeletonPantry />
          <SkeletonPantry />
        </div>
      }>
        <PantryCards pantryItems={pantry ?? []} />

      </Suspense>
    </>
  )
}
