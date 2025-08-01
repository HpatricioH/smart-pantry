import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@smart-pantry/queries"

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
}