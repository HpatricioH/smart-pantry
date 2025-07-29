'use client'

import React, { Suspense } from 'react'
import { SkeletonCards } from '../SkeletonCards/SkeletonCards'
import { RecipeCards } from '../RecipeCards/RecipeCards'

export function RecipeCardsContainer() {

  return (
    <>
      <Suspense fallback={<SkeletonCards />}>
        <RecipeCards />
      </Suspense>
    </>
  )
}