import clsx from 'clsx';

interface SkeletonProps {
  mode?: 'wave' | 'normal';
  count?: number;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Skeleton = ({
  mode = 'wave',
  width = 50,
  height = 50,
  count = 1,
  className,
}: SkeletonProps) => {
  return (
    <div className={clsx(className)}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          style={{ width, height }}
          key={index}
          className={clsx('rounded overflow-hidden relative', {
            'skeleton-wave': mode === 'wave',
            'bg-secondary-200 animate-pulse': mode === 'normal',
          })}
        />
      ))}
    </div>
  );
};

const SkeletonPostList = () => {
  return (
    <div className="grid justify-center grid-cols-1 mx-auto sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={'flex-1 space-y-4 overflow-hidden'}
        >
          <div className="w-full bg-secondary-200 h-60 rounded overflow-hidden relative skeleton-wave" />
          <div className="space-y-2">
            <div className="bg-secondary-200 h-10 overflow-hidden rounded relative skeleton-wave" />
            <div className="bg-secondary-200 h-4 rounded overflow-hidden relative skeleton-wave" />
          </div>

          <div className="flex items-center justify-between gap-x-3">
            <div className="flex items-center gap-x-2">
              <div className="w-11 h-11 bg-secondary-200 overflow-hidden rounded-full relative skeleton-wave" />
              <div>
                <div className="w-24 h-10 rounded bg-secondary-200 overflow-hidden  relative skeleton-wave" />
              </div>
            </div>
            <div className="w-16 h-8 rounded bg-secondary-200 overflow-hidden relative skeleton-wave" />
          </div>
        </div>
      ))}
    </div>
  );
};

const SkeletonDashboardCards = () => {
  return Array.from({ length: 3 }).map((_, index) => (
    <Skeleton
      key={index}
      width="100%"
      height={110}
      className="bg-secondary-200 rounded"
    />
  ));
};

export { Skeleton, SkeletonPostList, SkeletonDashboardCards };
