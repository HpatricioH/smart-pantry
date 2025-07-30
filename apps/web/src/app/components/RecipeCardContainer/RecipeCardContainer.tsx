'use client'

import React, { Suspense } from 'react'
import { SkeletonCards } from '../SkeletonCards/SkeletonCards'
import { RecipeCards } from '../RecipeCards/RecipeCards'

export function RecipeCardsContainer() {

  return (
    <>
      <Suspense fallback={
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <SkeletonCards />
          <SkeletonCards />
          <SkeletonCards />
          <SkeletonCards />
        </div>
      }>
        <RecipeCards />
      </Suspense>
    </>
  )
}