'use client'

import Image from "next/image";
import { Badge } from "../../lib/utils/badge";
import { Plus } from 'lucide-react';
import { NoPantryItems } from "../NoPantryItems/NoPantryItems";
import { DrawerAddItem } from "../DrawerAddItem/DrawerAddItem";


type PantryItem = {
  id: string | number;
  name: string;
  image: string | null;
  quantity: number | null;
};

interface PantryCardsProps {
  pantryItems: PantryItem[];
}

export function PantryCards({ pantryItems }: PantryCardsProps) {

  if (pantryItems.length <= 0) return <NoPantryItems />

  return (
    <article>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pantryItems?.map(item => {

          return (
            <div
              key={item.id}
              className="flex flex-col justify-start items-start p-4 shadow-md rounded-lg bg-ring/5 relative"
            >
              {/* Low badge */}
              {item?.quantity !== null && item?.quantity < 2 && <Badge variant="destructive" className="self-end">Low</Badge>}

              <div className="w-28 h-28 relative rounded-md self-center">
                {/* TODO: add placeholder image */}
                <Image
                  src={item.image ?? "/placeholder.png"}
                  alt={`${item.name} image`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Quantity Badge */}
              {item?.quantity !== null && item?.quantity >= 2 &&
                <div className="flex justify-center items-center rounded-full text-text-primary bg-text-secondary/15 absolute size-7 right-4 font-bold">
                  <p>{item.quantity}</p>
                </div>}

              {/* Footer */}
              <div className="flex justify-between items-end w-full">
                <div className="flex flex-col">
                  <h3 className="text-md font-semibold place-content-start">{item.name}</h3>
                </div>
                <DrawerAddItem pantryCards={true} />
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}