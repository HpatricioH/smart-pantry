"use client";

import Image from "next/image";
import { Card } from "../../lib/utils/card";
import { Button } from "../../lib/utils/Button";
import { Badge } from "../../lib/utils/badge";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "../../lib/utils/item";
import { api } from "../../../trpc/react";
import { toast } from "sonner";
import { useMemo, useState } from "react";
import { useAuth } from "@clerk/nextjs";

interface CompactItemCardProps {
  title: string;
  category: string;
  image: string;
  actionLabel?: string;
  children?: React.ReactNode;
  expire: string;
}

const makeKey = (category: string | null, name: string) =>
  `${category}:${name}`.trim().toLowerCase();

export default function CompactItemCard({
  title,
  category,
  image,
  actionLabel,
  children,
  expire,
}: CompactItemCardProps) {
  const [isAdding, setIsAdding] = useState(false);
  const utils = api.useUtils();
  const { data: shoppingList = [] } = api.shoppingList.getAllShoppingListItems.useQuery();
  const { userId } = useAuth();

  const existingKeys = useMemo(() => {
    return new Set(shoppingList.map((item) => makeKey(item.category, item.name)));
  }, [shoppingList]);

  const key = makeKey(category, title);

  const createShoppingListItem = api.shoppingList.createShoppingListItem.useMutation({
    onMutate: async (input) => {
      setIsAdding(true);

      await utils.shoppingList.getAllShoppingListItems.cancel();
      const previousItems = utils.shoppingList.getAllShoppingListItems.getData() ?? [];

      const k = makeKey(input.category, input.name);
      const exists = previousItems.some((item) => makeKey(item.category, item.name) === k);

      if (!exists) {
        utils.shoppingList.getAllShoppingListItems.setData(undefined, [
          ...previousItems,
          {
            id: `optimistic-${Date.now()}`,
            userId: userId || "",
            name: input.name,
            category: input.category,
            createdAt: new Date(),
          },
        ]);
      }
      return { previousItems };
    },

    onError: (err, _input, ctx) => {
      if (ctx?.previousItems) {
        setIsAdding(false);
        toast.error(`Failed to add item to shopping list. ${err.message}`);
      }
    },

    onSuccess: () => {
      setIsAdding(false);
      toast.success("Item added to shopping list");
    },

    onSettled: () => {
      utils.shoppingList.getAllShoppingListItems.invalidate();
    },
  });

  const alreadyAdded = existingKeys.has(key);

  const disable = alreadyAdded || isAdding || createShoppingListItem.isPending;

  const handleAddToShoppingList = () => {
    if (disable) return;

    createShoppingListItem.mutate({ name: title, category });
  };

  return (
    <Card className="shadow-2xs p-1 mt-2">
      <Item className="p-1">
        <ItemHeader>
          <Image src={image} alt={image} width={50} height={50} className="rounded-md" />
          <ItemContent className="gap-0">
            <ItemTitle>{title}</ItemTitle>
            <ItemDescription>{category}</ItemDescription>
          </ItemContent>
          <ItemActions>
            {actionLabel === "restock" ? (
              <Button variant="link" disabled={disable} onClick={handleAddToShoppingList}>
                {alreadyAdded ? "Added to list" : isAdding ? "Adding..." : "Add to list"}
              </Button>
            ) : (
              <Badge
                className={`${actionLabel === "restock" ? "bg-[#E6F4EE]" : "bg-[#FFF3D6]"} text-text-secondary`}
              >
                {expire} days left
              </Badge>
            )}
          </ItemActions>
        </ItemHeader>
      </Item>
    </Card>
  );
}
