import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '../app/lib/utils/select'
import { Menu } from 'lucide-react';
import { api } from "apps/web/src/trpc/server"
import ShoppingListSelect from '../app/components/ShoppingListSelect/ShoppingListSelect';

export default async function ShoppingList() {
  const categoriesData = await api.pantry.getAllPantryItems()

  const lowStockCategories = Array.from(
    new Map(
      categoriesData
        .filter(item => item.unit !== null && item.unit <= 1)
        .map(item => [item.category, item.category])
    ).values()
  )

  return (
    <section>
      <header className='grid grid-flow-col auto-cols-max gap-2 items-center place-content-between'>

        <div className='flex items-center gap-2'>
          <h2 className='font-medium'>Shopping List</h2>
          <p className='text-sm text-text-secondary'>Based on low stock thresholds</p>
        </div>

        <ShoppingListSelect lowStockCategories={lowStockCategories} />
      </header>

    </section>
  )
}
