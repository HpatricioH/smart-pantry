'use client'

import type { Recipe as RecipeType } from "@smart-pantry/types"
import { useRecipe } from "../../lib/hooks/useRecipe"
import Image from "next/image"

export function Recipe({ id }: { id: string }) {
  const { data: recipes } = useRecipe()
  const recipe: RecipeType | undefined = recipes?.find(i => i.id === id)

  console.log(recipe)
  return (
    <article>
      <h2 className="text-4xl font-bold text-gray-900 p-4">{recipe?.title}</h2>
      <div className="w-full h-80 relative overflow-hidden">
        <Image
          src={recipe?.image || ""}
          alt={`${recipe?.title} image`}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p>{recipe?.description}</p>
        <div>
          <p>Cook Time:{recipe?.cookTime}</p>
          <p>Calories: {recipe?.calories}</p>
          <p>Prep Time:{recipe?.prepTime}</p>
          <p>Servings: {recipe?.servings}</p>
          <p>Total Time: {recipe?.totalTime}</p>
          <p>Difficulty: {recipe?.difficulty}</p>
        </div>
        <p>{recipe?.ingredients}</p>
        <p>{recipe?.instructions}</p>
        <p>{recipe?.liked}</p>
      </div>
    </article>
  )
}
