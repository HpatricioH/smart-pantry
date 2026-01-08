import { Card } from "../../lib/utils/card";
import { Checkbox } from "../../lib/utils/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../../lib/utils/dropdown-menu";
import { Item, ItemActions, ItemGroup, ItemHeader, ItemSeparator, ItemTitle } from "../../lib/utils/item";
import { Ellipsis } from 'lucide-react';
import { api } from "apps/web/src/trpc/server"
import React from "react";
import { Badge } from "../../lib/utils/badge";

export default async function SmartShoppingTaskList() {
  const pantryData = await api.pantry.getAllPantryItems()
  const shoppingList = pantryData.filter(item => item.unit !== null && item.unit <= 1)
  const shoppingLowItems = shoppingList.slice().sort(() => Math.random() - 0.5).slice(0, 3)

  return (
    <Card className="shadow-2xs p-2">
      <ItemGroup>
        {shoppingLowItems.map((item, index) => {
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
                    <DropdownMenuTrigger>
                      <Ellipsis />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-56" align="start">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          Remove from list
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                </ItemHeader>
              </Item>
              {index !== shoppingLowItems.length - 1 && <ItemSeparator />}
            </React.Fragment>
          )
        })
        }
      </ItemGroup>
    </Card>
  )
}
