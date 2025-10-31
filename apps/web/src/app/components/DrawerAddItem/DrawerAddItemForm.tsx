/**
 * DrawerAddItemForm Component
 *
 * A form component for adding/updating pantry items via a drawer interface.
 * Supports barcode scanning input, category selection, and quantity adjustment.
 * Handles both new item creation and existing item updates.
 *
 * Features:
 * - Real-time form validation using Zod schema
 * - Dynamic category loading from backend
 * - Interactive quantity controls (+/- buttons)
 * - Loading states and error handling
 * - Auto-refresh after successful submission
 *
 * @param {DrawerAddItemFormProps} props - Component properties
 * @returns {JSX.Element} Form component with validation and submission handling
 */
"use client"

import { DrawerClose, DrawerFooter } from '../../lib/utils/drawer'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../lib/utils/select'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Minus } from 'lucide-react';
import { Loader2 } from "lucide-react";
import { Input } from '../../lib/utils/input';
import { api } from "../../../trpc/react"
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from '../../lib/utils/button'
import { Plus } from 'lucide-react';
import { formSchema } from "../../lib/types/onSubmitFormSchema";
import { onSubmit } from "../../lib/utils/onSubmit";

interface DrawerAddItemFormProps {
  id: string | number,
  name: string,
  category: string | null
  quantity: number | null
  onClose: () => void
}

export default function DrawerAddItemForm({
  id,
  name,
  category,
  quantity,
  onClose,
}: DrawerAddItemFormProps
) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const listOfCategories = api.categories.getAllCategories.useQuery()
  const categoriesName = listOfCategories.data?.filter((category) => {
    return category.name
  })

  // tRPC mutation for updating pantry items (handles both new and existing items)
  const saveMoreItems = api.pantry.upsertPantryItem.useMutation()

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
      quantity: typeof quantity === 'number' ? quantity : 1 // Safe number conversion with fallback
    }
  })

  // Watch quantity field for real-time updates in +/- controls
  // Safely handle quantity with proper number conversion and fallbacks
  const watchedQuantity = watch("quantity");

  const qty = typeof watchedQuantity === 'number' && !Number.isNaN(watchedQuantity)
    ? watchedQuantity
    : typeof quantity === 'number' && !Number.isNaN(quantity)
      ? quantity
      : 1;

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data, { setLoading, toast, onClose, reset, router, saveMoreItems }))}>
      <div className="flex flex-col items-center justify-center gap-3 p-6">
        <Input
          {...register("name")}
          id='name'
          name='name'
          placeholder='Name'
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-sm text-destructive ">
            {errors.name.message}
          </p>
        )}

        <Select
          value={watch("category")}
          onValueChange={(val) => setValue("category", val)}
        >
          <SelectTrigger className="w-full" aria-invalid={!!errors.category}>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              {categoriesName?.map((ctg) => {
                return (
                  <SelectItem
                    value={ctg.name.toLowerCase()}
                    key={ctg.id}
                  >
                    {ctg.name}
                  </SelectItem>
                )
              })
              }
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="text-sm text-destructive ">
            {errors.category.message}
          </p>
        )}

        <Input
          {...register("id")}
          id='barcode'
          placeholder='Barcode e.g.,05536990345'
          aria-invalid={!!errors.id}
        />
        {errors.id && (
          <p className="text-sm text-destructive ">
            {errors.id.message}
          </p>
        )}
      </div>

      {/* Interactive Quantity Control Component */}
      <div className="flex items-center justify-center border rounded-md bg-muted w-1/3 place-self-center h-9">
        <Minus
          className="border-r-2 stroke-text-primary flex-1 cursor-pointer"
          onClick={() => setValue("quantity", Number(Math.max(0, qty - 1)))} // Prevent negative quantities
        />
        <Input
          {...register("quantity", { valueAsNumber: true })}
          className="w-12 text-center bg-transparent outline-none"
          aria-invalid={!!errors.quantity}
        />
        <Plus
          className="border-l-2 stroke-text-primary flex-1 cursor-pointer"
          onClick={() => setValue("quantity", Number(qty + 1))} // Increment quantity by 1
        />
      </div>

      <DrawerFooter>
        <Button
          className="bg-text-primary hover:bg-text-primary/80 text-white px-6"
          disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" /> : "Submit"}
        </Button>
        <DrawerClose asChild>
          <Button variant="outline" >
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </form>
  )
}
