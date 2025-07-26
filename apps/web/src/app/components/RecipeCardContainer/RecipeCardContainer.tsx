'use client'

import React, { Suspense } from 'react'
import { SkeletonCards } from '../SkeletonCards/SkeletonCards'
import { useRecipeData } from '../../lib/hooks/useRecipeData'
import { RecipeCards } from '../RecipeCards/RecipeCards'

export function RecipeCardsContainer() {
  const { recipeData } = useRecipeData({ URL: "/data/recipes.json" })

  return (
    <>
      <Suspense fallback={<SkeletonCards />}>
        <RecipeCards recipeData={recipeData} />
      </Suspense>
    </>
  )
}