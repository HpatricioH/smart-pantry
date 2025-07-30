import { Skeleton } from "../../lib/utils/skeleton";

export function SkeletonPantry() {
  return (
    <article>
      <div
        className="flex flex-col justify-start items-start shadow-md rounded-lg bg-ring/5 "
      >
        <div className="w-28 h-33 relative rounded-t-lg overflow-hidden self-center">
          <Skeleton className="h-32 w-full rounded-t-xl mt-3" />
        </div>
        <div className="flex justify-between items-end w-full p-1 mb-4">
          <div className="flex flex-col ">
            <Skeleton className="h-2 mt-2" />
            <Skeleton className="h-2 mt-2 w-20" />
          </div>
          <div className="mr-3">
            <Skeleton className="mt-2 rounded-full p-4" />
          </div>
        </div>
      </div>
    </article>
  )
}