import React from 'react'
import { statsCardsItems } from '../app/lib/data/statsCardsItems'
import { Badge } from '../app/lib/utils/badge';

export default function StatsCards() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols- lg:grid-cols-4 gap-4">
      {statsCardsItems.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className={`flex flex-col justify-start items-start p-4 shadow-md rounded-lg ${item.bgColorLight} relative`}
          >
            <div className='flex gap-2 capitalize'>
              <Icon />
              <div className='flex flex-col gap-1'>
                <p className='font-medium'>{item.name}</p>
                <Badge variant="secondary" className={`${item.bgColor} text-text-secondary`}>Snacks</Badge>
              </div>
            </div>
            <div className={`flex justify-center items-center rounded-full text-text-primary ${item.bgColor} absolute size-7 right-4 font-bold z-50`}>
              <p>4</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
