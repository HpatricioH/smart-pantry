import { QueryClient, defaultShouldDehydrateQuery } from "@tanstack/react-query";
import SuperJSON from "superjson";

export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === "pending",
        serializeData: SuperJSON.serialize,
      },
      hydrate: {
        deserializeData: SuperJSON.deserialize,
      },
    },
  });
}
