'use client'

import React, { Suspense } from 'react'
import { SkeletonCards } from '../SkeletonCards/SkeletonCards'
import { PantryCards } from '../PantryCards/PantryCards'

export function PantryCardsContainer() {

  return (
    <>
      <Suspense fallback={<SkeletonCards />}>
        <PantryCards />
      </Suspense>
    </>
  )
}
