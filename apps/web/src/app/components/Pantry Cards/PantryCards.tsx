'use client'

import { useEffect, useState } from "react";

export function PantryCards() {
  const [pantryData, usePantryData] = useState([])

  useEffect(() => {
    const fetchPantryData = async () => {
      const res = await fetch('/data/mock-pantry.json')
      usePantryData(await res.json());
    }
    fetchPantryData()
  }, [])


  console.log(pantryData)

  return (
    <div>
      <p>test cards</p>
    </div>
  )
}