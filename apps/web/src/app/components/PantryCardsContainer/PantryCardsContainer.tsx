'use client'

import React, { Suspense } from 'react'
import { SkeletonCards } from '../SkeletonCards/SkeletonCards'
import { PantryCards } from '../PantryCards/PantryCards'
import { usePantryData } from '../../lib/hooks/usePantryData'

export function PantryCardsContainer() {
  const { itemsData } = usePantryData({ URL: "/data/mock-pantry.json" })

  return (
    <>
      <Suspense fallback={<SkeletonCards />}>
        <PantryCards pantryData={itemsData} />
      </Suspense>
    </>
  )
}
