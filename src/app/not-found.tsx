import MoveBackButton from '@/components/ui/MoveBackButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'صفحه ی مورد نظر یافت نشد',
};

export default function NotFoundPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-5 text-center">
      <h1 className="text-7xl md:text-9xl text-primary font-bold [text-shadow:_0_0px_12px_hsl(var(--primary-500))]">
        404
      </h1>
      <p className="font-medium">صفحه ای که به دنبال آن بودید یافت نشد</p>
      <MoveBackButton />
    </div>
  );
}
