import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "@smart-pantry/queries"

export function useRecipe() {
  return useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipes,
    suspense: true
  })
}