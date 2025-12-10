'use client'

import React, { Suspense } from 'react'
import { SkeletonCards } from '../SkeletonCards/SkeletonCards'
import { RecipeCards } from '../RecipeCards/RecipeCards'
import { Button } from '../../lib/utils/button'
import { api } from "apps/web/src/trpc/react";

export function RecipeCardsContainer({ query }: { query: string }) {
  const aiTest = api.recipes.generateFromPantry.useMutation()

  return (
    <>
      <Button
        variant="default"
        onClick={() =>
          aiTest.mutate({
            maxRecipes: 2,
            maxTimeMinutes: 30,
          })
        }
        disabled={aiTest.isPending}
      >
        {aiTest.isPending ? "Generating..." : "Generate recipes from pantry"}
      </Button>
      <Suspense fallback={
        <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <SkeletonCards />
          <SkeletonCards />
          <SkeletonCards />
          <SkeletonCards />
        </div>
      }>
        <RecipeCards query={query} />
      </Suspense>
    </>
  )
}