export default function ProductSkeleton() {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 animate-pulse">
      {/* Badge Skeleton */}
      <div className="absolute top-3 left-3 z-10">
        <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
      </div>

      {/* Quick View Button Skeleton */}
      <div className="absolute top-3 right-3 z-10 w-9 h-9 bg-gray-200 rounded-full"></div>

      {/* Image Skeleton */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200"></div>

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        {/* Category Skeleton */}
        <div className="w-20 h-3 bg-gray-200 rounded"></div>
        
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="w-full h-4 bg-gray-200 rounded"></div>
          <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Price Skeleton */}
        <div className="flex items-center gap-2">
          <div className="w-16 h-5 bg-gray-200 rounded"></div>
          <div className="w-12 h-4 bg-gray-200 rounded"></div>
        </div>

        {/* Stock Status Skeleton */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-3 bg-gray-200 rounded"></div>
        </div>

        {/* Button Skeleton */}
        <div className="w-full h-10 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}
