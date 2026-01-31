export interface ShoppingListItemsTypesProps {
  pantryData: {
    id: string;
    userId: string;
    name: string;
    category: string | null;
    createdAt: Date | null;
  }[];
  fullListNeeded?: boolean;
}
