export default function Skeleton() {
  return (
    <div className="animate-pulse">
      <div className="overflow-hidden bg-gray-200 rounded-md h-40 w-full"></div>

      <div className="pt-3 pb-1">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>

      <div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

}
