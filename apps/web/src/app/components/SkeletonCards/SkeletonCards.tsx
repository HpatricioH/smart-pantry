import { Skeleton } from "../../lib/utils/skeleton";


export function SkeletonCards() {
  return (
    <div
      className="flex flex-col justify-start items-start p-4 shadow-md rounded-lg bg-ring/5 "
    >
      <div className="w-28 h-28 relative rounded-md self-center">
        <Skeleton className="h-28 w-28 rounded-xl" />
      </div>
      <div className="flex justify-between items-end w-full">
        <div className="flex flex-col">
          <Skeleton className="text-md font-semibold place-content-start" />
          <Skeleton className="font-bold text-lg mt-1" />
        </div>
        <Skeleton />
      </div>
    </div>
  )
}
