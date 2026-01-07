'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from '../../../app/lib/utils/select'
import { Menu } from 'lucide-react';

interface ShoppingListSelectProps {
  lowStockCategories: (string | null)[]
}

export default function ShoppingListSelect({ lowStockCategories }: ShoppingListSelectProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <Select onValueChange={setSelectedCategory}>
      <SelectTrigger className="[&_.select-chevron]:hidden">
        <Menu />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {lowStockCategories?.map((category: string | null) => (
            <SelectItem
              key={category}
              className='capitalize'
              value={category || ""}
            >
              {category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
