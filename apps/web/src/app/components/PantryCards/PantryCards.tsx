'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "../../lib/utils/badge";

type DataItems = {
  id: string | number;
  name: string;
  image: string;
  quantity: number;
  unit: string;
  expiresInDays: number
  lowStock: false
};

interface PantryCardsProps {
  URL: string
}

export function PantryCards({ URL }: PantryCardsProps) {
  const [itemsData, useItemsData] = useState<DataItems[]>([])

  // TODO: create a custom hook with this useEffect
  useEffect(() => {
    const fetchPantryData = async () => {
      const res = await fetch(URL)
      useItemsData(await res.json());
    }
    fetchPantryData()
  }, [URL])

  return (
    <article>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {itemsData.map(item => {

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
              <h3 className="text-md font-semibold place-content-start">{item.name}</h3>
              <p className="font-bold text-lg mt-1">{item.quantity}</p>
            </div>
          )
        })}
      </div>
    </article>
  )
}