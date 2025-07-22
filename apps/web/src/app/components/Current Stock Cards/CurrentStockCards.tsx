'use client'

import { usePantryData } from "../../lib/hooks/usePantryData";
import { PantryCards } from "../PantryCards/PantryCards";

export function CurrentStockCards() {
  const { itemsData } = usePantryData({ URL: "/data/mock-pantry.json" })

  const currentStockItems = itemsData.slice(0, 4)
  return (
    <>
      {/* Cards */}
      {
        <PantryCards pantryData={currentStockItems} />
      }
    </>
  )
}