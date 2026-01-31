import * as React from "react";
import type { ShoppingListItemsTypesProps } from "packages/types/src";

export default function EmailTemplate({ pantryData }: ShoppingListItemsTypesProps) {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {pantryData.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </div>
  );
}
