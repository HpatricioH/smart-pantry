import { ListChecks } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { ClockAlert } from "lucide-react";
import { TriangleAlert } from "lucide-react";

export const statsCardsItems = [
  {
    id: "1",
    name: "total items",
    link: "/",
    icon: ListChecks,
    bgColor: "bg-[#E6F4EE]",
    bgColorLight: "bg-[#E6F4EE]/40",
  },
  {
    id: "2",
    name: "low stock",
    link: "/categories",
    icon: TriangleAlert,
    bgColor: "bg-[#FFF3D6]",
    bgColorLight: "bg-[#FFF3D6]/40",
  },
  {
    id: "3",
    name: "expiring soon",
    link: "/categories",
    icon: ClockAlert,
    bgColor: "bg-[#FFE8E8]",
    bgColorLight: "bg-[#FFE8E8]/40",
  },
  {
    id: "4",
    name: "need to buy",
    link: "/categories",
    icon: ShoppingCart,
    bgColor: "bg-[#FFF3D6]",
    bgColorLight: "bg-[#FFF3D6]/40",
  },
];
