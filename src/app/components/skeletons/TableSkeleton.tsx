import { Skeleton } from '../ui/skeleton';

export const TableSkeleton = ({ rows = 10 }: { rows?: number }) => {
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-12 w-24" />
          <Skeleton className="h-12 flex-1" />
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-24" />
          <Skeleton className="h-12 w-32" />
          <Skeleton className="h-12 w-20" />
        </div>
      ))}
    </div>
  );
};
