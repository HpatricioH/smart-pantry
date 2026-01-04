"use client"

import { Input } from "../../lib/utils/input";
import { Search } from 'lucide-react';
import { X } from 'lucide-react';
import { Button } from "../../lib/utils/button";
import { useForm } from "react-hook-form"
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../lib/utils/select";

type SearchBarFormValues = {
  search: string;
};

interface SearchProps {
  pathname: string
}

export function SearchBar({ pathname }: SearchProps) {
  const searchParams = useSearchParams()
  const replacePath = useRouter()

  const {
    register,
    resetField
  } = useForm<SearchBarFormValues>({
    mode: "onChange",
    defaultValues: {
      search: ""
    }
  })

  const handleSearch = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams)

    if (e) {
      params.set('query', e)
    } else {
      params.delete('query')
    }
    replacePath.replace(`${pathname}?${params.toString()}`)
  }, 300)

  const handleClick = () => {
    const params = new URLSearchParams(searchParams)

    if (params.get('query') !== null) {
      // delete params
      params.delete('query')

      // replace url 
      replacePath.replace(`${pathname}?${params.toString()}`)

      // reset field 
      resetField("search")
    }
  }

  return (
    <search className="relative group">
      <form className="flex  gap-2 rounded-2xl border bg-white p-2">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5 pointer-events-none" />
          <Input
            {...register("search", { required: false })}
            className="pl-10 border-0"
            placeholder="Search items..."
            onChange={(e) => {
              handleSearch(e.target.value)
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

        <Select>
          <SelectTrigger className="w-[190px]">
            <SelectValue placeholder="Sort: Recently Updated" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="restock">Restock Suggestions </SelectItem>
              <SelectItem value="expiring">Expiring Soon</SelectItem>
              <SelectItem value="needToBuy">Need to Buy</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </form>
    </search>
  )
}
