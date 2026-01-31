export type PantryItems = {
  id: string;
  userId: string;
  name: string;
  quantity: string | null;
  unit: number | null;
  image: string | null;
  category: string | null;
  expiresInDays: number | null;
  lowStock: boolean | null;
  createdAt: Date | null;
};
