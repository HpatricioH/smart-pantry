import { Button } from "../../lib/utils/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../../lib/utils/card";
import { List, MessageCircleMore } from 'lucide-react';


export default function ShoppingListCallToAction() {
  return (
    <Card className="shadow-2xs p-3 gap-2">
      <CardHeader className="p-2">
        <CardTitle>
          View Shopping List
        </CardTitle>
        <CardDescription className='text-sm text-text-secondary'>List of items to buy</CardDescription>
      </CardHeader>
      <div className="flex flex-wrap justify-center items-center gap-2 md:flex-row">
        <Button variant="outline">
          <List /> Open Full List
        </Button>
        <Button>
          <MessageCircleMore /> Export
        </Button>
      </div>
    </Card >
  )
}
