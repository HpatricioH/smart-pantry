import React, { Suspense } from "react";
import { PantryCards } from "../PantryCards/PantryCards";
import { SkeletonPantry } from "../SkeletonCards/SkeletonPantry";
import { api } from "apps/web/src/trpc/server";

export async function PantryCardsContainer({ slug, query }: { slug: string; query: string }) {
  const categorizedItems = await api.pantry.getPantryItemByCategory({ category: slug });

  const filteredItems = categorizedItems?.filter((item) => {
    return item.name.toLowerCase().includes((query ?? "").toLowerCase());
  });

  return (
    <>
      <Suspense
        fallback={
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkeletonPantry />
            <SkeletonPantry />
          </div>
        }
      >
        <PantryCards pantryItems={filteredItems ?? []} />
      </Suspense>
    </>
  );
}
