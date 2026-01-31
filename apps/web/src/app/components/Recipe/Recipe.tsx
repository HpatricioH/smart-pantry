"use client";

import type { Recipe as RecipeType } from "@smart-pantry/types";
import { useRecipe } from "../../lib/hooks/useRecipe";
import Image from "next/image";
import { CookingPot } from "lucide-react";
import { Carrot } from "lucide-react";
import { Clock } from "lucide-react";
import { Flame } from "lucide-react";
import { Utensils } from "lucide-react";
import { Mountain } from "lucide-react";
import { api } from "apps/web/src/trpc/react";

export function Recipe({ id }: { id: string }) {
  const recipeQuery = api.recipes.getAllRecipes.useQuery();
  const recipe = recipeQuery?.data?.find((item) => item.id === id);

  const {
    title,
    description,
    cookTime,
    prepTime,
    totalTime,
    calories,
    image,
    servings,
    difficulty,
    recipeIngredients = [],
    recipeSteps = [],
  } = recipe || {};

  return (
    <article>
      <h2 className="text-4xl font-bold text-gray-900 p-4">{title}</h2>
      <div className="w-full h-80 relative overflow-hidden">
        <Image
          src={image || ""}
          alt={`${title} image`}
          fill
          className="object-cover z-20"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <p>{description}</p>

        <div className="grid grid-cols-3 py-4 gap-3 place-items-center [&_p]:flex [&_p]:gap-2 [&_svg]:stroke-chart-2">
          <p>
            <CookingPot />
            {cookTime}
          </p>
          <p>
            <Carrot />
            {prepTime}
          </p>
          <p>
            <Clock /> {totalTime}
          </p>
          <p>
            <Flame />
            {calories}
          </p>
          <p>
            <Utensils />
            {servings}
          </p>
          <p>
            <Mountain /> {difficulty}
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          {recipeIngredients?.map((item) => {
            return (
              <li key={item.id} className="text-secondary-foreground">
                {item.name}
              </li>
            );
          })}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          {recipeSteps?.map((item) => {
            return (
              <li key={item.id} className="text-secondary-foreground">
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
