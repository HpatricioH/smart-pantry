import {useEffect, useState} from 'react'

export function useRecipeData({URL}: {URL: string}) {
  const [recipeData, useRecipeData] = useState([])

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const res = await fetch(URL)
        useRecipeData(await res.json())
      } catch (error) {
        console.log(error)
        throw new Error((error as Error).message)
      }
    }
    fetchRecipeData()
  },[URL])

  return {recipeData}
}