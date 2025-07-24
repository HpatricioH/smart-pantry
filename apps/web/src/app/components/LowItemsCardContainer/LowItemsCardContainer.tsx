'use client'

import { Suspense } from "react";
import { SkeletonCards } from "../SkeletonCards/SkeletonCards";
import { PantryCards } from "../PantryCards/PantryCards";
import { usePantryData } from "../../lib/hooks/usePantryData";


export function LowItemsCardContainer() {
  const { itemsData } = usePantryData({ URL: "/data/mock-pantry.json" })
  const lowItems = itemsData.filter((item) => item.quantity <= 1)

  return (
    <>
      <Suspense fallback={<SkeletonCards />}>
        <PantryCards pantryData={lowItems} />
      </Suspense>
    </>
  )
}
