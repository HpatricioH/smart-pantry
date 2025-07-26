export type Recipe = {
  id: string
  title: string
  description: string
  image: string
  prepTime: string
  cookTime: string
  totalTime: string
  servings: number
  liked: boolean
  ingredients: string[]
  instructions: string[]
  tags: string[]
  difficulty: "Easy" | "Medium" | "Hard"
  calories: number
}