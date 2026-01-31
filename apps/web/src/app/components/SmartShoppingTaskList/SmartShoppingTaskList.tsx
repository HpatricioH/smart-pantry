"use client";

import { Card } from "../../lib/utils/card";
import { Checkbox } from "../../lib/utils/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../lib/utils/dropdown-menu";
import {
  Item,
  ItemActions,
  ItemGroup,
  ItemHeader,
  ItemSeparator,
  ItemTitle,
} from "../../lib/utils/item";
import { Ellipsis } from "lucide-react";
import React from "react";
import { Badge } from "../../lib/utils/badge";
import noItemsAvailable from "../NoPantryItems/NoItemsAvailable";
import { api } from "apps/web/src/trpc/react";
import { toast } from "sonner";
import type { ShoppingListItemsTypesProps } from "packages/types/src";

export default function SmartShoppingTaskList({
  pantryData,
  fullListNeeded,
}: ShoppingListItemsTypesProps) {
  const utils = api.useUtils();
  const shoppingListItems = api.shoppingList.deleteShoppingListItem.useMutation();
  const shoppingLowItems = fullListNeeded
    ? pantryData
    : pantryData?.sort(() => Math.random() - 0.5).slice(0, 3);

  const handleRemoveItem = (itemId: string) => {
    console.log(`Remove item with id: ${itemId}`);

    const deleteDate = {
      id: String(itemId),
    };

    shoppingListItems.mutate(deleteDate, {
      onSuccess: () => {
        toast.success("Item removed from shopping list");
      },
      onError(ops: { message: { toString: () => string } }) {
        const errorMessage = ops.message.toString();
        toast.error(`Failed to remove item from shopping list. ${errorMessage}`);
      },
      onSettled: () => {
        utils.shoppingList.getAllShoppingListItems.invalidate();
      },
    });
  };

  return (
    <Card className="shadow-2xs p-2">
      <ItemGroup>
        {shoppingLowItems?.length === 0 && noItemsAvailable()}
        {shoppingLowItems?.map((item, index) => {
          return (
            <React.Fragment key={item.id}>
              <Item variant="default">
                <ItemHeader>
                  <ItemActions>
                    <Checkbox />
                    <ItemTitle>{item.name}</ItemTitle>
                    <Badge className="bg-[#E6F4EE]/60 text-text-secondary capitalize">
                      {item.category}
                    </Badge>
                  </ItemActions>

                  <DropdownMenu>
                    <DropdownMenuTrigger className="cursor-pointer">
                      <Ellipsis />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-56" align="start">
                      <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => handleRemoveItem(item.id)}>
                          Remove from list
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ItemHeader>
              </Item>
              {index !== shoppingLowItems.length - 1 && <ItemSeparator />}
            </React.Fragment>
          );
        })}
      </ItemGroup>
    </Card>
  );
}
