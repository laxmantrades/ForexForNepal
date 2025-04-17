import { Skeleton } from "../ui/skeleton";

export default function CourseDetailSkeleton() {
    return (
      <div className="">
        {/* Top Banner Section */}
        <div className="relative flex justify-center w-full">
          <div className="w-full h-40 bg-gray-300 animate-pulse" />
          <div className="absolute w-3/4 mt-5 text-white space-y-2">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-6 w-1/3" />
          </div>
        </div>
  
        {/* Main Content Section */}
        <div className="max-w-7xl flex mx-4 lg:mx-auto lg:justify-between flex-col-reverse md:flex-row sm:max-w-5xl sm:space-x-14">
          {/* Left: Section and Lecture Skeleton */}
          <div className="mt-4 w-full lg:w-2/2 space-y-4">
            {[...Array(5)].map((_, idx) => (
              <Skeleton key={idx} className="w-full h-12" />
            ))}
          </div>
  
          {/* Right: Video Card Skeleton */}
          <div className="md:-mt-14 mt-2 md:ml-5 w-full">
            <div className="border rounded-lg overflow-hidden p-4 space-y-4">
              <Skeleton className="w-full h-48 rounded-md" /> {/* Video Placeholder */}
              <div className="flex justify-between text-xl font-bold">
                <Skeleton className="h-6 w-1/3" />
                <Skeleton className="h-6 w-1/4" />
              </div>
              <div className="flex space-x-2 text-2xl mt-2 mb-5">
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-6 w-1/4" />
              </div>
              <div className="flex space-x-3.5">
                <Skeleton className="h-6 w-2/3" />
              </div>
              <Skeleton className="w-full h-12 mt-4" /> {/* Button */}
            </div>
          </div>
        </div>
  
        {/* Description Section */}
        <div className="mx-auto md:w-4xl mt-10 px-4 rounded-2xl">
          <Skeleton className="h-10 w-1/3 mx-auto mb-5" /> {/* Heading */}
          <div className="space-y-4">
            {[...Array(5)].map((_, idx) => (
              <Skeleton key={idx} className="w-full h-6" />
            ))}
          </div>
        </div>
      </div>
    );
  }