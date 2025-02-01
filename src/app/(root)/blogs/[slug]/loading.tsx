import Spinner from '@/components/ui/Spinner';

export default function Loading() {
  return (
    <div className="w-full h-full top-0 left-0 fixed z-20 bg-slate-700/40 backdrop-blur flex items-center justify-center">
      <Spinner />
    </div>
  );
}
