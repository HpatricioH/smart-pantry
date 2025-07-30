'use client'

import Image from "next/image";
import { usePantryData } from "../../lib/hooks/usePantryData";
import { PantryCards } from "../PantryCards/PantryCards";

export function LowMissingItemCards() {
  const { data: pantry } = usePantryData()

  const lowItems = pantry?.filter((item) => item.quantity <= 1)
  const lowStockItemsToShow = lowItems?.slice(0, 2)

  return (
    <>
      {
        <PantryCards pantryItems={lowStockItemsToShow ?? []} />
      }
    </>
  )
}