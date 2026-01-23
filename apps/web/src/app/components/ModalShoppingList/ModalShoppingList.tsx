import { Button } from "../../lib/utils/button"
import { List } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../lib/utils/dialog"
import type { ShoppingListItemsTypesProps } from "packages/types/src";
import SmartShoppingTaskList from "../SmartShoppingTaskList/SmartShoppingTaskList";

export default function ModalShoppingList({ pantryData }: ShoppingListItemsTypesProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <List /> Open Full List
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Shopping List</DialogTitle>
          <DialogDescription>
            Here is your full shopping list.
          </DialogDescription>
        </DialogHeader>
        <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
          <SmartShoppingTaskList pantryData={pantryData} fullListNeeded={true} />
        </div>
      </DialogContent>
    </Dialog>
  )
}