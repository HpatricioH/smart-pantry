import type { PantryItems } from "packages/types/src"

export function filterBySort ({
    pantry, 
    query, 
    sort, 
    filteredItems
  }: {
    pantry: PantryItems[],
    query: string,
    sort: string,
    filteredItems: PantryItems[]
  }) {
    if (sort === "expiring") {
      return pantry?.filter((item) => 
          (item.expiresInDays !== null) && 
          (item.expiresInDays <= 2) && 
          (item.name.toLowerCase().includes((query ?? "").toLocaleLowerCase())
        ))
    }

    if (sort === "restock") {
      return pantry?.filter((item) => 
        (item.unit != null && item.unit <= 1) && 
        (item.name.toLowerCase().includes((query ?? "").toLocaleLowerCase()))
      )
    }

    if (sort === "needToBuy") {
      return pantry?.filter(item => 
        (item.unit === 0) && 
        (item.name.toLowerCase().includes((query ?? "").toLocaleLowerCase()))
      )
    }

    return filteredItems?.filter((item) => 
      item.name.toLowerCase().includes((query ?? "").toLocaleLowerCase())
  )
  }