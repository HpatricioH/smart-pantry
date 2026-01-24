import type { ShoppingListItemsTypesProps } from "packages/types/src";
import { Card, CardDescription, CardHeader, CardTitle } from "../../lib/utils/card";
import ModalShoppingList from "../ModalShoppingList/ModalShoppingList";
import ModalExportShoppingList from "../ModalExportShoppingList/ModalExportShoppingList";


export default function ShoppingListCallToAction({ pantryData }: ShoppingListItemsTypesProps) {

  return (
    <Card className="shadow-2xs p-3 gap-2">
      <CardHeader className="p-2">
        <CardTitle>
          View Shopping List
        </CardTitle>
        <CardDescription className='text-sm text-text-secondary'>List of items to buy</CardDescription>
      </CardHeader>
      <div className="flex flex-wrap justify-center items-center gap-2 md:flex-row">

        <ModalShoppingList pantryData={pantryData} />

        <ModalExportShoppingList />

      </div>
    </Card >
  )
}
