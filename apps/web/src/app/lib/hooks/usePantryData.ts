import { useQuery } from "@tanstack/react-query";
import { getPantryItems } from "../../../../../../packages/db/src/queries/getPantryItems"

export function usePantryData() {
  return useQuery({
    queryKey: ['pantry'],
    queryFn: getPantryItems,
  })
}