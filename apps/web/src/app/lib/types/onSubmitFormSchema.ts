import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Please enter at least two characters"),
  category: z.string().min(2, "Please select one category"),
  id: z.string().min(1, "Barcode too short").max(20, "Barcode too long"),
  quantity: z.string().min(1, "Please enter a quantity"),
  unit: z.number().min(0, "Please enter a unit"),
});

export type FormData = z.infer<typeof formSchema>;