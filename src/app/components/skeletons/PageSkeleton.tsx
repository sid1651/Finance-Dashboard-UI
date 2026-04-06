import { CardSkeleton } from './CardSkeleton';
import { ChartSkeleton } from './ChartSkeleton';

export const PageSkeleton = () => {
  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="space-y-2">
        <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
        <div className="h-4 w-64 bg-gray-200 dark:bg-gray-700 animate-pulse rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <ChartSkeleton />
        <ChartSkeleton />
      </div>
    </div>
  );
};
