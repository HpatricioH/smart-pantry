'use client'

// Update the import path to match your project structure
import { api } from "../../trpc/react"

export function TestTRPC() {
  const hello = api.pantry.hello.useQuery({ text: "World" })

  if (hello.isLoading) return <div>Loading...</div>
  if (hello.error) return <div>Error: {hello.error.message}</div>

  return (
    <div>
      <h2>TRPC Test</h2>
      <p>{hello.data?.greeting}</p>
    </div>
  )
}
