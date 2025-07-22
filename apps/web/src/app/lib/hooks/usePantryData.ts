import { useEffect, useState } from "react";

type DataItems = {
  id: string | number;
  name: string;
  image: string;
  quantity: number;
  unit: string;
  expiresInDays: number
  lowStock: false
};

export function usePantryData({ URL }: { URL: string }) {
  const [itemsData, useItemsData] = useState<DataItems[]>([]) 

  useEffect(() => {
    const fetchPantryData = async () => {
      try {
        const res = await fetch(URL)
        useItemsData(await res.json());
      } catch (error) {
        console.log(error)
        throw new Error((error as Error).message)
      }
      
    }
    fetchPantryData()
  }, [URL])

  return {itemsData}
}