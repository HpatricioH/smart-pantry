'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../lib/utils/dialog"
import { Mail } from 'lucide-react';
import { Button } from "../../lib/utils/button"
import { Card, CardHeader, CardTitle } from "../../lib/utils/card";
import { ShoppingCart } from 'lucide-react';
import type { ShoppingListItemsTypesProps } from "packages/types/src";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";


export default function ShoppingListViaEmail({ pantryData }: ShoppingListItemsTypesProps) {
  const [loading, setLoading] = useState(false)
  const { user } = useUser();

  const {
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = () => {
    console.log('Pantry Data:', pantryData);
    console.log('User email:', user?.primaryEmailAddress?.emailAddress)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center p-4 border rounded-lg mb-4 cursor-pointer hover:bg-text-secondary/10 gap-3">
          <Mail className="w-8 h-8" />
          <p className="font-semibold">Email</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader >
          <DialogTitle>Send via Email</DialogTitle>
        </DialogHeader>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >

          <label htmlFor="message-prev" className="text-text-secondary">Message Preview</label>
          <Card className="shadow-2xs p-3 gap-2">
            <CardHeader className="p-2">
              <CardTitle className="flex gap-2 items-center">
                <ShoppingCart /> Shopping List
              </CardTitle>
            </CardHeader>
            <div className="flex flex-col items-start gap-2">
              {pantryData.map(item => (
                <p key={item.id}>- {item.name}</p>
              ))}
            </div>
          </Card >

          <DialogFooter className="mt-4">
            <DialogClose>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin" /> : 'Send Email'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
