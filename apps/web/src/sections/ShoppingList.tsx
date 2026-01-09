import React from 'react'
import { api } from "apps/web/src/trpc/server"
import ShoppingListSelect from '../app/components/ShoppingListSelect/ShoppingListSelect';
import SmartShoppingTaskList from '../app/components/SmartShoppingTaskList/SmartShoppingTaskList';
import ShoppingListCallToAction from '../app/components/ShoppingListCallToAction/ShoppingListCallToAction';

export default async function ShoppingList() {
  const pantryData = await api.pantry.getAllPantryItems()

  const lowStockCategories = Array.from(
    new Map(
      pantryData
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

      <div className="grid grid-col-1 lg:grid-cols-2 gap-4 items-start mt-4">
        <section>
          <SmartShoppingTaskList />
        </section>
        <div>
          <ShoppingListCallToAction />
        </div>
      </div>
    </section>
  )
}
