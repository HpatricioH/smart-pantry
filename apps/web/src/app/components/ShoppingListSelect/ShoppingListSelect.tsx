"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "../../../app/lib/utils/select";
import { Menu } from "lucide-react";
import type { ShoppingListItemsTypesProps } from "packages/types/src";

interface ShoppingListSelectProps {
  lowStockCategories:
    | {
        id: string;
        userId: string;
        name: string;
        category: string | null;
        createdAt: Date | null;
      }[]
    | undefined;
}

export default function ShoppingListSelect({ lowStockCategories }: ShoppingListSelectProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <Select onValueChange={setSelectedCategory}>
      <SelectTrigger className="[&_.select-chevron]:hidden">
        <Menu />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {lowStockCategories?.map((i) => (
            <SelectItem key={i.id} className="capitalize" value={i.category || ""}>
              {i?.category}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
