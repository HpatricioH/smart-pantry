import { useQuery } from "@tanstack/react-query";
import { getRecipes } from "../../../../../../packages/db/src/queries/getRecipes"

export function useRecipe() {
  return useQuery({
    queryKey: ['recipes'],
    queryFn: getRecipes
  })
}