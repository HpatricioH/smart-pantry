'use client';

import { Card } from "../../lib/utils/card";
import { Checkbox } from "../../lib/utils/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../../lib/utils/dropdown-menu";
import { Item, ItemActions, ItemGroup, ItemHeader, ItemSeparator, ItemTitle } from "../../lib/utils/item";
import { Ellipsis } from 'lucide-react';
import React from "react";
import { Badge } from "../../lib/utils/badge";

interface SmartShoppingTaskListProps {
  pantryData: {
    id: string;
    userId: string;
    name: string;
    category: string | null;
    createdAt: Date | null;
  }[]
}

export default function SmartShoppingTaskList({ pantryData }: SmartShoppingTaskListProps) {
  const shoppingLowItems = pantryData.sort(() => Math.random() - 0.5).slice(0, 3)

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
                    <DropdownMenuTrigger className="cursor-pointer">
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
