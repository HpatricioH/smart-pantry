'use client'

import type { Recipe as RecipeType } from "@smart-pantry/types"
import { useRecipe } from "../../lib/hooks/useRecipe"
import Image from "next/image"
import { CookingPot } from 'lucide-react';
import { Carrot } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Flame } from 'lucide-react';
import { Utensils } from 'lucide-react';
import { Mountain } from 'lucide-react';
import { api } from "apps/web/src/trpc/react";



export function Recipe({ id }: { id: string }) {
  const { data: recipes } = useRecipe()
  const recipe: RecipeType | undefined = recipes?.find(i => i.id === id)
  const aiTest = api.recipes.generateFromPantry.useMutation()

  return (
    <article>
      <h2 className="text-4xl font-bold text-gray-900 p-4">{recipe?.title}</h2>
      <div className="w-full h-80 relative overflow-hidden">
        <Image
          src={recipe?.image || ''}
          alt={`${recipe?.title} image`}
          fill
          className="object-cover z-20"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <p>{recipe?.description}</p>

        <div className="grid grid-cols-3 py-4 gap-3 place-items-center [&_p]:flex [&_p]:gap-2 [&_svg]:stroke-chart-2">
          <p><CookingPot />{recipe?.cookTime}</p>
          <p><Carrot />{recipe?.prepTime}</p>
          <p><Clock /> {recipe?.totalTime}</p>
          <p><Flame />{recipe?.calories}</p>
          <p><Utensils />{recipe?.servings}</p>
          <p><Mountain /> {recipe?.difficulty}</p>
        </div>

        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          {recipe?.ingredients.map((item) => {
            return (
              <li key={item} className="text-secondary-foreground">{item}</li>
            )
          })}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          {recipe?.instructions.map((item) => {
            return (
              <li key={item} className="text-secondary-foreground">{item}</li>
            )
          })}
        </ul>
        <button
          type="button"
          onClick={() =>
            aiTest.mutate({
              maxRecipes: 2,
              maxTimeMinutes: 30,
            })
          }
          disabled={aiTest.isPending}
        >
          {aiTest.isPending ? "Generating..." : "Generate recipes from pantry"}
        </button>
      </div>
    </article>
  )
}
