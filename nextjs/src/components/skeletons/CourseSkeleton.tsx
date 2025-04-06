import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CourseCardSkeleton() {
  return (
    <Card className="py-0 pb-2 mt-10 md:mt-0 w-full max-w-xl">
      <CardHeader className="px-0">
        <CardTitle>
          <Skeleton className="h-[300px] w-full rounded" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-3/4 mt-2" />
      </CardContent>
      <CardFooter className="flex justify-end gap-5">
        <Skeleton className="h-10 w-28" />
        <Skeleton className="h-10 w-28" />
      </CardFooter>
    </Card>
  );
}
