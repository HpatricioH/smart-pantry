import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../lib/utils/dialog"
import { Card, CardHeader, CardTitle } from "../../lib/utils/card";
import { Button } from "../../lib/utils/button"
import { ShoppingCart } from 'lucide-react';
import Image from "next/image";
import { Input } from "../../lib/utils/input";
import type { ShoppingListItemsTypesProps } from "packages/types/src";


export default function WhatsAppForm({ pantryData }: ShoppingListItemsTypesProps) {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center p-4 border rounded-lg mb-4 cursor-pointer hover:bg-text-secondary/10">
          <Image
            src="/whatsappLogo.svg"
            alt="Whatsapp Logo"
            width={35}
            height={35}
            className="inline-block mr-2"
          />
          <p className="font-semibold">WhatsApp</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader >
          <DialogTitle>Send via WhatsApp</DialogTitle>
        </DialogHeader>
        <form>
          <label htmlFor="phone-num" className="text-text-secondary">Phone number</label>

          <Input
            id="phone-num"
            type="tel"
            placeholder="+1 234 567 8900"
          />

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

          <div className="flex justify-end gap-2 mt-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
