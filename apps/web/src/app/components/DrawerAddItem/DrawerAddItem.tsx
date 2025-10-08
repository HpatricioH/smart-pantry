'use client'

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '../../lib/utils/drawer'
import { Button } from '../../lib/utils/button'
import { Plus } from 'lucide-react';
import DrawerAddItemForm from './DrawerAddItemForm';
import { useState } from 'react';
interface DrawerAddItemProps {
  footer?: boolean,
  pantryCards?: boolean
  id?: string | number,
  name?: string,
  category?: string | null
  quantity?: number | null
}

export function DrawerAddItem({
  footer,
  pantryCards,
  id,
  name,
  category,
  quantity,
}: DrawerAddItemProps) {
  const [open, setOpen] = useState(false);


  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {!footer && !pantryCards
          ?
          <Button variant="default" className="flex-1">
            <Plus />
            Add Item
          </Button>
          :
          !footer && pantryCards
            ?
            <div className="bg-chart-2 rounded-full p-2 [&_svg]:cursor-pointer [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0">
              <Plus className="stroke-white" />
            </div>
            :
            <button className='flex flex-col items-center cursor-pointer' type='button'>
              <div className='size-11 flex items-center justify-center rounded-[35%] bg-chart-2 text-white mb-1'>
                <Plus className='stroke-3' />
              </div>
              <p className='capitalize'>Add</p>
            </button>
        }
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className='text-2xl font-bold text-gray-900'>
              Add Item
            </DrawerTitle>
            <DrawerDescription>
              Enter the required information to add your item manually.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerAddItemForm
            id={id ?? ""}
            name={name ?? ""}
            category={category ?? ""}
            quantity={quantity ?? 1}
            onClose={() => setOpen(false)}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
