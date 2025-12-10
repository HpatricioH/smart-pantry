'use client'

import Image from "next/image";
import { Plus } from 'lucide-react';
import { Clock9 } from 'lucide-react';
import { ShoppingBasket } from 'lucide-react';
import { useRecipe } from "../../lib/hooks/useRecipe";
import Link from "next/link";



export function RecipeCards({ query }: { query: string }) {
  const { data: recipes } = useRecipe()
  const filteredRecipes = recipes?.filter((item) => item.title?.toLocaleLowerCase().includes((query ?? "")))

  return (
    <article>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRecipes?.map(item => {

          return (
            <div
              key={item.id}
              className="flex flex-col justify-start items-start shadow-md rounded-lg bg-ring/5 "
            >
              {/* Card Header */}
              <div className="w-full h-40 relative rounded-t-lg overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} image`}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="flex justify-between items-end w-full p-2">
                <div className="flex flex-col w-full">
                  <h3 className="text-md font-bold place-content-start">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock9 className="size-4 stroke-text-secondary" />
                    <p className="font-semibold text-sm mt-1">{item.totalTime}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <ShoppingBasket className="size-4 stroke-text-secondary" />
                    <p className="font-semibold text-sm mt-1">{item.ingredients.length}</p>
                  </div>

                  <Link
                    href={`recipes/${item.id}`}
                    className="flex-1 p-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer bg-primary text-primary-foreground shadow-xs hover:bg-primary/90">
                    <Plus />
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}
