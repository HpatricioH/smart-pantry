import { Card } from "../../lib/utils/card";
import { Skeleton } from "../../lib/utils/skeleton";

export function SkeletonShoppingCard() {
  return (
    <Card className="shadow-2xs p-6">
      <div className="flex justify-center items-center gap-2">
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-4 w-24 mt-2" />
        <Skeleton className="h-4 w-24 mt-2" />
        <Skeleton className="h-4 w-24 mt-2" />
      </div>
    </Card>
  );
}
