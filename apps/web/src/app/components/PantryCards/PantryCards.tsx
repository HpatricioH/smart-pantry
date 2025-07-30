'use client'

import Image from "next/image";
import { Badge } from "../../lib/utils/badge";
import { Plus } from 'lucide-react';


type PantryItem = {
  id: string | number;
  name: string;
  image: string;
  quantity: number;
};

interface PantryCardsProps {
  pantryItems: PantryItem[];
}

export function PantryCards({ pantryItems }: PantryCardsProps) {

  return (
    <article>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pantryItems?.map(item => {

          return (
            <div
              key={item.id}
              className="flex flex-col justify-start items-start p-4 shadow-md rounded-lg bg-ring/5 "
            >
              {item.quantity < 2 && <Badge variant="destructive" className="self-end">Low</Badge>}
              <div className="w-28 h-28 relative rounded-md self-center">
                <Image
                  src={item.image}
                  alt={`${item.name} image`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex justify-between items-end w-full">
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold place-content-start">{item.name}</h3>
                  <p className="font-bold text-lg mt-1">{item.quantity}</p>
                </div>
                <div className="bg-chart-2 rounded-full p-2 [&_svg]:cursor-pointer [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0">
                  <Plus className="stroke-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}