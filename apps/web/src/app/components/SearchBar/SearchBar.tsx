"use client"

import { Input } from "../../lib/utils/input";
import { Search } from 'lucide-react';
import { X } from 'lucide-react';
import { Button } from "../../lib/utils/button";
import { useForm } from "react-hook-form"

type SearchBarFormValues = {
  search: string;
};

export function SearchBar() {
  const {
    register,
    resetField
  } = useForm<SearchBarFormValues>({
    mode: "onChange",
    defaultValues: {
      search: ""
    }
  })

  const handleClick = () => resetField("search")

  return (
    <search className="relative group">
      <form>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5 pointer-events-none" />
        <Input {...register("search", { required: false })} className="pl-10" placeholder="Search items..." />
        <Button
          variant="ghost"
          size="sm"
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hidden group-focus-within:block"
          onClick={handleClick}
        >
          <X className="h-3 w-3" />
        </Button>
      </form>
    </search>
  )
}
