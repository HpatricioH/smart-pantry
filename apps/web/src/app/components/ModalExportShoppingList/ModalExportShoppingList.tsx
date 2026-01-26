import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../lib/utils/dialog"
import { Button } from "../../lib/utils/button"
import { MessageCircleMore, Mail } from 'lucide-react';
import WhatsAppForm from "../WhatsAppForm/WhatsAppForm";
import type { ShoppingListItemsTypesProps } from "packages/types/src";


export default function ModalExportShoppingList({ pantryData }: ShoppingListItemsTypesProps) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <MessageCircleMore /> Export
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader >
          <DialogTitle>Send shopping list</DialogTitle>
        </DialogHeader>
        <div className="">
          <WhatsAppForm pantryData={pantryData} />

          <div className="flex items-center p-4 border rounded-lg mb-4 cursor-pointer hover:bg-text-secondary/10 gap-3">
            <Mail className="w-8 h-8" />
            <p className="font-semibold">Email</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}