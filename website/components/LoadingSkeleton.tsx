'use client';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}
      role="status"
      aria-label="Loading"
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg" role="status">
      <div className="flex items-center mb-4">
        <Skeleton className="w-12 h-12 rounded-lg" />
        <Skeleton className="h-6 w-2/3 ml-3" />
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3" role="status">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 ? 'w-4/6' : 'w-full'}`}
        />
      ))}
    </div>
  );
}

export function VideoSkeleton() {
  return (
    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" role="status">
      <div className="w-full h-full flex items-center justify-center">
        <svg
          className="w-12 h-12 text-gray-300 dark:text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 10l5-5m0 0l-5-5m5 5H4m0 7l5 5m0 0l5-5m-5 5V4"
          />
        </svg>
      </div>
    </div>
  );
} 