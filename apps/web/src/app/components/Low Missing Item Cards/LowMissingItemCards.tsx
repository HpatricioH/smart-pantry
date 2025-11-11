import { PantryCards } from "../PantryCards/PantryCards";
import { api } from "apps/web/src/trpc/server";

export async function LowMissingItemCards() {
  const pantry = await api.pantry.getAllPantryItems()

  const lowItems = pantry?.filter((item) => item.unit != null && item.unit <= 1)
  const lowStockItemsToShow = lowItems
    ?.slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 2)

  return (
    <>
      {
        <PantryCards pantryItems={lowStockItemsToShow ?? []} />
      }
    </>
  )
}