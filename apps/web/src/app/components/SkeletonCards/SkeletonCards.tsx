import { Skeleton } from "../../lib/utils/skeleton";


export function SkeletonCards() {
  return (
    <article>
      <div
        className="flex flex-col justify-start items-start shadow-md rounded-lg bg-ring/5 "
      >
        <div className="w-full h-33 relative rounded-t-lg overflow-hidden">
          <Skeleton className="h-32 w-full rounded-t-xl" />
        </div>
        <div className="flex justify-between items-end w-full p-1">
          <div className="flex flex-col w-full">
            <Skeleton className="h-2 mt-2" />
            <Skeleton className="h-2 mt-2 w-20" />
            <Skeleton className="h-2 mt-2 w-16" />
            <Skeleton className="h-8 w-full my-3" />
          </div>
        </div>
      </div>
    </article>
  )
}
