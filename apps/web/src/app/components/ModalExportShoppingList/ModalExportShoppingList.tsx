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
import ShoppingListViaEmail from "../ShoppingListViaEmail/ShoppingListViaEmail";


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

          <ShoppingListViaEmail pantryData={pantryData} />
        </div>
      </DialogContent>
    </Dialog>
  )
}