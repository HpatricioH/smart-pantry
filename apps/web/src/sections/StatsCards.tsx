import React from 'react'
import { statsCardsItems } from '../app/lib/data/statsCardsItems'
import { Badge } from '../app/lib/utils/badge';
import { api } from "apps/web/src/trpc/server"
import { getPantryStats, getStatValueById } from '../app/lib/pantry/stats';

export default async function StatsCards() {
  const pantryItems = await api.pantry.getAllPantryItems()
  const stats = getPantryStats(pantryItems)

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsCardsItems.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.id}
            className={`flex flex-col justify-start items-start p-4 shadow-md rounded-lg ${item.bgColorLight} relative`}
          >

            <header className='flex gap-2 capitalize'>
              <Icon />
              <div className='flex flex-col gap-1'>
                <p className='font-medium'>{item.name}</p>
                <Badge variant="secondary" className={`${item.bgColor} text-text-secondary`}>Snacks</Badge>
              </div>
            </header>

            <div className={`flex justify-center items-center rounded-full text-text-primary ${item.bgColor} absolute size-7 right-4 font-bold z-50`}>
              <p>{getStatValueById(stats, item.id)}</p>
            </div>

          </article>
        )
      })}
    </section>
  )
}
