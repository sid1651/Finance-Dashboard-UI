import { cn } from './ui/utils';

interface BrandLogoProps {
  showText?: boolean;
  className?: string;
  iconClassName?: string;
}

export function BrandLogo({
  showText = true,
  className,
  iconClassName,
}: BrandLogoProps) {
  return (
    <div
      className={cn(
        'flex items-center',
        showText ? 'space-x-3' : 'justify-center',
        className,
      )}
    >
      <img
        src="/favicon.svg"
        alt="Finance Dashboard"
        className={cn('h-10 w-10 shrink-0 rounded-xl shadow-sm', iconClassName)}
        draggable={false}
      />
      {showText && (
        <div className="flex flex-col">
          <span className="text-base font-semibold text-gray-900 dark:text-white">
            Finance
          </span>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Dashboard
          </span>
        </div>
      )}
    </div>
  );
}
