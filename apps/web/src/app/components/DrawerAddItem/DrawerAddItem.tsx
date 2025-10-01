'use client'

import { useState } from 'react'
import { z } from "zod";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '../../lib/utils/drawer'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  name: z.string().min(2, "Please enter at least two characters"),
  category: z.string().min(2, "Please enter at least two characters"),
  id: z.string(),
  quantity: z.string().min(1, "Please enter a quantity"),
});

type FormData = z.infer<typeof formSchema>;

export function DrawerAddItem({
  footer,
  pantryCards,
  id,
  name,
  category,
  quantity,
}: DrawerAddItemProps) {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name ?? "",
      category: category ?? "",
      id: String(id ?? ""),
      quantity: String(quantity ?? 0)
    }
  })

  const qty = Number(watch("quantity") || quantity)


  const onSubmit = async (data: FormData) => {
    console.log(data)
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
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-center justify-center gap-3 p-6">
              <Input
                {...register("name")}
                id='name'
                name='name'
                placeholder='Name'
              />
              <Input
                {...register("category")}
                id='category'
                name='category'
                placeholder='Category'
              />
              <Input
                {...register("id")}
                id='barcode'
                name='barcode'
                placeholder='Barcode e.g.,05536990345'
              />
            </div>

            <div className="flex items-center justify-center border rounded-md bg-muted w-1/3 place-self-center h-9">
              <Minus
                className="border-r-2 stroke-text-primary flex-1 cursor-pointer"
                onClick={() => setValue("quantity", String(Math.max(0, qty - 1)))}
              />
              <Input
                {...register("quantity")}
                className="w-12 text-center bg-transparent outline-none"
              />
              <Plus
                className="border-l-2 stroke-text-primary flex-1 cursor-pointer"
                onClick={() => setValue("quantity", String(qty + 1))}
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
