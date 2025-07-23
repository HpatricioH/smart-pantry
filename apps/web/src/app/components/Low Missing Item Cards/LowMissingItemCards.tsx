'use client'

import Image from "next/image";
import { usePantryData } from "../../lib/hooks/usePantryData";
import { PantryCards } from "../PantryCards/PantryCards";

export function LowMissingItemCards() {
  const { itemsData } = usePantryData({ URL: "/data/mock-pantry.json" })
  const lowItems = itemsData.filter((item) => item.quantity <= 1)
  const lowStockItemsToShow = lowItems.slice(0, 2)

  console.log(lowStockItemsToShow)

  return (
    <>
      {
        <PantryCards pantryData={lowStockItemsToShow} />
      }
    </>
  )
}