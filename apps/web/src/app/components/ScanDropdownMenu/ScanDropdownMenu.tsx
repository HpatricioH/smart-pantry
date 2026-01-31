import { api } from "apps/web/src/trpc/server";
import { Button } from "../../lib/utils/Button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "../../lib/utils/dropdown-menu";
import { ScanBarcode } from "lucide-react";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  image?: string | null;
}

export default async function ScanDropdownMenu() {
  const categoriesData = (await api.categories.getAllCategories()) as Category[] | undefined;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <ScanBarcode />
          Scan Item
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {categoriesData?.map((category) => {
            return (
              <DropdownMenuItem key={category.id}>
                <Link href={`/add-item/camera?category=${category.name.toLowerCase()}`}>
                  {category.name}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
