import { useQuery } from "@tanstack/react-query";
import { getPantryItems } from "@smart-pantry/queries"

export function usePantryData() {
  return useQuery({
    queryKey: ['pantry'],
    queryFn: getPantryItems,
  })
}