"use client";

import Image from "next/image";
import { Badge } from "../../lib/utils/badge";
import { NoPantryItems } from "../NoPantryItems/NoPantryItems";
import { DrawerAddItem } from "../DrawerAddItem/DrawerAddItem";

type PantryItem = {
  id: string | number;
  name: string;
  image: string | null;
  quantity: string | null;
  category: string | null;
  unit: number | null;
};

interface PantryCardsProps {
  pantryItems: PantryItem[];
}

export function PantryCards({ pantryItems }: PantryCardsProps) {
  if (pantryItems.length <= 0) return <NoPantryItems />;

  return (
    <section>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pantryItems?.map((item) => {
          return (
            <article
              key={item.id}
              className="flex flex-col justify-start items-start p-4 shadow-md rounded-lg bg-ring/5 relative"
            >
              {/* Low badge */}
              {item?.unit !== null && item?.unit < 2 && (
                <Badge
                  variant={`${item?.unit === 0 ? "destructive" : "secondary"}`}
                  className={"self-end"}
                >
                  {item?.unit === 0 ? "Buy" : item?.unit < 2 ? "Low" : null}
                </Badge>
              )}

              <div className="w-28 h-28 relative rounded-md self-center z-10">
                {/* TODO: add placeholder image */}
                <Image
                  src={item.image ?? "/placeholder.png"}
                  alt={`${item.name} image`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Quantity Badge */}
              {item?.unit !== null && item?.unit >= 2 && (
                <div className="flex justify-center items-center rounded-full text-text-primary bg-[#e5e6e8] absolute size-7 right-4 font-bold z-50">
                  <p>{item.unit}</p>
                </div>
              )}

              {/* Footer */}
              <div className="flex justify-between items-end w-full mt-2">
                <div className="flex flex-col mb-2">
                  <h3 className="text-md font-semibold place-content-start pl-1">{item.name}</h3>
                </div>
                <DrawerAddItem
                  pantryCards={true}
                  name={item.name}
                  category={item.category}
                  unit={item.unit}
                  id={item.id}
                  quantity={item.quantity}
                />
              </div>
              <Badge className="bg-[#E6F4EE]/60 text-text-secondary capitalize">
                {item.category}
              </Badge>
            </article>
          );
        })}
      </div>
    </section>
  );
}
