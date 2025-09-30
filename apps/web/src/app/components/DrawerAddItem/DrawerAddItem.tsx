'use client'

import { useState } from 'react'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../../lib/utils/drawer'
import { Button } from '../../lib/utils/button'
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { Input } from '../../lib/utils/input';

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
  const [value, setValue] = useState<number>(quantity ?? 0);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = Number(event.target.value);
    if (!Number.isNaN(newValue) && newValue >= 0) {
      setValue(newValue);
    }
  }

  const handleIncrease = () => {
    setValue((prevValue: number) => prevValue + 1)
  }

  const handleDecrease = () => {
    setValue((prevValue: number) => prevValue - 1)
  }

  return (
    <Drawer>
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
            <DrawerTitle className='text-2xl font-bold text-gray-900'>Add Item</DrawerTitle>
            <DrawerDescription>Enter the required information to add your item manually.</DrawerDescription>
          </DrawerHeader>
          <form>
            <div className="flex flex-col items-center justify-center gap-3 p-6">
              <Input id='itemName' name='itemName' placeholder='Name' defaultValue={name ?? ""} />
              <Input id='category' name='category' placeholder='Category' defaultValue={category ?? ""} />
              <Input id='barcode' name='barcode' placeholder='Barcode e.g.,05536990345' defaultValue={id ?? ""} />
            </div>

            <div className="flex items-center justify-center border rounded-md bg-muted w-1/3 place-self-center h-9">
              <Minus
                className="border-r-2 stroke-text-primary flex-1 cursor-pointer"
                onClick={handleDecrease}
              />
              <input
                type="number"
                value={value}
                onChange={handleChange}
                className="w-12 text-center bg-transparent outline-none"
              />
              <Plus
                className="border-l-2 stroke-text-primary flex-1 cursor-pointer"
                onClick={handleIncrease}
              />
            </div>

            <DrawerFooter>
              <Button className="bg-text-primary hover:bg-text-primary/80 text-white px-6">Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline" >Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
