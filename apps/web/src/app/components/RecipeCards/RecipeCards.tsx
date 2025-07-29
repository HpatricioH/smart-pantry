'use client'

import Image from "next/image";
import { Button } from "../../lib/utils/button";
import { Plus } from 'lucide-react';
import { Clock9 } from 'lucide-react';
import { ShoppingBasket } from 'lucide-react';
import { useRecipe } from "../../lib/hooks/useRecipe";


export function RecipeCards() {
  const { data: recipes } = useRecipe()

  return (
    <article>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes?.map(item => {

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

                  <Button variant="default" className="flex-1 p-1">
                    <Plus />
                    View Recipe
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}
