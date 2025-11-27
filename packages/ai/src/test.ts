import 'dotenv/config';
import { callLLMJson } from "./clients";
import { z } from "zod"

async function test() {
  const schema = z.object({
    hello: z.string()
  });

  const result = await callLLMJson({
    schema,
    systemPrompt: "You only anser valid JSON.",
    userPrompt: "Return {\"Hello\": \"world\"}"
  });

  console.log(result)
}

test()