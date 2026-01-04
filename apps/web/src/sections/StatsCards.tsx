import React from 'react'
import { statsCardsItems } from '../app/lib/data/statsCardsItems'
import { Badge } from '../app/lib/utils/badge';
import { api } from "apps/web/src/trpc/server"

export default async function StatsCards() {
  const pantryItems = await api.pantry.getAllPantryItems()

  const itemsCounter = (id: string) => {
    const totalItems = pantryItems.length
    const lowStock = pantryItems.filter(item => item.unit === 1).length
    const expiringSoon = pantryItems.filter(item => item.expiresInDays !== null && item.expiresInDays <= 2).length
    const needToBuy = pantryItems.filter(item => item.unit === 0).length

    switch (id) {
      case '1':
        return totalItems
      case '2':
        return lowStock
      case '3':
        return expiringSoon
      case '4':
        return needToBuy
      default:
        return 0
    }
  }

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
              <p>{itemsCounter(item.id)}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}
