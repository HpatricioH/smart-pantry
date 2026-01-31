"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../lib/utils/dialog";
import { Card, CardHeader, CardTitle } from "../../lib/utils/card";
import { Button } from "../../lib/utils/Button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Input } from "../../lib/utils/input";
import type { ShoppingListItemsTypesProps } from "packages/types/src";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formData = z.object({
  phoneNumber: z.string().min(10, "Enter a valid phone number"),
});

type FormData = z.infer<typeof formData>;

export default function WhatsAppForm({ pantryData }: ShoppingListItemsTypesProps) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formData),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

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
        <DialogHeader>
          <DialogTitle>Send via WhatsApp</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="phone-num" className="text-text-secondary">
            Phone number
          </label>

          <Input
            {...register("phoneNumber")}
            id="phone-num"
            type="tel"
            placeholder="+1 234 567 8900"
            className={`${errors.phoneNumber ? "border border-red-500" : ""}`}
          />

          <label htmlFor="message-prev" className="text-text-secondary">
            Message Preview
          </label>
          <Card className="shadow-2xs p-3 gap-2">
            <CardHeader className="p-2">
              <CardTitle className="flex gap-2 items-center">
                <ShoppingCart /> Shopping List
              </CardTitle>
            </CardHeader>
            <div className="flex flex-col items-start gap-2">
              {pantryData.map((item) => (
                <p key={item.id}>- {item.name}</p>
              ))}
            </div>
          </Card>

          <DialogFooter className="mt-4">
            <DialogClose>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
