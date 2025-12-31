'use client'

import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from '../../lib/utils/drawer'
import { Button } from '../../lib/utils/button'
import { Plus } from 'lucide-react';
import DrawerAddItemForm from './DrawerAddItemForm';
import { useState } from 'react';
import { useParams } from 'next/navigation';
interface DrawerAddItemProps {
  footer?: boolean,
  navbar?: boolean,
  pantryCards?: boolean,
  id?: string | number,
  name?: string,
  category?: string | null,
  quantity?: string | null,
  unit?: number | null
}

export function DrawerAddItem({
  footer,
  navbar,
  pantryCards,
  id,
  name,
  category,
  quantity,
  unit
}: DrawerAddItemProps) {
  const [open, setOpen] = useState(false);
  const pathName = useParams()
  const decodedParam = decodeURIComponent(pathName.slug as string ?? "")

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {/* TODO: remove the !footer we dont need it anymore */}
        {!footer && !navbar && !pantryCards
          ?
          <Button variant="default" className="flex-1">
            <Plus />
            Add Item
          </Button>
          :
          !footer && !navbar && pantryCards
            ?
            <div className="bg-chart-2 rounded-full p-2 [&_svg]:cursor-pointer [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0">
              <Plus className="stroke-white" />
            </div>
            :
            <Button variant="outline" className='flex-1'>
              <Plus />
              <p>Add Item</p>
            </Button>
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
            category={category ?? decodedParam}
            quantity={quantity ?? ''}
            unit={unit}
            onClose={() => setOpen(false)}
          />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
