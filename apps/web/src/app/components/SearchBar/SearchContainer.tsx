'use client'
import React from 'react'
import { usePathname } from "next/navigation";
import { SearchBar } from './SearchBar';


export const SearchContainer = () => {
  const pathname = usePathname()

  return (
    <SearchBar pathname={pathname} />
  )
}
