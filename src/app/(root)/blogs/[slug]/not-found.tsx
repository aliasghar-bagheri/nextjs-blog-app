import Button from '@/components/ui/Button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'پستی با این مشخصات وجود ندارد',
};

export default function NotFoundPage() {
  return (
    <div className="w-full translate-y-3/4 flex flex-col items-center justify-center gap-5 text-center">
      <h1 className="text-7xl md:text-9xl text-primary font-bold [text-shadow:_0_0px_12px_hsl(var(--primary-500))]">
        404
      </h1>
      <p className="font-medium">پستی با این مشخصات وجود ندارد</p>
      <Link href="/blogs">
        <Button variant="primary">رفتن به صفحه ی بلاگ ها</Button>
      </Link>
    </div>
  );
}
