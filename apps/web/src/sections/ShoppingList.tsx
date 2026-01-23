'use client'

import ShoppingListSelect from '../app/components/ShoppingListSelect/ShoppingListSelect';
import SmartShoppingTaskList from '../app/components/SmartShoppingTaskList/SmartShoppingTaskList';
import ShoppingListCallToAction from '../app/components/ShoppingListCallToAction/ShoppingListCallToAction';
import { api } from '../trpc/react';
import { SkeletonShoppingCard } from '../app/components/SkeletonCards/SkeletonShoppingCard';


export default function ShoppingList() {
  const pantryQuery = api.shoppingList.getAllShoppingListItems.useQuery();
  const pantryData = pantryQuery.data || [];
  const showSkeleton = pantryQuery.isLoading;

  return (
    <section>
      <header className='grid grid-flow-col auto-cols-max gap-2 items-center place-content-between'>

        <div className='flex items-center gap-2'>
          <h2 className='font-medium'>Shopping List</h2>
          <p className='text-sm text-text-secondary'>Based on low stock thresholds</p>
        </div>

        <ShoppingListSelect lowStockCategories={pantryData} />
      </header>

      <div className="grid grid-col-1 lg:grid-cols-2 gap-4 items-start mt-4">
        <section>
          {showSkeleton ? (
            <SkeletonShoppingCard />
          ) : (
            <SmartShoppingTaskList pantryData={pantryData} />
          )
          }
        </section>
        <div>
          <ShoppingListCallToAction pantryData={pantryData} />
        </div>
      </div>
    </section>
  )
}
