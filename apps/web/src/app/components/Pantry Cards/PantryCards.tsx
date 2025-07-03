'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

type PantryItem = {
  id: string | number;
  name: string;
  image: string;
  quantity: number;
  unit: string;
  expiresInDays: number
  lowStock: false
};

export function PantryCards() {
  const [pantryData, usePantryData] = useState<PantryItem[]>([])

  useEffect(() => {
    const fetchPantryData = async () => {
      const res = await fetch('/data/mock-pantry.json')
      usePantryData(await res.json());
    }
    fetchPantryData()
  }, [])

  return (
    <article>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pantryData.map(item => {

          return (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 shadow-md rounded-lg h-20 bg-pale-orange"
            >
              <div className="flex justify-center items-center gap-3">
                <Image
                  src={item.image}
                  alt={`${item.name} image`}
                  width={55}
                  height={55}
                />
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
              <p className="font-bold text-xl">{item.quantity}</p>
            </div>
          )
        })}
      </div>
    </article>
  )
}