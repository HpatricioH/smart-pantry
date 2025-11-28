import 'dotenv/config';
import type { z } from 'zod'
import { OpenAI } from "openai"

type CallLLMJsonParams<T> = {
  schema: z.ZodSchema<T>;
  systemPrompt: string;
  userPrompt: string;
};

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function callLLMJson<T>({
  schema,
  systemPrompt,
  userPrompt,
}: CallLLMJsonParams<T>) {
  const completion = await openai.chat.completions.create({
    model: "gpt-5-nano",
    messages: [
      {role: "system", content: systemPrompt},
      {role: "user", content: userPrompt },
    ],
    response_format: { type: "json_object" } 
  });

  // Extract Json 
  const text = completion.choices[0].message.content

  if (!text) {
    throw new Error("OpenAI returned an empty response.")
  }

  // Parse JSON
  let json: unknown; 

  try {
    json = JSON.parse(text)
  } catch (error) {
    throw new Error(`Failed to parse AI JSON output: ${text}`);
  }

  // Validate with zod 
  console.log("Raw response JSON before validation:", json);
  const parsed = schema.safeParse(json)

  if(!parsed.success) {
    throw new Error(`Schema validation failed: ${parsed.error.toString()}`);
  }

  return parsed.data
}