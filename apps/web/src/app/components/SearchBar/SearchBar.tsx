"use client"

import { Input } from "../../lib/utils/input";
import { Search } from 'lucide-react';
import { X } from 'lucide-react';
import { Button } from "../../lib/utils/button";
import { useForm } from "react-hook-form"
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce'

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
      <form>
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5 pointer-events-none" />
        <Input
          {...register("search", { required: false })}
          className="pl-10"
          placeholder="Search items..."
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
        />
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
