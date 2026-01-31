import type { PantryItems } from "packages/types/src";

export function getPantryStats(items: PantryItems[]) {
  const totalItems = items.length;
  const lowStock = items.filter((i) => i.unit === 1).length;
  const expiringSoon = items.filter((i) => i.expiresInDays !== null && i.expiresInDays <= 2).length;
  const needToBuy = items.filter((i) => i.unit === 0).length;

  return {
    totalItems,
    lowStock,
    expiringSoon,
    needToBuy,
  };
}

export function getStatValueById(stats: ReturnType<typeof getPantryStats>, id: string) {
  switch (id) {
    case "1":
      return stats.totalItems;
    case "2":
      return stats.lowStock;
    case "3":
      return stats.expiringSoon;
    case "4":
      return stats.needToBuy;
    default:
      return 0;
  }
}
