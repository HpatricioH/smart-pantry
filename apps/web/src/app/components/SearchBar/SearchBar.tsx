"use client";

import { Input } from "../../lib/utils/input";
import { Search } from "lucide-react";
import { X } from "lucide-react";
import { Button } from "../../lib/utils/Button";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../lib/utils/select";
import { Card } from "../../lib/utils/card";

type SearchBarFormValues = {
  search: string;
  filter: string;
};

interface SearchProps {
  pathname: string;
}

export function SearchBar({ pathname }: SearchProps) {
  const searchParams = useSearchParams();
  const replacePath = useRouter();

  // React Hook Form setup
  const { register, resetField, control } = useForm<SearchBarFormValues>({
    mode: "onChange",
    defaultValues: {
      search: "",
      filter: "",
    },
  });

  // Debounced search handler to limit URL updates while typing
  const handleSearch = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);

    if (e) {
      params.set("query", e);
    } else {
      params.delete("query");
    }
    replacePath.replace(`${pathname}?${params.toString()}`);
  }, 300);

  // Handle clearing search and filter
  const handleClick = () => {
    const params = new URLSearchParams(searchParams);

    if (params.get("query") !== null || params.get("sort") !== null) {
      // delete params
      params.delete("query");
      params.delete("sort");

      // replace url
      replacePath.replace(`${pathname}?${params.toString()}`);

      // reset field
      resetField("search");
      resetField("filter");
    }
  };

  // Handle sorting/filtering parameter
  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }
    replacePath.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <search className="relative group">
      <Card className="p-2 shadow-2xs">
        <form className="flex gap-2">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5 pointer-events-none" />
            <Input
              {...register("search", { required: false })}
              className="pl-10 border-0"
              placeholder="Search items..."
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
            />
            <Button
              variant="ghost"
              size="sm"
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hidden group-focus-within:block"
              onClick={handleClick}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>

          {pathname === "/pantry" && (
            <Controller
              control={control}
              name="filter"
              render={({ field }) => (
                <Select
                  value={field.value ?? ""}
                  onValueChange={(value) => {
                    field.onChange(value);
                    handleSort(value);
                  }}
                >
                  <SelectTrigger className="w-[190px]">
                    <SelectValue placeholder="Select Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Filters</SelectLabel>
                      <SelectItem value="restock">Restock Suggestions </SelectItem>
                      <SelectItem value="expiring">Expiring Soon</SelectItem>
                      <SelectItem value="needToBuy">Need to Buy</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          )}
        </form>
      </Card>
    </search>
  );
}
