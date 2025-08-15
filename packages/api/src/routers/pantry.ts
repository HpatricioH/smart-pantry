import z from "zod"
import {
  createTRPCRouter,
  publicProcedure,
} from "../trpc"

export const pantryRouter = createTRPCRouter({
  // Test endpoint (public)
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`
      }
    })
})