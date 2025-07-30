'use client'

import { Suspense } from "react";
import { usePantryData } from "../../lib/hooks/usePantryData";
import { PantryCards } from "../PantryCards/PantryCards";
import { SkeletonPantry } from "../SkeletonCards/SkeletonPantry";

export function CurrentStockCards() {
  const { data: pantry } = usePantryData()
  const currentStockItems = pantry?.slice(0, 2)

  return (
    <>
      {
        <Suspense fallback={
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <SkeletonPantry />
            <SkeletonPantry />
          </div>
        }>
          <PantryCards pantryItems={currentStockItems ?? []} />
        </Suspense>
      }
    </>
  )
}